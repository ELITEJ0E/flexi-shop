import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Hammer, Wrench, Bolt, ChevronRight, ShoppingCart, Quote, MapPin } from "lucide-react"
import SiteHeader from "@/components/site-header"
import ProductCard from "@/components/product-card"
import NewsletterForm from "@/components/newsletter-form"

export default function Page() {
  const products = [
    {
      id: "p1",
      name: "Heavy-Duty Hex Bolts",
      desc: "Zinc-plated, corrosion-resistant, ideal for structural builds.",
      price: 7.99,
      image: "/products/hex-bolts.jpg",
    },
    {
      id: "p2",
      name: "Stainless Steel Screws Set",
      desc: "Assorted sizes with Phillips heads. 500 pcs.",
      price: 19.99,
      image: "/products/stainless-screws.jpg",
    },
    {
      id: "p3",
      name: "Masonry Anchors",
      desc: "High-hold anchors for brick and concrete installations.",
      price: 12.49,
      image: "/products/masonry-anchors.jpg",
    },
    {
      id: "p4",
      name: "Adjustable Wrench Pro",
      desc: "Hardened steel with comfort grip and precise scale.",
      price: 24.0,
      image: "/products/adjustable-wrench.jpg",
    },
  ]

  const testimonials = [
    {
      name: "Asha K.",
      role: "Contractor",
      quote: "Flexi Fastener never misses. Consistent quality and great advice from the team. My go-to store.",
    },
    {
      name: "Martin G.",
      role: "DIY Enthusiast",
      quote: "Found every fastener I needed in one visit. Prices are fair and the selection is top-notch.",
    },
    {
      name: "Priya S.",
      role: "Facilities Manager",
      quote: "Bulk orders arrive quickly, and everything is accurately packed. Excellent service!",
    },
  ]

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b" aria-labelledby="hero-heading">
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-yellow-300/30 via-transparent to-transparent" />
          <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">Built to hold. Made to last.</Badge>
                <h1 id="hero-heading" className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Flexi Fastener — Strength you can trust.
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Your local hardware partner for premium fasteners, tools, and accessories. From hex bolts to masonry
                  anchors, we keep your builds tight and secure.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="#products"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-yellow-400 px-5 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    aria-label="Explore products"
                  >
                    Explore Products
                    <ChevronRight className="ml-1.5 size-4" />
                  </Link>
                  <Link
                    href="#offers"
                    className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-5 text-sm font-semibold shadow-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    See Offers
                  </Link>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="size-4 text-yellow-400" />
                  <span>Trusted by contractors and DIYers alike</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-yellow-200/40 to-transparent blur-2xl" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20Project%20%2826%29-Photoroom-bpdK1naDtOvVacnrDyFCkeWSvOyZLc.png"
                  alt="Flexi Fastener logo"
                  className="mx-auto w-72 max-w-full drop-shadow md:w-80"
                />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-lg border bg-card p-3">
                    <Hammer className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Pro Tools</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <Wrench className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Precision</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <Bolt className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Durability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex items-end justify-between">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Featured Products</h2>
                <p className="mt-2 text-muted-foreground">Hand-picked bestsellers from the Flexi Fastener shelves.</p>
              </div>
              <Link
                href="#newsletter"
                className="hidden rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground md:inline-flex"
              >
                Get restock alerts
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} id={p.id} name={p.name} desc={p.desc} price={p.price} image={p.image} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="border-y bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">What customers say</h2>
              <p className="mt-2 text-muted-foreground">Real feedback from the people who build.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative">
                  <CardHeader>
                    <Quote className="absolute right-4 top-4 size-5 text-yellow-500" />
                    <CardTitle className="text-base font-semibold">
                      {t.name} • <span className="text-muted-foreground">{t.role}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">"{t.quote}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Promotional / Offers */}
        <section id="offers" className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-yellow-300 to-yellow-400 p-6 text-black md:p-10">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-yellow-200/60 blur-2xl" />
              <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
                <div>
                  <h3 className="text-2xl font-extrabold sm:text-3xl">Summer Sale: Up to 15% off bulk fasteners</h3>
                  <p className="mt-2 text-sm/relaxed md:text-base">
                    Save more when you buy more. Mix-and-match bolts, screws, washers, and anchors. Limited time only.
                  </p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center rounded-md bg-black px-3 py-1 text-sm font-semibold text-yellow-300">
                      Code: FLEXI15
                    </span>
                    <span className="text-sm font-medium">Ends soon — don&apos;t miss out.</span>
                  </div>
                </div>
                <div className="justify-self-end">
                  <Link
                    href="#products"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-black px-5 text-sm font-semibold text-yellow-300 shadow hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
                  >
                    Shop Now
                    <ShoppingCart className="ml-1.5 size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Newsletter */}
        <section id="newsletter" className="border-t py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h3 className="text-3xl font-bold sm:text-4xl">Get the best deals first</h3>
              <p className="mt-2 text-muted-foreground">
                Sign up for updates on new arrivals, exclusive promotions, and restock alerts.
              </p>
            </div>
            <div className="mx-auto mt-6 max-w-lg">
              <NewsletterForm />
              <p className="mt-2 text-center text-xs text-muted-foreground">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="border-t bg-muted/20">
        <div className="container mx-auto grid gap-10 px-4 py-10 md:grid-cols-4">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20Project%20%2826%29-Photoroom-bpdK1naDtOvVacnrDyFCkeWSvOyZLc.png"
              alt="Flexi Fastener logo"
              className="mb-3 w-36"
            />
            <p className="text-sm text-muted-foreground">
              Premium fasteners and tools for every build. Local service, expert advice.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#products" className="hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#offers" className="hover:text-foreground">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#newsletter" className="hover:text-foreground">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="size-4 text-yellow-500" />
                Seksyen BB8, G5, Jalan Kasturi 1a, Bandar Bukit Beruntung, 48300 Rawang, Selangor
              </li>
              <li className="flex items-center gap-2">
                <svg className="size-4 text-yellow-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M2 5c0-.552.448-1 1-1h4l2 4-3 2c1.5 3 4 5.5 7 7l2-3 4 2v4c0 .552-.448 1-1 1H18C9.716 21 3 14.284 3 6V5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                011-5353 0345
              </li>
              <li className="flex items-center gap-2">
                <svg className="size-4 text-yellow-500" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M4 4h16a1 1 0 0 1 1 1v2l-9 5L3 7V5a1 1 0 0 1 1-1Zm0 6.764 8.447 4.692a1 1 0 0 0 .966 0L22 10.764V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-8.236Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                </svg>
                flexidiycentre@gmail.com
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <Link
                aria-label="Facebook"
                href="https://www.facebook.com/flexidiycentre/"
                className="rounded-full border p-2 hover:bg-accent"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.2 10.44 22v-7.01H7.9v-2.92h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.57v1.89h2.78l-.44 2.92h-2.34V22C18.34 21.2 22 17.08 22 12.07Z" />
                </svg>
              </Link>
              <Link aria-label="Instagram" href="#" className="rounded-full border p-2 hover:bg-accent">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 6.5A5.5 5.5 0 1 0 17.5 14 5.5 5.5 0 0 0 12 8.5Zm0 9A3.5 3.5 0 1 1 15.5 14 3.5 3.5 0 0 1 12 17.5Zm6.5-10.75a1.25 1.25 0 1 0-1.25-1.25 1.25 1.25 0 0 0 1.25 1.25Z" />
                </svg>
              </Link>
              <Link aria-label="Twitter" href="#" className="rounded-full border p-2 hover:bg-accent">
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 5.76c-.77.34-1.6.57-2.47.68a4.31 4.31 0 0 0 1.89-2.37 8.6 8.6 0 0 1-2.73 1.04 4.29 4.29 0 0 0-7.3 3.91 12.18 12.18 0 0 1-8.85-4.49 4.29 4.29 0 0 0 1.33 5.72c-.66-.02-1.29-.2-1.84-.5v.05a4.29 4.29 0 0 0 3.44 4.21c-.32.09-.66.14-1 .14-.24 0-.48-.02-.71-.07a4.29 4.29 0 0 0 4 2.98 8.61 8.61 0 0 1-5.33 1.84c-.35 0-.7-.02-1.04-.06A12.14 12.14 0 0 0 8.1 21c7.87 0 12.18-6.52 12.18-12.17 0-.19 0-.37-.01-.56A8.68 8.68 0 0 0 22 5.76Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border bg-card p-4">
              <h5 className="mb-2 text-sm font-semibold">Store Hours</h5>
              <p className="text-sm text-muted-foreground">Mon–Fri: 8:00–18:00 · Sat: 9:00–16:00 · Sun: Closed</p>
            </div>
            <div className="rounded-lg border bg-card p-2">
              <iframe
                title="Flexi Fastener Location Map"
                className="h-56 w-full rounded-md"
                src="https://www.openstreetmap.org/export/embed.html?bbox=101.4990%2C3.3800%2C101.5050%2C3.3830&layer=mapnik&marker=3.3814%2C101.5020"
              />
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row">
            <p>&copy; {new Date().getFullYear()} Flexi Fastener. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="#newsletter" className="hover:text-foreground">
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
