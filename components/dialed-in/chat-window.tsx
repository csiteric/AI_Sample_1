'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageBubble } from './message-bubble'
import { QuickReplyBar } from './quick-reply-bar'
import type { UserProfile, ChatMessage } from '@/lib/types'

const MAX_QUESTIONS = 3

type DisplayMessage = ChatMessage & { sentAt: number }

interface ChatWindowProps {
  userProfile: UserProfile
}

export function ChatWindow({ userProfile }: ChatWindowProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [displayMessages, setDisplayMessages] = useState<DisplayMessage[]>([])
  const [input, setInput] = useState('')
  const [quickReplies, setQuickReplies] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [questionBudget, setQuestionBudget] = useState(MAX_QUESTIONS)
  const [isDone, setIsDone] = useState(false)
  const [streamingStartTime, setStreamingStartTime] = useState<number | null>(null)
  const [elapsedSeconds, setElapsedSeconds] = useState(0)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const machine = userProfile.machine || 'your machine'
    const grinder = userProfile.grinder || 'your grinder'
    const greeting = `Your setup is on file — ${machine} with ${grinder}. What's going on with your espresso?`
    setDisplayMessages([{ role: 'assistant', content: greeting, sentAt: Date.now() }])
  }, [userProfile.machine, userProfile.grinder])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [displayMessages, loading])

  // Live elapsed timer
  useEffect(() => {
    if (!streamingStartTime) return
    setElapsedSeconds(0)
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - streamingStartTime) / 1000))
    }, 1000)
    return () => clearInterval(interval)
  }, [streamingStartTime])

  async function sendMessage(text: string) {
    if (!text.trim() || loading) return

    const userMessage: ChatMessage = { role: 'user', content: text }
    const updatedMessages = [...messages, userMessage]

    setMessages(updatedMessages)
    setDisplayMessages(prev => [...prev, { ...userMessage, sentAt: Date.now() }])
    setInput('')
    setQuickReplies([])
    setLoading(true)

    let streamingStarted = false

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages, userProfile, questionBudget }),
      })

      if (!res.ok || !res.body) {
        const err = await res.json() as { error?: string }
        throw new Error(err.error ?? 'API error')
      }

      const streamStart = Date.now()
      setLoading(false)
      setStreamingStartTime(streamStart)
      streamingStarted = true
      setDisplayMessages(prev => [...prev, { role: 'assistant', content: '', sentAt: streamStart }])

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''
      let streamedContent = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        buffer += decoder.decode(value, { stream: true })
        const parts = buffer.split('\n\n')
        buffer = parts.pop() ?? ''

        for (const part of parts) {
          if (!part.startsWith('data: ')) continue
          try {
            const data = JSON.parse(part.slice(6)) as {
              t?: string
              done?: boolean
              message?: string
              quickReplies?: string[]
              isDiagnosticComplete?: boolean
              error?: string
            }

            if (data.error) throw new Error(data.error)

            if (data.t) {
              streamedContent += data.t
              setDisplayMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: streamedContent,
                }
                return updated
              })
            }

            if (data.done) {
              const finalMessage = data.message ?? streamedContent
              const completedAt = Date.now()
              setStreamingStartTime(null)
              setDisplayMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = {
                  ...updated[updated.length - 1],
                  content: finalMessage,
                  sentAt: completedAt,
                }
                return updated
              })
              setMessages(prev => [...prev, { role: 'assistant', content: finalMessage }])
              setQuickReplies(data.quickReplies ?? [])
              if (data.isDiagnosticComplete) {
                setIsDone(true)
                setQuickReplies([])
              } else {
                setQuestionBudget(prev => Math.max(0, prev - 1))
              }
            }
          } catch (parseErr) {
            if (parseErr instanceof Error && parseErr.message !== 'Unexpected token') {
              throw parseErr
            }
          }
        }
      }
    } catch (err) {
      if (!streamingStarted) setLoading(false)
      setStreamingStartTime(null)
      const msg = err instanceof Error ? err.message : 'Something went wrong'
      setDisplayMessages(prev => {
        const last = prev[prev.length - 1]
        const base =
          streamingStarted && last?.role === 'assistant' && last.content === ''
            ? prev.slice(0, -1)
            : prev
        return [...base, { role: 'assistant', content: `Error: ${msg}`, sentAt: Date.now() }]
      })
    } finally {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') sendMessage(input)
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
        {displayMessages.map((m, i) => {
          const isStreaming = streamingStartTime !== null && i === displayMessages.length - 1
          return (
            <MessageBubble
              key={i}
              role={m.role}
              content={m.content}
              sentAt={m.sentAt}
              elapsed={isStreaming ? elapsedSeconds : null}
            />
          )
        })}

        {loading && (
          <div className="flex justify-start mb-2">
            <div className="bg-white border border-[var(--color-travertine)] rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
              <TypingIndicator />
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {!isDone && (
        <div className="border-t border-[var(--color-travertine)] bg-[var(--color-linen)] pt-2 pb-safe">
          <QuickReplyBar
            replies={quickReplies}
            onSelect={v => sendMessage(v)}
            disabled={loading}
          />
          <div className="flex gap-2 px-4 pb-2">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe what you're tasting or seeing..."
              disabled={loading}
              className="
                flex-1 rounded-2xl border border-[var(--color-travertine)] bg-white
                px-4 py-3 text-[15px] text-[var(--color-espresso)]
                placeholder:text-[var(--color-muted-foreground)]
                focus:outline-none focus:ring-2 focus:ring-[var(--color-fern)] focus:ring-opacity-40
                disabled:opacity-50
              "
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || !input.trim()}
              className="
                w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0
                bg-[var(--color-fern)] text-white
                disabled:opacity-40 disabled:cursor-not-allowed
                active:bg-[var(--color-jungle)] transition-colors
              "
              aria-label="Send"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" />
                <polyline points="5 12 12 5 19 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {isDone && (
        <div className="border-t border-[var(--color-travertine)] bg-[var(--color-linen)] px-4 py-4 text-center">
          <p className="text-sm text-[var(--color-muted-foreground)]">Diagnostic complete. Reload to start a new session.</p>
        </div>
      )}
    </div>
  )
}

function TypingIndicator() {
  return (
    <div className="flex gap-1 items-center h-5">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-2 h-2 rounded-full bg-[var(--color-sage)] animate-bounce"
          style={{ animationDelay: `${i * 150}ms` }}
        />
      ))}
    </div>
  )
}
