'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageBubble } from './message-bubble'
import { QuickReplyBar } from './quick-reply-bar'
import { AutocompleteInput } from './autocomplete-input'
import {
  ONBOARDING_STEPS,
  INTRO_MESSAGE,
  COMM_STYLE_LABEL_MAP,
  GOAL_ID_MAP,
} from '@/lib/onboarding-config'
import type { UserProfile, OntologyEntry } from '@/lib/types'

interface OnboardingChatProps {
  machines: OntologyEntry[]
  grinders: OntologyEntry[]
  onComplete: (profile: UserProfile) => void
}

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const STYLE_CONFIRMATIONS: Record<string, string> = {
  'Keep it simple': "Got it — I'll keep things clear and action-focused.",
  'Give me the details': "Perfect — I'll give you the full picture.",
  'Explain the why': "Great — I'll always explain the reasoning behind my advice.",
}

export function OnboardingChat({ machines, grinders, onComplete }: OnboardingChatProps) {
  const [messages, setMessages] = useState<Message[]>([])
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Partial<UserProfile & { machineId?: string; grinderId?: string }>>({})
  const [inputDisabled, setInputDisabled] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)

  // Seed intro + first question
  useEffect(() => {
    const firstStep = ONBOARDING_STEPS[0]
    setMessages([
      { role: 'assistant', content: INTRO_MESSAGE },
      { role: 'assistant', content: firstStep.subtext
          ? `${firstStep.question}\n${firstStep.subtext}`
          : firstStep.question },
    ])
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  function handleAnswer(value: string, matchedId?: string) {
    const currentStep = ONBOARDING_STEPS[step]
    const updatedAnswers = { ...answers }

    if (currentStep.field === 'machine') {
      updatedAnswers.machine = value
      updatedAnswers.machineId = matchedId
    } else if (currentStep.field === 'grinder') {
      updatedAnswers.grinder = value
      updatedAnswers.grinderId = matchedId
    } else if (currentStep.field === 'goals') {
      updatedAnswers.goals = [GOAL_ID_MAP[value] ?? value]
    } else if (currentStep.field === 'communicationStyle') {
      updatedAnswers.communicationStyle = COMM_STYLE_LABEL_MAP[value] ?? 'simple'
    }

    setAnswers(updatedAnswers)
    setInputDisabled(true)

    const newMessages: Message[] = [
      ...messages,
      { role: 'user', content: value },
    ]

    const nextStepIndex = step + 1

    if (nextStepIndex < ONBOARDING_STEPS.length) {
      const nextStep = ONBOARDING_STEPS[nextStepIndex]
      const question = nextStep.subtext
        ? `${nextStep.question}\n${nextStep.subtext}`
        : nextStep.question
      newMessages.push({ role: 'assistant', content: question })
      setMessages(newMessages)
      setStep(nextStepIndex)
      setInputDisabled(false)
    } else {
      // Last answer — show confirmation and complete
      const confirmText =
        currentStep.field === 'communicationStyle'
          ? STYLE_CONFIRMATIONS[value] ?? "Got it. Let's get started."
          : "Got it. Let's get started."

      newMessages.push({ role: 'assistant', content: `${confirmText} What's going on with your espresso?` })
      setMessages(newMessages)

      setTimeout(() => {
        onComplete({
          machine: updatedAnswers.machine ?? '',
          machineId: updatedAnswers.machineId,
          grinder: updatedAnswers.grinder ?? '',
          grinderId: updatedAnswers.grinderId,
          goals: updatedAnswers.goals ?? ['fix_shot_problem'],
          communicationStyle: updatedAnswers.communicationStyle ?? 'simple',
        })
      }, 1200)
    }
  }

  const currentStep = ONBOARDING_STEPS[step]
  const isQuickReply = currentStep.inputType === 'quick-reply'

  return (
    <div className="flex flex-col h-full">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} content={m.content} />
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-[var(--color-travertine)] bg-[var(--color-linen)] pt-2 pb-safe">
        {isQuickReply && (
          <QuickReplyBar
            replies={currentStep.quickReplies ?? []}
            onSelect={v => handleAnswer(v)}
            disabled={inputDisabled}
          />
        )}

        {(currentStep.inputType === 'autocomplete-machine') && (
          <AutocompleteInput
            suggestions={machines}
            placeholder={currentStep.placeholder ?? 'Type to search...'}
            onSubmit={(value, matchedId) => handleAnswer(value, matchedId)}
            disabled={inputDisabled}
          />
        )}

        {(currentStep.inputType === 'autocomplete-grinder') && (
          <AutocompleteInput
            suggestions={grinders}
            placeholder={currentStep.placeholder ?? 'Type to search...'}
            onSubmit={(value, matchedId) => handleAnswer(value, matchedId)}
            disabled={inputDisabled}
          />
        )}

        {isQuickReply && currentStep.allowFreeText && (
          <FreeTextInput
            onSubmit={v => handleAnswer(v)}
            disabled={inputDisabled}
          />
        )}
      </div>
    </div>
  )
}

function FreeTextInput({
  onSubmit,
  disabled,
}: {
  onSubmit: (v: string) => void
  disabled?: boolean
}) {
  const [value, setValue] = useState('')

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' && value.trim()) {
      onSubmit(value.trim())
      setValue('')
    }
  }

  return (
    <div className="flex gap-2 px-4 pb-2 mt-1">
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Or type your own answer..."
        disabled={disabled}
        className="
          flex-1 rounded-2xl border border-[var(--color-travertine)] bg-white
          px-4 py-2.5 text-[15px] text-[var(--color-espresso)]
          placeholder:text-[var(--color-muted-foreground)]
          focus:outline-none focus:ring-2 focus:ring-[var(--color-fern)] focus:ring-opacity-40
          disabled:opacity-50
        "
      />
    </div>
  )
}
