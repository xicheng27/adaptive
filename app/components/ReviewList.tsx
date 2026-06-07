'use client'

import { Review } from '@/types'

interface ReviewListProps {
  reviews: Review[]
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={`text-base leading-none ${n <= rating ? 'text-amber-400' : 'text-gray-200'}`}>
          ★
        </span>
      ))}
    </span>
  )
}

function timeAgo(iso: string): string {
  const diff = Date.now() - new Date(iso).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days}d ago`
  return new Date(iso).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })
}

export default function ReviewList({ reviews }: ReviewListProps) {
  if (reviews.length === 0) {
    return (
      <p className="text-sm text-gray-400 italic">
        No reviews yet — be the first to share your experience.
      </p>
    )
  }

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length

  return (
    <div className="space-y-4">
      {/* Summary row */}
      <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
        <Stars rating={Math.round(avg)} />
        <span className="text-sm font-semibold text-gray-700">{avg.toFixed(1)}</span>
        <span className="text-sm text-gray-400">
          {reviews.length} review{reviews.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Individual reviews */}
      {reviews.map((r) => (
        <div key={r.id} className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-semibold text-indigo-700 shrink-0">
                {r.userName.charAt(0).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-gray-800">{r.userName}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Stars rating={r.rating} />
              <span className="text-xs text-gray-400">{timeAgo(r.createdAt)}</span>
            </div>
          </div>
          {r.comment && (
            <p className="text-sm text-gray-600 leading-relaxed pl-9">{r.comment}</p>
          )}
        </div>
      ))}
    </div>
  )
}
