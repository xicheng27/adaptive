'use client'

import { useState, useMemo } from 'react'
import type { ReactNode } from 'react'
import { singaporeProducts } from '@/lib/singaporeData'
import type { AdaptiveProduct } from '@/types'
import Header from '@/app/components/Header'
import ProductCard from '@/app/components/ProductCard'

// ─── Filter constants ──────────────────────────────────────────────────────

const BRANDS = [
  { id: 'will-and-well',        label: 'Will & Well',      flag: '🇸🇬' },
  { id: 'the-able-label',       label: 'The Able Label',   flag: '🇬🇧' },
  { id: 'june-adaptive',        label: 'June Adaptive',    flag: '🇨🇦' },
  { id: 'jam-the-label',        label: 'JAM the Label',    flag: '🇦🇺' },
  { id: 'lotus-eldercare-leaf', label: 'Lotus LEAF',       flag: '🇸🇬' },
]

const GENDERS = ['Women', 'Men', 'Unisex']

const CLOTHING_TYPES = [
  { id: 'tops',        label: 'Tops & Shirts' },
  { id: 'bottoms',     label: 'Bottoms & Pants' },
  { id: 'dresses',     label: 'Dresses' },
  { id: 'socks',       label: 'Socks & Footwear' },
  { id: 'nightwear',   label: 'Nightwear' },
  { id: 'underwear',   label: 'Underwear' },
  { id: 'services',    label: 'Services & Initiatives' },
]

const ADAPTIVE_NEEDS = [
  { id: 'wheelchair',        label: '♿ Wheelchair Users' },
  { id: 'elderly',           label: '👴 Elderly / Seniors' },
  { id: 'assisted-dressing', label: '🤝 Assisted Dressing' },
  { id: 'sensory',           label: '🧠 Sensory Friendly' },
  { id: 'arthritis',         label: '🤲 Arthritis' },
  { id: 'limited-mobility',  label: '🦽 Limited Mobility' },
  { id: 'parkinsons',        label: "🫷 Parkinson's" },
  { id: 'fall-prevention',   label: '🛡️ Fall Prevention' },
  { id: 'seated',            label: '🪑 Seated / Wheelchair Fit' },
]

const AVAILABILITY_OPTS = [
  { id: 'local',   label: '🇸🇬 Singapore Local' },
  { id: 'ships',   label: '✈️ Ships to Singapore' },
  { id: 'sgd',     label: '💵 SGD Pricing' },
  { id: 'contact', label: '📧 Contact Required' },
]

const ENTRY_TYPES = [
  { id: 'product',    label: '🛍️ Exact Products' },
  { id: 'category',   label: '📂 Category Listings' },
  { id: 'service',    label: '✂️ Services' },
  { id: 'initiative', label: '🌱 Initiatives' },
]

// ─── Filter helpers ────────────────────────────────────────────────────────

function matchesGender(p: AdaptiveProduct, g: string): boolean {
  const pg = p.gender.toLowerCase()
  if (g === 'Women') return pg.includes('women') || pg === 'femme' || pg === 'unisex'
  if (g === 'Men')   return pg.includes('men')   || pg === 'masc'  || pg === 'unisex'
  if (g === 'Unisex') return pg === 'unisex' || pg === 'femme' || pg === 'masc'
  return false
}

const TYPE_KEYWORDS: Record<string, string[]> = {
  tops:      ['top', 'shirt', 'polo', 'blouse', 'jumper', 'knitwear', 't-shirt', 'linen shirt'],
  bottoms:   ['pant', 'jean', 'trouser', 'short', 'skirt', 'bottom', 'cargo'],
  dresses:   ['dress'],
  socks:     ['sock', 'slipper', 'footwear'],
  nightwear: ['nightwear', 'lounge', 'sleepwear'],
  underwear: ['underwear', 'bralette', 'intimate'],
  services:  ['service', 'tailoring', 'alteration', 'initiative', 'basics', 'collection', 'care clothing'],
}

function matchesType(p: AdaptiveProduct, typeId: string): boolean {
  const text = (p.productType + ' ' + p.category + ' ' + p.entryType).toLowerCase()
  const kws = TYPE_KEYWORDS[typeId] ?? [typeId]
  return kws.some((kw) => text.includes(kw))
}

