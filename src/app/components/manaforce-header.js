"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceLinks = [
  { href: "/manaforce/services/zero-trust-regulated", label: "Zero Trust Architecture" },
  { href: "/manaforce/services/regulated-cybersecurity", label: "Compliance & Governance" },
  { href: "/manaforce/services/identity-access-governance", label: "Identity & Access Governance" },
  { href: "/manaforce/services/cyber-operations", label: "Security Automation" },
  { href: "/manaforce/services/protecting-regulated-systems", label: "Protecting Validated Systems" },
]

const industryLinks = [
  { href: "/manaforce/industries/life-sciences-pharma", label: "Life Sciences & Pharma" },
  { href: "/manaforce/industries/healthcare", label: "Healthcare" },
  { href: "/manaforce/industries/energy-utilities", label: "Energy & Utilities" },
  { href: "/manaforce/industries/finance-insurance", label: "Finance & Insurance" },
  { href: "/manaforce/industries/regulated-manufacturing", label: "Regulated Manufacturing" },
  { href: "/manaforce/industries/public-sector", label: "Public Sector" },
  { href: "/manaforce/industries/telecommunications", label: "Telecommunications" },
]

export default function ManaForceHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [servicesMobileOpen, setServicesMobileOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)
  const [industriesMobileOpen, setIndustriesMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${isScrolled ? "bg-[#0a0a14]/95 backdrop-blur-sm" : "bg-transparent"} transition-colors duration-500 fixed top-0 left-0 right-0 z-50`}>
      <div className="container mx-auto md:px-10 px-4 py-2">
        <nav className="flex justify-between items-center h-16">

          {/* Brand: Manaʻo Pili logo + divider + ManaForce logo + switcher */}
          <div className="flex items-center gap-6">
            <Link href="/manaforce" className="flex items-center gap-0 fill-white h-[20px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 48 46" fill="var(--logo-color)">
                <path d="M25.3644 42.0497C22.2775 39.942 19.4949 39.6364 17.2599 41.0498C15.4662 42.1853 14.83 43.8822 15.4233 45.4796H0.655518C1.47288 45.3717 2.3013 45.1892 3.1477 44.925C9.28135 43.0123 13.884 37.4512 20.6386 37.7624C23.3479 37.8869 24.7393 39.068 25.3658 42.0497H25.3644Z" />
                <path d="M47.5437 0.264893V37.7154C45.7984 38.0722 44.0572 38.4415 42.2883 38.6476C38.3854 39.0998 34.5683 38.8121 31.1039 36.7722C27.8414 34.8498 27.4666 30.9677 30.1883 28.34C31.9959 26.596 34.8076 26.1894 37.3108 27.2875C38.7713 27.9279 39.9621 28.9707 41.2939 29.8585C40.5789 27.7149 39.2567 26.0428 37.4146 24.8078C32.6045 21.584 27.5164 21.5812 22.3467 23.7526C17.8961 25.621 14.5299 29.0564 10.876 32.0506C7.5056 34.8125 3.99137 38.5978 0 40.8687V0.264893L23.7712 13.232L47.5423 0.264893H47.5437Z" />
                <path opacity="0.2" d="M41.2963 29.8571C41.2963 29.8571 33.0328 21.4387 24.6103 26.0925C16.1877 30.7477 6.93401 39.7234 0.000976562 40.8672C0.000976562 40.8672 10.924 28.4201 11.0899 28.3081C11.2559 28.1961 21.8954 21.0487 21.8954 21.0487C21.8954 21.0487 31.4257 19.1097 31.5931 19.1097C31.7604 19.1097 36.8015 20.9933 36.9675 21.0487C37.1334 21.104 38.9064 22.711 39.1844 23.3209C39.461 23.9309 42.6198 27.9762 42.7304 28.1974C42.8411 28.4187 42.3985 30.4697 42.3985 30.4697L41.2963 29.8557V29.8571Z" />
              </svg>
            
            <div className="w-px h-5 bg-zinc-700 mx-1" />
            <Image
              src="/manaforce-logo.png"
              alt="ManaForce"
              width={130}
              height={20}
              className="h-5 w-auto object-contain"
              style={{ filter: "brightness(10)" }}
            />
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-sm font-medium hover:bg-zinc-800 hover:border-zinc-600 hover:text-white transition-colors uppercase tracking-wide"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Manaʻo Pili
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Services — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-zinc-300 font-sans hover:text-[#455CFF] transition-colors text-sm uppercase tracking-wide">
                Services
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 rounded-xl border border-zinc-800 bg-[#0a0a14]/98 backdrop-blur-sm shadow-xl overflow-hidden">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-[#455CFF] hover:bg-[#455CFF]/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries — dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="flex items-center gap-1 text-zinc-300 font-sans hover:text-[#455CFF] transition-colors text-sm uppercase tracking-wide">
                Industries
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
              </button>

              {industriesOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 rounded-xl border border-zinc-800 bg-[#0a0a14]/98 backdrop-blur-sm shadow-xl overflow-hidden">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-zinc-400 hover:text-[#455CFF] hover:bg-[#455CFF]/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            
          </div>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-zinc-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0a0a14] border-t border-zinc-800/60">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            <button
              className="flex items-center justify-between text-zinc-300 hover:text-[#455CFF] transition-colors py-2.5 text-sm uppercase tracking-wide w-full text-left"
              onClick={() => setServicesMobileOpen(!servicesMobileOpen)}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesMobileOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesMobileOpen && (
              <div className="flex flex-col gap-0 pl-3 border-l border-zinc-800">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-zinc-500 hover:text-[#455CFF] transition-colors py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Industries accordion */}
            <button
              className="flex items-center justify-between text-zinc-300 hover:text-[#455CFF] transition-colors py-2.5 text-sm uppercase tracking-wide w-full text-left"
              onClick={() => setIndustriesMobileOpen(!industriesMobileOpen)}
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesMobileOpen ? "rotate-180" : ""}`} />
            </button>
            {industriesMobileOpen && (
              <div className="flex flex-col gap-0 pl-3 border-l border-zinc-800">
                {industryLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-zinc-500 hover:text-[#455CFF] transition-colors py-2 text-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors py-2.5 text-sm mt-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <ArrowLeft className="w-4 h-4" /> Back to Manaʻo Pili
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
