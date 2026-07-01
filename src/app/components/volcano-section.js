"use client"

import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"
import { DollarSign, Heart, RefreshCw, Users, Zap } from "lucide-react"
import { useRef } from "react"
import Reveal from "./reveal"
import SectionHeading from "./section-heading"
import GlossyButton from "./glossy-button"

const PILLARS = [
  { title: "Savings", description: "Delivering cost efficiencies through optimized processes.", icon: DollarSign },
  { title: "Experience", description: "Enhancing user and employee experiences across the enterprise.", icon: Users },
  { title: "Customer Centric", description: "Tailoring every solution to your unique needs and goals.", icon: Heart },
  { title: "Transform in Place", description: "Driving change without disrupting your business.", icon: RefreshCw },
  { title: "Technical Expertise", description: "Leveraging proven skills and innovation for ServiceNow success.", icon: Zap },
]

// Deterministic ember data — no Math.random so SSR/client match
const EMBER_ANIMS = ["ember-float", "ember-float-l", "ember-float-r"]
const EMBER_COLORS = ["#ff6b1a", "#ff9944", "#ffcc66"]
const EMBERS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  left: `${50 + Math.sin(i * 1.9) * 9}%`,
  bottom: `${36 + Math.cos(i * 2.5) * 7}%`,
  size: 2 + (i % 4),
  color: EMBER_COLORS[i % 3],
  anim: EMBER_ANIMS[i % 3],
  duration: `${2.0 + (i % 9) * 0.3}s`,
  delay: `${(i * 0.22) % 4.5}s`,
}))

function PillarCard({ pillar, index }) {
  const Icon = pillar.icon
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduceMotion ? undefined : { scale: 1.03, transition: { duration: 0.18 } }}
      className="group relative cursor-default overflow-hidden rounded-2xl border border-white/[0.07]
                 bg-white/[0.04] p-6 backdrop-blur-sm transition-colors duration-300
                 hover:border-[#455CFF]/35 hover:bg-[#455CFF]/[0.07]"
    >
      {/* Corner glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#455CFF]
                   opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25"
      />

      <div className="relative z-10 flex items-start gap-4">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl
                     border border-[#455CFF]/25 bg-[#455CFF]/10 transition-colors duration-300
                     group-hover:border-[#455CFF]/50 group-hover:bg-[#455CFF]/20"
        >
          <Icon className="h-5 w-5 text-[#455CFF]" />
        </span>
        <div>
          <h3 className="font-heading text-lg leading-snug text-white">{pillar.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{pillar.description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function VolcanoSection() {
  const reduceMotion = useReducedMotion()
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  // Volcano drifts upward as you scroll through — gives it life
  const volcanoY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#141414] py-20 md:py-32"
    >
      {/* Volcano backdrop — mix-blend-mode: screen on the motion.div so the blend
           composites correctly even when framer-motion applies scale/y transforms.
           Putting it only on the child img breaks inside a transformed stacking context. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={reduceMotion ? undefined : { y: volcanoY, mixBlendMode: "screen" }}
        initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/digital-assets/volcano.png"
          alt=""
          fill
          aria-hidden
          sizes="100vw"
          className="object-cover object-center"
          style={{ opacity: 0.72 }}
        />
      </motion.div>

      {/* Edge fades so volcano bleeds into the dark page seamlessly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141414] via-transparent to-[#141414]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#141414]/80 via-transparent to-[#141414]/80"
      />

      {/* Floating ember particles — only when motion is ok */}
      {!reduceMotion &&
        EMBERS.map((e) => (
          <span
            key={e.id}
            aria-hidden
            className="pointer-events-none absolute rounded-full"
            style={{
              left: e.left,
              bottom: e.bottom,
              width: `${e.size}px`,
              height: `${e.size}px`,
              backgroundColor: e.color,
              boxShadow: `0 0 ${e.size * 2}px ${e.color}`,
              animationName: e.anim,
              animationDuration: e.duration,
              animationDelay: e.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
              animationFillMode: "both",
            }}
          />
        ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Our Promise"
            title={`Why Mana'o Pili?`}
            className="mb-12 md:mb-16"
          />
        </Reveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <GlossyButton href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK || "#"}>
            Book a Consultation
          </GlossyButton>
        </div>
      </div>
    </section>
  )
}
