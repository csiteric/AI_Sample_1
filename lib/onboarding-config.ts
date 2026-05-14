export type CommunicationStyle = 'simple' | 'detailed' | 'why'

export interface OnboardingStep {
  field: string
  question: string
  subtext?: string
  inputType: 'autocomplete-machine' | 'autocomplete-grinder' | 'quick-reply' | 'text'
  quickReplies?: string[]
  placeholder?: string
  allowFreeText: boolean
}

export const ONBOARDING_STEPS: OnboardingStep[] = [
  {
    field: 'machine',
    question: 'What espresso machine do you use?',
    subtext: "I'll use this to understand your setup and adjust my advice",
    inputType: 'autocomplete-machine',
    placeholder: 'Search machines or type yours...',
    allowFreeText: true,
  },
  {
    field: 'grinder',
    question: 'What grinder are you using?',
    inputType: 'autocomplete-grinder',
    placeholder: 'Search grinders or type yours...',
    allowFreeText: true,
  },
  {
    field: 'goals',
    question: "What are you mainly trying to do right now?",
    subtext: 'Pick one or describe in your own words',
    inputType: 'quick-reply',
    quickReplies: ['Fix a specific problem', 'Improve consistency', 'Dial in a new bag', 'Just learning'],
    allowFreeText: true,
  },
  {
    field: 'communicationStyle',
    question: 'How do you like to receive advice?',
    inputType: 'quick-reply',
    quickReplies: ['Keep it simple', 'Give me the details', 'Explain the why'],
    allowFreeText: false,
  },
]

export const COMM_STYLE_LABEL_MAP: Record<string, CommunicationStyle> = {
  'Keep it simple': 'simple',
  'Give me the details': 'detailed',
  'Explain the why': 'why',
}

export const INTRO_MESSAGE =
  "Hi — I'm Dialed In, your espresso diagnostic assistant. Let me learn a bit about your setup so I can give you more accurate advice."

export const GOAL_ID_MAP: Record<string, string> = {
  'Fix a specific problem': 'fix_shot_problem',
  'Improve consistency': 'improve_consistency',
  'Dial in a new bag': 'optimize_recipe',
  'Just learning': 'learn_espresso',
}
