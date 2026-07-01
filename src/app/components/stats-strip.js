"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion"

function CountUp({ to, suffix = "", duration = 1.8 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const startTime = performance.now()
    const tick = (now) => {
      const t = Math.min((now - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - t, 4)
      setValue(Math.round(eased * to))
      if (t < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return <span ref={ref}>{value}{suffix}</span>
}

const STATS = [
  { to: 100, suffix: "+", label: "Implementations Led" },
  { to: 20, suffix: "+", label: "Years on ServiceNow" },
  { to: 5, suffix: "", label: "Regulated Industries" },
  { to: 100, suffix: "%", label: "Architect-Led Delivery" },
]

export default function StatsStrip() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)

  // Scroll-driven parallax so the palms drift up as the section scrolls through
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const palmY = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/[0.05] bg-[#141414] py-20 md:py-28"
    >
      {/* Palm trees — screen blend on the motion.div so the transform doesn't trap the blend mode */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={reduceMotion ? undefined : { y: palmY, mixBlendMode: "screen" }}
      >
        <Image
          src="/digital-assets/palm-trees-long.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.28 }}
        />
      </motion.div>

      {/* Soft top/bottom fades so the palms bleed into the surrounding dark sections */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent to-[#141414]"
      />
      {/* Blue center glow lifts the numbers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(69,92,255,0.08)_0%,transparent_70%)]"
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/[0.07]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-3 text-center sm:px-8"
            >
              <span className="font-heading text-[clamp(3rem,7vw,5.5rem)] font-light leading-none text-white tabular-nums">
                <CountUp to={stat.to} suffix={stat.suffix} />
              </span>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">{stat.label}</p>
              <span aria-hidden className="h-px w-8 rounded-full bg-[#455CFF] opacity-60" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-12 text-center text-xs tracking-widest uppercase text-zinc-600"
        >
          Audit cycles reduced from weeks to hours &nbsp;·&nbsp; Senior team, every engagement
        </motion.p>
      </div>
    </section>
  )
}
