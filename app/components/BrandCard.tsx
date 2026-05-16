'use client'

import { Brand, DISABILITY_ICONS } from '@/types'

interface BrandCardProps {
  brand: Brand
}

const PRICE_LABEL: Record<string, string> = {
  '$': 'Budget-friendly',
  '$$': 'Mid-range',
  '$$$': 'Premium',
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 text-base leading-tight">{brand.name}</h3>
          {brand.company && (
            <p className="text-xs text-gray-400 mt-0.5">by {brand.company}</p>
          )}
        </div>
        {brand.badge && (
          <span className="shrink-0 text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-medium">
            {brand.badge}
          </span>
        )}
      </div>

      <p className="text-sm text-gray-600 leading-relaxed">{brand.description}</p>

      <div className="flex flex-wrap gap-1.5">
        {brand.features.map((f) => (
          <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
            {f}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-gray-500 pt-1 border-t border-gray-100">
        <div className="flex items-center gap-2">
          <span title={PRICE_LABEL[brand.priceRange]}>{brand.priceRange}</span>
          <span className="text-gray-300">|</span>
          <span>{brand.shipping.slice(0, 4).join(', ')}{brand.shipping.length > 4 ? ' +more' : ''}</span>
        </div>
        <div className="flex gap-1">
          {brand.categories.map((c) => (
            <span key={c} title={c}>{DISABILITY_ICONS[c]}</span>
          ))}
        </div>
      </div>

      <a
        href={brand.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-1 block text-center text-sm font-medium text-indigo-600 border border-indigo-200 rounded-lg py-2 hover:bg-indigo-50 transition-colors"
      >
        Visit {brand.name} &rarr;
      </a>
    </div>
  )
}
