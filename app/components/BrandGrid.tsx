'use client'

import { Brand } from '@/types'
import BrandCard from './BrandCard'

interface BrandGridProps {
  brands: Brand[]
}

export default function BrandGrid({ brands }: BrandGridProps) {
  if (brands.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <div className="text-5xl mb-4">🔍</div>
        <p className="text-lg font-medium text-gray-500">No brands match your filters</p>
        <p className="text-sm mt-1">Try removing some filters or broadening your location</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {brands.map((brand) => (
        <BrandCard key={brand.id} brand={brand} />
      ))}
    </div>
  )
}
