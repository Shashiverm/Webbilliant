import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Palette, Video, Camera, Calendar } from "lucide-react"
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Our Services
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Comprehensive digital solutions to elevate your brand and streamline your operations
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <ServiceCard
                icon={<Laptop className="h-10 w-10" />}
                title="Web Development"
                description="Custom-built websites tailored to your specific needs. We create responsive, user-friendly, and SEO-optimized sites that drive engagement and conversions."
              />
              <ServiceCard
                icon={<Smartphone className="h-10 w-10" />}
                title="Web/App Management"
                description="Ongoing support and maintenance for your digital assets. We ensure your websites and applications remain secure, up-to-date, and performing optimally."
              />
              <ServiceCard
                icon={<Palette className="h-10 w-10" />}
                title="Graphics/Logo Design"
                description="Eye-catching visuals to represent your brand. Our designers create unique logos and graphics that capture your brand&apos;s essence and leave a lasting impression."
              />
              <ServiceCard
                icon={<Video className="h-10 w-10" />}
                title="Video Editing"
                description="Professional video editing services to enhance your visual content. We transform raw footage into compelling narratives that engage your audience."
              />
              <ServiceCard
                icon={<Camera className="h-10 w-10" />}
                title="Portrait Art"
                description="Stunning portrait artwork creation. Our artists capture the essence of individuals or groups in various styles, from traditional to digital mediums."
              />
              <ServiceCard
                icon={<Calendar className="h-10 w-10" />}
                title="Event Management"
                description="Comprehensive event planning and execution. From corporate gatherings to social celebrations, we handle all aspects to ensure your event is a success."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Digital Presence?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let&apos;s discuss how our services can help you achieve your goals. Contact us for a free consultation.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
                <Button variant="outline">View Portfolio</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 Webbilliant. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500">{description}</p>
      </CardContent>
    </Card>
  )
}