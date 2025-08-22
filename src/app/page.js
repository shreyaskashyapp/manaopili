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

const sections = [
  {
    title: "Get Started",
    description: "Begin your journey with our tailored assessment.",
    link: "/survey-list",
  },
  {
    title: "What We Do",
    description: "Explore our comprehensive suite of AI-driven solutions to boost efficiency.",
    link: "/services",
  },
  {
    title: "About",
    description: "Learn why industry leaders choose us to achieve their operational goals.",
    link: "/about",
  }
];

const formFields = [
  { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired: true },
  { id: "email", label: "Email", type: "email", placeholder: "Your email", isRequired: true },
  { id: "company", label: "Company Name", type: "text", placeholder: "Your company", isRequired: true },
  { id: "service", label: "Service Needed", isSelection: true, isRequired: true }
];

const journeyMapData = {
  header: {
    title: "Your Journey to ServiceNow Success",
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
  }
}


const serviceOptions = [
  { value: "general-inquiry", label: "General Inquiry" },
  { value: "strategy-roadmap", label: "ServiceNow Strategy & Roadmap Consulting Services" },
  { value: "implementation", label: "ServiceNow Implementation Services" },
  { value: "custom-app-dev", label: "ServiceNow Custom Application Development (AppEngine) Services" },
  { value: "managed-services", label: "ServiceNow Managed Services" },
  { value: "careers", label: "Careers with Mana'o Pili" }
];

export default function HomePage() {
  useEffect(() => {
    activateServer()
  }, [])
  return (
    <div className="bg-[#141414] text-white">
      <div className="w-full">
        <div className="">
          <div className="relative h-full md:h-[100vh] bg-gradient-to-b from-[#455CFF] to-[#141414] w-full flex flex-col justify-center items-center overflow-hidden">
            <div className="relative pt-[100px] md:pt-0 flex flex-col md:flex-row">
              <div className="relative z-10 px-6 lg:px-10 flex flex-col md:w-1/2 justify-center items-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
                  Achieve Digital Transformation with
                  <br className="hidden sm:inline" />
                  <span className="text-[#deff00] italic"> {`Mana'o Pili`}</span>
                </h1>
                <p className="text-base md:text-2xl text-gray-300 mb-10  mx-auto">
                  Embark on a transformative journey with our <span className='text-[#deff00]'>Digital Trip</span> approach, optimizing your <span className='text-[#deff00]'>ServiceNow</span> investment for unparalleled success.
                </p>
                <div className="">
                  {/* <Link href="/survey-list">
                    <Button size="lg" variant="outline" className="text-[#455CFF]  bg-blue-200 font-heading hover:bg-[#deff00] px-20 py-6 text-2xl rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                      Get Started
                    </Button>
                  </Link> */}
                </div>
              </div>
              <div className="relative px-4 md:w-1/2 md:pr-6">
                <ContactFormV2 formFields={formFields} serviceOptions={serviceOptions} />
              </div>
            </div>
          </div>
          {/* Transformm your business  */}
          <div className='flex justify-center items-center pt-20 md:gap-2 gap-0 px-3  '>
            <h2 className="text-4xl md:text-5xl  font-normal text-[#e2e2e2] text-center">Transform your business.</h2>
            <Image src="/arrow_yellow.png" alt="Arrow" width={28} height={28} />
          </div>
          <Cards data={sections} />
          <div>
            <Timeline data={journeyMapData} />
          </div>
          <div className="flex justify-center items-center md:gap-2 gap-0 px-3 pt-8 pb-4 md:pb-0 md:pt-16 ">
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center">{`Why Mana'o Pili?`}</h2>
          </div>
          <WhyManaopiliWheel />
        </div>
        {/* Contact us banner */}
        <ContactBanner />
      </div>
    </div>
  )
}