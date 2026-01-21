import { Truck, Shield, Headphones, CreditCard } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Free delivery on orders above ₹999",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure payment gateway",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round the clock customer support",
  },
  {
    icon: CreditCard,
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mt-4 text-foreground">{feature.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
