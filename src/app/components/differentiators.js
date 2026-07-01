"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useInView } from "framer-motion"
import SectionHeading from "./section-heading"

function Row({ card, index, reduceMotion }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.25 })

  return (
    <motion.div
      ref={ref}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-12 items-start gap-y-6 border-t border-white/[0.07] py-10 md:gap-x-8 md:py-14"
    >
      {/* Faint ordinal — visual anchor, not a label */}
      <div className="col-span-2 md:col-span-1 pt-1">
        <span
          aria-hidden
          className="font-heading text-5xl font-light leading-none text-white/[0.07] select-none md:text-7xl"
        >
          0{index + 1}
        </span>
      </div>

      {/* Title + lead */}
      <div className="col-span-10 md:col-span-4">
        <span aria-hidden className="mb-5 block h-px w-10 rounded-full bg-[#455CFF]" />
        <h3 className="font-heading text-2xl leading-snug text-white md:text-3xl xl:text-4xl">
          {card.title}
        </h3>
        <p className="mt-3 leading-relaxed text-zinc-400">{card.lead}</p>
      </div>

      {/* Pill tags — distinct from the check-mark lists in Solutions */}
      <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-1">
        <div className="flex flex-wrap gap-2">
          {card.points.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-1.5
                         text-sm text-zinc-300 transition-colors duration-200
                         hover:border-[#455CFF]/40 hover:bg-[#455CFF]/[0.07] hover:text-white"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Differentiators({ data }) {
  const reduceMotion = useReducedMotion()

  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="max-w-2xl">
        <SectionHeading align="left" title={data.title} className="!mx-0 !px-0" />
        {data.intro && (
          <p className="mt-5 leading-relaxed text-zinc-400">{data.intro}</p>
        )}
      </div>

      <div className="mt-16 md:mt-20">
        {/* Bottom border closes the last row */}
        <div className="border-b border-white/[0.07]">
          {data.cards.map((card, i) => (
            <Row
              key={card.title}
              card={card}
              index={i}
              reduceMotion={reduceMotion}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
