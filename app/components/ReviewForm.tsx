'use client'

import { useState } from 'react'
import { addReview } from '@/lib/reviews'
import { Review } from '@/types'

interface ReviewFormProps {
  brandId: string
  userName: string
  onSubmit: (review: Review) => void
}

export default function ReviewForm({ brandId, userName, onSubmit }: ReviewFormProps) {
  const [rating, setRating] = useState(0)
  const [hovered, setHovered] = useState(0)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (rating === 0) {
      setError('Please select a star rating.')
      return
    }
    setSubmitting(true)
    const review = addReview({ brandId, userName, rating, comment: comment.trim() })
    setRating(0)
    setComment('')
    setError('')
    setSubmitting(false)
    onSubmit(review)
  }

  const display = hovered || rating

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <p className="text-sm font-medium text-gray-700 mb-1.5">Your rating</p>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              onMouseEnter={() => setHovered(n)}
              onMouseLeave={() => setHovered(0)}
              className="text-2xl leading-none transition-transform hover:scale-110 focus:outline-none"
              aria-label={`${n} star${n !== 1 ? 's' : ''}`}
            >
              <span className={n <= display ? 'text-amber-400' : 'text-gray-200'}>★</span>
            </button>
          ))}
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">
          Comment <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          maxLength={500}
          placeholder="Share your experience with this brand…"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <p className="text-xs text-gray-400 text-right mt-0.5">{comment.length}/500</p>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
      >
        Submit Review
      </button>
    </form>
  )
}
