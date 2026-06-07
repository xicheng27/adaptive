'use client'

import { useState } from 'react'
import BrandAvatar from './BrandAvatar'

interface BrandLogoProps {
  logo: string
  name: string
  size?: 'sm' | 'md' | 'lg'
  rounded?: 'xl' | '2xl'
}

const SIZE: Record<string, string> = {
  sm: 'w-10 h-10',
  md: 'w-14 h-14',
  lg: 'w-20 h-20',
}

const ROUNDED: Record<string, string> = {
  xl:  'rounded-xl',
  '2xl': 'rounded-2xl',
}

export default function BrandLogo({ logo, name, size = 'md', rounded = '2xl' }: BrandLogoProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <BrandAvatar name={name} size={size} rounded={rounded} />
  }

  return (
    <div
      className={`${SIZE[size]} ${ROUNDED[rounded]} bg-white border border-gray-100 shadow-sm flex items-center justify-center overflow-hidden p-1.5 shrink-0`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={`${name} logo`}
        width={96}
        height={96}
        className="w-full h-full object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  )
}
