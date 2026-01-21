"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">Contact Us</h1>
                <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                  Have questions or feedback? We'd love to hear from you. Send us a message and we'll respond as soon as
                  possible.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground mt-1">info@techstore.com</p>
                      <p className="text-muted-foreground">support@techstore.com</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground mt-1">+91 1234567890</p>
                      <p className="text-muted-foreground">+91 9876543210</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Address</h3>
                      <p className="text-muted-foreground mt-1">
                        K.J. Somaiya College of Engineering
                        <br />
                        Vidyavihar, Mumbai - 400077
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-xl border border-border p-6 md:p-8">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground mt-2">
                        Thank you for contacting us. We'll get back to you soon.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-4">
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium text-foreground">Name</label>
                          <Input type="text" placeholder="Your name" required className="mt-1" />
                        </div>
                        <div>
                          <label className="text-sm font-medium text-foreground">Email</label>
                          <Input type="email" placeholder="you@example.com" required className="mt-1" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Subject</label>
                        <Input type="text" placeholder="How can we help?" required className="mt-1" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-foreground">Message</label>
                        <Textarea placeholder="Your message..." rows={5} required className="mt-1" />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
