'use client'

import { useEffect, useState } from 'react'
import { brands, filterBrands, sortBrandsByStyle } from '@/lib/brands'
import { getUser } from '@/lib/user'
import { DisabilityType, StyleCategory, Brand } from '@/types'
import Header from '@/app/components/Header'
import FilterPanel from '@/app/components/FilterPanel'
import BrandGrid from '@/app/components/BrandGrid'
import AIChat from '@/app/components/AIChat'
import AIRecommend from '@/app/components/AIRecommend'
import BrandAvatar from '@/app/components/BrandAvatar'

const FEATURED_IDS = ['tommy-adaptive', 'nike-flyease', 'iz-adaptive', 'rebirth-garments', 'joe-and-bella']

export default function BrowsePage() {
  const [selectedDisabilities, setSelectedDisabilities] = useState<DisabilityType[]>([])
  const [selectedStyles, setSelectedStyles] = useState<StyleCategory[]>([])
  const [location, setLocation] = useState('')
  const [preferredStyles, setPreferredStyles] = useState<StyleCategory[]>([])
  const [userName, setUserName] = useState<string | null>(null)
  const [chatOpen, setChatOpen] = useState(false)
  const [recommendOpen, setRecommendOpen] = useState(false)
  const [personalized, setPersonalized] = useState(false)

  useEffect(() => {
    const user = getUser()
    if (user) {
      setUserName(user.name.split(' ')[0])
      if (user.preferences) {
        const { location: loc, disabilities, styles } = user.preferences
        if (loc) setLocation(loc)
        if (disabilities.length) setSelectedDisabilities(disabilities)
        if (styles.length) {
          setPreferredStyles(styles)
          setPersonalized(true)
        }
      }
    }
  }, [])

  function toggleDisability(d: DisabilityType) {
    setSelectedDisabilities((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    )
  }

  function toggleStyle(s: StyleCategory) {
    setSelectedStyles((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )
  }

  function clearAll() {
    setSelectedDisabilities([])
    setSelectedStyles([])
    setLocation('')
  }

  const filtered = filterBrands(brands, selectedDisabilities, location, selectedStyles)
  const sorted = sortBrandsByStyle(filtered, preferredStyles)
  const featured: Brand[] = FEATURED_IDS.map((id) => brands.find((b) => b.id === id)!).filter(Boolean)

  const hasActiveFilters = selectedDisabilities.length > 0 || selectedStyles.length > 0 || !!location

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />

      {/* Hero banner */}
      <div className="bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              {userName ? (
                <>
                  <p className="text-indigo-200 text-sm font-medium mb-1 tracking-wide uppercase">
                    Welcome back
                  </p>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Hi, {userName} 👋
                  </h1>
                  <p className="mt-2 text-indigo-200 text-base sm:text-lg max-w-xl">
                    {personalized
                      ? "Here's your personalised selection — sorted for your style and needs."
                      : 'Discover adaptive clothing brands designed around your life.'}
                  </p>
                </>
              ) : (
                <>
                  <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                    Find Adaptive Fashion
                  </h1>
                  <p className="mt-2 text-indigo-200 text-base sm:text-lg max-w-xl">
                    Discover clothing brands designed for your disability, style, and location.
                  </p>
                </>
              )}
              {personalized && (
                <span className="mt-3 inline-flex items-center gap-1.5 bg-white/15 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30">
                  ✨ Personalised for you
                </span>
              )}
            </div>

            <button
              onClick={() => setRecommendOpen(true)}
              className="shrink-0 inline-flex items-center gap-2.5 bg-white text-indigo-700 font-semibold px-5 py-3 rounded-xl shadow-lg hover:bg-indigo-50 transition-colors text-sm sm:text-base"
            >
              <span className="text-xl">🤖</span>
              <span>Get AI Recommendations</span>
            </button>
          </div>

          {/* Stat pills */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: '🏷️', label: `${brands.length} curated brands` },
              { icon: '♿', label: '8 disability types' },
              { icon: '🌍', label: 'Ships worldwide' },
              { icon: '⭐', label: 'Real user reviews' },
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
              >
                <span>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* Featured Picks horizontal scroll */}
          {!hasActiveFilters && (
            <section className="mb-10">
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">⭐ Featured Picks</h2>
                  <p className="text-sm text-gray-500 mt-0.5">Editor-curated brands our community loves</p>
                </div>
                <span className="text-xs text-gray-400 hidden sm:block">Scroll to explore →</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-3 -mx-1 px-1 snap-x snap-mandatory scrollbar-hide">
                {featured.map((brand) => (
                  <a
                    key={brand.id}
                    href={`/brand/${brand.id}`}
                    className="snap-start shrink-0 w-56 bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:border-indigo-200 hover:-translate-y-0.5 transition-all duration-200 group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <BrandAvatar name={brand.name} size="sm" rounded="xl" />
                      {brand.badge && (
                        <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-medium shrink-0">
                          {brand.badge}
                        </span>
                      )}
                    </div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors leading-tight">
                      {brand.name}
                    </p>
                    {brand.company && (
                      <p className="text-xs text-gray-400 mt-0.5">by {brand.company}</p>
                    )}
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed line-clamp-2">
                      {brand.description}
                    </p>
                    <p className="text-xs text-indigo-600 font-medium mt-3 group-hover:translate-x-0.5 transition-transform">
                      View profile →
                    </p>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Main layout */}
          <div className="flex flex-col lg:flex-row gap-6">
            <aside className="lg:w-72 shrink-0">
              <FilterPanel
                selectedDisabilities={selectedDisabilities}
                selectedStyles={selectedStyles}
                location={location}
                onDisabilityToggle={toggleDisability}
                onStyleToggle={toggleStyle}
                onLocationChange={setLocation}
                onClearAll={clearAll}
                resultCount={sorted.length}
              />
            </aside>

            <section className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">
                  {hasActiveFilters ? 'Filtered Results' : 'All Brands'}
                  <span className="ml-2 text-sm font-normal text-gray-400">({sorted.length})</span>
                </h2>
              </div>
              <BrandGrid brands={sorted} />
            </section>
          </div>
        </div>
      </div>

      <AIChat
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        selectedDisabilities={selectedDisabilities}
        location={location}
      />
      <AIRecommend
        open={recommendOpen}
        onClose={() => setRecommendOpen(false)}
        location={location}
      />
    </>
  )
}
