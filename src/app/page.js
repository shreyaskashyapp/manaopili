'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle, Users, Zap, Code, ChevronRight, Menu, X, ArrowUp, ChevronDown } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const features = [
    { icon: <CheckCircle className="h-6 w-6" />, title: 'Best Value', description: 'Competitive pricing for your digital transformation needs.' },
    { icon: <Users className="h-6 w-6" />, title: 'Experience Level', description: 'Industry leaders choose us for their operational goals.' },
    { icon: <Code className="h-6 w-6" />, title: 'Technical Expertise', description: 'Certified experts tailoring solutions to your needs.' },
    { icon: <Zap className="h-6 w-6" />, title: 'Transform in Place', description: 'Achieve goals with your existing ServiceNow licensing.' },
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
    <div className="bg-gray-50">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-700">Mana'o Pili</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">What We Do</Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">About</Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors">Contact</Link>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Get Started</Button>
            </div>
            <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </nav>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white py-2">
            <div className="container mx-auto px-4 flex flex-col space-y-2">
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors py-2">What We Do</Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors py-2">About</Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-700 transition-colors py-2">Contact</Link>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">Get Started</Button>
            </div>
          </div>
        )}
      </header>

      <div className="w-full px-4">
        <div className="min-h-screen bg-gray-50">
          <div className="h-[700px] w-full flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-white to-indigo-50">
            <div className="absolute inset-0 bg-grid-background opacity-10" />
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
                Revolutionize Your Digital Landscape
                <br className="hidden sm:inline" />
                <span className="text-indigo-600">with Mana'o Pili</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto">
                Embark on a transformative journey with our Digital Trip approach, optimizing your ServiceNow investment for unparalleled success.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                  Explore Our Solutions
                </Button>
              </div>
            </div>
          </div>

          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6" />
            </button>
          )}
        </div>

        <section className="mb-24">
          <Card className="bg-white shadow-xl overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <h2 className="text-3xl font-semibold mb-6 text-gray-900">Why Choose Mana'o Pili?</h2>
                  <div className="space-y-4">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className={`flex items-center p-4 rounded-lg cursor-pointer transition-colors ${activeFeature === index ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'
                          }`}
                        onClick={() => setActiveFeature(index)}
                      >
                        <div className={`p-2 rounded-full ${activeFeature === index ? 'bg-indigo-200' : 'bg-gray-200'}`}>
                          {feature.icon}
                        </div>
                        <div className="ml-4">
                          <h3 className="font-semibold">{feature.title}</h3>
                          <p className="text-sm text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-indigo-600 text-white p-8 md:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-6">{features[activeFeature].icon}</div>
                    <h3 className="text-2xl font-semibold mb-4">{features[activeFeature].title}</h3>
                    <p className="text-indigo-100">{features[activeFeature].description}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-24">
          <div className="flex gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Transform Your Business</h2>
              <p className="text-gray-600 mb-6">
                Unlock the full potential of your ServiceNow investment with our tailored solutions. Our Digital Trip approach provides cost-effective transformation, maximizing your existing licensing to achieve your goals.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  Comprehensive assessment of your current setup
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  Customized transformation roadmap
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="h-5 w-5 mr-3 text-green-500" />
                  Efficient implementation with minimal disruption
                </li>
              </ul>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Discover Our Process
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Digital Transformation"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/80 to-purple-600/80 rounded-lg flex items-center justify-center">
                <p className="text-white text-2xl font-semibold text-center px-6">
                  Elevate your ServiceNow experience
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center mb-24">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Ready to Transform?</h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Take the first step by completing our complimentary Digital Trip survey for your ServiceNow product line.
            </p>
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8">
              Take Our Survey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </div>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Company</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Survey</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Support</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Cookie Policy</Link></li>
                <li><Link href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-indigo-400">Connect</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Mana'o Pili LLC. All rights reserved.
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}