const NEED_KEYWORDS: Record<string, string[]> = {
  wheelchair:        ['wheelchair'],
  elderly:           ['elderly', 'senior', 'elder'],
  'assisted-dressing': ['assisted dressing', 'carer', 'caregiver'],
  sensory:           ['sensory', 'neurodivergent'],
  arthritis:         ['arthritis'],
  'limited-mobility':['limited mobility', 'reduced mobility', 'limited arm', 'limited hand'],
  parkinsons:        ['parkinson'],
  'fall-prevention': ['fall'],
  seated:            ['seated', 'sitting', 'wheelchair fit'],
}

function matchesNeed(p: AdaptiveProduct, needId: string): boolean {
  const text = [...p.bestFor, ...p.adaptiveFeatures].join(' ').toLowerCase()
  return (NEED_KEYWORDS[needId] ?? [needId]).some((kw) => text.includes(kw))
}

function matchesAvailability(p: AdaptiveProduct, availId: string): boolean {
  const a = p.singaporeAvailability.toLowerCase()
  if (availId === 'local')   return a.includes('local') && !a.includes('initiative')
  if (availId === 'ships')   return a.includes('ships to')
  if (availId === 'sgd')     return a.includes('sgd')
  if (availId === 'contact') return a.includes('contact')
  return false
}

// ─── Page ──────────────────────────────────────────────────────────────────

