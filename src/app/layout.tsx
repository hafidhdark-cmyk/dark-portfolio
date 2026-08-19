import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulmu'meen Adeyeri — Frontend Engineer",
  description: 'I build launch-ready websites for founders who ship fast.',
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