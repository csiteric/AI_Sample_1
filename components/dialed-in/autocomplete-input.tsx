'use client'

import { useState, useRef, useEffect } from 'react'

interface AutocompleteInputProps {
  suggestions: { name: string; brand: string }[]
  placeholder: string
  onSubmit: (value: string, matchedId?: string) => void
  disabled?: boolean
}

export function AutocompleteInput({
  suggestions,
  placeholder,
  onSubmit,
  disabled,
}: AutocompleteInputProps) {
  const [value, setValue] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered =
    value.trim().length >= 1
      ? suggestions.filter(s =>
          s.name.toLowerCase().includes(value.toLowerCase()) ||
          s.brand.toLowerCase().includes(value.toLowerCase())
        ).slice(0, 6)
      : []

  useEffect(() => {
    setShowDropdown(filtered.length > 0)
  }, [filtered.length])

  function handleSelect(entry: { name: string; brand: string }) {
    setValue(entry.name)
    setShowDropdown(false)
    onSubmit(entry.name, entry.name)
    setValue('')
  }

  function handleSubmit() {
    if (!value.trim()) return
    const exact = suggestions.find(s => s.name.toLowerCase() === value.toLowerCase())
    onSubmit(value.trim(), exact?.name)
    setValue('')
    setShowDropdown(false)
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit()
    if (e.key === 'Escape') setShowDropdown(false)
  }

  return (
    <div className="relative flex gap-2 px-4 pb-safe">
      <div className="relative flex-1">
        <input
          ref={inputRef}
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => filtered.length > 0 && setShowDropdown(true)}
          placeholder={placeholder}
          disabled={disabled}
          className="
            w-full rounded-2xl border border-[var(--color-travertine)] bg-white
            px-4 py-3 text-[15px] text-[var(--color-espresso)]
            placeholder:text-[var(--color-muted-foreground)]
            focus:outline-none focus:ring-2 focus:ring-[var(--color-fern)] focus:ring-opacity-40
            disabled:opacity-50
          "
        />
        {showDropdown && (
          <ul className="
            absolute bottom-full mb-1 w-full bg-white border border-[var(--color-travertine)]
            rounded-xl shadow-lg overflow-hidden z-50 max-h-48 overflow-y-auto
          ">
            {filtered.map(entry => (
              <li key={entry.name}>
                <button
                  onMouseDown={e => { e.preventDefault(); handleSelect(entry) }}
                  className="w-full text-left px-4 py-2.5 hover:bg-[var(--color-mint-mist)] transition-colors"
                >
                  <span className="text-[15px] text-[var(--color-espresso)]">{entry.name}</span>
                  <span className="text-xs text-[var(--color-muted-foreground)] ml-2">{entry.brand}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleSubmit}
        disabled={disabled || !value.trim()}
        className="
          w-11 h-11 self-end rounded-full flex items-center justify-center
          bg-[var(--color-fern)] text-white
          disabled:opacity-40 disabled:cursor-not-allowed
          active:bg-[var(--color-jungle)] transition-colors
        "
        aria-label="Submit"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      </button>
    </div>
  )
}
