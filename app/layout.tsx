import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AdaptFit — Adaptive Fashion Finder',
  description: 'Find adaptive clothing brands for your specific needs. Curated resources for people with physical disabilities.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 antialiased">{children}</body>
    </html>
  )
}
