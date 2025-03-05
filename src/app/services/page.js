'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Zap,
  Settings,
  Users,
  LineChart,
  ArrowRight,
  Wrench as Tool,
  Check,
  X
} from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"
import { Button } from '@/components/ui/button'

const categories = [
  "IMPLEMENTATIONS",
  "CONSULTING",
  "MANAGED SERVICES",
  "ENHANCEMENTS"
];

const services = {
  "IMPLEMENTATIONS": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Technology Workflows (Tx)",
      description: "Expert guidance for Technology Workflows implementation and optimization.",
      slug: "technology-workflows"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Customer Workflows (Cx)",
      description: "Tailored ServiceNow Customer Workflow implementation and support.",
      slug: "customer-workflows"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "IT Operations Management",
      description: "Comprehensive ITOM solutions for long-term success and visibility.",
      slug: "it-operations-management"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Strategic Portfolio Management",
      description: "Optimized project and portfolio management aligned with business goals.",
      slug: "strategic-portfolio-management"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "IT Asset Management",
      description: "Efficient ITAM solutions for compliance and cost savings.",
      slug: "it-asset-management"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integrated Risk Management (IRM)",
      description: "Comprehensive risk, security, and compliance management solutions.",
      slug: "integrated-risk-management"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI and GenAI",
      description: "Cutting-edge AI and GenAI capabilities for ServiceNow optimization.",
      slug: "ai-and-genai"
    }
  ],
  "CONSULTING": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Strategic Planning",
      description: "Expert guidance to maximize your ServiceNow investment and streamline workflows.",
      slug: "strategic-planning"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Business Analysis",
      description: "ITIL, COBIT, and Lean-trained experts for process design and improvement.",
      slug: "business-analysis"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Process Improvement",
      description: "Data-driven process improvement consulting for measurable results.",
      slug: "process-improvement"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Technology Strategy",
      description: "Optimized ServiceNow platform performance and best practices implementation.",
      slug: "technology-strategy"
    }
  ],
  "MANAGED SERVICES": [
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fully Managed Platform",
      description: "Comprehensive managed services for your ServiceNow platform.",
      slug: "fully-managed-platform"
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Staff Augmentation",
      description: "Flexible staffing solutions for ServiceNow expertise on demand.",
      slug: "staff-augmentation"
    },
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Upgrade Support",
      description: "Expert guidance for seamless ServiceNow upgrades and migrations.",
      slug: "upgrade-support"
    },
  ],
  "ENHANCEMENTS": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "System Enhancements",
      description: "Tailored ServiceNow enhancements for optimal performance and user experience.",
      slug: "system-enhancements"
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Performance Tuning",
      description: "Data-driven performance improvements for speed and scalability.",
      slug: "performance-tuning"
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integration Services",
      description: "Seamless ServiceNow integrations for optimized workflows and data integrity.",
      slug: "integration-services"
    },
  ]
};

const comparisonData = [
  {
    category: "SAVINGS UPTO",
    manaopili: "70%",
    traditional: "30%",
    gsi: "70%",
  },
  {
    category: "EXPERIENCE LEVEL",
    subtitle: "% of expert & experienced team members*",
    manaopili: "40%+",
    traditional: "25%",
    gsi: "10%",
  },
  {
    category: "TECHNICAL EXPERTISE",
    subtitle: "% of technical team members",
    manaopili: "75%",
    traditional: "50%+",
    gsi: "50%",
  },
  {
    category: "CLIENT CENTRIC APPROACH",
    manaopili: {
      label: "Balanced",
      description: "Takes time to understand customer needs and provide balanced prescriptive guidance.",
    },
    traditional: {
      label: "Overly Prescriptive",
      description:
        "Can focus too much on verbose assessments and service offerings (i.e. accelerators) that often doesn't align with client use case.",
    },
    gsi: {
      label: "Non-Prescriptive",
      description: "Been known to implement what customer asks for, regardless of best practice",
    },
  },
  {
    category: "RISK FOR LICENSE UPSELL",
    manaopili: {
      label: "Low",
      description: "Focus on maximizing existing licenses before recommending new ones.",
    },
    traditional: {
      label: "Medium",
      description:
        "Recommend solutions using existing solution set. Only recommend licensing when absolutely needed.",
    },
    gsi: {
      label: "High",
      description: "Mandatory to maintain partner level. Financial incentives by ServiceNow.",
    },
  },
]

// Helper function to render percentage bars
const renderPercentageBar = (percentage) => {
  const value = parseInt(percentage)
  return (
    <div className="w-full bg-[#141414] rounded-full h-3 mt-2">
      <div className="bg-[#deff00] h-3 rounded-full" style={{ width: `${value}%` }}></div>
    </div>
  )
}

// Helper function to determine if a value is a percentage
const isPercentage = (value) => {
  return value.includes("%")
}

// Helper function to render risk level indicator
const renderRiskLevel = (level) => {
  const colors = {
    Low: "bg-green-500",
    Medium: "bg-yellow-500",
    High: "bg-red-500",
  }

  return (
    <div className="flex items-center mt-1">
      <div className={`w-3 h-3 rounded-full ${colors[level] || "bg-gray-500"}`}></div>
      <span className="ml-2 text-sm">{level}</span>
    </div>
  )
}


