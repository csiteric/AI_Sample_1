import { NextRequest } from 'next/server'
import Anthropic from '@anthropic-ai/sdk'
import { buildSystemPromptParts } from '@/lib/runtime-loader'
import { requireEnv, getEnv } from '@/lib/env'
import type { UserProfile, ChatMessage } from '@/lib/types'

function getClient() {
  return new Anthropic({ apiKey: requireEnv('ANTHROPIC_API_KEY') })
}

function parseResponse(raw: string): {
  message: string
  quickReplies: string[]
  isDiagnosticComplete: boolean
} {
  const metaMatch = raw.match(/<meta>(\{.*?\})<\/meta>/s)
  const message = raw.replace(/<meta>.*?<\/meta>/s, '').trim()

  if (!metaMatch) {
    return { message, quickReplies: [], isDiagnosticComplete: false }
  }

  try {
    const meta = JSON.parse(metaMatch[1]) as { options?: string[]; done?: boolean }
    return {
      message,
      quickReplies: Array.isArray(meta.options) ? meta.options : [],
      isDiagnosticComplete: meta.done === true,
    }
  } catch {
    return { message, quickReplies: [], isDiagnosticComplete: false }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      messages: ChatMessage[]
      userProfile: UserProfile
      questionBudget: number
    }

    const { messages, userProfile, questionBudget } = body
    const MODEL = getEnv('ANTHROPIC_MODEL') ?? 'claude-haiku-4-5'

    const { stable, dynamic } = buildSystemPromptParts(userProfile, questionBudget)

    const anthropicStream = getClient().messages.stream({
      model: MODEL,
      max_tokens: 1024,
      system: [
        // Stable block (~100k tokens of runtime manifests) — cached between turns
        { type: 'text', text: stable, cache_control: { type: 'ephemeral' } },
        // Dynamic block (user context + session state) — small, changes each turn
        { type: 'text', text: dynamic },
      ],
      messages: messages.map(m => ({ role: m.role, content: m.content })),
    } as Parameters<ReturnType<typeof getClient>['messages']['stream']>[0])

    const encoder = new TextEncoder()
    let fullText = ''

    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of anthropicStream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              const chunk = event.delta.text
              fullText += chunk
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ t: chunk })}\n\n`)
              )
            }
          }

          const { message, quickReplies, isDiagnosticComplete } = parseResponse(fullText)
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ done: true, message, quickReplies, isDiagnosticComplete })}\n\n`
            )
          )
        } catch (err) {
          const msg = err instanceof Error ? err.message : String(err)
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: msg })}\n\n`)
          )
        } finally {
          controller.close()
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('Chat API error:', err)
    return Response.json({ error: message }, { status: 500 })
  }
}
