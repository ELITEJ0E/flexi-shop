"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  const nav = [
    { href: "#products", label: "Products" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#offers", label: "Offers" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20Project%20%2826%29-Photoroom-bpdK1naDtOvVacnrDyFCkeWSvOyZLc.png"
              alt="Flexi Fastener logo"
              className="h-8 w-auto"
            />
            <span className="sr-only">Flexi Fastener</span>
          </Link>
          <nav className="ml-6 hidden items-center gap-6 text-sm font-medium md:flex">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <Link
            href="#products"
            className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-400 px-4 text-sm font-semibold text-black shadow hover:bg-yellow-300"
          >
            Explore Products
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3 text-sm">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="#products"
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-yellow-400 px-4 text-sm font-semibold text-black shadow hover:bg-yellow-300"
              onClick={() => setOpen(false)}
            >
              Explore Products
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
