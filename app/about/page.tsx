import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Laptop, Smartphone, Palette, Video, Camera, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="contact">
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
                  About Webbilliant
                </h1>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Empowering businesses with innovative digital solutions since 2010
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Story</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Webbilliant was founded with a vision to bridge the gap between cutting-edge technology and creative
                  design. Our journey began in 2010, and since then, we've been at the forefront of digital innovation,
                  helping businesses of all sizes establish and enhance their online presence.
                </p>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today, we're proud to offer a comprehensive suite of services, from web development and app management
                  to graphic design and event planning. Our diverse team of experts brings a wealth of experience and
                  creativity to every project, ensuring that we deliver solutions that not only meet but exceed our
                  clients' expectations.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Webbilliant, our mission is to empower businesses with innovative digital solutions that drive
                  growth, enhance brand visibility, and create meaningful connections with their audience. We believe in:
                </p>
                <ul className="list-disc list-inside text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <li>Delivering excellence in every project we undertake</li>
                  <li>Fostering creativity and embracing cutting-edge technologies</li>
                  <li>Building long-lasting partnerships with our clients</li>
                  <li>Continuously evolving to meet the changing digital landscape</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Meet Our Team</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <TeamCard
                icon={<Laptop className="h-10 w-10" />}
                title="Web Development Team"
                description="Our skilled developers create robust, scalable, and user-friendly websites tailored to your needs."
              />
              <TeamCard
                icon={<Smartphone className="h-10 w-10" />}
                title="App Management Team"
                description="Experts in maintaining and optimizing web and mobile applications for peak performance."
              />
              <TeamCard
                icon={<Palette className="h-10 w-10" />}
                title="Design Team"
                description="Creative minds crafting stunning visuals, from logos to comprehensive brand identities."
              />
              <TeamCard
                icon={<Video className="h-10 w-10" />}
                title="Video Editing Team"
                description="Talented editors transforming raw footage into compelling visual stories."
              />
              <TeamCard
                icon={<Camera className="h-10 w-10" />}
                title="Portrait Art Team"
                description="Skilled artists capturing personalities through various artistic mediums."
              />
              <TeamCard
                icon={<Calendar className="h-10 w-10" />}
                title="Event Management Team"
                description="Experienced planners ensuring every event is executed flawlessly from concept to completion."
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Work with Us?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Let's bring your vision to life. Our team is ready to tackle your next project with creativity and expertise.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get in Touch</Button>
                <Button variant="outline">View Our Work</Button>
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

function TeamCard({ icon, title, description }) {
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