import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-foreground to-foreground/90 text-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Welcome to TechStore</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight text-balance">
            Discover the Latest in Tech Innovation
          </h1>
          <p className="text-background/70 text-lg mt-6 leading-relaxed max-w-2xl">
            Explore our curated collection of premium tech products. From audio gear to smart accessories, find
            everything you need to upgrade your digital life.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/products">
                Shop Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-background/30 text-background hover:bg-background/10 bg-transparent"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
