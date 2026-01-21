import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { FeaturesSection } from "@/components/features-section"
import { AuthWrapper } from "@/components/auth-wrapper"

export default function HomePage() {
  return (
    <AuthWrapper>
      <CartProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <HeroSection />
            <FeaturedProducts />
            <FeaturesSection />
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthWrapper>
  )
}
