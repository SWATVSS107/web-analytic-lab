import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              Tech<span className="text-primary">Store</span>
            </h3>
            <p className="text-background/70 text-sm">
              Your one-stop shop for all tech needs. Quality products at great prices.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <Link href="/" className="hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-background transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Email: info@techstore.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Mumbai, India</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Twitter
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                Instagram
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/70">
          <p>© 2025 TechStore. KJSSE AIDS TY BTech - Web Application Experiment</p>
        </div>
      </div>
    </footer>
  )
}
