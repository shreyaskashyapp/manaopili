'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import Cards from './components/homecards'
import WhyManaopiliWheel from './components/wheel'
import { useEffect } from "react"
import { activateServer } from "@/lib/utils"

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



export default function HomePage() {
  useEffect(()=>{
    activateServer()
  },[])
  return (
    <div className="bg-[#141414] text-white">
      <div className="w-full">
        <div className="">
          <div className="relative h-[100vh] bg-gradient-to-b from-[#455CFF] to-[#141414] w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
                Achieve Digital Transformation with
                <br className="hidden sm:inline" />
                <span className="text-[#deff00] italic"> {`Mana'o Pili`}</span>
              </h1>
              <p className="text-base md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Embark on a transformative journey with our <span className='text-[#deff00]'>Digital Trip</span> approach, optimizing your <span className='text-[#deff00]'>ServiceNow</span> investment for unparalleled success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/survey-list">
                  <Button size="lg" variant="outline" className="text-[#455CFF]  bg-blue-200 font-heading hover:bg-[#deff00] px-20 py-6 text-2xl rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <NewForm/>
          {/* Transformm your business  */}
          <div className='flex justify-center items-center pt-20 md:gap-2 gap-0 px-3  '>
            <h2 className="text-5xl  font-normal text-[#e2e2e2] text-center">Transform your business.</h2>
            <Image src="/arrow_yellow.png" alt="Arrow" width={28} height={28} />
          </div>
          <Cards data={sections} />
          {/* why manaopili wheel */}
          <div className="flex justify-center items-center md:gap-2 gap-0 px-3 py-4 md:py-1">
            <h2 className="text-5xl font-normal text-[#e2e2e2] text-center pb-2">{`Why Mana'o Pili?`}</h2>
          </div>
          <WhyManaopiliWheel />
        </div>
      </div>
    </div>
  )
}