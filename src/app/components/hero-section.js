"use client"

import { motion, useReducedMotion } from "framer-motion"
import WordReveal from "./word-reveal"

export default function HeroSection({ data, bgColor, height = "[70vh]" }) {
  const reduceMotion = useReducedMotion()

  const appear = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
        }

  return (
    <div
      className={`w-full h-${height} flex justify-start items-center bg-gradient-to-b ${bgColor} relative overflow-hidden`}
    >
      {/* Film grain for texture consistency with homepage */}
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0 z-[1]" />

      <div className="relative z-10 px-8 md:mx-20 lg:mx-44 max-w-5xl flex flex-col gap-5">
        {/* Title — word-by-word reveal on load */}
        <WordReveal
          words={typeof data?.title === "string" ? data.title : ""}
          as="h1"
          trigger="load"
          delayChildren={0.1}
          stagger={0.09}
          className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
        />

        {/* Description */}
        <motion.div {...appear(0.45)}>
          <p className="text-gray-200 md:text-xl text-base leading-relaxed">{data?.description}</p>
        </motion.div>

        {/* CTA */}
        {data?.cta && (
          <motion.div {...appear(0.6)} className="flex flex-wrap gap-4 pt-2">
            {data.cta}
          </motion.div>
        )}
      </div>
    </div>
  )
}
