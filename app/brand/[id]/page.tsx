'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { brands, getSimilarBrands } from '@/lib/brands'
import { getReviews } from '@/lib/reviews'
import { getUser } from '@/lib/user'
import {
  DISABILITY_ICONS,
  DISABILITY_LABELS,
  STYLE_ICONS,
  STYLE_LABELS,
  type Review,
} from '@/types'
import Header from '@/app/components/Header'
import BrandAvatar from '@/app/components/BrandAvatar'
import ReviewForm from '@/app/components/ReviewForm'
import ReviewList from '@/app/components/ReviewList'
import dynamic from 'next/dynamic'

const WorldMap = dynamic(() => import('@/app/components/WorldMap'), { ssr: false })

const PRICE_LABEL: Record<string, string> = {
  '$': 'Budget-friendly',
  '$$': 'Mid-range',
  '$$$': 'Premium',
}

const PRICE_DOTS: Record<string, number> = { '$': 1, '$$': 2, '$$$': 3 }

export default function BrandDetailPage() {
  const { id } = useParams<{ id: string }>()
  const brand = brands.find((b) => b.id === id)
  const similarBrands = brand ? getSimilarBrands(brand.id) : []
  const [reviews, setReviews] = useState<Review[]>([])
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    if (brand) setReviews(getReviews(brand.id))
    setUserName(getUser()?.name ?? null)
  }, [brand])

  if (!brand) {
    return (
      <>
        <Header />
        <main className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Brand not found</h1>
          <p className="text-gray-500 mb-6">We couldn&apos;t find a brand with that ID.</p>
          <a href="/browse" className="text-indigo-600 hover:underline">← Back to Browse</a>
        </main>
      </>
    )
  }

  const priceDots = PRICE_DOTS[brand.priceRange] ?? 2

  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <a href="/browse" className="text-sm text-indigo-600 hover:underline mb-6 inline-block">
          ← Back to Browse
        </a>

        {/* Hero */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-6">
          <div className="flex items-start gap-5 flex-wrap">
            <BrandAvatar name={brand.name} size="lg" rounded="2xl" />

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h1 className="text-2xl font-bold text-gray-900">{brand.name}</h1>
                    {brand.badge && (
                      <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-medium">
                        {brand.badge}
                      </span>
                    )}
                  </div>
                  {brand.company && (
                    <p className="text-sm text-gray-500">by {brand.company}</p>
                  )}
                </div>
                <div className="flex items-center gap-1 shrink-0" title={PRICE_LABEL[brand.priceRange]}>
                  {[1, 2, 3].map((n) => (
                    <span
                      key={n}
                      className={`w-2.5 h-2.5 rounded-full ${n <= priceDots ? 'bg-indigo-500' : 'bg-gray-200'}`}
                    />
                  ))}
                  <span className="text-xs text-gray-500 ml-1">{PRICE_LABEL[brand.priceRange]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={brand.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Visit Website →
            </a>
            {brand.socialLinks?.instagram && (
              <a
                href={brand.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Instagram
              </a>
            )}
            {brand.socialLinks?.facebook && (
              <a
                href={brand.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Facebook
              </a>
            )}
            {brand.socialLinks?.twitter && (
              <a
                href={brand.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 border border-gray-300 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                Twitter / X
              </a>
            )}
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column — 2/3 width */}
          <div className="lg:col-span-2 space-y-6">
            {/* About */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-3">About</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {brand.adaptiveDescription ?? brand.description}
              </p>
            </section>

            {/* Adaptive Features */}
            <section className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-3">Adaptive Features</h2>
              <ul className="space-y-2">
                {brand.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-indigo-500 mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              {brand.certifications && brand.certifications.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Certifications &amp; Notable
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {brand.certifications.map((c) => (
                      <span
                        key={c}
                        className="text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Reviews */}
            <section className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <h2 className="text-base font-semibold text-gray-900">Reviews</h2>

              <ReviewList reviews={reviews} />

              <div className="pt-4 border-t border-gray-100">
                {userName ? (
                  <>
                    <p className="text-sm font-medium text-gray-700 mb-4">
                      Leave a review as <span className="text-indigo-600">{userName}</span>
                    </p>
                    <ReviewForm
                      brandId={brand.id}
                      userName={userName}
                      onSubmit={(r) => setReviews((prev) => [r, ...prev])}
                    />
                  </>
                ) : (
                  <p className="text-sm text-gray-500">
                    <a href="/" className="text-indigo-600 hover:underline">Sign in</a>{' '}
                    to leave a review.
                  </p>
                )}
              </div>
            </section>
          </div>

          {/* Right column — 1/3 width */}
          <div className="space-y-6">
            {/* Accessibility Needs */}
            <section className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Accessibility Needs
              </h2>
              <div className="flex flex-wrap gap-2">
                {brand.categories.map((c) => (
                  <span
                    key={c}
                    className="flex items-center gap-1 text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-full"
                  >
                    <span>{DISABILITY_ICONS[c]}</span>
                    <span>{DISABILITY_LABELS[c]}</span>
                  </span>
                ))}
              </div>
            </section>

            {/* Age Groups */}
            <section className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                For
              </h2>
              <div className="flex gap-2">
                {brand.ageGroups.includes('adults') && (
                  <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                    🧑 Adults
                  </span>
                )}
                {brand.ageGroups.includes('kids') && (
                  <span className="flex items-center gap-1 text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                    👶 Kids
                  </span>
                )}
              </div>
            </section>

            {/* Product Categories */}
            {brand.productCategories && brand.productCategories.length > 0 && (
              <section className="bg-white rounded-xl border border-gray-200 p-5">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Product Categories
                </h2>
                <div className="flex flex-wrap gap-2">
                  {brand.productCategories.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Style */}
            {brand.styles.length > 0 && (
              <section className="bg-white rounded-xl border border-gray-200 p-5">
                <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                  Style
                </h2>
                <div className="flex flex-wrap gap-2">
                  {brand.styles.map((s) => (
                    <span
                      key={s}
                      className="flex items-center gap-1 text-xs bg-gray-50 text-gray-700 border border-gray-200 px-2.5 py-1 rounded-full"
                    >
                      <span>{STYLE_ICONS[s]}</span>
                      <span>{STYLE_LABELS[s]}</span>
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Ships To */}
            <section className="bg-white rounded-xl border border-gray-200 p-5">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
                Ships To
              </h2>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {brand.shipping.map((r) => (
                  <span
                    key={r}
                    className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-full"
                  >
                    {r}
                  </span>
                ))}
              </div>
              <WorldMap regions={brand.shipping} />
            </section>
          </div>
        </div>
        {/* Similar Brands */}
        {similarBrands.length > 0 && (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Similar Brands</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {similarBrands.map((b) => (
                <a
                  key={b.id}
                  href={`/brand/${b.id}`}
                  className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-indigo-200 transition-all group flex gap-4 items-start"
                >
                  <BrandAvatar name={b.name} size="sm" rounded="xl" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <p className="font-semibold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors leading-tight">
                        {b.name}
                      </p>
                      {b.badge && (
                        <span className="shrink-0 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full">
                          {b.badge}
                        </span>
                      )}
                    </div>
                    {b.company && (
                      <p className="text-xs text-gray-400 mb-1">by {b.company}</p>
                    )}
                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{b.description}</p>
                    <div className="flex gap-1 mt-2">
                      {b.categories.map((c) => (
                        <span key={c} title={c} className="text-sm">{DISABILITY_ICONS[c]}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  )
}
