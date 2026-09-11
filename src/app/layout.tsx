import type { Metadata } from "next";
import "./globals.css";

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
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}