import type { Metadata } from 'next'
import Script from 'next/script'
import FlyRankBadge from '@/components/FlyRankBadge'
import './globals.css'

export const metadata: Metadata = {
  title: "Abdulmu'meen Adeyeri — Frontend Engineer",
  description: 'I build launch-ready websites for founders who ship fast. Pixel-perfect. Deployed in under a week.',
  openGraph: {
    title: "Abdulmu'meen Adeyeri — Frontend Engineer",
    description: 'I build launch-ready websites for founders who ship fast.',
    url: 'https://dark-portfolio-xi.vercel.app',
    siteName: "Abdulmu'meen Adeyeri",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Abdulmu'meen Adeyeri — Frontend Engineer",
    description: 'I build launch-ready websites for founders who ship fast.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="f5eff9d1-163b-48f2-bd36-6e2a987ff4c9"
          strategy="afterInteractive"
          defer
        />
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer style={{ padding: '24px 48px', borderTop: '1px solid #2A2A2A', marginTop: '80px', textAlign: 'center' }}>
          <FlyRankBadge />
        </footer>
      </body>
    </html>
  )
}