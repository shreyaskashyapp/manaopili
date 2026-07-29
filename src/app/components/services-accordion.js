"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Plus } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Reveal from "./reveal"

/**
 * Editorial services index — numbered category rows with hairline dividers;
 * rows expand into a list of service links. Rows toggle independently and stay
 * open until explicitly closed, so opening one never collapses another (which
 * would shift the viewport out from under the reader).
 * Same props/behavior as the old Radix accordion: `?section=` deep link opens
 * and scrolls to a category.
 */
export default function ServicesAccordion({ services, categories, defaultSection }) {
  // A Set of every currently-open category — multiple can be open at once.
  const [openSet, setOpenSet] = useState(() => new Set([defaultSection || "IMPLEMENTATIONS"]))
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()

  const toggle = (category) =>
    setOpenSet((prev) => {
      const next = new Set(prev)
      if (next.has(category)) next.delete(category)
      else next.add(category)
      return next
    })

  useEffect(() => {
    if (!defaultSection) return
    // Deep link just adds its section to the open set (doesn't close others).
    setOpenSet((prev) => new Set(prev).add(defaultSection))
    const timer = setTimeout(() => {
      ref.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, 100)
    return () => clearTimeout(timer)
  }, [defaultSection])

  return (
    <div ref={ref} className="mx-auto max-w-5xl scroll-mt-24 px-2 py-10 md:py-4">
      <div className="border-b border-white/10">
        {categories.map((category, index) => {
          const isOpen = openSet.has(category)
          return (
            <Reveal key={category} delay={index * 0.06} className="border-t border-white/10">
              {/* Category row */}
              <button
                onClick={() => toggle(category)}
                aria-expanded={isOpen}
                className="group flex w-full items-center gap-5 py-7 text-left md:gap-8 md:py-9"
              >
                <span
                  aria-hidden
                  className="font-heading w-12 select-none text-4xl font-light leading-none text-white/[0.08] transition-colors duration-300 group-hover:text-[#deff00]/40 md:w-20 md:text-6xl"
                >
                  0{index + 1}
                </span>
                <span
                  className={`font-heading flex-1 text-xl tracking-wide transition-colors duration-300 md:text-3xl ${
                    isOpen ? "text-white" : "text-zinc-400 group-hover:text-white"
                  }`}
                >
                  {category}
                </span>
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 border-[#455CFF]/60 bg-[#455CFF]/15 text-white"
                      : "border-white/15 text-zinc-400 group-hover:border-[#455CFF]/40 group-hover:text-white"
                  }`}
                >
                  <Plus className="h-4 w-4" />
                </span>
              </button>

              {/* Services list */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 md:pb-10 md:pl-28">
                      <div className="divide-y divide-white/[0.06]">
                        {services[category].map((service) => (
                          <Link
                            href={`/services/${service.slug}`}
                            key={service.title}
                            className="group/item flex items-center gap-4 py-4 md:py-5"
                          >
                            <div className="min-w-0 flex-1">
                              <h3 className="text-base font-medium text-zinc-200 transition-colors duration-200 group-hover/item:text-white md:text-lg">
                                {service.title}
                              </h3>
                              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-zinc-500">
                                {service.description}
                              </p>
                            </div>
                            <ArrowUpRight
                              className="h-4 w-4 shrink-0 text-zinc-600 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5 group-hover/item:text-[#deff00]"
                            />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
