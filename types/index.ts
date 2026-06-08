export type DisabilityType =
  | 'wheelchair'
  | 'limb-difference'
  | 'arthritis'
  | 'sensory'
  | 'paralysis'
  | 'burns'
  | 'visual'
  | 'kids'

export type StyleCategory =
  | 'casual'
  | 'sportswear'
  | 'formal'
  | 'old-money'
  | 'streetwear'
  | 'minimalist'

export interface Brand {
  id: string
  name: string
  company?: string
  logo?: string
  image?: string
  description: string
  adaptiveDescription?: string
  url: string
  socialLinks?: { instagram?: string; facebook?: string; twitter?: string }
  categories: DisabilityType[]
  productCategories?: string[]
  features: string[]
  certifications?: string[]
  priceRange: '$' | '$$' | '$$$'
  shipping: string[]
  ageGroups: ('adults' | 'kids')[]
  badge?: string
  styles: StyleCategory[]
}

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface UserPreferences {
  location: string
  disabilities: DisabilityType[]
  styles: StyleCategory[]
}

export interface User {
  id: string
  email: string
  name: string
  preferences?: UserPreferences
  onboardingComplete: boolean
}

export interface Review {
  id: string
  brandId: string
  userName: string
  rating: number
  comment: string
  createdAt: string
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

export const STYLE_LABELS: Record<StyleCategory, string> = {
  casual: 'Casual',
  sportswear: 'Sportswear',
  formal: 'Formal',
  'old-money': 'Old Money',
  streetwear: 'Streetwear',
  minimalist: 'Minimalist',
}

export const STYLE_ICONS: Record<StyleCategory, string> = {
  casual: '👕',
  sportswear: '🏃',
  formal: '👔',
  'old-money': '🎩',
  streetwear: '🧢',
  minimalist: '⬜',
}
