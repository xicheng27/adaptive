'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

// ISO 3166-1 numeric codes
const REGION_CODES: Record<string, number[]> = {
  US: [840],
  Canada: [124],
  UK: [826],
  Australia: [36],
  EU: [40, 56, 100, 191, 196, 203, 208, 233, 246, 250, 276, 300, 348, 372, 380, 428, 440, 442, 470, 528, 616, 620, 642, 703, 705, 724, 752],
  Global: [],
}

interface WorldMapProps {
  regions: string[]
  accentColor?: string
}

export default function WorldMap({ regions, accentColor = '#4f46e5' }: WorldMapProps) {
  const isGlobal = regions.includes('Global')

  const activeCodes = new Set<number>()
  if (!isGlobal) {
    for (const r of regions) {
      for (const code of REGION_CODES[r] ?? []) {
        activeCodes.add(code)
      }
    }
  }

  return (
    <div className="w-full rounded-lg overflow-hidden bg-slate-50 border border-gray-200">
      <ComposableMap
        projectionConfig={{ scale: 120, center: [10, 10] }}
        style={{ width: '100%', height: 'auto' }}
      >
        <Geographies geography={GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const numericId = parseInt(geo.id, 10)
              const active = isGlobal || activeCodes.has(numericId)
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={active ? accentColor : '#e2e8f0'}
                  stroke="#fff"
                  strokeWidth={0.4}
                  style={{ default: { outline: 'none' }, hover: { outline: 'none' }, pressed: { outline: 'none' } }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  )
}
