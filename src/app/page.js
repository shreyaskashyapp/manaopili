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
          <div className="relative h-full md:h-[100vh] bg-gradient-to-b from-[#455CFF] to-[#141414] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="relative pt-[100px] md:pt-0 flex flex-col md:flex-row items-center gap-8 px-6 lg:px-20 w-full">
              <div className="relative z-10 flex flex-col md:w-1/2 justify-center items-start">
                <h1 className="text-4xl md:text-6xl lg:text-7xl text-left text-[#e2e2e2] mb-6 font-normal leading-tight">
                  {data.hero.title}
                </h1>
                <p className="text-lg md:text-xl text-left text-gray-300 mb-6 mx-auto">
                  {data.hero.subtitle}
                </p>
                <ul className="space-y-2 mb-10">
                  {data.hero.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-gray-300 text-base md:text-lg">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative md:w-1/2">
                <ContactFormV2 formFields={data?.formFields} serviceOptions={data?.serviceOptions} title="Start with a 1 Week Operational Assessment" buttonText="Get My Assessment" />
              </div>
            </div>
          </div>
          {/* Transformm your business  */}
          <div className="">
            <div className='flex justify-center items-center py-10 pt-20 md:pt-10  md:gap-2 gap-0 px-3  '>
              <h2 className="text-4xl md:text-5xl  font-normal text-[#e2e2e2] text-center">Transform your business.</h2>
              {/* <Image src="/arrow_yellow.png" alt="Arrow" width={28} height={28} /> */}
            </div>
            <Cards data={data?.sections} />
          </div>
          <div>
            <Timeline data={data?.journeyMap} />
          </div>
          {/* Why manaopili section */}
          <div className="">
            <div className="flex justify-center items-center md:gap-2 gap-0 px-3 pt-10">
              <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center">{`Why Mana'o Pili?`}</h2>
            </div>

            <div className="w-full">
              <WhyManaopiliWheel />
            </div>

            <div className="flex justify-center items-center pb-10">
              <SurveyButton title="Book Consultation" url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
            </div>
          </div>
        </div>
        {/* Contact us banner */}
        <div className="px-6">
          <ContactBanner />
        </div>
      </div>
    </div>
  )
}