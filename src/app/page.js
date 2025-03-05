"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Users, Zap, Code, ArrowUp, BarChart, Cog } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'

import './css/circle.css'


export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections = [
    {
      title: "Get Started",
      description: "Begin your journey with our tailored assessment.",
      link: "/survey",
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

  const features = [
    {
      icon: <BarChart className="h-8 w-8 text-blue-500" />,
      title: "Comprehensive Assessment",
      description: "In-depth analysis of your current ServiceNow setup to identify optimization opportunities."
    },
    {
      icon: <Cog className="h-8 w-8 text-blue-500" />,
      title: "Customized Roadmap",
      description: "Tailored transformation strategy aligned with your business goals and existing licensing."
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      title: "Efficient Implementation",
      description: "Streamlined execution with minimal disruption to your ongoing operations."
    }
  ]

  const benefits = [
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: 'Best Value',
      description: 'Competitive pricing for your digital transformation needs.',
      color: 'bg-green-500'
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: 'Experience Level',
      description: 'Industry leaders choose us for their operational goals.',
      color: 'bg-blue-500'
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: 'Technical Expertise',
      description: 'Certified experts tailoring solutions to your needs.',
      color: 'bg-purple-500'
    },
    {
      icon: <Zap className="h-10 w-10" />,
      title: 'Transform in Place',
      description: 'Achieve goals with your existing ServiceNow licensing.',
      color: 'bg-yellow-500'
    },
  ]


  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const [rotation, setRotation] = useState(0); // Current rotation
  const [targetRotation, setTargetRotation] = useState(0); // Target rotation
  const [isRotating, setIsRotating] = useState(false); // State to track if the rotation is happening

  // Labels and their corresponding rotation angles
  const labels = {
    savings: -110,
    experience: -40,
    customerCentric: -200,
    transform: 30,
    technical: -250,
  };

  // Function to start rotating to a target
  const rotateToTarget = (newRotation) => {
    const currentRotation = rotation % 360; // Normalize current rotation
    const diff = (newRotation - currentRotation + 540) % 360 - 180; // Calculate shortest path to target
    setTargetRotation(rotation + diff); // Set the target rotation to the current rotation + the shortest difference
    setIsRotating(true); // Start rotating
  };

  // Effect to smoothly rotate toward the target rotation
  useEffect(() => {
    if (isRotating && rotation !== targetRotation) {
      const step = (targetRotation - rotation) / 10; // Small steps to smooth the transition
      const timeout = setTimeout(() => {
        setRotation((prevRotation) =>
          Math.abs(prevRotation - targetRotation) < 1
            ? targetRotation
            : prevRotation + step
        );
      }, 30);
      return () => clearTimeout(timeout); // Clean up the timeout
    } else {
      setIsRotating(false); // Stop rotating when target is reached
    }
  }, [rotation, targetRotation, isRotating]);


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
          <section className="pt-20  bg-[#141414]">
            <div className="container mx-auto ">
              <div className='flex justify-center items-center md:gap-2 gap-0 px-3  '>
                <h2 className="text-5xl  font-normal text-[#e2e2e2] text-center">Transform your business.</h2>
                <Image src="/arrow_yellow.png" alt="Arrow" width={28} height={28} />
              </div>
              <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-10 lg:py-20 lg:mx-10 mx-4'>
                {sections.map((section,index)=>(
                  <Card key={index} className='flex flex-col md:w-1/3 md:h-[300px] lg:h-[250px] lg:py-2 md:px-1 px-3 gap-3 bg-gradient-to-br from-zinc-900 to-[#141414] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-2xl border-none shadow-md hover:bg-gradient-to-br hover:from-neutral-900 hover:via-blue-800 hover:to-neutral-300'>
                    <CardHeader>
                      <CardTitle className='text-2xl lg:text-3xl font-normal text-[#deff00] '>
                      {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className='text-lg lg:text-xl font-normal text-[#e2e2e2] '>{section.description}</p>
                    </CardContent>
                    <CardFooter className='flex justify-end'>
                      <Image src="/arrow_yellow.png" alt="Arrow" width={25} height={25} />
                    </CardFooter>
                  </Card>
                ))}

              </div>
            </div>
          </section>
          {/* why manaopili wheel */}
          <section className="pb-20 ">
            <div className='container mx-auto gap'>
              <div className='flex justify-center items-center md:gap-2 gap-0 px-3  '>
                <h2 className="text-5xl font-normal text-[#e2e2e2] text-center pb-2">Why Mana'O Pili?</h2>
              </div>
              <div className=' flex justify-center items-center'>
                <div className="circle_container">
                  <div className="outer-circle"></div>
                  <div
                    className="inner-circle"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  ></div>
                  <div className="center-circle"></div>
                  <div className="center-logo">
                    <img src='./Logo_white.png' alt="Logo" width="50" height="50" />
                  </div>
                  <div className="outer-circle-dot">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                    </svg>
                  </div>

                  {/* Savings label */}
                  <div
                    className="label savings cursor-pointer hover:text-yellow-text"
                    onMouseEnter={() => rotateToTarget(labels.savings)} // Rotate to the target angle for Savings
                    onTouchStart={() => rotateToTarget(labels.savings)} // Handle mobile touch
                  >
                    Savings
                  </div>

                  <div className="outer-circle-dot2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                    </svg>
                  </div>

                  {/* Experience label */}
                  <div
                    className="label experience cursor-pointer hover:text-yellow-text"
                    onMouseEnter={() => rotateToTarget(labels.experience)} // Rotate to the target angle for Experience
                    onTouchStart={() => rotateToTarget(labels.experience)} // Handle mobile touch
                  >
                    Experience
                  </div>

                  <div className="outer-circle-dot3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                    </svg>
                  </div>

                  {/* Customer-Centric label */}
                  <div
                    className="label customer-centric cursor-pointer hover:text-yellow-text"
                    onMouseEnter={() => rotateToTarget(labels.customerCentric)} // Rotate to the target angle for Customer-Centric
                    onTouchStart={() => rotateToTarget(labels.customerCentric)} // Handle mobile touch
                  >
                    Customer <br /> Centric
                  </div>

                  <div className="outer-circle-dot4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                    </svg>
                  </div>

                  {/* Transform label */}
                  <div
                    className="label transform cursor-pointer hover:text-yellow-text"
                    onMouseEnter={() => rotateToTarget(labels.transform)} // Rotate to the target angle for Transform
                    onTouchStart={() => rotateToTarget(labels.transform)} // Handle mobile touch
                  >
                    Transform <br />
                    in Place
                  </div>

                  <div className="outer-circle-dot5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <circle cx="7.00003" cy="6.60586" r="6.1282" fill="white" />
                    </svg>
                  </div>

                  {/* Technical label */}
                  <div
                    className="label technical cursor-pointer hover:text-yellow-text"
                    onMouseEnter={() => rotateToTarget(labels.technical)} // Rotate to the target angle for Technical
                    onTouchStart={() => rotateToTarget(labels.technical)} // Handle mobile touch
                  >
                    Technical <br />
                    Expertise
                  </div>
                </div>

              </div>
            </div>


          </section>
        </div>
        
      </div>
    </div>
  )
}