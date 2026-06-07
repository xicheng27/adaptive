'use client'

import { Brand } from '@/types'
import BrandCard from './BrandCard'

interface BrandGridProps {
  brands: Brand[]
}

export default function BrandGrid({ brands }: BrandGridProps) {
  if (brands.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-gray-200">
        <div className="text-6xl mb-4">🔍</div>
        <p className="text-lg font-bold text-gray-700 mb-1">No brands match your filters</p>
        <p className="text-sm text-gray-400 max-w-xs mx-auto">
          Try removing a filter or broadening your location to see more results.
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  )
}
