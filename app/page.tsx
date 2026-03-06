import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
<<<<<<< HEAD
import {
  Star,
  Hammer,
  Wrench,
  Bolt,
  ChevronRight,
  Quote,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  HardHat,
  Factory,
  Home,
  Truck,
  Shield,
  Award,
  Users,
  ShoppingCart, // Add this back
} from "lucide-react"
import SiteHeader from "@/components/site-header"
import ProductCard from "@/components/product-card"
import NewsletterForm from "@/components/newsletter-form"
import Image from "next/image"
=======
import { Star, Hammer, Wrench, Bolt, ChevronRight, ShoppingCart, Quote, MapPin } from "lucide-react"
import SiteHeader from "@/components/site-header"
import ProductCard from "@/components/product-card"
import NewsletterForm from "@/components/newsletter-form"
>>>>>>> parent of c957da1 (Initial commit from v0)

export default function Page() {
  const products = [
    {
<<<<<<< HEAD
      id: "b1",
      name: "Heavy-Duty Hex Bolts",
      desc: "Zinc-plated, corrosion-resistant, ideal for structural builds.",
      price: 7.99,
      image: "https://res.cloudinary.com/rsc/image/upload/b_rgb:FFFFFF,c_pad,dpr_2.625,f_auto,h_214,q_auto,w_380/c_pad,h_214,w_380/F9173249-01?pgw=1",
    },
    {
      id: "s1",
      name: "Stainless Steel Screws Set",
      desc: "Assorted sizes with Phillips heads. 500 pcs.",
      price: 19.99,
      image: "https://www.hifishgear.com/cdn/shop/files/hfg-newell-series-stainless-steel-screw-set.jpg?v=1722477806&width=800",
    },
    {
      id: "a1",
      name: "Masonry Anchors",
      desc: "High-hold anchors for brick and concrete installations.",
      price: 12.49,
      image: "https://fsi.nyc3.cdn.digitaloceanspaces.com/blog/_transforms/_blogPost/154/sleeve-anchors.webp",
    },
    {
      id: "t1",
      name: "Adjustable Wrench Pro",
      desc: "Hardened steel with comfort grip and precise scale.",
      price: 24.0,
      image: "https://my-test-11.slatic.net/p/97b6f1e5ebe66cf0327415a94637950f.jpg",
    },
  ]

  const categories = [
    { name: "Bolts", href: "/categories/bolts", icon: Bolt, count: "50+ items" },
    { name: "Nuts", href: "/categories/nuts", icon: Wrench, count: "40+ items" },
    { name: "Screws", href: "/categories/screws", icon: Hammer, count: "80+ items" },
    { name: "Anchors", href: "/categories/anchors", icon: Shield, count: "30+ items" },
    { name: "Washers", href: "/categories/washers", icon: Award, count: "25+ items" },
    { name: "Tools", href: "/categories/tools", icon: Wrench, count: "60+ items" },
  ]

  const industries = [
    {
      name: "Construction",
      desc: "Heavy-duty fasteners for structural builds and commercial projects.",
      icon: Building2,
    },
    {
      name: "Renovation",
      desc: "Quality hardware for residential and commercial renovation work.",
      icon: HardHat,
    },
    {
      name: "Manufacturing",
      desc: "Industrial-grade fasteners for production and assembly lines.",
      icon: Factory,
    },
    {
      name: "DIY & Home",
      desc: "Reliable supplies for home improvement and DIY projects.",
      icon: Home,
    },
  ]

  const whyChooseUs = [
    {
      title: "Wide Selection",
      desc: "Comprehensive range of fasteners, anchors, and hardware tools.",
      icon: ShoppingCart, // This now works because ShoppingCart is imported
    },
    {
      title: "Quality Assured",
      desc: "All products meet industry standards for strength and durability.",
      icon: Shield,
    },
    {
      title: "Expert Advice",
      desc: "Knowledgeable staff to help you find the right hardware.",
      icon: Users,
    },
    {
      title: "Bulk Orders",
      desc: "Competitive pricing for wholesale and contractor purchases.",
      icon: Truck,
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
    },
  ]

  const testimonials = [
    {
<<<<<<< HEAD
      name: "Ahmad R.",
      role: "Construction Contractor",
      company: "AR Binaan Sdn Bhd",
      quote:
        "Flexi Fastener Enterprise is my trusted supplier. Consistent quality, competitive prices, and they always have stock when I need it urgently.",
    },
    {
      name: "Lee W.K.",
      role: "Hardware Retailer",
      company: "LWK Hardware",
      quote:
        "As a retailer, I need reliable suppliers. Flexi Fastener delivers on time and their product range covers everything my customers need.",
    },
    {
      name: "Siti N.",
      role: "Renovation Contractor",
      company: "SN Renovations",
      quote:
        "Great service and knowledgeable staff. They helped me find the right anchors for a tricky concrete installation. Highly recommended!",
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
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
<<<<<<< HEAD
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">
                  Your Trusted Hardware Partner in Rawang
                </Badge>
                <h1
                  id="hero-heading"
                  className="mt-4 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                >
                  Flexi Fastener Enterprise
                </h1>
                <p className="mt-2 text-xl font-semibold text-yellow-600">Quality Fasteners. Reliable Supply.</p>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Your one-stop hardware supplier for bolts, nuts, screws, washers, anchors, and construction hardware.
                  Serving contractors, retailers, and DIY builders across Selangor and beyond.
=======
                <Badge className="bg-yellow-400 text-black hover:bg-yellow-400">Built to hold. Made to last.</Badge>
                <h1 id="hero-heading" className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  Flexi Fastener — Strength you can trust.
                </h1>
                <p className="mt-4 text-muted-foreground md:text-lg">
                  Your local hardware partner for premium fasteners, tools, and accessories. From hex bolts to masonry
                  anchors, we keep your builds tight and secure.
>>>>>>> parent of c957da1 (Initial commit from v0)
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="#products"
                    className="inline-flex h-11 items-center justify-center rounded-md bg-yellow-400 px-5 text-sm font-semibold text-black shadow hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                    aria-label="Explore products"
                  >
<<<<<<< HEAD
                    View Products
                    <ChevronRight className="ml-1.5 size-4" />
                  </Link>
                  <Link
                    href="https://shopee.com.my/flexidiycentre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-orange-500 bg-orange-500 px-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600"
                  >
                    <div className="relative size-6">
                      <Image
                        src="https://images.seeklogo.com/logo-png/37/2/shopee-logo-png_seeklogo-378738.png"
                        alt="Shopee"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Shop on Shopee
                  </Link>
                  <Link
                    href="https://wa.me/60115353034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-green-500 bg-green-500 px-5 text-sm font-semibold text-white shadow-sm hover:bg-green-600"
                  >
                    <div className="relative size-6">
                      <Image
                        src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    WhatsApp Us
                  </Link>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Star className="size-4 text-yellow-400" />
                    Trusted by 500+ contractors
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Truck className="size-4 text-yellow-400" />
                    Wholesale pricing available
                  </span>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-yellow-200/40 to-transparent blur-2xl" />
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20Project%20%2826%29-Photoroom-bpdK1naDtOvVacnrDyFCkeWSvOyZLc.png"
<<<<<<< HEAD
                  alt="Flexi Fastener Enterprise logo"
=======
                  alt="Flexi Fastener logo"
>>>>>>> parent of c957da1 (Initial commit from v0)
                  className="mx-auto w-72 max-w-full drop-shadow md:w-80"
                />
                <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-lg border bg-card p-3">
<<<<<<< HEAD
                    <Bolt className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Fasteners</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <Wrench className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Tools</p>
                  </div>
                  <div className="rounded-lg border bg-card p-3">
                    <Shield className="mx-auto mb-1 size-5 text-yellow-500" />
                    <p className="font-medium">Quality</p>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Product Categories */}
        <section id="categories" className="border-b py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Product Categories</h2>
              <p className="mt-2 text-muted-foreground">
                Browse our comprehensive range of fasteners and hardware supplies
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {categories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  className="group flex flex-col items-center rounded-xl border bg-card p-6 text-center transition-all hover:border-yellow-400 hover:shadow-lg"
                >
                  <div className="mb-3 rounded-full bg-yellow-100 p-4 transition-colors group-hover:bg-yellow-400">
                    <cat.icon className="size-6 text-yellow-600 transition-colors group-hover:text-black" />
                  </div>
                  <h3 className="font-semibold">{cat.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{cat.count}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">Featured Products</h2>
                <p className="mt-2 text-muted-foreground">
                  Top-selling fasteners and hardware from Flexi Fastener Enterprise
                </p>
              </div>
              <div className="flex gap-2">
                <Link
                  href="/categories/bolts"
                  className="rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
                >
                  View All Products
                </Link>
              </div>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} id={p.id} name={p.name} desc={p.desc} price={p.price} image={p.image} />
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Industries Served */}
        <section id="industries" className="border-y bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Industries We Serve</h2>
              <p className="mt-2 text-muted-foreground">
                Trusted hardware supplier for various industries across Malaysia
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map((ind) => (
                <Card key={ind.name} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-2 rounded-full bg-yellow-100 p-4">
                      <ind.icon className="size-8 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg">{ind.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{ind.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold sm:text-4xl">Why Choose Flexi Fastener?</h2>
              <p className="mt-2 text-muted-foreground">
                Your trusted hardware partner with years of industry experience
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex flex-col items-center text-center">
                  <div className="mb-4 rounded-full bg-yellow-400 p-4">
                    <item.icon className="size-6 text-black" />
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

=======
>>>>>>> parent of c957da1 (Initial commit from v0)
        {/* Testimonials */}
        <section id="testimonials" className="border-y bg-muted/40 py-14 md:py-20">
          <div className="container mx-auto px-4">
            <div className="mb-10 text-center">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold sm:text-4xl">What Our Customers Say</h2>
              <p className="mt-2 text-muted-foreground">
                Trusted by contractors, retailers, and builders across Malaysia
              </p>
=======
              <h2 className="text-3xl font-bold sm:text-4xl">What customers say</h2>
              <p className="mt-2 text-muted-foreground">Real feedback from the people who build.</p>
>>>>>>> parent of c957da1 (Initial commit from v0)
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Card key={i} className="relative">
                  <CardHeader>
                    <Quote className="absolute right-4 top-4 size-5 text-yellow-500" />
<<<<<<< HEAD
                    <CardTitle className="text-base font-semibold">{t.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {t.role} • {t.company}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">&ldquo;{t.quote}&rdquo;</p>
=======
                    <CardTitle className="text-base font-semibold">
                      {t.name} • <span className="text-muted-foreground">{t.role}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">"{t.quote}"</p>
>>>>>>> parent of c957da1 (Initial commit from v0)
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Wholesale / Bulk Orders */}
        <section id="wholesale" className="py-14 md:py-20">
=======
        {/* Promotional / Offers */}
        <section id="offers" className="py-14 md:py-20">
>>>>>>> parent of c957da1 (Initial commit from v0)
          <div className="container mx-auto px-4">
            <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-r from-yellow-300 to-yellow-400 p-6 text-black md:p-10">
              <div className="absolute -right-10 -top-10 size-40 rounded-full bg-yellow-200/60 blur-2xl" />
              <div className="grid items-center gap-8 md:grid-cols-[1.2fr_.8fr]">
                <div>
<<<<<<< HEAD
                  <h3 className="text-2xl font-extrabold sm:text-3xl">Wholesale & Bulk Orders</h3>
                  <p className="mt-2 text-sm/relaxed md:text-base">
                    Special pricing for contractors, retailers, and bulk buyers. Get competitive rates on large
                    quantities of fasteners, anchors, and hardware supplies.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <ChevronRight className="size-4" />
                      Contractor pricing available
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="size-4" />
                      Volume discounts on bulk orders
                    </li>
                    <li className="flex items-center gap-2">
                      <ChevronRight className="size-4" />
                      Quick quotation within 24 hours
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 justify-self-end">
                  <Link
                    href="https://wa.me/60115353034?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20bulk%20orders"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-green-600 px-5 text-sm font-semibold text-white shadow hover:bg-green-700"
                  >
                    <div className="relative size-6">
                      <Image
                        src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Request Quote via WhatsApp
                  </Link>
                  <Link
                    href="https://shopee.com.my/flexidiycentre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-orange-500 px-5 text-sm font-semibold text-white shadow hover:bg-orange-600"
                  >
                    <div className="relative size-6">
                      <Image
                        src="https://images.seeklogo.com/logo-png/37/2/shopee-logo-png_seeklogo-378738.png"
                        alt="Shopee"
                        fill
                        className="object-contain"
                      />
                    </div>
                    Shop on Shopee
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
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
<<<<<<< HEAD
              <h3 className="text-3xl font-bold sm:text-4xl">Stay Updated</h3>
              <p className="mt-2 text-muted-foreground">
                Subscribe for product updates, special offers, and hardware tips for your projects.
=======
              <h3 className="text-3xl font-bold sm:text-4xl">Get the best deals first</h3>
              <p className="mt-2 text-muted-foreground">
                Sign up for updates on new arrivals, exclusive promotions, and restock alerts.
>>>>>>> parent of c957da1 (Initial commit from v0)
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
<<<<<<< HEAD
              alt="Flexi Fastener Enterprise logo"
              className="mb-3 w-36"
            />
            <p className="text-sm text-muted-foreground">
              Flexi Fastener Enterprise - Your trusted hardware supplier in Rawang, Selangor. Quality fasteners, tools,
              and construction hardware for contractors and builders.
=======
              alt="Flexi Fastener logo"
              className="mb-3 w-36"
            />
            <p className="text-sm text-muted-foreground">
              Premium fasteners and tools for every build. Local service, expert advice.
>>>>>>> parent of c957da1 (Initial commit from v0)
            </p>
          </div>

          <div>
<<<<<<< HEAD
            <h4 className="mb-3 text-sm font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/categories/bolts" className="hover:text-foreground">
                  Bolts
                </Link>
              </li>
              <li>
                <Link href="/categories/nuts" className="hover:text-foreground">
                  Nuts
                </Link>
              </li>
              <li>
                <Link href="/categories/screws" className="hover:text-foreground">
                  Screws
                </Link>
              </li>
              <li>
                <Link href="/categories/anchors" className="hover:text-foreground">
                  Anchors
                </Link>
              </li>
              <li>
                <Link href="/categories/washers" className="hover:text-foreground">
                  Washers
                </Link>
              </li>
              <li>
                <Link href="/categories/tools" className="hover:text-foreground">
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#industries" className="hover:text-foreground">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="#wholesale" className="hover:text-foreground">
                  Wholesale Orders
=======
            <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="#products" className="hover:text-foreground">
                  Products
>>>>>>> parent of c957da1 (Initial commit from v0)
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-foreground">
                  Testimonials
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link
                  href="https://shopee.com.my/flexidiycentre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  Shop on Shopee
=======
                <Link href="#offers" className="hover:text-foreground">
                  Offers
                </Link>
              </li>
              <li>
                <Link href="#newsletter" className="hover:text-foreground">
                  Newsletter
>>>>>>> parent of c957da1 (Initial commit from v0)
                </Link>
              </li>
            </ul>
          </div>

          <div>
<<<<<<< HEAD
            <h4 className="mb-3 text-sm font-semibold">Contact Us</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-yellow-500" />
                <span>
                  Seksyen BB8, G5, Jalan Kasturi 1a,
                  <br />
                  Bandar Bukit Beruntung,
                  <br />
                  48300 Rawang, Selangor
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0 text-yellow-500" />
                <Link href="tel:+60115353034" className="hover:text-foreground">
                  011-5353 0345
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0 text-yellow-500" />
                <Link href="mailto:flexidiycentre@gmail.com" className="hover:text-foreground">
                  flexidiycentre@gmail.com
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="size-4 shrink-0 text-yellow-500" />
                <span>Mon-Sat: 9AM-6PM</span>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              <Link
<<<<<<< HEAD
                aria-label="WhatsApp"
                href="https://wa.me/60115353034"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border bg-green-500 p-2 text-white hover:bg-green-600"
              >
                <div className="relative size-6">
                  <Image
                    src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                    alt="WhatsApp"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link
                aria-label="Facebook"
                href="https://www.facebook.com/flexidiycentre/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border bg-blue-500 p-2 text-white hover:bg-blue-600"
              >
                <div className="relative size-6">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                    alt="Facebook"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link
                aria-label="Shopee"
                href="https://shopee.com.my/flexidiycentre"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border bg-orange-500 p-2 text-white hover:bg-orange-600"
              >
                <div className="relative size-6">
                  <Image
                    src="https://images.seeklogo.com/logo-png/37/2/shopee-logo-png_seeklogo-378738.png"
                    alt="Shopee"
                    fill
                    className="object-contain"
                  />
                </div>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
              </Link>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Map Section */}
        <div className="container mx-auto px-4 py-6">
          <div className="rounded-xl border bg-card p-4">
            <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <MapPin className="size-5 text-yellow-500" />
              Visit Our Store
            </h4>
            <div className="grid gap-6 lg:grid-cols-[1fr_400px]">
              <div className="aspect-video w-full overflow-hidden rounded-lg lg:aspect-auto lg:h-80">
                <iframe
                  title="Flexi Fastener Enterprise Location"
                  src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=FLEXI+FASTENER+ENTERPRISE,+Seksyen+BB8,+G5,+Jalan+Kasturi+1a,+Bandar+Bukit+Beruntung,+48300+Rawang,+Selangor&zoom=17`}
                  className="h-full w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h5 className="font-semibold">Flexi Fastener Enterprise</h5>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Seksyen BB8, G5, Jalan Kasturi 1a,
                    <br />
                    Bandar Bukit Beruntung,
                    <br />
                    48300 Rawang, Selangor, Malaysia
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-center gap-2">
                    <Clock className="size-4 text-yellow-500" />
                    <strong>Business Hours:</strong>
                  </p>
                  <p className="ml-6 text-muted-foreground">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p className="ml-6 text-muted-foreground">Sunday: Closed</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Link
                    href="https://www.google.com/maps/dir/?api=1&destination=3.381,101.502"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-400 px-4 text-sm font-semibold text-black shadow hover:bg-yellow-300"
                  >
                    <MapPin className="mr-1.5 size-4" />
                    Get Directions
                  </Link>
                  <Link
                    href="https://wa.me/60115353034"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-green-500 px-4 text-sm font-semibold text-white shadow hover:bg-green-600"
                  >
                    <div className="relative size-6">
                      <Image
                        src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
                        alt="WhatsApp"
                        fill
                        className="object-contain"
                      />
                    </div>
                    WhatsApp
                  </Link>
                </div>
              </div>
=======
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
>>>>>>> parent of c957da1 (Initial commit from v0)
            </div>
          </div>
        </div>

        <div className="border-t">
          <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row">
<<<<<<< HEAD
            <p>&copy; {new Date().getFullYear()} Flexi Fastener Enterprise. All rights reserved.</p>
=======
            <p>&copy; {new Date().getFullYear()} Flexi Fastener. All rights reserved.</p>
>>>>>>> parent of c957da1 (Initial commit from v0)
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
<<<<<<< HEAD

      {/* Floating WhatsApp Button */}
      <Link
        href="https://wa.me/60115353034?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:bg-green-600"
        aria-label="Contact us on WhatsApp"
      >
        <div className="relative size-7">
          <Image
            src="https://logo.svgcdn.com/logos/whatsapp-icon.svg"
            alt="WhatsApp"
            fill
            className="object-contain"
          />
        </div>
      </Link>
=======
>>>>>>> parent of c957da1 (Initial commit from v0)
    </div>
  )
}
