import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Laptop, Smartphone, Palette, Video, Camera, Calendar } from "lucide-react"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"


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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to Webbilliant
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Your one-stop solution for web development, design, and digital services
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard icon={<Laptop className="h-10 w-10" />} title="Web Development" description="Custom websites tailored to your needs" />
              <ServiceCard icon={<Smartphone className="h-10 w-10" />} title="Web/App Management" description="Ongoing support and maintenance for your digital assets" />
              <ServiceCard icon={<Palette className="h-10 w-10" />} title="Graphics/Logo Design" description="Eye-catching visuals to represent your brand" />
              <ServiceCard icon={<Video className="h-10 w-10" />} title="Video Editing" description="Professional video editing services" />
              <ServiceCard icon={<Camera className="h-10 w-10" />} title="Portrait Art" description="Stunning portrait artwork creation" />
              <ServiceCard icon={<Calendar className="h-10 w-10" />} title="Event Management" description="Comprehensive event planning and execution" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to get started?
                </h2>
                <p className="mx-auto max-w-[600px] text-white md:text-xl">
                  Let&apos;s bring your digital vision to life. Contact us today for a free consultation.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-100"><a href="contact" target="_blank" >Contact Us</a></Button>
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
interface TeamCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
function ServiceCard({ icon, title, description }:TeamCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center p-6 text-center space-y-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}