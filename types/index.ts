export type DisabilityType =
  | 'wheelchair'
  | 'limb-difference'
  | 'arthritis'
  | 'sensory'
  | 'paralysis'
  | 'burns'
  | 'visual'
  | 'kids'

export interface Brand {
  id: string
  name: string
  company?: string
  description: string
  url: string
  categories: DisabilityType[]
  features: string[]
  priceRange: '$' | '$$' | '$$$'
  shipping: string[]
  ageGroups: ('adults' | 'kids')[]
  badge?: string
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export const DISABILITY_LABELS: Record<DisabilityType, string> = {
  wheelchair: 'Wheelchair Users',
  'limb-difference': 'Limb Differences',
  arthritis: 'Arthritis / Limited Mobility',
  sensory: 'Sensory / Autism',
  paralysis: 'Paralysis',
  burns: 'Burns / Skin',
  visual: 'Visual Impairments',
  kids: 'Kids Adaptive',
}

export const DISABILITY_ICONS: Record<DisabilityType, string> = {
  wheelchair: '🦽',
  'limb-difference': '🦾',
  arthritis: '🤲',
  sensory: '🧠',
  paralysis: '♿',
  burns: '🩹',
  visual: '👁️',
  kids: '👶',
}