export default function Component() {
  const [activeCategory, setActiveCategory] = useState("IMPLEMENTATIONS");

  const [activeTab, setActiveTab] = useState("manaopili")


  return (
    <div className=" bg-[#141414]">
      <div className="w-full">
        <div className="relative h-[90vh] w-full flex flex-col justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/services_bg.png"
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col gap-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
              Services
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto ">
              At Mana'o Pili, we specialize in delivering end-to-end solutions across all ServiceNow product lines, 
              ensuring that your business maximizes its investment in the platform. Our team consists of highly 
              qualified and experienced professionals—including Architects, Consultants, Business Analysts, 
              and Project Managers—dedicated to optimizing your business processes and enhancing your ServiceNow experience.
            </p>
          </div>
        </div>
      

      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-2 md:flex md:justify-center md:gap-10 mb-10 md:mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "pb-2 md:pb-4 text-xs md:text-sm font-medium transition-colors relative whitespace-nowrap px-2",
                activeCategory === category
                  ? "text-blue-600"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {category}
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {services[activeCategory].map((service) => (
            <div
              key={service.title}
              className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 border border-zinc-600/50"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              </div>
              <p className="text-sm text-zinc-300 mb-4">{service.description}</p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-sm text-blue-600 hover:text-blue-500 transition-colors"
              >
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
            {`Ready to experience the Mana'o Pili difference?`}
          </p>
          <Link href="/survey">
            <Button size="lg" variant="outline" className="text-zinc-800  bg-blue-200 font-heading hover:bg-[#deff00] px-10 py-6 text-2xl rounded-full shadow-md hover:shadow-lg transition-all duration-300">
              Get Started
            </Button>
          </Link>
        </div>
        <section className="w-full bg-[#141414] text-white py-20 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Us?</h2>

            {/* Mobile Tabs */}
            <div className="md:hidden flex mb-8 border-b border-gray-800">
              <button
                onClick={() => setActiveTab("manaopili")}
                className={`flex-1 py-3 text-lg font-medium border-b-2 ${activeTab === "manaopili" ? "border-[#deff00] text-[#deff00]" : "border-transparent text-gray-400"
                  }`}
              >
                Mana'O Pili
              </button>
              <button
                onClick={() => setActiveTab("traditional")}
                className={`flex-1 py-3 text-lg font-medium border-b-2 ${activeTab === "traditional" ? "border-[#deff00] text-[#deff00]" : "border-transparent text-gray-400"
                  }`}
              >
                Traditional
              </button>
              <button
                onClick={() => setActiveTab("gsi")}
                className={`flex-1 py-3 text-lg font-medium border-b-2 ${activeTab === "gsi" ? "border-[#deff00] text-[#deff00]" : "border-transparent text-gray-400"
                  }`}
              >
                GSI
              </button>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-6">
              {comparisonData.map((item, index) => (
                <div key={`mobile-${index}`} className="bg-gray-900/50 rounded-lg overflow-hidden">
                  <div className="bg-gray-900 p-4">
                    <h3 className="text-lg font-bold">{item.category}</h3>
                    {item.subtitle && <p className="text-xs text-gray-400">{item.subtitle}</p>}
                  </div>

                  <div className="p-4">
                    {activeTab === "manaopili" && (
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-[#deff00] font-bold text-xl">
                            {typeof item.manaopili === "string" ? item.manaopili : item.manaopili.label}
                          </span>
                          <span className="bg-[#deff00] text-black px-3 py-1 rounded-full text-xs font-bold">OURS</span>
                        </div>
                        {typeof item.manaopili === "string" &&
                          isPercentage(item.manaopili) &&
                          renderPercentageBar(item.manaopili)}
                        {typeof item.manaopili !== "string" &&
                          item.category === "RISK FOR LICENSE UPSELL" &&
                          renderRiskLevel(item.manaopili.label)}
                      </div>
                    )}

                    {activeTab === "traditional" && (
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-bold text-xl">
                            {typeof item.traditional === "string" ? item.traditional : item.traditional.label}
                          </span>
                          <span className="bg-[gray-700] text-gray-300 px-3 py-1 rounded-full text-xs font-bold">
                            TRADITIONAL
                          </span>
                        </div>
                        {typeof item.traditional === "string" &&
                          isPercentage(item.traditional) &&
                          renderPercentageBar(item.traditional)}
                        {typeof item.traditional !== "string" &&
                          item.category === "RISK FOR LICENSE UPSELL" &&
                          renderRiskLevel(item.traditional.label)}
                      </div>
                    )}

                    {activeTab === "gsi" && (
                      <div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-bold text-xl">
                            {typeof item.gsi === "string" ? item.gsi : item.gsi.label}
                          </span>
                          <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs font-bold">GSI</span>
                        </div>
                        {typeof item.gsi === "string" && isPercentage(item.gsi) && renderPercentageBar(item.gsi)}
                        {typeof item.gsi !== "string" &&
                          item.category === "RISK FOR LICENSE UPSELL" &&
                          renderRiskLevel(item.gsi.label)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View - Card-Based Layout */}
            <div className="hidden md:flex flex-wrap justify-center gap-8">
              {/* ManaoPili Card */}
              <div className="w-full md:w-[30%] bg-gray-900/20 rounded-lg overflow-hidden border-2 border-[#deff00]">
                <div className="bg-[#deff00] p-4 text-center">
                  <h3 className="text-2xl font-bold text-black">Mana'O Pili</h3>
                </div>

                {comparisonData.map((item, index) => (
                  <div
                    key={`manaopili-card-${index}`}
                    className={`p-6 ${index !== comparisonData.length - 1 ? "border-b border-gray-800" : ""}`}
                  >
                    <h4 className="text-sm font-bold text-gray-400 mb-2">{item.category}</h4>
                    {item.subtitle && <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>}

                    {typeof item.manaopili === "string" ? (
                      <div>
                        <span className="text-[#deff00] font-bold text-xl">{item.manaopili}</span>
                        {isPercentage(item.manaopili) && renderPercentageBar(item.manaopili)}
                      </div>
                    ) : (
                      <div>
                        <span className="text-[#deff00] font-bold text-lg">{item.manaopili.label}</span>
                        {item.category === "RISK FOR LICENSE UPSELL" && renderRiskLevel(item.manaopili.label)}
                        {item.category === "CLIENT CENTRIC APPROACH" && (
                          <div className="mt-2 flex items-center">
                            <Check className="text-[#deff00] w-5 h-5 mr-2" />
                            <span className="text-sm">Balanced approach</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}


              </div>

              {/* Traditional Card */}
              <div className="w-full md:w-[30%] bg-gray-900/20 rounded-lg overflow-hidden border border-gray-800">
                <div className="bg-gray-800 p-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-300">Traditional</h3>
                </div>

                {comparisonData.map((item, index) => (
                  <div
                    key={`traditional-card-${index}`}
                    className={`p-6 ${index !== comparisonData.length - 1 ? "border-b border-gray-800" : ""}`}
                  >
                    <h4 className="text-sm font-bold text-gray-400 mb-2">{item.category}</h4>
                    {item.subtitle && <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>}

                    {typeof item.traditional === "string" ? (
                      <div>
                        <span className="text-gray-300 font-bold text-xl">{item.traditional}</span>
                        {isPercentage(item.traditional) && renderPercentageBar(item.traditional)}
                      </div>
                    ) : (
                      <div>
                        <span className="text-gray-300 font-bold text-lg">{item.traditional.label}</span>
                        {item.category === "RISK FOR LICENSE UPSELL" && renderRiskLevel(item.traditional.label)}
                        {item.category === "CLIENT CENTRIC APPROACH" && (
                          <div className="mt-2 flex items-center">
                            <X className="text-gray-500 w-5 h-5 mr-2" />
                            <span className="text-sm">Overly prescriptive</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}


              </div>

              {/* GSI Card */}
              <div className="w-full md:w-[30%] bg-gray-900/20 rounded-lg overflow-hidden border border-gray-800">
                <div className="bg-gray-800 p-4 text-center">
                  <h3 className="text-2xl font-bold text-gray-300">GSI</h3>
                </div>

                {comparisonData.map((item, index) => (
                  <div
                    key={`gsi-card-${index}`}
                    className={`p-6 ${index !== comparisonData.length - 1 ? "border-b border-gray-800" : ""}`}
                  >
                    <h4 className="text-sm font-bold text-gray-400 mb-2">{item.category}</h4>
                    {item.subtitle && <p className="text-xs text-gray-500 mb-2">{item.subtitle}</p>}

                    {typeof item.gsi === "string" ? (
                      <div>
                        <span className="text-gray-300 font-bold text-xl">{item.gsi}</span>
                        {isPercentage(item.gsi) && renderPercentageBar(item.gsi)}
                      </div>
                    ) : (
                      <div>
                        <span className="text-gray-300 font-bold text-lg">{item.gsi.label}</span>
                        {item.category === "RISK FOR LICENSE UPSELL" && renderRiskLevel(item.gsi.label)}
                        {item.category === "CLIENT CENTRIC APPROACH" && (
                          <div className="mt-2 flex items-center">
                            <X className="text-gray-500 w-5 h-5 mr-2" />
                            <span className="text-sm">Non-prescriptive</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-6">
                *Expert and experienced team members is defined as ServiceNow certified technical resources with more than 3 years of implementation experience on the ServiceNow platform.
              </p>
            </div>
          </div>
        </section>

        <div className="text-center">
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
            {`Ready to experience the Mana'o Pili difference?`}
          </p>
            <Link href="/survey">
              <Button size="lg" variant="outline" className="text-zinc-800  bg-blue-200 font-heading hover:bg-[#deff00] px-10 py-6 text-2xl rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                Get Started
              </Button>
            </Link>

        </div>
      </div>
      </div>
    </div>
  );
}