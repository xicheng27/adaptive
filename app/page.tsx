'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUser, createUser, signIn } from '@/lib/user'

export default function LandingPage() {
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [modal, setModal] = useState<'signup' | 'login' | null>(null)

  // sign up state
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loginEmail, setLoginEmail] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const user = getUser()
    if (user?.onboardingComplete) {
      router.replace('/browse')
    } else if (user) {
      router.replace('/onboarding')
    } else {
      setReady(true)
    }
  }, [router])

  function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!name.trim() || !email.trim()) {
      setError('Please fill in all fields.')
      return
    }
    setSubmitting(true)
    createUser(email, name)
    router.push('/onboarding')
  }

  function handleLogIn(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const user = signIn(loginEmail)
    if (!user) {
      setError('No account found for that email. Please sign up.')
      return
    }
    router.push(user.onboardingComplete ? '/browse' : '/onboarding')
  }

  function openModal(type: 'signup' | 'login') {
    setError('')
    setName('')
    setEmail('')
    setLoginEmail('')
    setModal(type)
  }

  if (!ready) return null

  return (
    <div className="min-h-screen bg-white">
      {/* Nav */}
      <nav className="border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        <span className="text-xl font-bold text-indigo-600">WearAble</span>
        <div className="flex items-center gap-4">
          <a href="/browse" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors">
            Browse Brands
          </a>
          <button
            onClick={() => openModal('login')}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
          >
            Sign In
          </button>
          <button
            onClick={() => openModal('signup')}
            className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <span>✨</span>
          <span>18+ curated adaptive fashion brands</span>
        </div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Adaptive Fashion,{' '}
          <span className="text-indigo-600">Made For You</span>
        </h1>
        <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Discover clothing brands designed around your disability, style, and location — with
          AI-powered recommendations and real user reviews.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => openModal('signup')}
            className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3.5 rounded-xl text-base transition-colors shadow-lg shadow-indigo-200"
          >
            Create Free Account →
          </button>
          <a
            href="/browse"
            className="inline-flex items-center justify-center gap-2 border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 font-semibold px-8 py-3.5 rounded-xl text-base transition-colors"
          >
            Browse All Brands
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          {[
            { value: '18+', label: 'Curated Brands' },
            { value: '8', label: 'Disability Types' },
            { value: 'AI', label: 'Powered Advice' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-indigo-600">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Tell us about yourself',
                desc: 'Share your location, accessibility needs, and style preferences in a quick 3-step setup.',
                icon: '👤',
              },
              {
                step: '02',
                title: 'Get personalised picks',
                desc: 'See brands sorted by what matters most to you. Use our AI advisor for custom recommendations.',
                icon: '✨',
              },
              {
                step: '03',
                title: 'Discover & shop',
                desc: "Read real reviews, explore brand profiles, and connect directly with brands that ship to you.",
                icon: '🛍️',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-7 border border-gray-200">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Everything you need in one place
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              icon: '🔍',
              title: 'Smart Filtering',
              desc: 'Filter by disability type, style, and shipping region simultaneously.',
            },
            {
              icon: '🤖',
              title: 'AI Recommendations',
              desc: 'Describe your needs in plain English — get a ranked list of brands with explanations.',
            },
            {
              icon: '⭐',
              title: 'Real Reviews',
              desc: 'Read and submit genuine reviews from people with similar needs.',
            },
            {
              icon: '🌍',
              title: 'Shipping Maps',
              desc: 'See exactly where each brand ships — visually mapped by region.',
            },
          ].map((f) => (
            <div key={f.title} className="flex gap-4 p-6 bg-white rounded-xl border border-gray-200">
              <span className="text-3xl shrink-0">{f.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to find your adaptive wardrobe?
        </h2>
        <p className="text-indigo-200 text-lg mb-8">
          Free forever. No credit card required.
        </p>
        <button
          onClick={() => openModal('signup')}
          className="inline-flex items-center gap-2 bg-white text-indigo-600 font-semibold px-8 py-3.5 rounded-xl text-base hover:bg-indigo-50 transition-colors"
        >
          Sign Up Free →
        </button>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setModal(null)} />
          <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-sm">
            <button
              onClick={() => setModal(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {modal === 'signup' ? (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Create your account</h2>
                <p className="text-sm text-gray-500 mb-6">Start finding adaptive fashion that fits your life.</p>
                <form onSubmit={handleSignUp} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Continue →
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-4">
                  Already have an account?{' '}
                  <button onClick={() => openModal('login')} className="text-indigo-600 underline">
                    Sign in
                  </button>
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back</h2>
                <p className="text-sm text-gray-500 mb-6">Sign in with your email to continue.</p>
                <form onSubmit={handleLogIn} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                    <input
                      type="email"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  {error && <p className="text-sm text-red-500">{error}</p>}
                  <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    Sign In →
                  </button>
                </form>
                <p className="text-center text-xs text-gray-400 mt-4">
                  {"Don't have an account? "}
                  <button onClick={() => openModal('signup')} className="text-indigo-600 underline">
                    Sign up free
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
