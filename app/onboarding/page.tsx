'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUser, savePreferences } from '@/lib/user'
import {
  DisabilityType,
  StyleCategory,
  DISABILITY_LABELS,
  DISABILITY_ICONS,
  STYLE_LABELS,
  STYLE_ICONS,
} from '@/types'

const DISABILITIES: DisabilityType[] = [
  'wheelchair', 'limb-difference', 'arthritis', 'sensory',
  'paralysis', 'burns', 'visual', 'kids',
]

const STYLES: StyleCategory[] = [
  'casual', 'sportswear', 'formal', 'old-money', 'streetwear', 'minimalist',
]

const REGIONS = ['US', 'Canada', 'UK', 'Australia', 'EU', 'Global']

export default function OnboardingPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [userName, setUserName] = useState('')
  const [step, setStep] = useState(1)

  const [location, setLocation] = useState('')
  const [disabilities, setDisabilities] = useState<DisabilityType[]>([])
  const [styles, setStyles] = useState<StyleCategory[]>([])

  useEffect(() => {
    const user = getUser()
    if (!user) {
      router.replace('/')
      return
    }
    setUserName(user.name.split(' ')[0])
    setReady(true)
    if (user.preferences) {
      setLocation(user.preferences.location)
      setDisabilities(user.preferences.disabilities)
      setStyles(user.preferences.styles)
    }
  }, [router])

  function toggleDisability(d: DisabilityType) {
    setDisabilities((prev) =>
      prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d],
    )
  }

  function toggleStyle(s: StyleCategory) {
    setStyles((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s],
    )
  }

  function handleComplete() {
    savePreferences({ location, disabilities, styles })
    router.push('/browse')
  }

  if (!ready) return null

  const stepTitles = ['Your location', 'Your accessibility needs', 'Your style']

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      {/* Logo */}
      <a href="/" className="text-xl font-bold text-indigo-600 mb-10">
        WearAble
      </a>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 w-full max-w-lg p-8">
        {/* Progress */}
        <div className="flex items-center gap-2 mb-8">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                s <= step ? 'bg-indigo-600' : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
        <p className="text-xs font-semibold text-indigo-600 uppercase tracking-widest mb-1">
          Step {step} of 3
        </p>

        {/* Step 1 — Location */}
        {step === 1 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {userName ? `Hi ${userName}! ` : ''}Where are you located?
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              We'll show brands that ship to your region.
            </p>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Type your country or region..."
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
            />
            <div className="flex flex-wrap gap-2">
              {REGIONS.map((r) => {
                const active = location.toLowerCase() === r.toLowerCase()
                return (
                  <button
                    key={r}
                    onClick={() => setLocation(active ? '' : r)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      active
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
                    }`}
                  >
                    {r}
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {/* Step 2 — Disability */}
        {step === 2 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              What are your accessibility needs?
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              Select all that apply. You can change this any time.
            </p>
            <div className="flex flex-wrap gap-2">
              {DISABILITIES.map((d) => {
                const active = disabilities.includes(d)
                return (
                  <button
                    key={d}
                    onClick={() => toggleDisability(d)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      active
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'border-gray-300 text-gray-600 hover:border-indigo-400 hover:text-indigo-600'
                    }`}
                  >
                    <span>{DISABILITY_ICONS[d]}</span>
                    <span>{DISABILITY_LABELS[d]}</span>
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Not sure? You can skip this step and filter later.
            </p>
          </div>
        )}

        {/* Step 3 — Style */}
        {step === 3 && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              What's your style?
            </h1>
            <p className="text-sm text-gray-500 mb-6">
              We'll surface matching brands first — this doesn't hide others.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {STYLES.map((s) => {
                const active = styles.includes(s)
                return (
                  <button
                    key={s}
                    onClick={() => toggleStyle(s)}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border transition-colors ${
                      active
                        ? 'bg-indigo-600 border-indigo-600 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600'
                    }`}
                  >
                    <span className="text-lg">{STYLE_ICONS[s]}</span>
                    <span>{STYLE_LABELS[s]}</span>
                  </button>
                )
              })}
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Not sure? Skip for now — you can filter by style on the browse page.
            </p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100">
          {step > 1 ? (
            <button
              onClick={() => setStep((s) => s - 1)}
              className="text-sm text-gray-500 hover:text-gray-700 font-medium"
            >
              ← Back
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleComplete}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors"
            >
              Find my brands →
            </button>
          )}
        </div>

        {/* Skip */}
        <p className="text-center mt-4">
          <button
            onClick={handleComplete}
            className="text-xs text-gray-400 hover:text-gray-600 underline"
          >
            Skip setup and browse all brands
          </button>
        </p>
      </div>
    </div>
  )
}
