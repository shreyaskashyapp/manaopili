'use client'

import { useState } from 'react'
import { 
  Zap, 
  Settings, 
  Users, 
  LineChart,
  ArrowRight ,
  Percent,
  Brain,
  Wrench as Tool,
  UserCheck,
  ShieldAlert 
} from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

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
      category: "SAVINGS",
      icon: <Percent className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Up to 70%",
      traditional: "Up to 30%",
      gsi: "Up to 70%"
    },
    {
      category: "EXPERIENCE LEVEL",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "40%+",
      traditional: "Up to 25%",
      gsi: "Up to 10%",
      description: "% of expert & experienced team members*"
    },
    {
      category: "TECHNICAL EXPERTISE",
      icon: <Tool className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "75%",
      traditional: "50%+",
      gsi: "50%",
      description: "% of technical team members"
    },
    {
      category: "CLIENT CENTRIC APPROACH",
      icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Balanced",
      traditional: "Overly Prescriptive",
      gsi: "Non-Prescriptive",
      manaoPiliDesc: "Takes time to understand customer needs and provide balanced prescriptive guidance.",
      traditionalDesc: "Can focus too much on verbose assessments and service offerings (i.e. accelerators) that often doesn't align with client use case.",
      gsiDesc: "Been known to implement what customer asks for, regardless of best practice"
    },
    {
      category: "RISK FOR LICENSE UPSELL",
      icon: <ShieldAlert className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Low",
      traditional: "Medium",
      gsi: "High",
      manaoPiliDesc: "Focus on maximizing existing licenses before recommending new ones.",
      traditionalDesc: "Recommend solutions using existing solution set. Only recommend licensing when absolutely needed.",
      gsiDesc: "Mandatory to maintain partner level. Financial incentives by ServiceNow."
    }
  ];

  export default function Component() {
    const [activeCategory, setActiveCategory] = useState("IMPLEMENTATIONS");
  
    return (
      <div className="min-h-screen bg-zinc-900 pt-8">
        <section className="  md:py-28 py-10 bg-gradient-to-b from-zinc-800 to-zinc-900 ">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">Services</h1>
            <p className="text-lg md:text-xl text-zinc-300 text-center max-w-4xl mx-auto">
             {` At Mana'o Pili, we specialize in delivering end-to-end solutions across all ServiceNow product lines, ensuring that your business maximizes its investment in the platform. Our team consists of highly qualified and experienced professionals—including Architects, Consultants, Business Analysts, and Project Managers—dedicated to optimizing your business processes and enhancing your ServiceNow experience.`}
            </p>
          </div>
        </section>
  
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
                  href={``}
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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-blue-600 hover:bg-blue-600 rounded-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font mb-8 text-white text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-zinc-600/50">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font- text-white">{item.category}</h3>
                </div>
                {item.description && (
                  <p className="text-sm text-zinc-400 mb-4">{item.description}</p>
                )}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">{`MANA'O PILI`}</span>
                    <span className="text-white font-bold">{item.manaoPili}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">TRADITIONAL PARTNERS</span>
                    <span className="text-zinc-300">{item.traditional}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">{`TRADITIONAL GSI's`}</span>
                    <span className="text-zinc-300">{item.gsi}</span>
                  </div>
                </div>
                {item.manaoPiliDesc && (
                  <p className="mt-4 text-sm text-blue-600">{item.manaoPiliDesc}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 mt-6 text-center">
            *Expert and experienced team members are defined as ServiceNow certified technical resources with more than 3 years of implementation experience on the ServiceNow platform.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
            {`Ready to experience the Mana'o Pili difference?`}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-blue-600 hover:bg-blue-600 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}