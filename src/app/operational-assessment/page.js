"use client"

import { useRef } from "react"
import { motion, useScroll, useInView, useReducedMotion } from "framer-motion"
import { Check } from "lucide-react"
import HeroSection from "../components/hero-section"
import SurveyButton from "../components/surveyButton"
import Reveal from "../components/reveal"
import SectionHeading from "../components/section-heading"

const hero = {
  title: "Operational Assessment",
  description: (
    <>
      Mana&apos;o Pili helps organizations improve ServiceNow maturity, governance, and outcomes{" "}
      <span className="text-[#455CFF]">using the systems and investments already in place</span>.
    </>
  ),
  cta: (
    <>
      <a
        href="/survey-list"
        className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm tracking-wide text-white backdrop-blur-md ring-1 ring-inset ring-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 hover:ring-[#455CFF]/30 md:text-base"
      >
        Start a Digital Trip Assessment
      </a>
      <a
        href="#approach"
        className="flex items-center gap-2 py-3 px-2 text-lg font-thin text-gray-300 transition-colors hover:text-[#455CFF]"
      >
        See how it works →
      </a>
    </>
  ),
}

const problems = [
  "Fragmented intake and workflows",
  "Inconsistent data and poor CMDB trust",
  "Manual approvals and workarounds",
  "Low adoption across business teams",
  "Customizations that block scalability",
  "Lack of ownership and governance",
  "Compliance risks buried in daily operations",
]

const phases = [
  { number: "01", name: "Assess",    description: "Baseline your current state across people, process, and technology. Identify maturity gaps, operational risk, and quick wins." },
  { number: "02", name: "Stabilize", description: "Fix what is breaking the platform today — intake, routing, ownership, lifecycle states, and data quality." },
  { number: "03", name: "Optimize",  description: "Streamline workflows and reduce manual effort. Improve usability and align how teams actually work." },
  { number: "04", name: "Govern",    description: "Establish control without slowing the business down. Ownership, change discipline, release management, and auditability." },
  { number: "05", name: "Scale",     description: "Create a clear path forward across the platform. Enable growth into adjacent capabilities and AI readiness." },
]

const platformFocus = [
  "ITSM stabilization and workflow alignment",
  "CMDB and service data foundation",
  "ITAM lifecycle and asset governance",
  "IRM and compliance workflows",
  "SecOps operational integration",
  "CSM and customer operations",
  "SPM and portfolio visibility",
  "Platform governance and release discipline",
  "AI readiness and control models",
]

const whyCards = [
  { title: "Founder-Led Delivery",       description: "Senior architects directly engaged in every program." },
  { title: "Regulated Industry Depth",   description: "Experience across pharma, healthcare, finance, energy, and public sector." },
  { title: "Operational Focus",          description: "We improve how the business runs, not just how the tool is configured." },
  { title: "Practical Execution",        description: "Targeted improvements with measurable outcomes, not theoretical transformations." },
]

const outcomes = [
  "Trusted data and reporting",
  "Faster and more accurate routing",
  "Reduced manual work",
  "Clear ownership across services",
  "Improved audit readiness",
  "Higher platform adoption",
  "Sustainable governance model",
  "Foundation for AI and automation",
]

/** One phase row on the scroll-lit rail — node + ghost ordinal light as it centers. */
function PhaseRow({ phase }) {
  const rowRef = useRef(null)
  const inView = useInView(rowRef, { margin: "-45% 0px -45% 0px" })

  return (
    <div ref={rowRef} className="relative flex flex-col gap-2 pl-12 pt-14 first:pt-4 md:flex-row md:gap-12 md:pl-16 md:pt-20">
      {/* Node */}
      <span
        aria-hidden
        className={`absolute left-3 top-16 h-3 w-3 -translate-x-1/2 rounded-full bg-[#455CFF] transition-all duration-300 md:top-24 ${
          inView
            ? "scale-125 shadow-[0_0_0_4px_rgba(69,92,255,0.18),0_0_18px_3px_rgba(69,92,255,0.65)]"
            : "opacity-40"
        }`}
      />

      <div className="flex items-baseline gap-5 md:w-1/3 md:max-w-xs md:shrink-0">
        <span
          aria-hidden
          className={`font-heading select-none text-5xl font-light leading-none transition-colors duration-300 md:text-6xl ${
            inView ? "text-[#455CFF]/40" : "text-white/[0.07]"
          }`}
        >
          {phase.number}
        </span>
        <h3
          className={`font-heading text-2xl leading-tight transition-colors duration-300 md:text-3xl ${
            inView ? "text-white" : "text-zinc-500"
          }`}
        >
          {phase.name}
        </h3>
      </div>

      <Reveal className="md:flex-1 md:pt-2">
        <p className="max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">{phase.description}</p>
      </Reveal>
    </div>
  )
}

function PhaseRail() {
  const containerRef = useRef(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 85%"],
  })

  return (
    <div ref={containerRef} className="relative mx-auto max-w-5xl">
      <div aria-hidden className="absolute left-3 top-2 bottom-2 w-px bg-white/10" />
      <motion.div
        aria-hidden
        style={{ scaleY: reduceMotion ? 1 : scrollYProgress, transformOrigin: "top" }}
        className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-[#455CFF] via-[#455CFF] to-[#455CFF]/20"
      />
      <div className="flex flex-col pb-4">
        {phases.map((phase) => (
          <PhaseRow key={phase.number} phase={phase} />
        ))}
      </div>
    </div>
  )
}

export default function OperationalAssessmentPage() {
  return (
    <div className="bg-[#141414] w-full">

      <HeroSection data={hero} bgColor="from-[#455CFF] to-[#141414]" height="[70vh]" />

      {/* ── THE PROBLEM — two-column: heading left, list right ── */}
      <Reveal as="section" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span aria-hidden className="mb-6 block h-1 w-12 rounded-full bg-[#455CFF]" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight mb-6">
              Most programs fail because they try to do{" "}
              <span className="text-[#455CFF]">too much at once</span>
            </h2>
            <p className="text-white/60 md:text-lg text-base leading-relaxed">
              What we typically walk into when we engage a new client.
            </p>
          </div>
          <ul className="space-y-4 pt-2">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-4 text-white/70 md:text-lg text-base">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#455CFF] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ── OUR MODEL — statement section ── */}
      <Reveal as="section" className="bg-white/[0.015] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading title="Digital Transformation in Place" className="mb-4" />
          <p className="text-white/60 md:text-lg text-base text-center max-w-2xl mx-auto leading-relaxed mb-12">
            A practical model for modernization. We improve what already exists instead of replacing it.
          </p>

          {/* Statement rows — negative scratched / positive affirmed */}
          <div>
            {[
              { negative: "Rip and replace",            positive: "We improve what you already have" },
              { negative: "Disruption to the business", positive: "We work alongside live operations" },
              { negative: "Multi-year reset",            positive: "We deliver outcomes in weeks"      },
            ].map(({ negative, positive }, i) => (
              <div key={negative} className={`grid grid-cols-2 gap-6 md:gap-16 py-6 border-b border-white/10 ${i > 0 ? "border-t border-white/10" : ""}`}>
                <span className="text-lg md:text-2xl font-normal text-white/30 line-through decoration-[#455CFF] decoration-2 leading-tight">
                  {negative}
                </span>
                <span className="text-lg md:text-2xl font-normal text-[#e2e2e2] leading-tight">
                  {positive}
                </span>
              </div>
            ))}
          </div>

          <p className="text-white/50 md:text-lg text-base text-center max-w-xl mx-auto leading-relaxed mt-10">
            We stabilize, simplify, and scale the platform while it continues to operate.
          </p>
        </div>
      </Reveal>

      {/* ── OUR APPROACH — scroll-lit phase rail ── */}
      <section id="approach" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading title="Our Approach" className="mb-12 md:mb-16" />
          </Reveal>
          <PhaseRail />
        </div>
      </section>

      {/* ── PLATFORM FOCUS — two-column: heading left, pills right ── */}
      <Reveal as="section" className="bg-white/[0.015] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span aria-hidden className="mb-6 block h-1 w-12 rounded-full bg-[#455CFF]" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight mb-6">
              Platform Focus Areas
            </h2>
            <p className="text-white/60 md:text-lg text-base leading-relaxed">
              We focus on the core systems that drive operational performance and underpin everything else.
            </p>
          </div>
          <ul className="space-y-4 pt-2">
            {platformFocus.map((item) => (
              <li key={item} className="flex items-start gap-4 text-white/70 md:text-lg text-base">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#455CFF] shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ── WHY MANA'O PILI — editorial grid, no card boxes ── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeading title="Why Mana'o Pili" className="mb-12 md:mb-16" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-12">
            {whyCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.08}>
                <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-[#455CFF]" />
                <h3 className="font-heading text-2xl leading-snug text-white md:text-3xl">{card.title}</h3>
                <p className="mt-3 text-white/60 md:text-lg text-base leading-relaxed">{card.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES — two-column: heading left, list right ── */}
      <Reveal as="section" className="bg-white/[0.015] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <span aria-hidden className="mb-6 block h-1 w-12 rounded-full bg-[#455CFF]" />
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight mb-6">
              What Changes After Engagement
            </h2>
            <p className="text-white/60 md:text-lg text-base leading-relaxed">
              Measurable, operational improvements that carry forward.
            </p>
          </div>
          <ul className="space-y-4 pt-2">
            {outcomes.map((item) => (
              <li key={item} className="flex items-start gap-4 text-white/70 md:text-lg text-base">
                <Check className="mt-1 h-4 w-4 shrink-0 text-[#455CFF]" strokeWidth={3} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ── BOTTOM CTA ── */}
      <Reveal as="section" className="py-20 md:py-28 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight mb-6">
            Start with clarity, not a transformation program
          </h2>
          <p className="text-white/60 md:text-lg text-base max-w-xl mx-auto mb-10 leading-relaxed">
            The Digital Trip Assessment gives you a focused view of your current maturity, operational risk, and the most practical path forward — using what you already have.
          </p>
          <div className="flex justify-center">
            <SurveyButton title="Schedule an Assessment" url="/survey-list" />
          </div>
        </div>
      </Reveal>

    </div>
  )
}
