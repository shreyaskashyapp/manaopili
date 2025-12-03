"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function AccordionSection({
    title = "Frequently Asked Questions",
    subtitle = "Everything you need to know about our services and how we can help you succeed.",
    items = [
        {
            question: "What services do you offer?",
            answer:
                "We offer a comprehensive suite of services including web development, mobile applications, cloud infrastructure, and digital consulting to help your business thrive in the digital age.",
        },
        {
            question: "How long does a typical project take?",
            answer:
                "Project timelines vary based on scope and complexity. A standard website takes 4-6 weeks, while larger applications may take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
        },
        {
            question: "What is your pricing structure?",
            answer:
                "We offer flexible pricing based on project requirements. We can work on fixed-price projects, hourly rates, or retainer agreements. Contact us for a customized quote tailored to your specific needs.",
        },
        {
            question: "Do you provide ongoing support?",
            answer:
                "Yes! We offer comprehensive maintenance and support packages to ensure your solution continues to perform optimally. This includes updates, bug fixes, security patches, and technical assistance.",
        },
        {
            question: "Can you work with existing systems?",
            answer:
                "Absolutely. We specialize in integrating with existing systems and can work with virtually any technology stack. We'll assess your current infrastructure and recommend the best integration approach.",
        },
    ],
    viewport,
}) {
    const [openIndex, setOpenIndex] = useState(0)

    // Conditional styles based on viewport
    const sectionPadding =
        viewport === "mobile"
            ? "pb-10"
            : viewport === "tablet"
                ? "pb-16"
                : "pb-10 md:pb-16 lg:pb-20"

    const titleSize =
        viewport === "mobile"
            ? "text-3xl"
            : viewport === "tablet"
                ? "text-4xl"
                : "text-3xl md:text-4xl lg:text-5xl"

    const subtitleSize =
        viewport === "mobile"
            ? "text-sm"
            : viewport === "tablet"
                ? "text-base"
                : "text-sm md:text-base lg:text-lg"

    const questionSize =
        viewport === "mobile"
            ? "text-base"
            : viewport === "tablet"
                ? "text-lg"
                : "text-base md:text-lg lg:text-xl"

    const paddingX =
        viewport === "mobile"
            ? "px-4"
            : viewport === "tablet"
                ? "px-6"
                : "px-4 md:px-6 lg:px-8"

    const paddingY =
        viewport === "mobile"
            ? "py-4"
            : viewport === "tablet"
                ? "py-5"
                : "py-4 md:py-5 lg:py-6"

    return (
        <section className={`relative ${sectionPadding} bg-[#141414] overflow-hidden`}>
            <div className={`container relative z-10 ${paddingX} mx-auto max-w-4xl`}>
                {/* Section header */}
                <div className="text-center space-y-4 mb-12 animate-in fade-in slide-in-from-top-6 duration-1000">
                    <h2
                        className={`${titleSize} font-medium text-white tracking-tight text-balance`}
                    >
                        {title}
                    </h2>
                    <p
                        className={`${subtitleSize} text-gray-400 text-pretty leading-relaxed max-w-2xl mx-auto`}
                    >
                        {subtitle}
                    </p>
                </div>

                {/* Accordion items */}
                <div className="space-y-4">
                    {items?.map?.((item, index) => {
                        const isOpen = openIndex === index
                        const animationDelay = 150 + index * 75

                        return (
                            <div
                                key={index}
                                className="rounded-2xl bg-gradient-to-br from-zinc-900 to-[#141414] border border-zinc-800 hover:border-zinc-700 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
                                style={{ animationDelay: `${animationDelay}ms` }}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className={`w-full flex items-center justify-between ${paddingY} ${paddingX} text-left group`}
                                >
                                    <span
                                        className={`${questionSize} font-medium text-gray-200 group-hover:text-[#455CFF] transition-colors pr-4`}
                                    >
                                        {item?.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-5 h-5 text-[#455CFF] flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className={`${paddingX} pb-6 pt-0`}>
                                        <p
                                            className={`${viewport === "mobile" ? "text-sm" : "text-base"
                                                } text-gray-400 leading-relaxed`}
                                        >
                                            {item?.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
