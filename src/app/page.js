"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, CheckCircle, Users, Zap, Code, ArrowUp, BarChart, Cog } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/header'
import Survey from './survey/page'
export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

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

  return (
    <div className="bg-black text-white">
      <Header />
      <div className="w-full ">
        <div className="min-h-screen bg-black">
        <div className="relative h-[800px] w-full flex flex-col items-center justify-center overflow-hidden">
        <Image
              src="/bg_main.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-blue-900/50 via-gray-800/60" />
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
                Revolutionize Your Digital Landscape with
                <br className="hidden sm:inline" />
                <span className="text-[#deff00] italic"> {`Mana'o Pili`}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
                Embark on a transformative journey with our Digital Trip approach, optimizing your ServiceNow investment for unparalleled success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg font-heading rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-blue-400 border-blue-400 font-heading hover:bg-blue-900/50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>
          <section className="py-16 bg-zinc-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-12 text-zinc-100 text-center">{`Why Choose Mana'o Pili?`}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((feature, index) => (
                  <Card
                    key={index}
                    className={`bg-zinc-800 border-zinc-700 overflow-hidden cursor-pointer transition-all duration-300 ${activeFeature === index ? 'ring-2 ring-blue-500' : ''
                      }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <CardContent className="p-6">
                      <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-100 text-center">{feature.title}</h3>
                      <p className="text-zinc-300 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-12">
                <Card className="bg-zinc-900 border-zinc-700">
                  <CardContent className="p-8">
                    <div
                      key={activeFeature}
                    >
                      <div className={`${benefits[activeFeature]?.color} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}>
                        {benefits[activeFeature]?.icon}
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-zinc-100 text-center">{benefits[activeFeature]?.title}</h3>
                      <p className="text-xl text-zinc-300 text-center max-w-2xl mx-auto">
                        { benefits[activeFeature]?.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section className=" pt-12">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold mb-8 text-zinc-100 text-center">Transform Your Business</h2>
              <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto text-center">
                Unlock the full potential of your ServiceNow investment with our tailored solutions. Our Digital Trip approach provides cost-effective transformation, maximizing your existing licensing to achieve your goals.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-zinc-800 border-zinc-700">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center mb-4">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-zinc-100 text-center">{feature.title}</h3>
                      <p className="text-zinc-300 text-center">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="text-center py-10 pb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Ready to Transform?</h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Take the first step by completing our complimentary Digital Trip survey for your ServiceNow product line.
              </p>
              <Link href={'/survey'}>
              <Button  size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-full">
                Take Our Survey    
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </div>
          </section>
        </div>
        {showScrollTop && (
            <Button size="lg" 
              onClick={scrollToTop}
              className=" fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
              aria-label="Scroll to top"
            >
            <ArrowUp className="h-6 w-6" />
          </Button>
        )}
      </div>
    </div>
  )
}