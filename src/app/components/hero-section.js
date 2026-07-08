"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import WordReveal from "./word-reveal"

// Tailwind can't compile interpolated classes — map the legacy height prop
// values to static classes so every existing caller keeps working.
const HEIGHTS = {
  "[50vh]": "min-h-[50vh]",
  "[70vh]": "min-h-[70vh]",
}

/**
 * Shared subpage hero — homepage hero character on every interior page:
 * #141414 base, full-bleed wireframe backdrop, drifting blue aurora, film grain,
 * vignette, word-by-word title. `bgColor` is accepted for backwards compatibility
 * but no longer used. `bgImage` defaults to the Hawaiian-islands wireframe and can
 * be overridden per page, or set to null for an aurora-only hero.
 */
export default function HeroSection({
  data,
  bgColor,
  height = "[70vh]",
  bgImage = "/digital-assets/hi-islands.webp",
}) {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)

  // Gentle background parallax as the hero scrolls away (matches the homepage hero).
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80])

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
      ref={sectionRef}
      className={`relative w-full ${HEIGHTS[height] || "min-h-[70vh]"} flex items-center overflow-hidden bg-[#141414]`}
    >
      {/* Full-bleed wireframe backdrop (parallax) + legibility scrim */}
      {bgImage && (
        <>
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={reduceMotion ? undefined : { y: bgY }}
          >
            <Image
              src={bgImage}
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom opacity-50"
            />
          </motion.div>
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#141414]/40" />
        </>
      )}

      {/* Aurora — blue depth glow behind the title, built from CSS
          radial-gradients instead of blur filters (a 160px blur pegs
          WebKit/iOS; a gradient renders essentially free, near-identical look). */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[18%] top-[55%] h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(69,92,255,0.18)_0%,rgba(69,92,255,0.05)_40%,transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[20%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(69,92,255,0.08)_0%,transparent_70%)]"
      />

      {/* Film grain for texture consistency with homepage */}
      <div aria-hidden className="hero-grain pointer-events-none absolute inset-0 z-[1]" />

      {/* Depth vignette + bottom fade into the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_50%,#141414_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-32 bg-gradient-to-t from-[#141414] to-transparent"
      />

      <div className="relative z-10 flex max-w-5xl flex-col gap-6 px-8 pt-24 pb-16 md:mx-20 lg:mx-44">
        {/* Accent bar — small, deliberate */}
        <motion.span
          aria-hidden
          className="block h-1 w-14 rounded-full bg-[#455CFF] origin-left"
          {...(reduceMotion
            ? {}
            : {
                initial: { scaleX: 0 },
                animate: { scaleX: 1 },
                transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
              })}
        />

        {/* Title — word-by-word reveal on load */}
        <WordReveal
          words={typeof data?.title === "string" ? data.title : ""}
          as="h1"
          trigger="load"
          delayChildren={0.1}
          stagger={0.09}
          className="text-5xl font-light leading-[1.05] text-white md:text-7xl"
        />

        {/* Description */}
        {data?.description && (
          <motion.div {...appear(0.5)}>
            <p className="max-w-3xl text-base leading-relaxed text-zinc-300 md:text-xl">
              {data.description}
            </p>
          </motion.div>
        )}

        {/* CTA */}
        {data?.cta && (
          <motion.div {...appear(0.65)} className="flex flex-wrap gap-4 pt-2">
            {data.cta}
          </motion.div>
        )}
      </div>
    </div>
  )
}
