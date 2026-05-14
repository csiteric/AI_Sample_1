/**
 * Reads a key from process.env, falling back to .env.local on disk.
 * Workaround for Next.js workspace-root detection loading the wrong .env.local.
 */
import fs from 'fs'
import path from 'path'

const PROJECT_ROOT = path.resolve(__dirname, '..')

let fileCache: Record<string, string> | null = null

function readEnvFile(): Record<string, string> {
  if (fileCache) return fileCache
  try {
    const envPath = path.join(PROJECT_ROOT, '.env.local')
    const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
    fileCache = {}
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue
      const eq = trimmed.indexOf('=')
      if (eq === -1) continue
      fileCache[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim()
    }
  } catch {
    fileCache = {}
  }
  return fileCache
}

export function getEnv(key: string): string | undefined {
  return process.env[key] ?? readEnvFile()[key]
}

export function requireEnv(key: string): string {
  const val = getEnv(key)
  if (!val) throw new Error(`${key} is not set — check .env.local`)
  return val
}
