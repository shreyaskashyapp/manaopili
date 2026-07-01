'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import Cards from './components/homecards'
import WhyManaopiliWheel from './components/wheel'
import { useEffect, useRef } from "react"
import { activateServer } from "@/lib/utils"
import ContactFormV2 from "./components/contact-form-v2"
import SurveyButton from "./components/surveyButton"
import ContactBanner from "./components/contact-banner"
import Differentiators from "./components/differentiators"
import Solutions from "./components/solutions"
import { ArrowRight, ArrowUpRight, ArrowDown, Award, Calendar, Check, CheckCircle, DollarSign, Heart, MessageSquare, RefreshCw, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import Reveal from "./components/reveal"
import SectionHeading from "./components/section-heading"
import WordReveal from "./components/word-reveal"
import GlossyButton from "./components/glossy-button"
import StatsStrip from "./components/stats-strip"
import VolcanoSection from "./components/volcano-section"

// Hero load orchestration
const heroStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
}

const heroFadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

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
    intro: "We pair deep regulated-industry experience with senior, architect-led delivery — built to maximize what you already run.",
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
  journeyMap: {
    header: {
      title: "How We Can Help?",
      subtitle:
        "Every digital transformation is a journey. At Mana'o Pili, we guide you through each step — from strategy to sustained success — ensuring your ServiceNow investment delivers measurable business impact.",
      description: "",
      additionalInfo: "",
    },
    timeline: {
      title: "Journey Stages",
      steps: [
        {
          id: 1,
          step: "STEP 1",
          title: "Discovery & Assessment",
          description: "We begin by understanding your business needs, current processes, and challenges.",
          highlights: ["Identify gaps in workflows", "Define success metrics", "Prioritize initiatives"],
          imageSpace: true,
        },
        {
          id: 2,
          step: "STEP 2",
          title: "Strategy & Roadmap",
          description: "A clear blueprint tailored to your organization.",
          highlights: [
            "Align IT and business goals",
            "Build a transformation roadmap",
            "Establish timelines & milestones",
          ],
          imageSpace: true,
        },
        {
          id: 3,
          step: "STEP 3",
          title: "Implementation & Optimization",
          description: "Hands-on deployment by our expert team.",
          highlights: [
            "Configure and customize ServiceNow modules",
            "Integrate with existing systems",
            "Optimize workflows for efficiency",
          ],
          imageSpace: true,
        },
        {
          id: 4,
          step: "STEP 4",
          title: "Enablement & Adoption",
          description: "Driving value through people and processes.",
          highlights: [
            "Train your teams for smooth adoption",
            "Provide user-friendly knowledge resources",
            "Change management support",
          ],
          imageSpace: true,
        },
        {
          id: 5,
          step: "STEP 5",
          title: "Ongoing Support & Innovation",
          description: "Long-term partnership for continuous improvement.",
          highlights: [
            "Proactive monitoring & managed services",
            "Regular enhancements and upgrades",
            "AI & GenAI-driven innovation to stay ahead",
          ],
          imageSpace: true,
        },
      ],
    },
  },
  formFields: [
    { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired: true },
    { id: "email", label: "Email", type: "email", placeholder: "Your email", isRequired: true },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company", isRequired: true },
  ],


  serviceOptions: [
    { value: "general-inquiry", label: "General Inquiry" },
    { value: "strategy-roadmap", label: "ServiceNow Strategy & Roadmap Consulting Services" },
    { value: "implementation", label: "ServiceNow Implementation Services" },
    { value: "custom-app-dev", label: "ServiceNow Custom Application Development (AppEngine) Services" },
    { value: "managed-services", label: "ServiceNow Managed Services" },
    { value: "careers", label: "Careers with Mana'o Pili" },
  ],
};

