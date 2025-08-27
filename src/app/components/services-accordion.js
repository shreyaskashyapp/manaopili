"use client"

import React from "react"

import Link from "next/link"
import { ArrowRight, LineChart, Settings, Users, Zap } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

// Define highlight color as a CSS variable for easy customization
const HIGHLIGHT_COLOR = "var(--highlight-color, #deff00)" // Default is blue-500

export default function ServicesAccordion({services, categories}) {
  return (
    <div
      className="container mx-auto px-4 py-12 md:py-1 bg-[#141414]"
      style={{ "--highlight-color": "#deff00" }}
    >
      <Accordion type="single" collapsible defaultValue="IMPLEMENTATIONS" className="space-y-4">
        {categories.map((category) => (
          <AccordionItem
            key={category}
            value={category}
            className="border border-zinc-900 rounded-lg overflow-hidden bg-zinc-900"
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
                  <Link
                  href={`/services/${service.slug}`}
                    key={service.title}
                    className="flex items-start py-4 px-4 md:px-6 hover:bg-zinc-900 transition-colors group"
                  >
                    <div className="flex-shrink-0 mr-4 p-2 rounded-full bg-zinc-800 text-[color:var(--highlight-color)]">{service.icon}</div>
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-medium text-white">{service.title}</h3>
                        {/* <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center text-sm text-[color:var(--highlight-color)] hover:text-[color:var(--highlight-color)]/80 transition-colors ml-4 flex-shrink-0"
                        > */}
                          <span className="hidden sm:inline mr-1 md:flex items-center gap-2 text-white hover:text-[#deff00]">Learn More
                          <Image src="/arrow_yellow.png" alt="Arrow" width={12} height={12} />
                          </span>
                          {/* <ArrowRight
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                            style={{
                              filter: `drop-shadow(0 0 3px ${HIGHLIGHT_COLOR})`,
                            }}
                          /> */}
                          
                        {/* </Link> */}
                      </div>
                      <p className="text-sm text-zinc-400 mt-1 line-clamp-2">{service.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}