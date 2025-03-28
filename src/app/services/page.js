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
import CompareCard from '../components/comparisionCards'
import Comparison from '../components/comparison'
import ServicesAccordion from '../components/services-accordion'

const categories = ["IMPLEMENTATIONS", "CONSULTING", "MANAGED SERVICES", "ENHANCEMENTS"]

const services = {
  IMPLEMENTATIONS: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Technology Workflows (Tx)",
      description: "Expert guidance for Technology Workflows implementation and optimization.",
      slug: "technology-workflows",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Workflows (Cx)",
      description: "Tailored ServiceNow Customer Workflow implementation and support.",
      slug: "customer-workflows",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "IT Operations Management",
      description: "Comprehensive ITOM solutions for long-term success and visibility.",
      slug: "it-operations-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Strategic Portfolio Management",
      description: "Optimized project and portfolio management aligned with business goals.",
      slug: "strategic-portfolio-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "IT Asset Management",
      description: "Efficient ITAM solutions for compliance and cost savings.",
      slug: "it-asset-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Integrated Risk Management (IRM)",
      description: "Comprehensive risk, security, and compliance management solutions.",
      slug: "integrated-risk-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "AI and GenAI",
      description: "Cutting-edge AI and GenAI capabilities for ServiceNow optimization.",
      slug: "ai-and-genai",
    },
  ],
  CONSULTING: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Strategic Planning",
      description: "Expert guidance to maximize your ServiceNow investment and streamline workflows.",
      slug: "strategic-planning",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Business Analysis",
      description: "ITIL, COBIT, and Lean-trained experts for process design and improvement.",
      slug: "business-analysis",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Process Improvement",
      description: "Data-driven process improvement consulting for measurable results.",
      slug: "process-improvement",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Technology Strategy",
      description: "Optimized ServiceNow platform performance and best practices implementation.",
      slug: "technology-strategy",
    },
  ],
  "MANAGED SERVICES": [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fully Managed Platform",
      description: "Comprehensive managed services for your ServiceNow platform.",
      slug: "fully-managed-platform",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Staff Augmentation",
      description: "Flexible staffing solutions for ServiceNow expertise on demand.",
      slug: "staff-augmentation",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Upgrade Support",
      description: "Expert guidance for seamless ServiceNow upgrades and migrations.",
      slug: "upgrade-support",
    },
  ],
  ENHANCEMENTS: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "System Enhancements",
      description: "Tailored ServiceNow enhancements for optimal performance and user experience.",
      slug: "system-enhancements",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Tuning",
      description: "Data-driven performance improvements for speed and scalability.",
      slug: "performance-tuning",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Integration Services",
      description: "Seamless ServiceNow integrations for optimized workflows and data integrity.",
      slug: "integration-services",
    },
  ],
}

const data = {
  "Mana'o Pili":
    [
      {
        title: "SAVINGS UPTO",
        value: 70,
        label: "70%"
      },
      {
        title: "EXPERIENCE LEVEL",
        subtitle: "% of expert & experienced team members*",
        value: 40,
        label: "40%+"
      },
      {
        title: "TECHNICAL EXPERTISE",
        subtitle: "% of technical team members",
        value: 75,
        label: "75%"
      },
      {
        title: "CLIENT CENTRIC APPROACH",
        label: "Balanced",
        logo: <Check className="text-green-400" />
      },
      {
        title: "RISK FOR LICENSE UPSELL",
        label: "Low",
        color: 'rounded-full w-3 h-3 bg-green-500'
      }
    ],
  "Service Now Partners": [
    {
      title: "SAVINGS UPTO",
      value: 30,
      label: "30%"
    },
    {
      title: "EXPERIENCE LEVEL",
      subtitle: "% of expert & experienced team members*",
      value: 25,
      label: "25%"
    },
    {
      title: "TECHNICAL EXPERTISE",
      subtitle: "% of technical team members",
      value: 50,
      label: "50%+"
    },
    {
      title: "CLIENT CENTRIC APPROACH",
      label: "Overly Prescriptive",
      logo: <X className="text-yellow-300" />
    },
    {
      title: "RISK FOR LICENSE UPSELL",
      label: "Medium",
      color: 'rounded-full w-3 h-3 bg-yellow-300'
    }
  ],
  "GSI":
    [
      {
        title: "SAVINGS UPTO",
        value: 70,
        label: "70%"
      },
      {
        title: "EXPERIENCE LEVEL",
        subtitle: "% of expert & experienced team members*",
        value: 10,
        label: "10%"
      },
      {
        title: "TECHNICAL EXPERTISE",
        subtitle: "% of technical team members",
        value: 50,
        label: "50%"
      },
      {
        title: "CLIENT CENTRIC APPROACH",
        label: "Non-Prescriptive",
        logo: <X className="text-red-400" />
      },
      {
        title: "RISK FOR LICENSE UPSELL",
        label: "High",
        color: 'rounded-full w-3 h-3 bg-red-400'
      }
    ]
};

const companies = [
  "Mana'o Pili",
  "Service Now Partners",
  "GSI",
]



export default function Component() {
  const [activeCategory, setActiveCategory] = useState("IMPLEMENTATIONS");

  const [activeTab, setActiveTab] = useState("manaopili")


  return (
    <div className=" bg-[#141414]">
      <div className="w-full">
        <div className="relative h-[70vh] w-full flex flex-col justify-center overflow-hidden bg-gradient-to-b from-blue-800 to-[#141414]">
          <div className="relative px-8 max-w-5xl mx-auto flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font text-white mb-6 leading-tight">
              Services
            </h1>
            <p className="text-gray-300 font-thin md:text-xl text-base w-3/4">
              Empowering your business with end-to-end <span className="text-[#deff00]">ServiceNow</span> solutions, driven by expert professionals to <span className="text-[#deff00]">maximize platform value</span>.
            </p>
          </div>
        </div>


        <div className="container mx-auto px-4 py-12">
          {/* <div className="grid grid-cols-2 md:flex md:justify-center md:gap-10 mb-10 md:mb-12 gap-4">
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
        </div> */}
          <ServicesAccordion services={services} categories={categories} />

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
          {/* <Comparison/> */}
          <div className='mt-16 text-center'>
            <h2 className='text-5xl  font-semibold text-[#e2e2e2] text-center'>
              Why Choose Us?
            </h2>
            <CompareCard data={data} companies={companies} />
          </div>

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