"use client"

import HeroSection from "../components/hero-section"
import SurveyButton from "../components/surveyButton"

const hero = {
  title: "Operational Assessment",
  description: (
    <>
      Mana&apos;o Pili helps organizations improve ServiceNow maturity, governance, and outcomes{" "}
      <span className="text-[#deff00]">using the systems and investments already in place</span>.
    </>
  ),
  cta: (
    <>
      <a
        href="/survey-list"
className="flex hover:text-white border-gray-300 bg-transparent hover:bg-[#455cff] hover:border-[#455cff] text-gray-300 font-thin text-xl items-center gap-2 rounded-lg py-3 px-4 border-2"
      >
        <span className="text-lg">Start a Digital Trip Assessment</span>
        <img src="/arrow_white.png" alt="" width={13} height={13} />
      </a>
      <a
        href="#approach"
        className="flex items-center gap-2 text-gray-300 hover:text-[#deff00] text-lg font-thin transition-colors py-3 px-2"
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

export default function OperationalAssessmentPage() {
  return (
    <div className="bg-[#141414] w-full">

      <HeroSection data={hero} bgColor="from-[#455CFF] to-[#141414]" height="[70vh]" />

      {/* ── THE PROBLEM — two-column: heading left, list right ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight mb-6">
              Most programs fail because they try to do{" "}
              <span className="text-[#deff00]">too much at once</span>
            </h2>
            <p className="text-white/60 md:text-lg text-base leading-relaxed">
              What we typically walk into when we engage a new client.
            </p>
          </div>
          <ul className="space-y-4 pt-2">
            {problems.map((p) => (
              <li key={p} className="flex items-start gap-4 text-white/70 md:text-lg text-base">
                <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-[#deff00] shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── OUR MODEL — statement section ── */}
      <section className="bg-zinc-900/40 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center leading-tight mb-4">
            Digital Transformation in Place
          </h2>
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
              <div key={negative} className={`grid grid-cols-2 gap-6 md:gap-16 py-6 border-b border-zinc-700/50 ${i > 0 ? "border-t border-zinc-700/50" : ""}`}>
                <span className="text-lg md:text-2xl font-normal text-white/30 line-through decoration-[#deff00] decoration-2 leading-tight">
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
      </section>

      {/* ── OUR APPROACH — centered heading + card grid ── */}
      <section id="approach" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center leading-tight mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="rounded-2xl bg-gradient-to-b from-[#141414] to-zinc-900 p-8 border border-zinc-800/60 hover:border-[#deff00]/20 transition-colors">
                <p className="text-[#deff00] text-sm tracking-widest font-mono mb-3">{phase.number}</p>
                <h3 className="text-2xl font-normal text-[#e2e2e2] mb-3">{phase.name}</h3>
                <p className="text-white/60 md:text-lg text-base leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PLATFORM FOCUS — two-column: heading left, pills right ── */}
      <section className="bg-zinc-900/40 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
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
      </section>

      {/* ── WHY MANA'O PILI — centered heading + card grid ── */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center leading-tight mb-12">
            Why Mana&apos;o Pili
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="rounded-2xl bg-gradient-to-b from-[#141414] to-zinc-900 p-8 border border-zinc-800/60 hover:border-[#deff00]/20 transition-colors">
                <h3 className="text-xl font-normal text-[#deff00] mb-3">{card.title}</h3>
                <p className="text-white/60 md:text-lg text-base leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES — two-column: heading left, list right ── */}
      <section className="bg-zinc-900/40 py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
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
                <span className="mt-1 text-[#deff00] font-bold text-lg leading-snug">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 text-center">
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
      </section>

    </div>
  )
}
