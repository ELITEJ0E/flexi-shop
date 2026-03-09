"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, X } from "lucide-react"

type FilterProps = {
  subcategories: string[]
  materials: string[]
  onFiltersChange: (filters: {
    search: string
    subcategories: string[]
    materials: string[]
    inStockOnly: boolean
    priceRange: [number, number]
  }) => void
}

export default function ProductFilters({ subcategories, materials, onFiltersChange }: FilterProps) {
  const [search, setSearch] = useState("")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])

  const updateFilters = () => {
    onFiltersChange({
      search,
      subcategories: selectedSubcategories,
      materials: selectedMaterials,
      inStockOnly,
      priceRange,
    })
  }

  const clearFilters = () => {
    setSearch("")
    setSelectedSubcategories([])
    setSelectedMaterials([])
    setInStockOnly(false)
    setPriceRange([0, 100])
    onFiltersChange({
      search: "",
      subcategories: [],
      materials: [],
      inStockOnly: false,
      priceRange: [0, 100],
    })
  }

  const handleSubcategoryChange = (subcategory: string, checked: boolean) => {
    const updated = checked
      ? [...selectedSubcategories, subcategory]
      : selectedSubcategories.filter((s) => s !== subcategory)
    setSelectedSubcategories(updated)
  }

  const handleMaterialChange = (material: string, checked: boolean) => {
    const updated = checked ? [...selectedMaterials, material] : selectedMaterials.filter((m) => m !== material)
    setSelectedMaterials(updated)
  }

  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Filter className="size-4" />
            Filters
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="size-4" />
            Clear
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label htmlFor="search">Search Products</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={updateFilters}
              className="pl-10"
            />
          </div>
        </div>

        {/* Subcategories */}
        {subcategories.length > 0 && (
          <div className="space-y-3">
            <Label>Type</Label>
            <div className="space-y-2">
              {subcategories.map((subcategory) => (
                <div key={subcategory} className="flex items-center space-x-2">
                  <Checkbox
                    id={subcategory}
                    checked={selectedSubcategories.includes(subcategory)}
                    onCheckedChange={(checked) => handleSubcategoryChange(subcategory, !!checked)}
                  />
                  <Label htmlFor={subcategory} className="text-sm capitalize">
                    {subcategory.replace("-", " ")}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Materials */}
        {materials.length > 0 && (
          <div className="space-y-3">
            <Label>Material</Label>
            <div className="space-y-2">
              {materials.map((material) => (
                <div key={material} className="flex items-center space-x-2">
                  <Checkbox
                    id={material}
                    checked={selectedMaterials.includes(material)}
                    onCheckedChange={(checked) => handleMaterialChange(material, !!checked)}
                  />
                  <Label htmlFor={material} className="text-sm capitalize">
                    {material.replace("-", " ")}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Stock Status */}
        <div className="space-y-3">
          <Label>Availability</Label>
          <div className="flex items-center space-x-2">
            <Checkbox id="inStock" checked={inStockOnly} onCheckedChange={(checked) => setInStockOnly(!!checked)} />
            <Label htmlFor="inStock" className="text-sm">
              In stock only
            </Label>
          </div>
        </div>

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Price Range (RM)</Label>
          <div className="flex items-center gap-2">
            <Input
              type="number"
              placeholder="Min"
              value={priceRange[0]}
              onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
              className="w-20"
            />
            <span className="text-muted-foreground">-</span>
            <Input
              type="number"
              placeholder="Max"
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="w-20"
            />
          </div>
        </div>

        <Button onClick={updateFilters} className="w-full bg-yellow-400 text-black hover:bg-yellow-300">
          Apply Filters
        </Button>
      </CardContent>
    </Card>
  )
}
