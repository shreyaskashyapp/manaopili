import { ArrowRight, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Survey", href: "/survey" },
  { name: "Contact", href: "/contact" },
]

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Security", href: "/security" },
  { name: "Cookies", href: "/cookies" },
]

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
]

export default function Footer() {
  return (
    <footer
      className="relative bg-[#141414] text-zinc-300 border-gray-600"
      style={{
        backgroundImage: "url('/footerCircle.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto px-6 py-6 lg:py-10 z-10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand & CTA Section */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-thin italic text-white md:mb-0.5 mb-3">
                Transform your business with
                <br/> 
                <span className="text-[#deff00] font-thin text-5xl italic">{`Mana'o Pili`}</span>
              </h2>
              <br className="hidden sm:inline" />
              <a
                href="/survey"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-zinc-800 bg-blue-100 hover:bg-[#deff00] rounded-full transition-all duration-300"
              >
                Take Our Survey
                {/* <Image src="/arrow_yellow.png" alt="Arrow" width={15} height={15} /> */}
              </a>
            </div>

            {/* Navigation & Social Links */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 lg:pl-12">
                {/* Company Links */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1.5">Company</h3>
                  <ul className="space-y-2">
                    {companyLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-zinc-300 hover:text-[#deff00] transition-colors duration-200 hover:translate-x-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1.5">Legal</h3>
                  <ul className="space-y-2">
                    {legalLinks.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-base text-zinc-300 hover:text-[#deff00] transition-colors duration-200 hover:translate-x-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1.5">Connect</h3>
                  <div className="flex flex-col space-y-2">
                    {socialLinks.map((link) => {
                      const Icon = link.icon
                      return (
                        <a
                          key={link.name}
                          href={link.href}
                          className="text-base text-zinc-300 hover:text-[#deff00] transition-colors duration-200 inline-flex items-center gap-3 group"
                        >
                          <span>{link.name}</span>
                        </a>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-8 pt-8 border-t border-zinc-300">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-zinc-300">
                &copy; 2025 {`Mana'o Pili. All rights reserved.`}
              </p>
              <div className="flex space-x-6">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-zinc-300 hover:text-[#deff00] transition-colors duration-200"
                      aria-label={link.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}