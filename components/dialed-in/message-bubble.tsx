interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
  sentAt?: number
  elapsed?: number | null
}

function renderMarkdown(text: string) {
  const escaped = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
  const html = escaped
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*\n]+?)\*/g, '<em>$1</em>')
    .replace(/\n/g, '<br/>')
  return html
}

function formatTime(ts: number): string {
  return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

function formatElapsed(seconds: number): string {
  if (seconds < 60) return `${seconds}s`
  return `${Math.floor(seconds / 60)}m ${seconds % 60}s`
}

export function MessageBubble({ role, content, sentAt, elapsed }: MessageBubbleProps) {
  const isUser = role === 'user'

  return (
    <div className={`flex flex-col w-full ${isUser ? 'items-end' : 'items-start'} mb-2`}>
      <div
        className={`
          max-w-[82%] rounded-2xl px-4 py-3 text-[15px] leading-relaxed
          ${isUser
            ? 'bg-[var(--color-fern)] text-white rounded-br-sm'
            : 'bg-white text-[var(--color-espresso)] rounded-bl-sm shadow-sm border border-[var(--color-travertine)]'
          }
        `}
      >
        {isUser
          ? content
          : <span dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
        }
      </div>

      <div className="flex items-center gap-2 mt-0.5 px-1">
        {elapsed != null && (
          <span className="text-[10px] text-[var(--color-muted-foreground)] tabular-nums">
            {formatElapsed(elapsed)}
          </span>
        )}
        {sentAt != null && elapsed == null && (
          <span className="text-[10px] text-[var(--color-muted-foreground)] tabular-nums">
            {formatTime(sentAt)}
          </span>
        )}
      </div>
    </div>
  )
}
