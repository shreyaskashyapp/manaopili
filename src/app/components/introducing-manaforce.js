"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Layers, Settings2, Building2 } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    desc: "Identity-first security that assumes breach by default — no implicit trust, ever.",
  },
  {
    icon: Layers,
    title: "Zscaler Platform",
    desc: "Enterprise-grade cloud-native security powering our Zero Trust delivery at scale.",
  },
  {
    icon: Settings2,
    title: "Security Capabilities",
    desc: "From architecture design to automated security operations and compliance readiness.",
  },
  {
    icon: Building2,
    title: "Regulated Industry Focus",
    desc: "Healthcare, life sciences, finance, energy, and critical infrastructure.",
  },
]

export default function IntroducingManaForce() {
  return (
    <section className="w-full px-6">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">

        {/* Left */}
        <motion.div
          className="flex flex-col gap-8 md:sticky md:top-32"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-6">
            <h2
              className="text-5xl md:text-6xl font-bold text-white leading-none"
              style={{ letterSpacing: "-0.03em" }}
            >
              Introducing{" "}
              <span className="text-[#455CFF] italic">ManaForce</span>
            </h2>

            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-md">
              ManaForce is the cybersecurity practice of Mana&apos;o Pili, focused on Zero Trust architecture and modern enterprise security.
            </p>

            <p className="text-zinc-500 text-base leading-relaxed max-w-md">
              Built on the Zscaler platform, ManaForce helps organizations replace legacy network perimeter models with identity-driven access that protects users, applications, and data across cloud, hybrid, and remote environments.
            </p>
          </div>

          <div className="inline-flex items-center gap-2.5 w-fit rounded-md border border-[#455CFF]/40 bg-[#455CFF]/5 px-4 py-2">
            <span className="text-xs text-[#455CFF] tracking-wide">Authorized Zscaler Partner</span>
          </div>
        </motion.div>

        {/* Right: icon list */}
        <div className="flex flex-col divide-y divide-zinc-800/60 pt-2 md:pt-4">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={i}
                className="flex gap-5 items-start py-7 group"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.08 }}
              >
                <div className="mt-0.5 shrink-0">
                  <Icon
                    className="w-5 h-5 transition-colors duration-300 group-hover:text-[#455CFF]"
                    style={{ color: "rgba(69,92,255,0.5)" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-semibold text-base leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
