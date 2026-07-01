"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import Reveal from "./reveal"
import SectionHeading from "./section-heading"

/**
 * "A Different Kind of ServiceNow Consulting Firm" — spaced columns that
 * assemble on scroll: each column starts lower than the last (diagonal cascade)
 * and rises/fades into an aligned row with full-height dividers. No numbers —
 * a small blue accent bar anchors each column. Stacks on mobile.
 */

function Column({ progress, index, card, reduceMotion }) {
  const start = index * 0.15
  const end = Math.min(1, start + 0.6)
  const y = useTransform(progress, [start, end], [90 + index * 70, 0])
  const opacity = useTransform(progress, [start, end], [0, 1])
  const style = reduceMotion ? undefined : { y, opacity }

  return (
    <div className="px-8 first:pl-0 last:pr-0">
      <motion.div style={style} className="flex flex-col pt-8">
        <span aria-hidden className="mb-7 h-1 w-12 rounded-full bg-[#455CFF]" />
        <h3 className="font-heading text-2xl leading-snug text-white md:text-3xl xl:text-4xl">{card.title}</h3>
        <p className="mt-4 leading-relaxed text-zinc-400">{card.lead}</p>
        <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
          {card.points.map((p) => (
            <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-300">
              <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#455CFF]" strokeWidth={3} />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  )
}

export default function Differentiators({ data }) {
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] })

  return (
    <div className="container mx-auto px-4 lg:px-10">
      <div className="max-w-2xl">
        <SectionHeading align="left" title={data.title} className="!mx-0 !px-0" />
        {data.intro && <p className="mt-5 leading-relaxed text-zinc-400">{data.intro}</p>}
      </div>

      {/* Desktop — assembling row */}
      <div
        ref={ref}
        className="mt-16 hidden min-h-[420px] grid-cols-3 divide-x divide-white/10 md:mt-24 md:grid"
      >
        {data.cards.map((card, i) => (
          <Column key={card.title} progress={scrollYProgress} index={i} card={card} reduceMotion={reduceMotion} />
        ))}
      </div>

      {/* Mobile — stacked */}
      <div className="mt-12 flex flex-col gap-12 md:hidden">
        {data.cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.05}>
            <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-[#455CFF]" />
            <h3 className="font-heading text-2xl leading-snug text-white">{card.title}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{card.lead}</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {card.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#455CFF]" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
