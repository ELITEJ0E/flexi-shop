import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import SiteHeader from "@/components/site-header"
import ProductCard from "@/components/product-card"
import ProductImageGallery from "@/components/product-image-gallery"
import { getProductById, getRelatedProducts } from "@/lib/products-data"

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProductById(id)

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  const categoryNames = {
    bolts: "Bolts",
    screws: "Screws",
    anchors: "Anchors",
    tools: "Tools",
  }

  return (
    <div className="min-h-dvh flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="border-b bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link href={`/categories/${product.category}`} className="hover:text-foreground">
                {categoryNames[product.category]}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
            <Link
              href={`/categories/${product.category}`}
              className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="size-4" />
              Back to {categoryNames[product.category]}
            </Link>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Product Images */}
              <div>
                <ProductImageGallery images={product.images} productName={product.name} />
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize">
                      {product.subcategory?.replace("-", " ")}
                    </Badge>
                    {product.inStock ? (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge variant="destructive">Out of Stock</Badge>
                    )}
                  </div>
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <p className="text-muted-foreground text-lg">{product.desc}</p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">(4.8/5 from 124 reviews)</span>
                </div>

                <div className="text-3xl font-bold text-primary">RM {product.price.toFixed(2)}</div>

                {/* Features */}
                <div>
                  <h3 className="font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="size-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add to Cart */}
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-300"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>

                  <div className="grid grid-cols-3 gap-4 text-center text-sm">
                    <div className="flex flex-col items-center gap-1">
                      <Truck className="size-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Free Delivery</span>
                      <span className="text-xs">Orders over RM 50</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Shield className="size-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Warranty</span>
                      <span className="text-xs">{product.specifications.warranty || "1 year"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <RotateCcw className="size-5 text-muted-foreground" />
                      <span className="text-muted-foreground">Returns</span>
                      <span className="text-xs">30 day policy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-8 border-t">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid gap-4 md:grid-cols-2">
                  {Object.entries(product.specifications).map(([key, value]) => {
                    if (!value) return null
                    return (
                      <div key={key} className="flex justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="font-medium capitalize text-muted-foreground">
                          {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                        </span>
                        <span className="text-right">{value}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-8 border-t bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Related Products</h2>
                <Link
                  href={`/categories/${product.category}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  View all {categoryNames[product.category]} →
                </Link>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard
                    key={relatedProduct.id}
                    id={relatedProduct.id}
                    name={relatedProduct.name}
                    desc={relatedProduct.desc}
                    price={relatedProduct.price}
                    image={relatedProduct.image}
                    inStock={relatedProduct.inStock}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}
