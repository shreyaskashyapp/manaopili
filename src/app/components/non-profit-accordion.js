"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Reveal from "./reveal"

/**
 * Editorial FAQ accordion — hairline dividers, generous rhythm, plus icon
 * rotates to close, height animated with AnimatePresence.
 */
export default function NonProfitAccordion({ data1 }) {
    const [openIndex, setOpenIndex] = useState(0)
    const reduceMotion = useReducedMotion()

    return (
        <div className="mx-auto max-w-4xl px-4 pb-16 pt-4 md:pb-24">
            <div className="border-b border-white/10">
                {data1.map((item, index) => {
                    const isOpen = openIndex === index
                    return (
                        <Reveal key={index} delay={Math.min(index * 0.05, 0.3)} className="border-t border-white/10">
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                                className="group flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                            >
                                <span
                                    className={`font-heading text-lg leading-snug transition-colors duration-300 md:text-2xl ${
                                        isOpen ? "text-white" : "text-zinc-300 group-hover:text-white"
                                    }`}
                                >
                                    {item.title}
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
                                        <p className="max-w-3xl pb-8 text-sm leading-relaxed text-zinc-400 md:text-base">
                                            {item.text}
                                        </p>
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
