"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShieldCheck, Shield, Lock, Workflow, FlaskConical } from "lucide-react"

const services = [
  {
    slug: "zero-trust-regulated",
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    tagline: "Replace legacy perimeter models with identity-driven, context-aware access for users, apps, and data — across every environment.",
    featured: true,
  },
  {
    slug: "regulated-cybersecurity",
    icon: ShieldCheck,
    title: "Compliance & Governance",
    tagline: "Continuous compliance readiness, audit defensibility, and governance operationalization for regulated organizations.",
  },
  {
    slug: "identity-access-governance",
    icon: Lock,
    title: "Identity & Access Governance",
    tagline: "Enforce the right access for the right people at the right time — at enterprise scale.",
  },
  {
    slug: "cyber-operations",
    icon: Workflow,
    title: "Security Automation",
    tagline: "Automate security operations and compliance workflows through ServiceNow integration.",
  },
  {
    slug: "protecting-regulated-systems",
    icon: FlaskConical,
    title: "Protecting Validated Systems",
    tagline: "GxP system protection, data integrity (ALCOA+), and preservation of validation status.",
  },
]

export default function ManaForceServicesSection() {
  return (
    <section className="w-full px-6">

      {/* Header */}
      <motion.div
        className="mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h2
          className="text-5xl md:text-6xl font-bold text-[#e2e2e2] text-center"
          style={{ letterSpacing: "-0.03em" }}
        >
          Security Capabilities
        </h2>
        <p className="text-zinc-500 text-sm mt-4 leading-relaxed text-center">
          Practical, scalable cybersecurity for regulated enterprises.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* Featured card */}
        {(() => {
          const FeaturedIcon = services[0].icon
          return (
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            >
              <Link
                href={`/manaforce/services/${services[0].slug}`}
                className="group relative flex flex-col justify-between gap-8 rounded-2xl p-10 md:p-12 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/40 transition-all duration-300 hover:shadow-[0_0_48px_rgba(69,92,255,0.09)] h-full min-h-[320px] overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-30 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
                />
                <div className="flex flex-col gap-6">
                  <FeaturedIcon className="w-7 h-7 text-[#455CFF] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col gap-4">
                    <h3
                      className="text-white font-bold text-4xl md:text-5xl leading-[1.0] group-hover:text-[#455CFF] transition-colors duration-300"
                      style={{ letterSpacing: "-0.03em" }}
                    >
                      {services[0].title}
                    </h3>
                    <p className="text-zinc-400 text-base leading-relaxed max-w-lg">
                      {services[0].tagline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-[#455CFF] transition-colors duration-300">
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </Link>
            </motion.div>
          )
        })()}

        {/* Regular cards */}
        {services.slice(1).map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div
              key={s.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
            >
              <Link
                href={`/manaforce/services/${s.slug}`}
                className="group relative flex flex-col justify-between gap-5 rounded-2xl p-8 md:p-10 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/40 transition-all duration-300 hover:shadow-[0_0_32px_rgba(69,92,255,0.07)] h-full min-h-[220px] overflow-hidden"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
                />
                <div className="flex flex-col gap-5">
                  <Icon className="w-5 h-5 text-[#455CFF] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="flex flex-col gap-2">
                    <h3
                      className="text-white font-bold text-xl md:text-2xl leading-snug group-hover:text-[#455CFF] transition-colors duration-300"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      {s.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-[#455CFF] group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}
