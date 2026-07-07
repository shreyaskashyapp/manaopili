"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion"
import Reveal from "./reveal"
import WordReveal from "./word-reveal"

// Per-tile background treatments — same family, different depth, all dark
// enough that the content stays effortlessly readable.
const TILE_BG = [
  "bg-gradient-to-br from-[#455CFF]/20 via-[#141414] to-[#141414]",
  "bg-gradient-to-tl from-[#455CFF]/20 via-[#141414] to-[#141414]",
  "bg-[radial-gradient(circle_at_85%_15%,rgba(69,92,255,0.45)_0%,#141414_60%)]",
]

/* The tile IS the content: a real heading, a supporting lead, and the
   keypoints as the tile's second voice — big type with blue indices. */
function ContentTile({ card, index }) {
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/10 p-8 shadow-[0_20px_80px_rgba(69,92,255,0.14)] md:p-12 lg:p-14 xl:p-16 ${TILE_BG[index % TILE_BG.length]}`}
    >

      {/* Heading + lead */}
      <div className="relative max-w-2xl">
        <span aria-hidden className="mb-6 block h-1 w-12 rounded-full bg-[#455CFF]" />
        <h3 className="font-heading text-3xl leading-[1.05] text-white md:text-4xl lg:text-5xl">
          {card.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-400 lg:text-lg">
          {card.lead}
        </p>
      </div>

      {/* Keypoints — the tile's second voice: big type, blue indices.
          Grid is capped (max-w) so both columns stay grouped on the left
          instead of flying to the far edges on wide tiles. */}
      <div className="relative mt-8 border-t border-white/10 pt-6 md:pt-8">
        <ul className="grid max-w-3xl grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2 md:gap-y-5">
          {card.points.map((p, i) => (
            <li key={p} className="flex items-baseline gap-3.5">
              <span
                aria-hidden
                className="shrink-0 text-[11px] tracking-widest text-[#455CFF]"
              >
                0{i + 1}
              </span>
              <span className="font-heading text-lg leading-snug text-white/90 md:text-xl lg:text-2xl">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── Mobile / reduced-motion fallback: calm stacked version ── */

function Stacked({ data }) {
  return (
    <div className="container mx-auto flex flex-col gap-10 px-6 py-20 md:py-28">
      <Reveal>
        <h2 className="font-heading max-w-2xl text-4xl leading-tight text-white">{data.title}</h2>
        {data.intro && <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">{data.intro}</p>}
      </Reveal>
      {data.cards.map((card, i) => (
        <Reveal key={card.title} delay={0.05} className="min-h-[24rem]">
          <ContentTile card={card} index={i} />
        </Reveal>
      ))}
    </div>
  )
}

/* ── Desktop: pinned horizontal gallery ────────────────────── */

function Gallery({ data }) {
  const outerRef = useRef(null)
  const trackRef = useRef(null)
  const [maxX, setMaxX] = useState(0)
  const [index, setIndex] = useState(1)

  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] })
  // Light spring smooths the horizontal track on native scroll — kept snappy so
  // the tiles stay locked to the scroll rather than trailing behind ("laggy").
  const smooth = useSpring(scrollYProgress, { stiffness: 160, damping: 34, mass: 0.25 })
  const x = useTransform(smooth, [0, 1], [0, -maxX])

  // Measure how far the track must travel; re-measure on resize so the scrub
  // always ends exactly at the last slide.
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setMaxX(Math.max(0, trackRef.current.scrollWidth - window.innerWidth))
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(3, Math.floor(v * 3) + 1)
    if (idx !== index) setIndex(idx)
  })

  return (
    <section ref={outerRef} className="relative h-[350vh]">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden bg-[#141414]">
        {/* Track */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max items-center gap-[7vw] px-[8vw] will-change-transform"
        >
          {/* Slide 0 — intro: the section headline, editorial and assembling */}
          <div className="w-[55vw] max-w-[680px] shrink-0">

            <WordReveal
              as="h2"
              trigger="inView"
              words={data.title}
              className="font-heading max-w-2xl text-4xl leading-[1.08] text-white lg:text-5xl xl:text-6xl"
            />
            {data.intro && (
              <p className="mt-6 max-w-lg leading-relaxed text-zinc-400 lg:text-lg">
                {data.intro}
              </p>
            )}
          </div>

          {/* Slides 1–3 — content tiles */}
          {data.cards.map((card, i) => (
            <div
              key={card.title}
              className="relative h-[62vh] max-h-[600px] w-[70vw] max-w-[860px] shrink-0 lg:w-[56vw] xl:w-[48vw]"
            >
              <ContentTile card={card} index={i} />
            </div>
          ))}
        </motion.div>

        {/* Bottom chrome — progress bar + counter + caption */}
        <div className="absolute bottom-9 left-1/2 w-[62vw] max-w-[1100px] -translate-x-1/2">
          <div className="relative h-px w-full bg-zinc-800">
            <motion.div
              style={{ scaleX: smooth, transformOrigin: "left" }}
              className="absolute inset-0 bg-zinc-400"
            />
          </div>
          <div className="mt-3 flex items-baseline justify-between">
            <span className="text-sm tracking-widest text-zinc-400">
              {index}/3<span className="text-zinc-400">_</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-zinc-500">
              {data.title}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * "A Different Kind of ServiceNow Consulting Firm" — pinned horizontal gallery
 * where each slide is a content-forward tile: a real Degular heading, its lead,
 * and the keypoints set large with blue indices.
 */
export default function Differentiators({ data }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <Stacked data={data} />
  }

  return (
    <>
      <div className="hidden md:block">
        <Gallery data={data} />
      </div>
      <div className="md:hidden">
        <Stacked data={data} />
      </div>
    </>
  )
}
