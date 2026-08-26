"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
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
        <span aria-hidden className="mb-6 block h-1 w-12 rounded-full bg-[#deff00]" />
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
                className="shrink-0 text-[11px] tracking-widest text-[#deff00]"
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

/* ── Desktop: user-driven horizontal scroller ──────────────────
   Same layout as the pinned gallery (intro slide + 3 tiles), but the section
   is normal height and NEVER pinned. Horizontal motion only happens when the
   user scrolls the track sideways or taps an arrow — vertical page scroll is
   always free, so nobody is trapped into viewing all three cards. */

function Gallery({ data }) {
  const trackRef = useRef(null)
  const [index, setIndex] = useState(1)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  // Progress bar follows the track's OWN horizontal scroll — no page scroll
  // is read or hijacked.
  const { scrollXProgress } = useScroll({ container: trackRef, axis: "x" })
  const smooth = useSpring(scrollXProgress, { stiffness: 200, damping: 40, mass: 0.3 })

  useMotionValueEvent(scrollXProgress, "change", (v) => {
    const idx = Math.min(3, Math.max(1, Math.round(v * 3)))
    setIndex((prev) => (prev !== idx ? idx : prev))
  })

  const updateEdges = (el) => {
    setAtStart(el.scrollLeft <= 2)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2)
  }

  // Initialise arrow enabled/disabled state on mount + resize.
  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    const measure = () => updateEdges(el)
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  const step = (dir) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.7, behavior: "smooth" })
  }

  return (
    <section className="bg-[#141414] py-16 md:py-24">
      {/* Track — native horizontal scroll (trackpad swipe / shift-wheel /
          arrows). Scrollbar hidden; the peeking next tile + progress bar +
          arrows are the affordances. */}
      <div
        ref={trackRef}
        onScroll={(e) => updateEdges(e.currentTarget)}
        className="flex snap-x snap-mandatory items-center gap-[7vw] overflow-x-auto scroll-pl-[8vw] scroll-pr-[8vw] px-[8vw] pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {/* Slide 0 — intro: the section headline, editorial and assembling */}
        <div className="w-[55vw] max-w-[680px] shrink-0 snap-start">

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
          {/* Directional cue: makes the horizontal mechanic obvious */}
          <div className="mt-10 flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-zinc-500">
            <span className="text-[#DEFF00]">Scroll to explore</span>
            <motion.span
              aria-hidden
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="text-[#deff00]"
            >
              →
            </motion.span>
          </div>
        </div>

        {/* Slides 1–3 — content tiles */}
        {data.cards.map((card, i) => (
          <div
            key={card.title}
            className="relative h-[62vh] max-h-[600px] w-[70vw] max-w-[860px] shrink-0 snap-center lg:w-[56vw] xl:w-[48vw]"
          >
            <ContentTile card={card} index={i} />
          </div>
        ))}
      </div>

      {/* Chrome — progress bar + counter + scroll cue + tiny arrows */}
      <div className="mx-auto mt-8 w-[84vw] max-w-[1100px]">
        <div className="relative h-px w-full bg-zinc-800">
          <motion.div
            style={{ scaleX: smooth, transformOrigin: "left" }}
            className="absolute inset-0 bg-[#DEFF00]"
          />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm tracking-widest text-[#DEFF00]">
            0{index} <span className="text-[#DEFF00]">/ 03</span>
          </span>
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#DEFF00] sm:flex">
              <span>Scroll</span>
              <motion.span
                aria-hidden
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="text-[#deff00]"
              >
                →
              </motion.span>
            </div>
            {/* Tiny arrow controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => step(-1)}
                disabled={atStart}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors duration-200 hover:border-[#455CFF]/40 hover:text-white disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-zinc-400"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => step(1)}
                disabled={atEnd}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-zinc-400 transition-colors duration-200 hover:border-[#455CFF]/40 hover:text-white disabled:opacity-30 disabled:hover:border-white/15 disabled:hover:text-zinc-400"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * "A Different Kind of ServiceNow Consulting Firm" — a user-driven horizontal
 * scroller (desktop) / stacked list (mobile & reduced-motion). Each tile is a
 * content-forward panel: a real Degular heading, its lead, and the keypoints
 * set large with blue indices.
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
