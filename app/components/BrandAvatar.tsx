'use client'

// Deterministic colour palette — same brand always gets same colour
const COLOURS = [
  { bg: 'bg-indigo-500', text: 'text-white' },
  { bg: 'bg-violet-500', text: 'text-white' },
  { bg: 'bg-blue-500',   text: 'text-white' },
  { bg: 'bg-emerald-500', text: 'text-white' },
  { bg: 'bg-amber-500',  text: 'text-white' },
  { bg: 'bg-rose-500',   text: 'text-white' },
  { bg: 'bg-teal-500',   text: 'text-white' },
  { bg: 'bg-orange-500', text: 'text-white' },
  { bg: 'bg-pink-500',   text: 'text-white' },
  { bg: 'bg-cyan-600',   text: 'text-white' },
]

function getInitials(name: string): string {
  const words = name.replace(/[^a-zA-Z\s]/g, ' ').split(/\s+/).filter(Boolean)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

function pickColour(name: string) {
  const hash = name.split('').reduce((acc, ch) => acc + ch.charCodeAt(0), 0)
  return COLOURS[hash % COLOURS.length]
}

interface BrandAvatarProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'xl' | '2xl' | 'full'
}

const SIZE_CLASSES = {
  sm:  { outer: 'w-10 h-10', text: 'text-sm font-bold' },
  md:  { outer: 'w-14 h-14', text: 'text-lg font-bold' },
  lg:  { outer: 'w-20 h-20', text: 'text-2xl font-bold' },
}

const ROUNDED_CLASSES = {
  xl:   'rounded-xl',
  '2xl': 'rounded-2xl',
  full: 'rounded-full',
}

export default function BrandAvatar({ name, size = 'md', rounded = '2xl' }: BrandAvatarProps) {
  const { bg, text } = pickColour(name)
  const { outer, text: textSize } = SIZE_CLASSES[size]
  const roundedClass = ROUNDED_CLASSES[rounded]

  return (
    <div
      className={`${outer} ${bg} ${roundedClass} flex items-center justify-center shrink-0 select-none shadow-sm`}
      aria-label={name}
    >
      <span className={`${text} ${textSize} tracking-tight`}>
        {getInitials(name)}
      </span>
    </div>
  )
}
