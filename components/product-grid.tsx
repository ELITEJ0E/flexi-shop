"use client"

import { useState, useMemo } from "react"
import type { Product } from "@/lib/products-data"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"

type Props = {
  products: Product[]
  subcategories: string[]
  materials: string[]
}

export default function ProductGrid({ products, subcategories, materials }: Props) {
  const [filters, setFilters] = useState({
    search: "",
    subcategories: [] as string[],
    materials: [] as string[],
    inStockOnly: false,
    priceRange: [0, 100] as [number, number],
  })

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Search filter
      if (filters.search && !product.name.toLowerCase().includes(filters.search.toLowerCase())) {
        return false
      }

      // Subcategory filter
      if (filters.subcategories.length > 0 && !filters.subcategories.includes(product.subcategory || "")) {
        return false
      }

      // Material filter
      if (filters.materials.length > 0 && !filters.materials.includes(product.material || "")) {
        return false
      }

      // Stock filter
      if (filters.inStockOnly && !product.inStock) {
        return false
      }

      // Price range filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      return true
    })
  }, [products, filters])

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      {/* Filters Sidebar */}
      <aside>
        <ProductFilters subcategories={subcategories} materials={materials} onFiltersChange={setFilters} />
      </aside>

      {/* Products Grid */}
      <div>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No products found matching your filters.</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search criteria.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                desc={product.desc}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
