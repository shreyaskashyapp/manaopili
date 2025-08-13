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
    { id: "name", label: "Name", type: "text", placeholder: "Your name", isRequired:true },
    { id: "email", label: "Email", type: "email", placeholder: "Your email",isRequired:true  },
    { id: "company", label: "Company Name", type: "text", placeholder: "Your company",isRequired:true  },
    { id: "service", label: "Service Needed",isSelection:true,isRequired:true }
];

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
          {/* why manaopili wheel */}
          <div className="flex justify-center items-center md:gap-2 gap-0 px-3 py-4 md:py-1">
            <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center">{`Why Mana'o Pili?`}</h2>
          </div>
          <WhyManaopiliWheel />
        </div>
        <div className="flex justify-center items-center py-8 md:pb-10 md:py-0">
          <SurveyButton title='Take Our Survey' url='/survey-list'/>
        </div>
      </div>
    </div>
  )
}