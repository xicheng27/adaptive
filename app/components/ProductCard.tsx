'use client'

import { AdaptiveProduct } from '@/types'

const BRAND_GRADIENT: Record<string, string> = {
  'will-and-well':        'from-emerald-500 to-teal-600',
  'the-able-label':       'from-blue-500 to-indigo-600',
  'june-adaptive':        'from-violet-500 to-purple-700',
  'jam-the-label':        'from-amber-400 to-orange-500',
  'lotus-eldercare-leaf': 'from-teal-500 to-cyan-600',
}

const ENTRY_BADGE: Record<string, { label: string; style: string }> = {
  product:    { label: 'Product',           style: 'bg-white/90 text-indigo-700' },
  category:   { label: 'Category Listing',  style: 'bg-white/80 text-gray-600' },
  service:    { label: 'Service',           style: 'bg-white/90 text-purple-700' },
  initiative: { label: 'Initiative',        style: 'bg-white/90 text-teal-700' },
}

const AVAIL_BADGE: Record<string, { label: string; style: string }> = {
  local:      { label: '🇸🇬 SG Local',         style: 'bg-green-100 text-green-800 border border-green-200' },
  initiative: { label: '🇸🇬 SG Initiative',    style: 'bg-emerald-100 text-emerald-800 border border-emerald-200' },
  ships:      { label: '✈️ Ships to SG',       style: 'bg-blue-100 text-blue-800 border border-blue-200' },
  sgd:        { label: '💵 SGD Pricing',       style: 'bg-violet-100 text-violet-800 border border-violet-200' },
  contact:    { label: '📧 Contact Brand',     style: 'bg-amber-100 text-amber-800 border border-amber-200' },
}

const TYPE_ICON: Record<string, string> = {
  dress:          '👗',
  top:            '👕',
  shirt:          '👕',
  polo:           '👕',
  jumper:         '🧶',
  knitwear:       '🧶',
  pants:          '👖',
  jeans:          '👖',
  trousers:       '👖',
  bottoms:        '👖',
  socks:          '🧦',
  slippers:       '🧦',
  footwear:       '👟',
  nightwear:      '🌙',
  loungewear:     '🌙',
  underwear:      '🩲',
  service:        '✂️',
  tailoring:      '✂️',
  collection:     '🏷️',
  basics:         '👔',
  'care clothing':'🛏️',
  'cargo pants':  '👖',
  'linen shirt':  '👕',
}

function getIcon(productType: string): string {
  const lc = productType.toLowerCase()
  for (const [key, icon] of Object.entries(TYPE_ICON)) {
    if (lc.includes(key)) return icon
  }
  return '👕'
}

function getAvailBadge(avail: string): { label: string; style: string } {
  const a = avail.toLowerCase()
  if (a.includes('initiative') || a.includes('in development')) return AVAIL_BADGE.initiative
  if (a.includes('local') || (a.includes('singapore') && a.includes('brand')) || a.includes('local service')) return AVAIL_BADGE.local
  if (a.includes('ships to')) return AVAIL_BADGE.ships
  if (a.includes('sgd')) return AVAIL_BADGE.sgd
  if (a.includes('contact')) return AVAIL_BADGE.contact
  return { label: avail, style: 'bg-gray-100 text-gray-700 border border-gray-200' }
}

export default function ProductCard({ product }: { product: AdaptiveProduct }) {
  const gradient = BRAND_GRADIENT[product.brandId] ?? 'from-indigo-500 to-violet-600'
  const icon = getIcon(product.productType)
  const entryBadge = ENTRY_BADGE[product.entryType]
  const availBadge = getAvailBadge(product.singaporeAvailability)

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg hover:border-indigo-200 transition-all duration-200 flex flex-col">
      {/* Coloured header strip */}
      <div className={`bg-gradient-to-br ${gradient} px-5 py-5 flex items-start justify-between gap-3`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl drop-shadow-sm leading-none" role="img" aria-label={product.productType}>
            {icon}
          </span>
          <div>
            <p className="text-white/70 text-xs font-semibold uppercase tracking-wider leading-none mb-0.5">
              {product.brandName}
            </p>
            <p className="text-white text-sm font-bold leading-tight">{product.productType}</p>
          </div>
        </div>
        <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${entryBadge.style}`}>
          {entryBadge.label}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5 flex flex-col flex-1">
        {/* Product name */}
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-3">
          {product.name}
        </h3>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
            {product.gender}
          </span>
          {product.closureType && (
            <span className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
              🔒 {product.closureType}
            </span>
          )}
          {product.price && product.currency && (
            <span className="text-sm bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full font-semibold">
              {product.currency} {product.price}
            </span>
          )}
        </div>

        {/* Adaptive features */}
        <div className="mb-3">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">Adaptive Features</p>
          <div className="flex flex-wrap gap-1.5">
            {product.adaptiveFeatures.slice(0, 3).map((f) => (
              <span key={f} className="text-xs bg-indigo-50 text-indigo-700 px-2.5 py-1 rounded-full">
                ✓ {f}
              </span>
            ))}
            {product.adaptiveFeatures.length > 3 && (
              <span className="text-xs text-gray-400 px-1 py-1">
                +{product.adaptiveFeatures.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Best for */}
        <div className="flex-1 mb-5">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1.5">Best For</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.bestFor.slice(0, 3).join(' · ')}
            {product.bestFor.length > 3 ? ` · +${product.bestFor.length - 3} more` : ''}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-auto space-y-3">
          <span className={`inline-flex items-center text-sm font-semibold px-3 py-1.5 rounded-full ${availBadge.style}`}>
            {availBadge.label}
          </span>
          <a
            href={product.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl py-3 transition-colors w-full"
          >
            View on Website →
          </a>
        </div>
      </div>
    </div>
  )
}
