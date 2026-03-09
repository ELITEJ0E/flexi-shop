import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flexi Fastener Enterprise | Hardware Supplier in Rawang, Selangor',
  description:
    'Flexi Fastener Enterprise - Your trusted hardware supplier in Rawang, Selangor. Quality bolts, nuts, screws, washers, anchors, and tools for contractors, retailers, and DIY builders.',
  keywords: [
    'fasteners',
    'bolts',
    'nuts',
    'screws',
    'anchors',
    'washers',
    'hardware supplier',
    'Rawang',
    'Selangor',
    'Malaysia',
    'construction hardware',
    'Flexi Fastener',
  ],
  authors: [{ name: 'Flexi Fastener Enterprise' }],
  openGraph: {
    title: 'Flexi Fastener Enterprise | Hardware Supplier in Rawang',
    description:
      'Quality fasteners, tools, and construction hardware. Trusted by contractors and builders across Malaysia.',
    type: 'website',
    locale: 'en_MY',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
