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
import Comparison from '../components/comparison'

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
        {/* comparision section */}
        <Comparison/>

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