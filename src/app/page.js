'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import Cards from './components/homecards'
import WhyManaopiliWheel from './components/wheel'
import { useEffect } from "react"
import { activateServer } from "@/lib/utils"
import ContactFormV2 from "./components/contact-form-v2"
import SurveyButton from "./components/surveyButton"
import Timeline from "./components/journey-map"
import ContactBanner from "./components/contact-banner"
import { ArrowRight, Award, Calendar, Check, CheckCircle, DollarSign, Heart, MessageSquare, RefreshCw, Users, Zap } from "lucide-react"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import Reveal from "./components/reveal"
import SectionHeading from "./components/section-heading"

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
    title: (
      <>
        Make <span className="text-[#deff00]">ServiceNow</span> Work in Regulated Environments
      </>
    ),
    subtitle: (
      <>
        We <span className="text-[#deff00]">stabilize ServiceNow platforms</span>, streamline operations, and turn <span className="text-[#deff00]">compliance into a continuous process</span>.
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
  useEffect(() => {
    activateServer()
  }, [])
  return (
    <div className="bg-[#141414] text-[#e2e2e2]">
      <div className="w-full">
        <div className="">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative min-h-[100svh] w-full overflow-hidden bg-[#0a0a0a] flex flex-col justify-center items-center"
          >

            {/* Ambient blue glow behind the headline */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/3 top-[-15%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[#455CFF] opacity-[0.6] blur-[150px]"
            />
            {/* Secondary blue depth glow, lower right */}
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-[40rem] w-[40rem] rounded-full bg-[#455CFF] opacity-[0.16] blur-[150px]"
            />

            {/* Oversized logo-wave watermark bleeding off the right edge */}
            <svg
              aria-hidden
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 46"
              className="pointer-events-none absolute -right-32 md:-right-24 top-1/2 -translate-y-1/2 w-[40rem] lg:w-[52rem] text-white opacity-[0.01]"
              fill="currentColor"
            >
              <path d="M25.3644 42.0497C22.2775 39.942 19.4949 39.6364 17.2599 41.0498C15.4662 42.1853 14.83 43.8822 15.4233 45.4796H0.655518C1.47288 45.3717 2.3013 45.1892 3.1477 44.925C9.28135 43.0123 13.884 37.4512 20.6386 37.7624C23.3479 37.8869 24.7393 39.068 25.3658 42.0497H25.3644Z" />
              <path d="M47.5437 0.264893V37.7154C45.7984 38.0722 44.0572 38.4415 42.2883 38.6476C38.3854 39.0998 34.5683 38.8121 31.1039 36.7722C27.8414 34.8498 27.4666 30.9677 30.1883 28.34C31.9959 26.596 34.8076 26.1894 37.3108 27.2875C38.7713 27.9279 39.9621 28.9707 41.2939 29.8585C40.5789 27.7149 39.2567 26.0428 37.4146 24.8078C32.6045 21.584 27.5164 21.5812 22.3467 23.7526C17.8961 25.621 14.5299 29.0564 10.876 32.0506C7.5056 34.8125 3.99137 38.5978 0 40.8687V0.264893L23.7712 13.232L47.5423 0.264893H47.5437Z" />
            </svg>

            {/* Film grain */}
            <div aria-hidden className="hero-grain pointer-events-none absolute inset-0 z-[1]" />

            {/* Bottom fade into the page */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#141414] z-[1]" />

            <motion.div
              variants={heroStagger}
              initial="hidden"
              animate="show"
              className="relative z-10 pt-[120px] pb-16 md:pt-0 md:pb-0 flex flex-col md:flex-row items-center gap-10 lg:gap-16 px-6 lg:px-20 w-full max-w-9xl"
            >
              <motion.div variants={heroStagger} className="flex flex-col md:w-1/2 justify-center items-start">
                <motion.h1 variants={heroFadeUp} className="text-5xl md:text-6xl lg:text-[5rem] text-left text-white mb-6 font-normal tracking-tight leading-[0.95]">
                  {data.hero.title}
                </motion.h1>
                <motion.p variants={heroFadeUp} className="text-lg md:text-xl text-left text-zinc-400 mb-8 max-w-xl leading-relaxed">
                  {data.hero.subtitle}
                </motion.p>
                <motion.ul variants={heroFadeUp} className="space-y-3.5 mb-2">
                  {data.hero.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-zinc-200 text-base md:text-lg">
                      <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full shrink-0">
                        <Check className="h-3 w-3 text-[#deff00]" strokeWidth={3} />
                      </span>
                      {b}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
              <motion.div variants={heroFadeUp} className="relative md:w-1/2 w-full">
                <ContactFormV2 formFields={data?.formFields} serviceOptions={data?.serviceOptions} title="Start with a 1 Week Operational Assessment" buttonText="Get My Assessment" />
              </motion.div>
            </motion.div>
          </motion.div>
          {/* What we do */}
          <section className="py-20 md:py-28">
            <Reveal className="container mx-auto">
              <SectionHeading title="Transform your business." className="mb-12 md:mb-16" />
              <Cards data={data?.sections} />
            </Reveal>
          </section>

          {/* Our process — faint wash panel */}
          <section className="bg-white/[0.015] py-20 md:py-28">
            <Reveal>
              <SectionHeading title="How We Can Help?" className="mb-10 md:mb-14" />
              <Timeline data={data?.journeyMap} />
            </Reveal>
          </section>

          {/* Why Mana'o Pili */}
          <section className="py-20 md:py-28">
            <Reveal>
              <SectionHeading title={`Why Mana'o Pili?`} className="mb-8 md:mb-12" />
              <div className="w-full">
                <WhyManaopiliWheel />
              </div>
              <div className="flex justify-center items-center pt-2">
                <SurveyButton title="Book Consultation" url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
              </div>
            </Reveal>
          </section>
        </div>
        {/* Contact us banner — faint wash panel */}
        <section className="bg-white/[0.015] py-20 md:py-28">
          <Reveal className="px-6">
            <ContactBanner />
          </Reveal>
        </section>
      </div>
    </div>
  )
}