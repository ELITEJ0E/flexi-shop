import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

type Props = {
  id?: string
  name?: string
  desc?: string
  price?: number
  image?: string
  inStock?: boolean
}

export default function ProductCard({
  id = "prod",
  name = "Product",
  desc = "High-quality hardware product.",
  price = 9.99,
  image = "/generic-hardware-product.png",
  inStock = true,
}: Props) {
  return (
    <Card key={id} className="flex h-full flex-col group hover:shadow-lg transition-shadow">
      <CardHeader className="p-0 relative">
        <Link href={`/products/${id}`}>
          <img
            src={image || "/placeholder.svg"}
            alt={`${name} image`}
            className="h-44 w-full rounded-t-lg object-cover group-hover:scale-105 transition-transform"
          />
        </Link>
        {!inStock && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Out of Stock
          </Badge>
        )}
      </CardHeader>
      <CardContent className="space-y-1 p-4 flex-1">
        <Link href={`/products/${id}`}>
          <CardTitle className="text-lg hover:text-yellow-600 transition-colors">{name}</CardTitle>
        </Link>
        <p className="text-sm text-muted-foreground line-clamp-2">{desc}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <p className="text-base font-semibold">RM {price.toFixed(2)}</p>
        <Link href={`/products/${id}`}>
          <Button className="bg-yellow-400 text-black hover:bg-yellow-300" disabled={!inStock}>
            {inStock ? "View Details" : "Out of Stock"}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
