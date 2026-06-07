'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Brand, DISABILITY_ICONS, DISABILITY_LABELS } from '@/types'

interface BrandCardProps {
  brand: Brand
}

const PRICE_LABEL: Record<string, string> = {
  '$': 'Budget-friendly',
  '$$': 'Mid-range',
  '$$$': 'Premium',
}

const CATEGORY_BG: Record<string, string> = {
  wheelchair: 'bg-blue-50',
  'limb-difference': 'bg-violet-50',
  arthritis: 'bg-amber-50',
  sensory: 'bg-teal-50',
  paralysis: 'bg-indigo-50',
  burns: 'bg-rose-50',
  visual: 'bg-emerald-50',
  kids: 'bg-yellow-50',
}

function BrandLogo({ logo, name, icon }: { logo?: string; name: string; icon: string }) {
  const [failed, setFailed] = useState(false)

  if (logo && !failed) {
    return (
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden p-1.5">
        <Image
          src={logo}
          alt={`${name} logo`}
          width={48}
          height={48}
          className="object-contain w-full h-full"
          onError={() => setFailed(true)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <div className="w-14 h-14 rounded-2xl bg-white/70 border border-white/50 shadow-sm flex items-center justify-center text-2xl">
      {icon}
    </div>
  )
}

export default function BrandCard({ brand }: BrandCardProps) {
  const primaryCategory = brand.categories[0]
  const bg = CATEGORY_BG[primaryCategory] ?? 'bg-gray-50'
  const icon = DISABILITY_ICONS[primaryCategory]

  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:shadow-gray-200/60 hover:-translate-y-1 transition-all duration-200 flex flex-col">
      {/* Card header */}
      <div className={`${bg} px-5 pt-5 pb-4 flex items-start justify-between gap-3`}>
        <BrandLogo logo={brand.logo} name={brand.name} icon={icon} />
        {brand.badge && (
          <span className="text-xs bg-white/80 backdrop-blur text-indigo-700 border border-indigo-100 px-2.5 py-1 rounded-full font-semibold shadow-sm shrink-0">
            {brand.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-indigo-600 transition-colors">
            {brand.name}
          </h3>
          {brand.company && (
            <p className="text-xs text-gray-400 mt-0.5 font-medium">by {brand.company}</p>
          )}
        </div>

        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
          {brand.description}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {brand.features.slice(0, 3).map((f) => (
            <span key={f} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
              {f}
            </span>
          ))}
          {brand.features.length > 3 && (
            <span className="text-xs text-gray-400 px-1">+{brand.features.length - 3} more</span>
          )}
        </div>

        {/* Meta row */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-600" title={PRICE_LABEL[brand.priceRange]}>
              {brand.priceRange}
            </span>
            <span className="text-gray-200">·</span>
            <span>
              {brand.shipping.slice(0, 3).join(', ')}
              {brand.shipping.length > 3 ? ` +${brand.shipping.length - 3}` : ''}
            </span>
          </div>
          <div className="flex gap-1">
            {brand.categories.slice(0, 3).map((c) => (
              <span key={c} title={DISABILITY_LABELS[c]} className="text-sm">{DISABILITY_ICONS[c]}</span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <a
            href={`/brand/${brand.id}`}
            className="flex-1 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl py-2.5 transition-colors"
          >
            View Profile
          </a>
          <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl py-2.5 transition-colors"
          >
            Visit Site →
          </a>
        </div>
      </div>
    </div>
  )
}
