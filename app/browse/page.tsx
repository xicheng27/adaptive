'use client'

import { useEffect, useState } from 'react'
import { brands, filterBrands, sortBrandsByStyle } from '@/lib/brands'
import { getUser } from '@/lib/user'
import { DisabilityType, StyleCategory } from '@/types'
import Header from '@/app/components/Header'
import FilterPanel from '@/app/components/FilterPanel'
import BrandGrid from '@/app/components/BrandGrid'
import AIChat from '@/app/components/AIChat'
import AIRecommend from '@/app/components/AIRecommend'

export default function BrowsePage() {
  const [selectedDisabilities, setSelectedDisabilities] = useState<DisabilityType[]>([])
  const [selectedStyles, setSelectedStyles] = useState<StyleCategory[]>([])
  const [location, setLocation] = useState('')
  const [preferredStyles, setPreferredStyles] = useState<StyleCategory[]>([])
  const [chatOpen, setChatOpen] = useState(false)
  const [recommendOpen, setRecommendOpen] = useState(false)
  const [personalized, setPersonalized] = useState(false)

  // Load preferences from user profile on mount
  useEffect(() => {
    const user = getUser()
    if (user?.preferences) {
      const { location: loc, disabilities, styles } = user.preferences
      if (loc) setLocation(loc)
      if (disabilities.length) setSelectedDisabilities(disabilities)
      if (styles.length) {
        setPreferredStyles(styles)
        setPersonalized(true)
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

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Find Adaptive Fashion</h2>
            <p className="text-gray-500 mt-1.5 text-base">
              Discover clothing brands designed for your needs — filter by disability type, style, and region.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0 mt-1 flex-wrap">
            {personalized && (
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-full border border-indigo-200">
                ✨ Personalised for you
              </span>
            )}
            <button
              onClick={() => setRecommendOpen(true)}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              <span>🤖</span>
              Get AI Recommendations
            </button>
          </div>
        </div>

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
            <BrandGrid brands={sorted} />
          </section>
        </div>
      </main>

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
