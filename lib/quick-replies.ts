const QUESTION_BUBBLES: Record<string, string[]> = {
  shot_time: ['Under 20s', '20–30s', '30–40s', 'Over 40s'],
  grind_direction: ['I went finer', 'I went coarser', "Haven't changed it"],
  crema: ['Thin and pale', 'Dark, tiger-striped', 'Big unstable bubbles', 'Almost none'],
  taste: ['Sour and sharp', 'Bitter and harsh', 'Mixed sour and bitter', 'Flat and muted'],
  body: ['Thin and watery', 'Rich and full', 'Harsh and drying'],
  beans_age: ['Under 5 days', '1–3 weeks', '3–6 weeks', 'Over 6 weeks'],
  session_context: ['First shot of the day', 'Second shot in a row', 'Several shots in'],
  bottomless_visual: ['Single centered stream', 'Multiple streams', 'Gushing or spraying', "Don't have one"],
  consecutive_shots: ['Only the first shot', 'Gets worse each shot', 'Same every shot'],
  machine_warmup: ['Just turned it on', '15–20 minutes', '30+ minutes'],
  other: [],
}

export function getQuickReplies(questionType: string | null | undefined): string[] {
  if (!questionType) return []
  return QUESTION_BUBBLES[questionType] ?? []
}
