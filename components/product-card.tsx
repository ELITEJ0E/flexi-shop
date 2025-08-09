import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  id?: string
  name?: string
  desc?: string
  price?: number
  image?: string
}

export default function ProductCard({
  id = "prod",
  name = "Product",
  desc = "High-quality hardware product.",
  price = 9.99,
  image = "/generic-hardware-product.png",
}: Props) {
  return (
    <Card key={id} className="flex h-full flex-col">
      <CardHeader className="p-0">
        <img
          src={image || "/placeholder.svg"}
          alt={`${name} image`}
          className="h-44 w-full rounded-t-lg object-cover"
        />
      </CardHeader>
      <CardContent className="space-y-1 p-4">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </CardContent>
      <CardFooter className="mt-auto flex items-center justify-between p-4">
        <p className="text-base font-semibold">${price.toFixed(2)}</p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-300">View details</Button>
      </CardFooter>
    </Card>
  )
}
