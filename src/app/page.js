"use client"

import {useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import Image from 'next/image'
import Cards from './components/cards'
import WhyManaopiliWheel from './components/wheel'

export default function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div className="bg-[#141414] text-white">
      <div className="w-full"> 
        <div className="">
          <div className="relative h-[90vh] w-full flex flex-col items-center justify-center overflow-hidden">
            <Image
              src="/bg_main.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
                Achieve Digital Transformation with
                <br className="hidden sm:inline" />
                <span className="text-[#deff00] italic"> {`Mana'o Pili`}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Embark on a transformative journey with our Digital Trip approach, optimizing your ServiceNow investment for unparalleled success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/survey">
                  <Button size="lg" variant="outline" className="text-[#0328fa]  bg-blue-200 font-heading hover:bg-[#deff00] px-20 py-6 text-2xl rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          {/* Transformm your business  */}
          <Cards/>
          {/* why manaopili wheel */}
          <WhyManaopiliWheel/>       
        </div>
        
      </div>
    </div>
  )
}