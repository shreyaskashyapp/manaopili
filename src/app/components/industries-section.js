"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { ArrowRight, ArrowLeft } from "lucide-react"

const industries = [
  { slug: "life-sciences-pharma", name: "Life Sciences & Pharma", image: "/industries/lifescience-pharma.jpg", num: "01" },
  { slug: "healthcare", name: "Healthcare", image: "/industries/healthcare.jpg", num: "02" },
  { slug: "energy-utilities", name: "Energy & Utilities", image: "/industries/energy-utilities.jpg", num: "03" },
  { slug: "finance-insurance", name: "Finance & Insurance", image: "/industries/finance-insurance.jpg", num: "04" },
  { slug: "regulated-manufacturing", name: "Regulated Manufacturing", image: "/industries/regulated-manufacturing.jpg", num: "05" },
  { slug: "public-sector", name: "Public Sector", image: "/industries/public-sectors.jpg", num: "06" },
  { slug: "telecommunications", name: "Telecommunications", image: "/industries/telecommunications.jpg", num: "07" },
]

const CARD_WIDTH = 340
const CARD_GAP = 16

export default function IndustriesSection() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateArrows = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateArrows()
    el.addEventListener("scroll", updateArrows, { passive: true })
    return () => el.removeEventListener("scroll", updateArrows)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * (CARD_WIDTH + CARD_GAP) * 2, behavior: "smooth" })
  }

  return (
    <section className="w-full px-2">

      {/* Header row */}
      <motion.div
        className="flex items-end justify-between mb-10 px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div>
          <h2
            className="text-5xl md:text-6xl font-bold text-[#e2e2e2]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Industries We Serve
          </h2>
          <p className="text-zinc-500 text-sm mt-3">
            Regulated enterprises across critical sectors.
          </p>
        </div>

        {/* Arrow controls */}
        <div className="hidden md:flex items-center gap-2 shrink-0 ml-8">
          <button
            onClick={() => scroll(-1)}
            disabled={!canScrollLeft}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            disabled={!canScrollRight}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-500 hover:border-zinc-600 hover:text-white transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Carousel */}
      <div className="relative">
        {/* Right fade hint */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(90deg, transparent, #08080f)" }}
        />

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth px-6 pb-2"
          style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.slug}
              className="shrink-0"
              style={{ width: CARD_WIDTH, scrollSnapAlign: "start" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.05 }}
            >
              <Link
                href={`/manaforce/industries/${industry.slug}`}
                className="group relative block rounded-2xl overflow-hidden"
                style={{ height: 420 }}
              >
                {/* Image */}
                <Image
                  src={industry.image}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="340px"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Number */}
                <span className="absolute top-5 left-5 text-[11px] text-white/25 font-mono tracking-widest">
                  {industry.num}
                </span>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                  <p
                    className="text-white font-semibold text-lg leading-tight"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {industry.name}
                  </p>
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-colors duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
