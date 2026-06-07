'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { getUser, signOut } from '@/lib/user'
import type { User } from '@/types'

interface HeaderProps {
  onOpenChat?: () => void
}

export default function Header({ onOpenChat }: HeaderProps) {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()

  useEffect(() => {
    setUser(getUser())
  }, [])

  function handleSignOut() {
    signOut()
    router.push('/')
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
        <a href="/" className="text-2xl font-bold text-indigo-600 tracking-tight shrink-0">
          WearAble
        </a>

        <div className="flex items-center gap-3">
          {onOpenChat && (
            <button
              onClick={onOpenChat}
              className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-indigo-600 border border-gray-300 hover:border-indigo-400 px-3 py-1.5 rounded-lg transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-4 4-4-4z"
                />
              </svg>
              AI Advisor
            </button>
          )}

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:inline">
                Hi, <span className="font-medium">{user.name.split(' ')[0]}</span>
              </span>
              <button
                onClick={handleSignOut}
                className="text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            <a
              href="/"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Sign in
            </a>
          )}
        </div>
      </div>
    </header>
  )
}
