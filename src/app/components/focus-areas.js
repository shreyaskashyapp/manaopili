"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Server, Lock, ShieldCheck, Landmark } from "lucide-react"

/**
 * Areas We Serve — the compliance-critical focus areas as real, crawlable
 * text (Information Technology / Information Security / Cybersecurity /
 * Regulated Industries must exist on the page as text, not baked into
 * images). Glossy glass chips: scrub-linked scroll fade (staggered, reversible)
 * + GlossyButton-style hover with a sheen sweep.
 */
const AREAS = [
  { label: "Information Technology", icon: Server },
  { label: "Information Security", icon: Lock },
  { label: "Cybersecurity", icon: ShieldCheck },
  { label: "Regulated Industries", icon: Landmark },
]

function Chip({ label, icon: Icon, progress, index, reduceMotion }) {
  // Staggered scrub window per chip: later chips light up slightly after
  // earlier ones, and everything reverses when scrolling back up.
  const start = index * 0.15
  const opacity = useTransform(progress, [start, start + 0.4], [0, 1])
  const y = useTransform(progress, [start, start + 0.4], [24, 0])

  return (
    <motion.li
      style={reduceMotion ? undefined : { opacity, y }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-zinc-900 to-[#141414] p-3 ring-1 ring-inset ring-white/[0.06] transition-all duration-300 hover:border-[#455CFF]/50 hover:ring-[#455CFF]/20 hover:shadow-[0_8px_30px_rgba(69,92,255,0.12)]"
    >
      {/* Glossy sheen — sweeps across the chip on hover */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <span className="absolute left-[-60%] top-0 h-full w-[40%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[300%]" />
      </span>
      {/* Faint blue tint on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl bg-[#455CFF]/0 transition-colors duration-300 group-hover:bg-[#455CFF]/[0.06]"
      />

      <div className="relative flex items-center gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[#455CFF]">
          <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
        </span>
        <span className="font-heading text-lg tracking-wide text-white">
          {label}
        </span>
      </div>
    </motion.li>
  )
}

export default function FocusAreas({
  heading = "ServiceNow, delivered with the rigor regulated environments demand.",
  className = "",
}) {
  const reduceMotion = useReducedMotion()
  const listRef = useRef(null)

  // One shared scrub for the row; each chip reads its own slice of it.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 98%", "start 68%"],
  })

  return (
    <div className={`container mx-auto max-w-6xl px-6 ${className}`}>
      <div className="text-center">
        <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#455CFF] md:text-xs">
          Areas We Serve
        </p>
        <h2 className="font-heading mx-auto max-w-2xl text-2xl leading-snug text-[#e2e2e2] md:text-3xl">
          {heading}
        </h2>
      </div>

      <ul
        ref={listRef}
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {AREAS.map(({ label, icon }, i) => (
          <Chip
            key={label}
            label={label}
            icon={icon}
            index={i}
            progress={scrollYProgress}
            reduceMotion={reduceMotion}
          />
        ))}
      </ul>
    </div>
  )
}
