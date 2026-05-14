'use client'

interface QuickReplyBarProps {
  replies: string[]
  onSelect: (reply: string) => void
  disabled?: boolean
}

export function QuickReplyBar({ replies, onSelect, disabled }: QuickReplyBarProps) {
  if (replies.length === 0) return null

  return (
    <div className="flex gap-2 px-4 pb-2 overflow-x-auto scrollbar-hide">
      {replies.map(reply => (
        <button
          key={reply}
          onClick={() => !disabled && onSelect(reply)}
          disabled={disabled}
          className="
            flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium
            bg-[var(--color-mint-mist)] text-[var(--color-jungle)]
            border border-[var(--color-sage)] border-opacity-40
            active:bg-[var(--color-sage)] transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {reply}
        </button>
      ))}
    </div>
  )
}
