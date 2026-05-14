import fs from 'fs'
import path from 'path'
import { requireEnv } from './env'

let cachedSystemPrompt: string | null = null

function getRuntimePath(): string {
  return requireEnv('RUNTIME_PATH')
}

function extractManifestPaths(bootstrapContent: string): string[] {
  // Match any path ending in .json — captures LOAD:, LOAD_ALL:, RESOLVE_ALL_LISTED_DOMAINS:
  const matches = bootstrapContent.match(/[\w/]+\.json/g) ?? []
  const seen = new Set<string>()
  return matches.filter(p => {
    if (seen.has(p)) return false
    seen.add(p)
    return true
  })
}

export function loadRuntimeSystemPrompt(): string {
  if (cachedSystemPrompt) return cachedSystemPrompt

  const runtimePath = getRuntimePath()
  const bootstrapPath = path.join(runtimePath, 'BOOTSTRAP_PROMPT.txt')
  const bootstrapContent = fs.readFileSync(bootstrapPath, 'utf-8')
  const manifestPaths = extractManifestPaths(bootstrapContent)

  const parts: string[] = [
    bootstrapContent,
    '\n\n=== LOADED MANIFESTS ===\n',
    'All manifests below have been loaded and bound per the bootstrap protocol above.\n',
  ]

  for (const manifestPath of manifestPaths) {
    const fullPath = path.join(runtimePath, manifestPath)
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf-8')
      parts.push(`\n[MANIFEST: ${manifestPath}]\n${content}\n`)
    }
  }

  // ── RESPONSE CONVENTION SPEC ────────────────────────────────────────────────
  // Previously hardcoded here. Now declarative in:
  //   runtime/runtime_response_conventions.json  (BOOTSTRAP STEP 20b)
  // The manifest is loaded automatically via extractManifestPaths() above because
  // BOOTSTRAP_PROMPT.txt references the path and the loader regex picks it up.
  // Do not re-add conventions inline here — edit the JSON manifest instead.
  // ─────────────────────────────────────────────────────────────────────────────

  cachedSystemPrompt = parts.join('')
  return cachedSystemPrompt
}

export function buildSystemPromptParts(
  userProfile: {
    machine: string
    machineId?: string
    grinder: string
    grinderId?: string
    goals: string[]
    communicationStyle: string
  },
  questionBudget: number
): { stable: string; dynamic: string } {
  const stable = loadRuntimeSystemPrompt()

  // Mirror of personas/user_persona_profiles.json#onboarding_communicationstyle_override.mapping
  // Source of truth is the JSON manifest — keep this in sync if the mapping ever changes.
  const personaTierMap: Record<string, string> = {
    simple: 'home_enthusiast',
    detailed: 'intermediate',
    why: 'advanced',
  }

  const persona_tier = personaTierMap[userProfile.communicationStyle] ?? 'home_enthusiast'

  const context = {
    user_id: 'session_user',
    persona_tier,
    persona_confidence: 0.85,
    equipment_profile: {
      machine_id: userProfile.machineId ?? userProfile.machine,
      grinder_id: userProfile.grinderId ?? userProfile.grinder,
      machine_confirmed: !!userProfile.machineId,
      grinder_confirmed: !!userProfile.grinderId,
    },
    preferred_goals: userProfile.goals,
  }

  // Equipment validation behavior (warn on implausible equipment names) is declared in
  // runtime/runtime_response_conventions.json#equipment_validation_convention — no inline note needed.

  const dynamic =
    `\n\n=== PERSISTED_USER_CONTEXT ===\n${JSON.stringify(context, null, 2)}\n` +
    `\n\nCURRENT_SESSION_STATE:\n  question_budget_remaining: ${questionBudget}\n`

  return { stable, dynamic }
}

export function loadMachines(): { name: string; brand: string }[] {
  const runtimePath = getRuntimePath()
  const data = JSON.parse(
    fs.readFileSync(path.join(runtimePath, 'physical', 'machines.json'), 'utf-8')
  )
  return (data.machines as { name: string; brand: string }[]).map(m => ({
    name: m.name,
    brand: m.brand,
  }))
}

export function loadGrinders(): { name: string; brand: string }[] {
  const runtimePath = getRuntimePath()
  const data = JSON.parse(
    fs.readFileSync(path.join(runtimePath, 'physical', 'grinders.json'), 'utf-8')
  )
  return (data.grinders as { name: string; brand: string }[]).map(g => ({
    name: g.name,
    brand: g.brand,
  }))
}
