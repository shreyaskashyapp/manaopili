"use client"

import React from "react"

import Link from "next/link"
import { ArrowRight, LineChart, Settings, Users, Zap } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Define highlight color as a CSS variable for easy customization
const HIGHLIGHT_COLOR = "var(--highlight-color, #deff00)" // Default is blue-500

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

export default function ServicesAccordion() {
  return (
    <div
      className="container mx-auto px-4 py-12 md:py-6 bg-zinc-900"
      style={{ "--highlight-color": "#deff00" }}
    >
      <Accordion type="single" collapsible defaultValue="IMPLEMENTATIONS" className="space-y-4">
        {categories.map((category) => (
          <AccordionItem
            key={category}
            value={category}
            className="border border-zinc-700 rounded-lg overflow-hidden bg-zinc-800/50"
          >
            <AccordionTrigger className="px-4 py-5 md:px-6 md:py-6 text-lg md:text-xl font-semibold hover:no-underline data-[state=open]:text-[color:var(--highlight-color)] hover:text-[color:var(--highlight-color)]/80 text-zinc-300">
              <span>{category}</span>
              <div className="flex items-center">
                <div
                  className="w-5 h-5 transition-transform duration-300 data-[state=open]:rotate-180 text-zinc-400 data-[state=open]:text-[color:var(--highlight-color)]"
                  data-state={category === "IMPLEMENTATIONS" ? "open" : "closed"}
                >
                  {/* This is just a placeholder for styling - the actual chevron is in the AccordionTrigger */}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-0 pb-0 pt-0">
              <div className="divide-y divide-zinc-700/50">
                {services[category].map((service) => (
                  <div
                    key={service.title}
                    className="flex items-start py-4 px-4 md:px-6 hover:bg-zinc-800/70 transition-colors group"
                  >
                    <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-zinc-800 text-[color:var(--highlight-color)]">{service.icon}</div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-white">{service.title}</h3>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-sm text-[color:var(--highlight-color)] hover:text-[color:var(--highlight-color)]/80 transition-colors ml-4 flex-shrink-0"
                        >
                          <span className="hidden sm:inline mr-1">Learn More</span>
                          <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            style={{
                              filter: `drop-shadow(0 0 3px ${HIGHLIGHT_COLOR})`,
                            }}
                          />
                        </Link>
                      </div>
                      <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}