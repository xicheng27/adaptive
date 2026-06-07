'use client'

import {
  DisabilityType,
  StyleCategory,
  DISABILITY_LABELS,
  DISABILITY_ICONS,
  STYLE_LABELS,
  STYLE_ICONS,
} from '@/types'

const ALL_DISABILITIES: DisabilityType[] = [
  'wheelchair', 'limb-difference', 'arthritis', 'sensory',
  'paralysis', 'burns', 'visual', 'kids',
]

const ALL_STYLES: StyleCategory[] = [
  'casual', 'sportswear', 'formal', 'old-money', 'streetwear', 'minimalist',
]

interface FilterPanelProps {
  selectedDisabilities: DisabilityType[]
  selectedStyles: StyleCategory[]
  location: string
  onDisabilityToggle: (d: DisabilityType) => void
  onStyleToggle: (s: StyleCategory) => void
  onLocationChange: (loc: string) => void
  onClearAll: () => void
  resultCount: number
}

function SectionHeading({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="text-base">{icon}</span>
      <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">{label}</h2>
    </div>
  )
}

export default function FilterPanel({
  selectedDisabilities,
  selectedStyles,
  location,
  onDisabilityToggle,
  onStyleToggle,
  onLocationChange,
  onClearAll,
  resultCount,
}: FilterPanelProps) {
  const hasFilters = selectedDisabilities.length > 0 || selectedStyles.length > 0 || !!location

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Panel header */}
      <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">🎛️</span>
          <h2 className="font-bold text-gray-900 text-sm">Filters</h2>
        </div>
        {hasFilters && (
          <button
            onClick={onClearAll}
            className="text-xs text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
          >
            Clear all
          </button>
        )}
      </div>

      <div className="p-5 space-y-6">
        {/* Disability / Condition */}
        <div>
          <SectionHeading icon="♿" label="Disability / Condition" />
          <div className="flex flex-wrap gap-2">
            {ALL_DISABILITIES.map((d) => {
              const active = selectedDisabilities.includes(d)
              return (
                <button
                  key={d}
                  onClick={() => onDisabilityToggle(d)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-150 ${
                    active
                      ? 'bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-200 scale-105'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50'
                  }`}
                >
                  <span className="text-sm">{DISABILITY_ICONS[d]}</span>
                  <span>{DISABILITY_LABELS[d]}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Style */}
        <div>
          <SectionHeading icon="👗" label="Style" />
          <div className="grid grid-cols-2 gap-2">
            {ALL_STYLES.map((s) => {
              const active = selectedStyles.includes(s)
              return (
                <button
                  key={s}
                  onClick={() => onStyleToggle(s)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-150 ${
                    active
                      ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-200'
                      : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50'
                  }`}
                >
                  <span className="text-base">{STYLE_ICONS[s]}</span>
                  <span>{STYLE_LABELS[s]}</span>
                </button>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-100" />

        {/* Location */}
        <div>
          <SectionHeading icon="🌍" label="Location / Region" />
          <div className="relative">
            <input
              type="text"
              placeholder="e.g. US, UK, Australia…"
              value={location}
              onChange={(e) => onLocationChange(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-colors"
            />
            {location && (
              <button
                onClick={() => onLocationChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1.5">Filters brands that ship to your region</p>
        </div>
      </div>

      {/* Footer count */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 text-center">
        <p className="text-sm text-gray-500">
          Showing{' '}
          <span className="font-bold text-indigo-600 text-base">{resultCount}</span>{' '}
          brand{resultCount !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}
