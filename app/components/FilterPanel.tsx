'use client'

import { DisabilityType, DISABILITY_LABELS, DISABILITY_ICONS } from '@/types'

const ALL_DISABILITIES: DisabilityType[] = [
  'wheelchair', 'limb-difference', 'arthritis', 'sensory',
  'paralysis', 'burns', 'visual', 'kids',
]

interface FilterPanelProps {
  selectedDisabilities: DisabilityType[]
  location: string
  onDisabilityToggle: (d: DisabilityType) => void
  onLocationChange: (loc: string) => void
  onClearAll: () => void
  resultCount: number
}

export default function FilterPanel({
  selectedDisabilities,
  location,
  onDisabilityToggle,
  onLocationChange,
  onClearAll,
  resultCount,
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-5">
      <div>
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-3">
          Disability / Condition
        </h2>
        <div className="flex flex-wrap gap-2">
          {ALL_DISABILITIES.map((d) => {
            const active = selectedDisabilities.includes(d)
            return (
              <button
                key={d}
                onClick={() => onDisabilityToggle(d)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  active
                    ? 'bg-indigo-600 border-indigo-600 text-white'
                    : 'bg-white border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
                }`}
              >
                <span>{DISABILITY_ICONS[d]}</span>
                <span>{DISABILITY_LABELS[d]}</span>
              </button>
            )
          })}
        </div>
      </div>

      <div>
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">
          Location / Region
        </h2>
        <input
          type="text"
          placeholder="e.g. US, Canada, UK, Australia..."
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <p className="text-xs text-gray-400 mt-1">Filter brands that ship to your region</p>
      </div>

      <div className="pt-1 border-t border-gray-100 text-sm text-gray-500">
        Showing <span className="font-semibold text-indigo-600">{resultCount}</span> brand{resultCount !== 1 ? 's' : ''}
        {(selectedDisabilities.length > 0 || location) && (
          <button
            onClick={onClearAll}
            className="ml-3 text-xs text-red-500 hover:text-red-700 underline"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}
