import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { CartContent } from "@/components/cart-content"

export default function CartPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>
            <CartContent />
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
