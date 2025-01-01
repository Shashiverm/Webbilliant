import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
//import Image from 'next/image'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="font-bold text-2xl">Webbilliant</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="services">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Were here to help. Reach out to us for any inquiries or support.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get in Touch</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fill out the form below and well get back to you as soon as possible.
                </p>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Information</h2>
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center space-x-4">
                      <MapPin className="text-primary" />
                      <span>123 Web Street, Digital City, 12345</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Phone className="text-primary" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="text-primary" />
                      <span>contact@webbilliant.com</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[16/9] overflow-hidden rounded-lg">
                      {/* <image
                        src="/placeholder.svg?height=400&width=800"
                        alt="Map"
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
                      /> */}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Webbilliant</h3>
              <p className="text-sm text-gray-400">Empowering businesses with innovative digital solutions</p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Instagram size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-400">Stay updated with our latest news and offers</p>
              <form className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none bg-gray-800 border-gray-700 text-white"
                />
                <Button type="submit" className="rounded-l-none bg-primary hover:bg-primary/90">
                  Subscribe
                </Button>
              </form>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="" className="text-gray-400 hover:text-white">
                  Home
                </Link>
                <Link href="services" className="text-gray-400 hover:text-white">
                  Services
                </Link>
                <Link href="about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
                <Link href="contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Legal</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>© 2023 Webbilliant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}