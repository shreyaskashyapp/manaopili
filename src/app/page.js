'use client'
import Image from 'next/image'
import Cards from './components/homecards'
import WhyManaopiliWheel from './components/wheel'
import { useEffect, useRef } from "react"
import { activateServer } from "@/lib/utils"
import ContactBanner from "./components/contact-banner"
import Differentiators from "./components/differentiators"
import Solutions from "./components/solutions"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Reveal from "./components/reveal"
import SectionHeading from "./components/section-heading"
import WordReveal from "./components/word-reveal"
import GlossyButton from "./components/glossy-button"
import FocusAreas from "./components/focus-areas"

const data = {
  hero: {
    titleWords: [
      { text: "Enable" },
      { text: "ServiceNow", accent: true },
      { text: "for" },
      { text: "Regulated" },
      { text: "Environments" },
    ],
    subtitle: (
      <>
        We <span className="text-[#455CFF]">stabilize ServiceNow platforms</span>, streamline operations, and turn <span className="text-[#455CFF]">compliance into a continuous process</span>.
      </>
    ),
    bullets: [
      "20+ years on ServiceNow, leading 100+ implementations",
      "Reduced audit cycles from weeks to hours",
      "Built for regulated and high-risk environments",
    ],
  },
  sections: [
    {
      title: "Get Started",
      description: "Begin your journey with our tailored assessment and start transforming today.",
      link: "/survey-list",
    },
    {
      title: "What We Do",
      description: "Explore our end-to-end ServiceNow solutions designed to maximize value.",
      link: "/services",
    },
    {
      title: "About",
      description: "Learn why industry leaders choose us to achieve their operational goals.",
      link: "/about",
    },
  ],
  differentiators: {
    title: "A Different Kind of ServiceNow Consulting Firm",
    intro: "We pair deep regulated-industry experience with senior, architect-led delivery, built to maximize what you already run.",
    cards: [
      {
        title: "Regulated Industry Experts",
        lead: "Deep experience across regulated, high-stakes sectors.",
        points: ["Healthcare", "Life Sciences", "Manufacturing", "Government", "Financial Services"],
      },
      {
        title: "Transform-in-Place",
        lead: "Maximize what you've already built.",
        points: ["Maximize investment", "Reduce technical debt", "Accelerate adoption", "Prepare for AI"],
      },
      {
        title: "Architect-Led Delivery",
        lead: "Outcome-driven partnerships.",
        points: ["Senior architects", "Enterprise governance", "Long-term partnerships", "Outcome focused"],
      },
    ],
  },
  solutions: {
    title: "Solutions We Deliver",
    items: [
      {
        title: "Enterprise Operations",
        description: "Optimize services and assets to keep your business running.",
        capabilities: [
          "IT Service Management (ITSM)",
          "Customer Service Management (CSM)",
          "IT Asset Management (ITAM)",
          "Hardware & Software Asset Management (HAM Pro / SAM Pro)",
        ],
      },
      {
        title: "Platform & Data",
        description: "Build a trusted digital foundation that scales with your organization.",
        capabilities: [
          "CMDB & CSDM",
          "IT Operations Management (ITOM)",
          "Integrations & APIs",
          "App Engine & Platform Extensibility",
        ],
      },
      {
        title: "Security & Compliance",
        description: "Embed governance, security, and compliance into every workflow.",
        capabilities: [
          "Security Incident Response (SIR)",
          "Vulnerability Response (VR)",
          "Integrated Risk Management (IRM)",
          "Governance, Risk & Compliance (GRC)",
        ],
      },
      {
        title: "Strategy & Portfolio",
        description: "Align technology investments with business priorities.",
        capabilities: [
          "Strategic Portfolio Management (SPM)",
          "Demand Management",
          "Project & Agile Management",
          "Enterprise Architecture",
        ],
      },
      {
        title: "AI & Intelligent Automation",
        description: "Transform work with responsible AI and intelligent automation.",
        capabilities: [
          "Now Assist",
          "AI Agents & Copilots",
          "AI Governance",
          "Workflow Automation",
          "Intelligent Knowledge",
        ],
      },
    ],
  },
};