const pillars = [
  {
    title: "Savings",
    description: "Delivering cost efficiencies through optimized processes.",
    icon: DollarSign,
  },
  {
    title: "Experience",
    description: "Enhancing user and employee experiences across the enterprise.",
    icon: Users,
  },
  {
    title: "Customer Centric",
    description: "Tailoring every solution to your unique needs and goals.",
    icon: Heart,
  },
  {
    title: "Transform in Place",
    description: "Driving change without disrupting your business.",
    icon: RefreshCw,
  },
  {
    title: "Technical Expertise",
    description: "Leveraging proven skills and innovation for ServiceNow success.",
    icon: Zap,
  },
]


export default function HomePage() {
  const heroRef = useRef(null)
  const reduceMotion = useReducedMotion()

  // Scroll-driven parallax as the hero exits
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
                  src="/digital-assets/honalulu-2-hero.png"
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
            {/* Aurora — drifting blue depth glow behind the headline */}
            {reduceMotion ? (
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[42%] z-[1] h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.14] blur-[170px]"
              />
            ) : (
              <>
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-1/2 top-[40%] z-[1] h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.16] blur-[170px]"
                  animate={{ x: [0, 70, -50, 0], y: [0, -40, 30, 0], scale: [1, 1.12, 0.95, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute left-[42%] top-[55%] z-[1] h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.10] blur-[150px]"
                  animate={{ x: [0, -60, 40, 0], y: [0, 30, -20, 0], scale: [1, 0.9, 1.1, 1] }}
                  transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
                />
              </>
            )}
            {/* Depth vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_45%,#141414_100%)]"
            />

            {/* Centered content */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-28 text-center">
              <motion.div
                className="mx-auto flex max-w-5xl flex-col items-center"
                style={reduceMotion ? undefined : { y: contentY }}
              >
                <WordReveal
                  words={data.hero.titleWords}
                  trigger="load"
                  delayChildren={0.15}
                  className="text-white text-6xl md:text-8xl font-light  leading-[1.05]"
                />

                <motion.p
                  {...appear(0.8)}
                  className="mt-7 max-w-2xl text-base md:text-xl leading-relaxed text-zinc-300"
                >
                  {data.hero.subtitle}
                </motion.p>

                <motion.div {...appear(1.05)} className="mt-10">
                  <GlossyButton href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK || "#"}>
                    Book a Consultation
                  </GlossyButton>
                </motion.div>

                {/* Proof points */}
                <motion.div
                  {...appear(1.25)}
                  className="mt-14 flex flex-col items-center divide-y divide-white/10 sm:flex-row sm:items-stretch sm:divide-y-0 sm:divide-x"
                >
                  {data.hero.bullets.map((p) => (
                    <p
                      key={p}
                      className="max-w-[16rem] px-7 py-3 text-sm leading-relaxed text-zinc-400 sm:py-0"
                    >
                      {p}
                    </p>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
          {/* Stats strip */}
          <StatsStrip />

          {/* What we do */}
          <section className="py-20 md:py-28">
            <Reveal className="container mx-auto">
              <SectionHeading title="Transform your business." className="mb-12 md:mb-16" />
              <Cards data={data?.sections} />
            </Reveal>
          </section>

          {/* A Different Kind of ServiceNow Consulting Firm */}
          <section className="relative overflow-hidden bg-white/[0.015] px-10 py-20 md:py-28">
            {/* Hawaiian Islands — screen blend on container; black dissolves, neon archipelago remains */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ mixBlendMode: "screen" }}
            >
              <Image
                src="/digital-assets/hi-islands.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{ opacity: 0.18 }}
              />
            </div>
            <div className="relative z-10">
              <Differentiators data={data?.differentiators} />
            </div>
          </section>

          {/* Solutions We Deliver */}
          <section className="py-20 md:py-28">
            <Reveal>
              <SectionHeading title="Solutions We Deliver" className="mb-12 md:mb-16" />
            </Reveal>
            <Solutions data={data?.solutions} />
          </section>

          {/* Why Mana'o Pili — volcano section */}
          <VolcanoSection />
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