import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { Users, Target, Award, Heart } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide high-quality tech products at affordable prices, making innovation accessible to everyone.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "A passionate team of tech enthusiasts dedicated to curating the best products for our customers.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "We carefully select each product, ensuring it meets our high standards for quality and performance.",
  },
  {
    icon: Heart,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We're here to help you find the perfect tech solutions.",
  },
]

export default function AboutPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {/* Hero */}
          <section className="bg-foreground text-background py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-balance">About TechStore</h1>
                <p className="text-background/70 text-lg mt-6 leading-relaxed">
                  Founded in 2025, TechStore has been at the forefront of bringing the latest technology to customers
                  across India. We believe that great tech should be accessible to everyone.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">What We Stand For</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value) => (
                  <div key={value.title} className="p-6 bg-card rounded-xl border border-border">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mt-4 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bg-secondary py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">10K+</div>
                  <div className="text-muted-foreground mt-2">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground mt-2">Products</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground mt-2">Cities Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                  <div className="text-muted-foreground mt-2">Support</div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
