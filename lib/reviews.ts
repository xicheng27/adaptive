import { Review } from '@/types'

const STORAGE_KEY = 'wearable_reviews'

function load(): Review[] {
  if (typeof window === 'undefined') return []
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]') as Review[]
  } catch {
    return []
  }
}

function save(reviews: Review[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews))
}

export function getReviews(brandId: string): Review[] {
  return load()
    .filter((r) => r.brandId === brandId)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export function addReview(data: Omit<Review, 'id' | 'createdAt'>): Review {
  const review: Review = {
    ...data,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
  }
  const all = load()
  save([...all, review])
  return review
}
