"use client"
import { useScroll, useTransform, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import SurveyButton from "./surveyButton"
import {
  Search,
  Map,
  Settings,
  Users,
  Headphones,
  CheckCircle,
  Target,
  Zap,
  Shield,
  Rocket,
  Database,
  Cloud,
  Lock,
  Gauge,
  Wrench,
} from "lucide-react"

export default function Timeline({ data }) {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  const getStepIcon = (stepId) => {
    const iconProps = { size: 20, className: "text-[#deff00]" }
    switch (stepId) {
      case 1:
        return <Search {...iconProps} />
      case 2:
        return <Map {...iconProps} />
      case 3:
        return <Settings {...iconProps} />
      case 4:
        return <Users {...iconProps} />
      case 5:
        return <Headphones {...iconProps} />
      default:
        return <Search {...iconProps} />
    }
  }

  const getHighlightIcon = (highlight) => {
    const iconProps = { size: 12, className: "text-[#deff00] flex-shrink-0" }

    // Map keywords to relevant icons
    const keywordMap = {
      Discovery: <Search {...iconProps} />,
      Assessment: <CheckCircle {...iconProps} />,
      Analysis: <Target {...iconProps} />,
      Strategy: <Map {...iconProps} />,
      Planning: <Target {...iconProps} />,
      Roadmap: <Map {...iconProps} />,
      Implementation: <Settings {...iconProps} />,
      Configuration: <Wrench {...iconProps} />,
      Integration: <Zap {...iconProps} />,
      Deployment: <Rocket {...iconProps} />,
      Migration: <Database {...iconProps} />,
      Enablement: <Users {...iconProps} />,
      Training: <Users {...iconProps} />,
      Documentation: <CheckCircle {...iconProps} />,
      Support: <Headphones {...iconProps} />,
      Monitoring: <Gauge {...iconProps} />,
      Optimization: <Zap {...iconProps} />,
      Security: <Shield {...iconProps} />,
      Cloud: <Cloud {...iconProps} />,
      Compliance: <Lock {...iconProps} />,
    }

    // Find matching icon or default to a generic one
    const matchedIcon = Object.keys(keywordMap).find((key) => highlight.toLowerCase().includes(key.toLowerCase()))

    return matchedIcon ? keywordMap[matchedIcon] : <CheckCircle {...iconProps} />
  }

  return (
    <section
      className="w-full py-8 md:py-10"
      ref={containerRef}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 ">
            <h2 className="flex justify-center items-center gap-0 md:gap-2 text-4xl md:text-5xl font-normal text-[#e2e2e2] leading-tight">
              {data.header.title}
            </h2>
            {/* <p className="text-base md:text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
              {data.header.subtitle}
            </p> */}
            {/* <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">{data.header.description}</p>
            <p className="text-base text-gray-400 max-w-4xl mx-auto leading-relaxed">{data.header.additionalInfo}</p> */}
          </div>

          {/* Timeline Section */}
          <div className="">
            <div ref={ref} className="relative">
              {data.timeline.steps.map((step, index) => (
                <div key={step.id} className="flex justify-start pt-10 md:gap-8">
                  <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                    <div className="h-12 absolute left-3 md:left-3 w-12 rounded-full bg-[#141414] flex items-center justify-center shadow-lg">
                      <div className="h-6 w-6 rounded-full bg-zinc-800 border-zinc-700 border-2 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#deff00]" />
                      </div>
                    </div>
                    <div className="hidden md:block md:pl-20">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">{step.step}</h3>
                      <h4 className="text-xl md:text-2xl font-bold text-white">{step.title}</h4>
                    </div>
                  </div>

                  <div className="relative pl-20 pr-4 md:pl-4 w-full">
                    <div className="md:hidden mb-4">
                      <h3 className="text-sm font-medium text-gray-500 mb-1">{step.step}</h3>
                      <h4 className="text-xl font-bold text-white">{step.title}</h4>
                    </div>


                    <div className="bg-gradient-to-br from-[#141414] to-zinc-900 border-gray-600/20 border rounded-xl p-4 md:p-5 hover:shadow-lg hover:shadow-zinc-800/20 transition-all duration-300">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{step.description}</p>


                      <div className="flex flex-col gap-1.5 md:gap-2">
                        {step.highlights.map((highlight, highlightIndex) => (
                          <div
                            key={highlightIndex}
                            className="text-xs text-[#deff00] font-medium flex items-center gap-1.5"
                          >
                            <p className="bg-zinc-700/20 flex items-center gap-1.5  px-2.5 py-1 rounded-full ">
                              {getHighlightIcon(highlight)}
                              {highlight}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div
                style={{
                  height: height + "px",
                }}
                className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
              >
                <motion.div
                  style={{
                    height: heightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-[#deff00] via-[#deff00] to-transparent from-[0%] via-[10%] rounded-full"
                />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            {/* <p className="text-lg md:text-xl text-zinc-300 py-8 px-4">
                            {`Ready to experience the Mana'o Pili difference?`}
                        </p> */}
            <div className="flex justify-center items-center pt-8">
              <SurveyButton title="Book Consultation" url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
