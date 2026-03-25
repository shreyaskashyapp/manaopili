"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import IndustriesSection from "@/app/components/industries-section"
import IntroducingManaForce from "@/app/components/introducing-manaforce"
import ManaForceServicesSection from "@/app/components/manaforce-services-section"
import ManaForceZscalerCard from "../components/manaforce-zscaler-component"
import axios from "axios"
import { useState } from "react"

const serviceOptions = [
  { value: "zero-trust", label: "Zero Trust Architecture" },
  { value: "compliance", label: "Compliance & Governance" },
  { value: "identity", label: "Identity & Access Governance" },
  { value: "automation", label: "Security Automation" },
  { value: "validated-systems", label: "Protecting Validated Systems" },
  { value: "general", label: "General Inquiry" },
]

function ManaForceContactForm() {
  const [formData, setFormData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}contact-leads`, formData)
      if (res?.status === 200) setSubmitted(true)
    } catch (err) {
      console.error("Form submission failed", err.message)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#455CFF]/20 bg-[#455CFF]/5 p-10 text-center">
        <div className="mb-5 flex justify-center">
          <div className="h-14 w-14 rounded-full bg-[#455CFF] flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h2 className="text-xl font-bold text-white mb-2">Message Sent</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          Our team will review your message and get back to you shortly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-[#455CFF] hover:text-white transition-colors"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-[#455CFF]/20 bg-[#455CFF]/[0.06] backdrop-blur-sm p-8">
      <p className="text-white font-semibold text-lg mb-6" style={{ letterSpacing: "-0.01em" }}>
        Connect with us
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs text-zinc-400 tracking-wide">Name *</Label>
            <Input
              placeholder="Your name"
              required
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-white/[0.04] border-[#455CFF]/20 text-white placeholder:text-zinc-600 hover:border-[#455CFF]/50 focus:border-[#455CFF] transition-colors h-10 text-sm"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs text-zinc-400 tracking-wide">Email *</Label>
            <Input
              type="email"
              placeholder="Your email"
              required
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-white/[0.04] border-[#455CFF]/20 text-white placeholder:text-zinc-600 hover:border-[#455CFF]/50 focus:border-[#455CFF] transition-colors h-10 text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-zinc-400 tracking-wide">Company *</Label>
          <Input
            placeholder="Your company"
            required
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            className="bg-white/[0.04] border-[#455CFF]/20 text-white placeholder:text-zinc-600 hover:border-[#455CFF]/50 focus:border-[#455CFF] transition-colors h-10 text-sm"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-zinc-400 tracking-wide">Service</Label>
          <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
            <SelectTrigger className="bg-white/[0.04] border-[#455CFF]/20 text-white hover:border-[#455CFF]/50 focus:border-[#455CFF] transition-colors h-10 text-sm">
              <SelectValue placeholder="Select a service" className="text-zinc-600" />
            </SelectTrigger>
            <SelectContent className="bg-[#0d0d1a] border-[#455CFF]/20">
              {serviceOptions.map((opt) => (
                <SelectItem key={opt.value} value={opt.value} className="text-zinc-300 focus:bg-[#455CFF]/15 focus:text-white text-sm">
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label className="text-xs text-zinc-400 tracking-wide">Message</Label>
          <textarea
            placeholder="Tell us about your environment..."
            rows={3}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full rounded-md border border-[#455CFF]/20 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-zinc-600 hover:border-[#455CFF]/50 focus:border-[#455CFF] focus:outline-none transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full mt-1 py-2.5 rounded-lg bg-[#455CFF] text-white text-sm font-semibold hover:bg-[#455CFF]/80 transition-colors disabled:opacity-50"
        >
          {isLoading ? "Sending..." : "Get Started"}
        </button>
      </form>
    </div>
  )
}

export default function ManaForcePage() {
  return (
    <div className="text-[#e2e2e2] bg-[#08080f] pb-10">

      {/* ── HERO ── */}
      <div className="relative min-h-screen bg-[#08080f] flex items-center overflow-hidden">

        {/* Background glow — now covers full width at lower opacity */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 60% at 75% 50%, rgba(69,92,255,0.18), transparent 70%)" }} />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(69,92,255,0.08) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        </div>

        <div className="relative z-10 w-full px-8 md:px-16 lg:px-24 py-32 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mx-auto">

          {/* Left */}
          <div>
            <motion.h1
              className="text-[clamp(52px,8vw,90px)] text-white leading-[0.92]"
              style={{ letterSpacing: "0.01em" }}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            >
              Modern<br />
              <span className="text-[#455CFF]">Cybersecurity</span><br />
              for Regulated<br />
              Enterprises.
            </motion.h1>

            <motion.p
              className="mt-8 text-zinc-400 text-base md:text-lg leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.22 }}
            >
              Zero Trust architecture powered by the Zscaler platform - securing access, strengthening compliance, and enabling secure operations at scale.
            </motion.p>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <ManaForceContactForm />
          </motion.div>

        </div>
      </div>

      {/* ── SECTIONS ── */}
      <div className="w-full max-w-7xl mx-auto flex flex-col pt-10 gap-10 md:gap-16 lg:gap-28">

        <IntroducingManaForce />

        <ManaForceServicesSection />

        <ManaForceZscalerCard />

        <IndustriesSection />

        {/* ── CTA ── */}
        <motion.section
          className="w-full px-6 py-24 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(69,92,255,0.11), transparent 70%)" }}
          />
          <div className="absolute top-0 left-6 right-6 h-px bg-zinc-800" />

          <div className="relative z-10 flex flex-col items-center text-center gap-8 max-w-3xl mx-auto">
            <h2
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white"
              style={{ letterSpacing: "-0.03em" }}
            >
              Ready to secure your{" "}
              <span className="text-[#455CFF]">enterprise?</span>
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              Talk to our team about Zero Trust implementation for your regulated organization. We&apos;ll assess your environment and design a path forward.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#455CFF] text-white hover:bg-[#455CFF]/80 border-0 font-semibold px-10 py-6 text-base rounded-lg transition-all duration-300"
              >
                Book a consultation
              </Button>
            </Link>
            <div className="flex flex-wrap gap-8 justify-center">
              {["Zero Trust architecture design", "Zscaler platform deployment", "Compliance-ready from day one"].map((f) => (
                <span key={f} className="flex items-center gap-2 text-xs text-zinc-500">
                  <span className="w-1 h-1 rounded-full bg-[#455CFF]/50 shrink-0" />
                  {f}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  )
}
