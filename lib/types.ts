export interface UserProfile {
  machine: string
  machineId?: string
  grinder: string
  grinderId?: string
  goals: string[]
  communicationStyle: 'simple' | 'detailed' | 'why'
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface OntologyEntry {
  name: string
  brand: string
}
