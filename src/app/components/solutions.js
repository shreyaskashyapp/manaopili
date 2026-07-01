"use client"

import { useRef } from "react"
import { motion, useScroll, useReducedMotion, useInView } from "framer-motion"
import { Check, Server, Database, ShieldCheck, Target, Sparkles } from "lucide-react"
import Reveal from "./reveal"

const ICONS = [Server, Database, ShieldCheck, Target, Sparkles]

const listVar = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const itemVar = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

/**
 * A single timeline row. In-view detection lights its rail node + title as it
 * reaches the middle of the viewport. No cards — just spaced editorial content.
 */
function Row({ item, Icon, reduceMotion }) {
  const rowRef = useRef(null)
  const inView = useInView(rowRef, { margin: "-45% 0px -45% 0px" })
  const active = inView

  return (
    <div
      ref={rowRef}
      className="relative flex flex-col pl-12 pt-16 first:pt-4 md:flex-row md:gap-12 md:pl-16 md:pt-28 md:first:pt-8 lg:gap-20"
    >
      {/* Node */}
      <span
        aria-hidden
        className={`absolute left-3 top-16 h-3 w-3 -translate-x-1/2 rounded-full bg-[#455CFF] transition-all duration-300 md:top-28 ${
          active
            ? "scale-125 shadow-[0_0_0_4px_rgba(69,92,255,0.18),0_0_18px_3px_rgba(69,92,255,0.65)]"
            : "opacity-40"
        }`}
      />

      {/* Sticky title with bare icon */}
      <div className="mb-6 md:mb-0 md:sticky md:top-32 md:h-fit md:w-1/3 md:max-w-xs md:self-start">
        <div className="flex items-center gap-3">
          <Icon
            className={`h-6 w-6 shrink-0 transition-colors duration-300 ${active ? "text-[#455CFF]" : "text-zinc-500"}`}
          />
          <h3
            className={`font-heading text-2xl leading-tight transition-colors duration-300 md:text-3xl ${
              active ? "text-white" : "text-zinc-500"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* Content — no card, just spaced text */}
      <div className="md:flex-1">
        <Reveal>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">{item.description}</p>
          <motion.ul
            className="mt-7 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 md:mt-9"
            variants={reduceMotion ? undefined : listVar}
            initial={reduceMotion ? false : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.3 }}
          >
            {item.capabilities.map((c) => (
              <motion.li
                key={c}
                variants={reduceMotion ? undefined : itemVar}
                className="flex items-start gap-3 text-base text-zinc-300"
              >
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#455CFF]" strokeWidth={3} />
                <span>{c}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Reveal>
      </div>
    </div>
  )
}

/**
 * "Solutions We Deliver" — sleek journey-map timeline: a scroll-linked blue rail,
 * sticky category titles with icons, and spaced editorial content.
 */
export default function Solutions({ data }) {
  const items = data.items
  const reduceMotion = useReducedMotion()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  })

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div ref={containerRef} className="relative mx-auto max-w-5xl">
        {/* Rail track + scroll-linked fill */}
        <div aria-hidden className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
        <motion.div
          aria-hidden
          style={{ scaleY: reduceMotion ? 1 : scrollYProgress, transformOrigin: "top" }}
          className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#455CFF] via-[#455CFF] to-[#455CFF]/20"
        />

        <div className="flex flex-col">
          {items.map((item, i) => (
            <Row key={item.title} item={item} Icon={ICONS[i % ICONS.length]} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </div>
  )
}