export default function SingaporePage() {
  const [selBrands,       setSelBrands]       = useState<string[]>([])
  const [selGenders,      setSelGenders]       = useState<string[]>([])
  const [selTypes,        setSelTypes]         = useState<string[]>([])
  const [selNeeds,        setSelNeeds]         = useState<string[]>([])
  const [selAvailability, setSelAvailability]  = useState<string[]>([])
  const [selEntryTypes,   setSelEntryTypes]    = useState<string[]>([])

  function toggle<T>(arr: T[], val: T, set: (v: T[]) => void) {
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val])
  }

  function clearAll() {
    setSelBrands([])
    setSelGenders([])
    setSelTypes([])
    setSelNeeds([])
    setSelAvailability([])
    setSelEntryTypes([])
  }

  const filtered = useMemo(() => {
    return singaporeProducts.filter((p) => {
      if (selBrands.length       && !selBrands.includes(p.brandId))                              return false
      if (selGenders.length      && !selGenders.some((g) => matchesGender(p, g)))                return false
      if (selTypes.length        && !selTypes.some((t) => matchesType(p, t)))                    return false
      if (selNeeds.length        && !selNeeds.some((n) => matchesNeed(p, n)))                    return false
      if (selAvailability.length && !selAvailability.some((a) => matchesAvailability(p, a)))     return false
      if (selEntryTypes.length   && !selEntryTypes.includes(p.entryType))                        return false
      return true
    })
  }, [selBrands, selGenders, selTypes, selNeeds, selAvailability, selEntryTypes])

  const hasActiveFilters =
    selBrands.length > 0 || selGenders.length > 0 || selTypes.length > 0 ||
    selNeeds.length > 0  || selAvailability.length > 0 || selEntryTypes.length > 0

  return (
    <>
      <Header />

      {/* Hero */}
      <div className="bg-gradient-to-br from-teal-600 via-emerald-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">🇸🇬</span>
            <span className="bg-white/15 text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/30 uppercase tracking-wide">
              Singapore Edition
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
            Adaptive Fashion in Singapore
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl">
            Local brands, international labels that ship here, and curated clothing for people
            with disabilities and mobility needs across Singapore.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { icon: '🛍️', label: `${singaporeProducts.length} listings` },
              { icon: '🏠', label: '2 local SG brands' },
              { icon: '✈️', label: 'Ships to SG from overseas' },
              { icon: '♿', label: 'Wheelchair & mobility friendly' },
              { icon: '👴', label: 'Elderly-friendly options' },
            ].map((s) => (
              <span
                key={s.label}
                className="inline-flex items-center gap-1.5 bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/20"
              >
                <span>{s.icon}</span>
                {s.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Info note */}
      <div className="bg-amber-50 border-b border-amber-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <p className="text-sm text-amber-800 leading-relaxed">
            <span className="font-bold">ℹ️ About these listings:</span> Some cards are exact
            products with verified prices. Others are brand or category listings where
            individual product details are still being verified. Each card shows a badge
            — <strong>Product</strong>, <strong>Category Listing</strong>,{' '}
            <strong>Service</strong>, or <strong>Initiative</strong> — so you know what
            you are viewing.
          </p>
        </div>
      </div>

      {/* Main */}
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-6">

            {/* Filter sidebar */}
            <aside className="lg:w-72 shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-base font-bold text-gray-900">🔍 Filter</h2>
                  {hasActiveFilters && (
                    <button
                      onClick={clearAll}
                      className="text-sm text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
                    >
                      Clear all
                    </button>
                  )}
                </div>

                <FilterSection title="Brand">
                  {BRANDS.map((b) => (
                    <Chip
                      key={b.id}
                      label={`${b.flag} ${b.label}`}
                      active={selBrands.includes(b.id)}
                      onClick={() => toggle(selBrands, b.id, setSelBrands)}
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Singapore Availability">
                  {AVAILABILITY_OPTS.map((a) => (
                    <Chip
                      key={a.id}
                      label={a.label}
                      active={selAvailability.includes(a.id)}
                      onClick={() => toggle(selAvailability, a.id, setSelAvailability)}
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Gender">
                  {GENDERS.map((g) => (
                    <Chip
                      key={g}
                      label={g}
                      active={selGenders.includes(g)}
                      onClick={() => toggle(selGenders, g, setSelGenders)}
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Clothing Type">
                  {CLOTHING_TYPES.map((t) => (
                    <Chip
                      key={t.id}
                      label={t.label}
                      active={selTypes.includes(t.id)}
                      onClick={() => toggle(selTypes, t.id, setSelTypes)}
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Adaptive Need">
                  {ADAPTIVE_NEEDS.map((n) => (
                    <Chip
                      key={n.id}
                      label={n.label}
                      active={selNeeds.includes(n.id)}
                      onClick={() => toggle(selNeeds, n.id, setSelNeeds)}
                    />
                  ))}
                </FilterSection>

                <FilterSection title="Listing Type" last>
                  {ENTRY_TYPES.map((e) => (
                    <Chip
                      key={e.id}
                      label={e.label}
                      active={selEntryTypes.includes(e.id)}
                      onClick={() => toggle(selEntryTypes, e.id, setSelEntryTypes)}
                    />
                  ))}
                </FilterSection>

                <div className="mt-4 pt-4 border-t border-gray-100 text-center">
                  <p className="text-sm text-gray-500">
                    Showing{' '}
                    <span className="font-bold text-gray-900">{filtered.length}</span>
                    {' '}of {singaporeProducts.length} listings
                  </p>
                </div>
              </div>
            </aside>

            {/* Product grid */}
            <section className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold text-gray-900">
                  {hasActiveFilters ? 'Filtered Results' : 'All Listings'}
                  <span className="ml-2 text-sm font-normal text-gray-400">
                    ({filtered.length})
                  </span>
                </h2>
              </div>

              {filtered.length === 0 ? (
                <div className="bg-white rounded-2xl border border-gray-200 p-14 text-center">
                  <p className="text-3xl mb-3">🔍</p>
                  <p className="text-lg text-gray-600 font-medium mb-1">No listings match your filters.</p>
                  <p className="text-sm text-gray-400 mb-5">Try removing some filters to see more results.</p>
                  <button
                    onClick={clearAll}
                    className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm underline"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                  {filtered.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Inline sub-components ──────────────────────────────────────────────────

function FilterSection({
  title,
  children,
  last = false,
}: {
  title: string
  children: ReactNode
  last?: boolean
}) {
  return (
    <div className={last ? '' : 'mb-5 pb-5 border-b border-gray-100'}>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2.5">{title}</p>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all ${
        active
          ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
          : 'bg-white text-gray-600 border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
      }`}
    >
      {label}
    </button>
  )
}
