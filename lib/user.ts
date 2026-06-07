import type { User, UserPreferences } from '@/types'

const USER_KEY = 'wearable_user'

export function getUser(): User | null {
  if (typeof window === 'undefined') return null
  try {
    const data = localStorage.getItem(USER_KEY)
    return data ? (JSON.parse(data) as User) : null
  } catch {
    return null
  }
}

export function saveUser(user: User): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function createUser(email: string, name: string): User {
  const user: User = {
    id: crypto.randomUUID(),
    email: email.toLowerCase().trim(),
    name: name.trim(),
    onboardingComplete: false,
  }
  saveUser(user)
  return user
}

export function signIn(email: string): User | null {
  const user = getUser()
  if (!user || user.email !== email.toLowerCase().trim()) return null
  return user
}

export function signOut(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(USER_KEY)
}

export function savePreferences(preferences: UserPreferences): void {
  const user = getUser()
  if (!user) return
  saveUser({ ...user, preferences, onboardingComplete: true })
}
