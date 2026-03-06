"use client"

import Link from "next/link"
import { useState } from "react"
<<<<<<< HEAD
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"
=======
import { Menu, X } from "lucide-react"
>>>>>>> parent of c957da1 (Initial commit from v0)

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

<<<<<<< HEAD
  const productCategories = [
    { href: "/categories/bolts", label: "Bolts" },
    { href: "/categories/nuts", label: "Nuts" },
    { href: "/categories/screws", label: "Screws" },
    { href: "/categories/anchors", label: "Anchors" },
    { href: "/categories/washers", label: "Washers" },
    { href: "/categories/tools", label: "Tools" },
  ]

  const nav = [
    { href: "#industries", label: "Industries" },
    { href: "#wholesale", label: "Wholesale" },
=======
  const nav = [
    { href: "/categories/bolts", label: "Bolts" },
    { href: "/categories/screws", label: "Screws" },
    { href: "/categories/anchors", label: "Anchors" },
    { href: "/categories/tools", label: "Tools" },
    { href: "#testimonials", label: "Testimonials" },
>>>>>>> parent of c957da1 (Initial commit from v0)
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img
<<<<<<< HEAD
              src="/images/design-mode/Untitled%20Project%20%2826%29-Photoroom.png"
              alt="Flexi Fastener Enterprise logo"
              className="h-8 w-auto"
            />
          </Link>
          <nav className="ml-6 hidden items-center gap-5 text-sm font-medium lg:flex">
            {/* Products Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
                Products
                <ChevronDown className="size-3" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 min-w-40 rounded-md border bg-background p-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className="block rounded-md px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
=======
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20Project%20%2826%29-Photoroom-bpdK1naDtOvVacnrDyFCkeWSvOyZLc.png"
              alt="Flexi Fastener logo"
              className="h-8 w-auto"
            />
            <span className="sr-only">Flexi Fastener</span>
          </Link>
          <nav className="ml-6 hidden items-center gap-6 text-sm font-medium md:flex">
>>>>>>> parent of c957da1 (Initial commit from v0)
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

<<<<<<< HEAD
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="https://wa.me/60115353034"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-green-500 bg-green-500 px-3 text-sm font-semibold text-white shadow hover:bg-green-600"
          >
            <div className="relative size-4">
              <Image
                src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                alt="WhatsApp"
                fill
                className="object-contain"
              />
            </div>
            WhatsApp
          </Link>
          <Link
            href="https://shopee.com.my/flexidiycentre"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-orange-500 px-3 text-sm font-semibold text-white shadow hover:bg-orange-600"
          >
            <div className="relative size-4">
              <Image
                src="/images/design-mode/shopee-logo-png_seeklogo-378738.png"
                alt="Shopee"
                fill
                className="object-contain"
              />
            </div>
            Shopee
=======
        <div className="hidden md:block">
          <Link
            href="#products"
            className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-400 px-4 text-sm font-semibold text-black shadow hover:bg-yellow-300"
          >
            Explore Products
>>>>>>> parent of c957da1 (Initial commit from v0)
          </Link>
        </div>

        <button
<<<<<<< HEAD
          className="inline-flex items-center justify-center rounded-md p-2 lg:hidden"
=======
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
>>>>>>> parent of c957da1 (Initial commit from v0)
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
<<<<<<< HEAD
        <div className="border-t bg-background lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3 text-sm">
            <p className="px-3 py-2 text-xs font-semibold uppercase text-muted-foreground">Products</p>
            {productCategories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="rounded-md px-3 py-2 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setOpen(false)}
              >
                {cat.label}
              </Link>
            ))}
            <div className="my-2 border-t" />
=======
        <div className="border-t bg-background md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3 text-sm">
>>>>>>> parent of c957da1 (Initial commit from v0)
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
<<<<<<< HEAD
            <div className="my-2 border-t" />
            <div className="flex gap-2 px-3 py-2">
              <Link
                href="https://wa.me/60115353034"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-green-500 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <div className="relative size-4">
                  <Image
                    src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
                WhatsApp
              </Link>
              <Link
                href="https://shopee.com.my/flexidiycentre"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-md bg-orange-500 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                <div className="relative size-4">
                  <Image
                    src="/images/design-mode/shopee-logo-png_seeklogo-378738.png"
                    alt="Shopee"
                    fill
                    className="object-contain"
                  />
                </div>
                Shopee
              </Link>
            </div>
=======
>>>>>>> parent of c957da1 (Initial commit from v0)
          </nav>
        </div>
      )}
    </header>
  )
}
