"use client"

import { motion } from "framer-motion"

const fadeUp = (i) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] },
})

export function CapabilitiesSection({ capabilities }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
      {capabilities.map((cap, i) => (
        <motion.div
          key={i}
          {...fadeUp(i)}
          className="group flex items-start gap-4 py-5 border-b border-zinc-800/60 hover:border-zinc-700/80 transition-colors duration-200"
        >
          <div className="w-1 h-1 rounded-full bg-[#455CFF] mt-[9px] flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
          <p className="text-zinc-400 text-[15px] leading-relaxed group-hover:text-zinc-200 transition-colors duration-200">
            {cap}
          </p>
        </motion.div>
      ))}
    </div>
  )
}

export function OutcomesSection({ outcomes }) {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 gap-px"
      style={{ background: "rgba(255,255,255,0.04)" }}
    >
      {outcomes.map((out, i) => (
        <motion.div
          key={i}
          {...fadeUp(i)}
          className="group relative bg-[#0a0a14] px-10 py-10 overflow-hidden hover:bg-[#0c0c18] transition-colors duration-300"
        >
          {/* Top accent line - reveals on hover */}
          <div
            className="absolute top-0 left-0 right-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
            style={{ background: "linear-gradient(90deg, #455CFF 0%, rgba(69,92,255,0.2) 100%)" }}
          />
          <p className="text-zinc-100 text-xl font-semibold leading-snug tracking-[-0.01em] group-hover:text-white transition-colors duration-200">
            {out}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