export default function HomePage() {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Subtle background parallax as the hero scrolls away.
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 90])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60])

  // Helper: per-element entrance (fade + lift), skipped under reduced-motion.
  const appear = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
        }

  useEffect(() => {
    activateServer()
  }, [])
  return (
    <div className="bg-[#141414] text-[#e2e2e2]">
      <div className="w-full">
        <div className="">
          {/* Hero — sleek, centered, full-bleed Honolulu wireframe backdrop */}
          <section
            ref={heroRef}
            className="relative min-h-[100svh] w-full overflow-hidden bg-[#141414] flex flex-col"
          >
            {/* Background image (parallax + slow Ken Burns zoom-in) */}
            <motion.div
              aria-hidden
              className="absolute inset-0"
              style={reduceMotion ? undefined : { y: bgY }}
            >
              <motion.div
                className="absolute inset-0"
                {...(reduceMotion
                  ? {}
                  : { initial: { scale: 1.08 }, animate: { scale: 1 }, transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } })}
              >
                <Image
                  src="/digital-assets/honalulu-2-hero.webp"
                  alt=""
                  aria-hidden
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-bottom opacity-50"
                />
              </motion.div>
            </motion.div>

            {/* Legibility overlays (opacity of existing colors only — no new palette) */}
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#141414]/30" />
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#141414]/70 via-transparent to-[#141414]" />
            {/* Film grain */}
            <div aria-hidden className="hero-grain pointer-events-none absolute inset-0 z-[1]" />
            {/* Aurora — blue depth glow behind the headline. Built from CSS
                radial-gradients (not blur filters): a 170px gaussian blur pegs
                WebKit/iOS, while a gradient renders essentially free and looks
                near-identical. */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[50rem] w-[50rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(69,92,255,0.18)_0%,rgba(69,92,255,0.05)_40%,transparent_70%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[42%] top-[55%] z-[1] h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(69,92,255,0.11)_0%,transparent_70%)]"
            />
            {/* Depth vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,#141414_100%)]"
            />

            {/* Centered content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-24 text-center sm:px-6 sm:py-28">
              <motion.div
                className="mx-auto flex max-w-5xl flex-col items-center"
                style={reduceMotion ? undefined : { y: contentY }}
              >
                <WordReveal
                  words={data.hero.titleWords}
                  trigger="load"
                  delayChildren={0.15}
                  className="text-white text-[2.6rem] leading-[1.1] sm:text-6xl sm:leading-[1.05] md:text-8xl font-light"
                />

                <motion.p
                  {...appear(0.8)}
                  className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:mt-7 sm:max-w-2xl sm:text-base md:text-xl"
                >
                  {data.hero.subtitle}
                </motion.p>

                <motion.div {...appear(1.05)} className="mt-8 sm:mt-10">
                  <GlossyButton href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK || "#"}>
                    Book a Consultation
                  </GlossyButton>
                </motion.div>

                {/* Proof points */}
                <motion.div
                  {...appear(1.25)}
                  className="mt-10 flex w-full max-w-sm flex-col items-center divide-y divide-white/10 sm:mt-14 sm:w-auto sm:max-w-none sm:flex-row sm:items-stretch sm:divide-y-0 sm:divide-x"
                >
                  {data.hero.bullets.map((p) => (
                    <p
                      key={p}
                      className="max-w-[17rem] px-6 py-2.5 text-[13px] leading-relaxed text-zinc-400 sm:max-w-[16rem] sm:px-7 sm:py-0 sm:text-sm"
                    >
                      {p}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Areas we serve — compact keyword index, scrub-linked reveal */}
          <section className="pt-12 pb-4 md:pt-16 md:pb-6">
            <FocusAreas />
          </section>

          {/* What we do */}
          <section className="py-20 md:py-28">
            <Reveal className="container mx-auto">
              <SectionHeading title="Transform your business." className="mb-12 md:mb-16" />
              <Cards data={data?.sections} />
            </Reveal>
          </section>

          {/* A Different Kind of ServiceNow Consulting Firm — drag/swipe carousel */}
          <section>
            <Differentiators data={data?.differentiators} />
          </section>

          {/* Solutions We Deliver */}
          <section className="py-20 md:py-28">
            <Reveal>
              <SectionHeading title="Solutions We Deliver" className="mb-12 md:mb-16" />
            </Reveal>
            <Solutions data={data?.solutions} />
          </section>

          {/* Why Mana'o Pili */}
          <section className="py-20 bg-gradient-to-r from-[#141414] via-zinc-900 to-[#141414]  md:py-28">
            <Reveal>
              <SectionHeading title={`Why Mana'o Pili?`} className="mb-8 md:mb-12" />
              <div className="w-full">
                <WhyManaopiliWheel />
              </div>
              <div className="flex justify-center items-center pt-2">
                <GlossyButton href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK || "#"}>
                  Book a Consultation
                </GlossyButton>
              </div>
            </Reveal>
          </section>
        </div>
        {/* Contact us banner — faint wash panel */}
        <section className="py-20 md:py-28">
          <Reveal className="px-6">
            <ContactBanner />
          </Reveal>
        </section>
      </div>
    </div>
  )
}