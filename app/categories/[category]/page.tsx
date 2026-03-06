import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/site-header"
import ProductGrid from "@/components/product-grid"
import { getProductsByCategory, getUniqueSubcategories, getUniqueMaterials } from "@/lib/products-data"

const categoryTitles = {
  bolts: "Bolts & Fasteners",
  screws: "Screws & Fixings",
  anchors: "Anchors & Plugs",
  tools: "Tools & Equipment",
}

const categoryDescriptions = {
  bolts: "Heavy-duty bolts and fasteners for structural and mechanical applications.",
  screws: "Premium screws and fixings for wood, metal, and specialized applications.",
  anchors: "Reliable anchors and wall plugs for secure mounting solutions.",
  tools: "Professional tools and equipment for every hardware project.",
}

type Props = {
  params: Promise<{ category: string }>
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params

  if (!["bolts", "screws", "anchors", "tools"].includes(category)) {
    notFound()
  }

  const products = getProductsByCategory(category)
  const subcategories = getUniqueSubcategories(category)
  const materials = getUniqueMaterials(category)
  const title = categoryTitles[category as keyof typeof categoryTitles]
  const description = categoryDescriptions[category as keyof typeof categoryDescriptions]

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Header */}
        <section className="border-b bg-muted/30 py-8">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <span className="capitalize">{category}</span>
            </div>
            <div className="flex items-center gap-4 mb-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="size-4" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-3xl font-bold mb-2">{title}</h1>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{products.length} products</Badge>
              <Badge variant="outline">Free delivery over RM 50</Badge>
            </div>
          </div>
        </section>

        {/* Products Grid with Filters */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <ProductGrid products={products} subcategories={subcategories} materials={materials} />
          </div>
        </section>
      </main>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ category: "bolts" }, { category: "screws" }, { category: "anchors" }, { category: "tools" }]
}
