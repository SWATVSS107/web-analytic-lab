import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { ProductsGrid } from "@/components/products-grid"

export default function ProductsPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">All Products</h1>
              <p className="text-muted-foreground mt-2">Browse our complete collection of tech products</p>
            </div>
            <ProductsGrid />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
