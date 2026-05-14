'use client'

import { useState } from 'react'
import { OnboardingChat } from './onboarding-chat'
import { ChatWindow } from './chat-window'
import type { UserProfile, OntologyEntry } from '@/lib/types'

type Phase = 'onboard' | 'chat'

interface AppShellProps {
  machines: OntologyEntry[]
  grinders: OntologyEntry[]
}

const COMM_STYLE_LABELS: Record<string, string> = {
  simple: 'Simple',
  detailed: 'Detailed',
  why: 'Why-focused',
}

export function AppShell({ machines, grinders }: AppShellProps) {
  const [phase, setPhase] = useState<Phase>('onboard')
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)

  function handleOnboardingComplete(profile: UserProfile) {
    setUserProfile(profile)
    setPhase('chat')
  }

  return (
    <div className="flex flex-col h-dvh max-w-lg mx-auto bg-[var(--color-linen)]">
      {/* Header */}
      <header className="flex-shrink-0 flex items-center justify-between px-5 py-3 border-b border-[var(--color-travertine)] bg-[var(--color-linen)]">
        <div className="flex items-center gap-2">
          <span className="text-xl">☕</span>
          <span className="font-display text-lg font-semibold text-[var(--color-espresso)] tracking-wide">
            Dialed In
          </span>
        </div>

        {phase === 'chat' && userProfile && (
          <div className="text-right">
            <p className="text-xs text-[var(--color-muted-foreground)] leading-tight truncate max-w-[160px]">
              {userProfile.machine}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)] leading-tight truncate max-w-[160px]">
              {userProfile.grinder}
            </p>
          </div>
        )}

        {phase === 'onboard' && (
          <span className="text-xs text-[var(--color-muted-foreground)]">Setup</span>
        )}
      </header>

      {/* Main content */}
      <main className="flex-1 overflow-hidden">
        {phase === 'onboard' && (
          <OnboardingChat
            machines={machines}
            grinders={grinders}
            onComplete={handleOnboardingComplete}
          />
        )}

        {phase === 'chat' && userProfile && (
          <ChatWindow userProfile={userProfile} />
        )}
      </main>
    </div>
  )
}
