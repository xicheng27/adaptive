'use client'

import { useState } from 'react'
import { brands, filterBrands } from '@/lib/brands'
import { DisabilityType } from '@/types'
import Header from './components/Header'
import FilterPanel from './components/FilterPanel'
import BrandGrid from './components/BrandGrid'
import AIChat from './components/AIChat'

export default function Home() {
  const [selectedDisabilities, setSelectedDisabilities] = useState<DisabilityType[]>([])
  const [location, setLocation] = useState('')
  const [chatOpen, setChatOpen] = useState(false)

  function toggleDisability(d: DisabilityType) {
    setSelectedDisabilities((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
    )
  }

  function clearAll() {
    setSelectedDisabilities([])
    setLocation('')
  }

  const filteredBrands = filterBrands(brands, selectedDisabilities, location)

  return (
    <>
      <Header onOpenChat={() => setChatOpen(true)} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Find Adaptive Fashion</h2>
          <p className="text-gray-500 mt-1.5 text-base">
            Discover clothing brands designed for your needs — filter by disability type and shipping region.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="lg:w-72 shrink-0">
            <FilterPanel
              selectedDisabilities={selectedDisabilities}
              location={location}
              onDisabilityToggle={toggleDisability}
              onLocationChange={setLocation}
              onClearAll={clearAll}
              resultCount={filteredBrands.length}
            />
          </aside>

          <section className="flex-1 min-w-0">
            <BrandGrid brands={filteredBrands} />
          </section>
        </div>
      </main>

      <AIChat
        open={chatOpen}
        onClose={() => setChatOpen(false)}
        selectedDisabilities={selectedDisabilities}
        location={location}
      />
    </>
  )
}
