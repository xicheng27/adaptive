'use client'

import { useState, useRef, useEffect } from 'react'

interface AIRecommendProps {
  open: boolean
  onClose: () => void
  initialDescription?: string
  location?: string
}

function renderMarkdown(text: string) {
  // Bold: **text**
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>
    }
    return <span key={i}>{part}</span>
  })
}

const SUGGESTIONS = [
  'I use a power wheelchair and have limited hand grip. I need clothes that are easy to put on alone.',
  'I have a below-elbow limb difference and struggle with buttons and zippers.',
  'I have rheumatoid arthritis and need soft, easy-to-fasten clothing for flare-up days.',
  'My child has sensory processing disorder and can\'t tolerate tags, seams, or rough fabrics.',
]

export default function AIRecommend({ open, onClose, initialDescription = '', location = '' }: AIRecommendProps) {
  const [description, setDescription] = useState(initialDescription)
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setDescription(initialDescription)
      setResult('')
      setSubmitted(false)
      setTimeout(() => textareaRef.current?.focus(), 50)
    }
  }, [open, initialDescription])

  useEffect(() => {
    if (loading) bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [result, loading])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const text = description.trim()
    if (!text || loading) return

    setLoading(true)
    setResult('')
    setSubmitted(true)

    try {
      const res = await fetch('/api/recommend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: text, location }),
      })

      const reader = res.body?.getReader()
      const decoder = new TextDecoder()
      if (!reader) throw new Error('No response stream')

      let buffer = ''
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        buffer += decoder.decode(value, { stream: true })
        const lines = buffer.split('\n')
        buffer = lines.pop() ?? ''

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const payload = line.slice(6)
          if (payload === '[DONE]') break
          try {
            const chunk = JSON.parse(payload)
            if (typeof chunk === 'string') {
              setResult((prev) => prev + chunk)
            } else if (chunk.error) {
              setResult(`Error: ${chunk.error}`)
            }
          } catch {
            // non-JSON line
          }
        }
      }
    } catch (err) {
      setResult(`Error: ${err instanceof Error ? err.message : 'Unknown error'}`)
    } finally {
      setLoading(false)
    }
  }

  function handleReset() {
    setDescription('')
    setResult('')
    setSubmitted(false)
    setTimeout(() => textareaRef.current?.focus(), 50)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-indigo-600 text-white shrink-0">
          <div>
            <h2 className="font-semibold text-base">AI Brand Recommendations</h2>
            <p className="text-xs text-indigo-200 mt-0.5">Describe your needs — get a personalised brand list</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-indigo-700 rounded-lg transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {!submitted ? (
            <div className="px-6 py-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Describe your disability, condition, or clothing challenges
                  </label>
                  <textarea
                    ref={textareaRef}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={4}
                    placeholder="e.g. I use a manual wheelchair and have limited hand dexterity. I struggle with buttons and zippers and need clothes that look professional for work…"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!description.trim()}
                  className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Find My Brands →
                </button>
              </form>

              {/* Suggestions */}
              <div className="mt-5">
                <p className="text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">Try an example</p>
                <div className="space-y-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => setDescription(s)}
                      className="block w-full text-left text-xs bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg px-3 py-2 text-gray-600 hover:text-indigo-700 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="px-6 py-5 space-y-4">
              {/* Query recap */}
              <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 text-sm text-indigo-800">
                <span className="font-medium">Your needs: </span>{description}
              </div>

              {/* Streaming result */}
              <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap space-y-1">
                {result ? (
                  result.split('\n').map((line, i) => (
                    <p key={i}>{renderMarkdown(line)}</p>
                  ))
                ) : loading ? (
                  <div className="flex gap-1.5 items-center text-gray-400 py-2">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" />
                    <span className="ml-1">Finding the best brands for you…</span>
                  </div>
                ) : null}
                <div ref={bottomRef} />
              </div>
            </div>
          )}
        </div>

        {/* Footer — show after result loads */}
        {submitted && !loading && result && (
          <div className="shrink-0 border-t border-gray-100 px-6 py-4 flex gap-3">
            <button
              onClick={handleReset}
              className="flex-1 border border-gray-300 hover:border-indigo-400 text-gray-600 hover:text-indigo-600 text-sm font-medium py-2 rounded-lg transition-colors"
            >
              Try different needs
            </button>
            <a
              href="/browse"
              onClick={onClose}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium py-2 rounded-lg text-center transition-colors"
            >
              Browse all brands →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
