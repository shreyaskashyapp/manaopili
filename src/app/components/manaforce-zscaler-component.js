"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ManaForceZscalerComponent() {
  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 px-6">

      {/* Background watermark logos */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden flex flex-col items-center justify-center gap-6">
        <div className="opacity-[0.035]">
          <Image src="/manaforce-logo.png" alt="" width={720} height={130} className="object-contain" style={{ filter: "brightness(10)" }} />
        </div>
        <div className="opacity-[0.035] text-3xl text-white font-extralight">×</div>
        <div className="opacity-[0.035]">
          <Image src="/zscaler-logo.png" alt="" width={600} height={130} className="object-contain" style={{ filter: "brightness(0) invert(1)" }} />
        </div>
      </div>

      <div className="relative z-10">

        {/* Label */}
        <div className="flex items-center gap-6 mb-16">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-xs uppercase tracking-widest text-[#455CFF] font-medium whitespace-nowrap">
            Strategic Partnership
          </span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        {/* Main layout */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-16">

          {/* Left — logos + description */}
          <motion.div
            className="lg:w-1/2 flex flex-col gap-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-5">
              <Image
                src="/manaforce-logo.png"
                alt="ManaForce"
                width={280}
                height={56}
                className="object-contain object-left"
                style={{ filter: "brightness(10)" }}
              />
              <span className="text-zinc-700 text-5xl font-extralight leading-none">×</span>
              <Image
                src="/zscaler-logo.png"
                alt="Zscaler"
                width={240}
                height={56}
                className="object-contain object-left"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm">
              As an authorized Zscaler partner, we integrate Zero Trust security with ServiceNow operations — helping enterprises improve visibility, automate response, and strengthen compliance.
            </p>
          </motion.div>

          {/* Right — stacked rows */}
          <div className="lg:w-1/2 flex flex-col divide-y divide-zinc-800/80">
            {[
              {
                label: "Zero Trust Architecture",
                desc: "Replace legacy perimeter with identity-driven, context-aware access controls.",
              },
              {
                label: "ServiceNow Integration",
                desc: "Unify security alerts, operations workflows, and governance in one platform.",
              },
              {
                label: "Compliance Automation",
                desc: "Meet strict regulatory requirements across regulated industries at enterprise scale.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                className="group flex items-start gap-6 py-7"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className="flex-1">
                  <p
                    className="text-white font-semibold text-lg mb-1.5 group-hover:text-[#455CFF] transition-colors duration-200"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {item.label}
                  </p>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom rule */}
        <div className="h-px bg-zinc-800 mt-16" />
      </div>
    </section>
  )
}
