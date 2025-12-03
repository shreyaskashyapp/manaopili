'use client'

import { checkIfMobile } from "@/lib/utils"
import { useEffect, useState } from "react"

export function FeatureSection({
    title = "Mana'o Pili Transforms ServiceNow AI",
    Points = [
        { id: 1, text: "Worried about Cost of Implementing AI" },
        { id: 2, text: "Don't know where and how to start the journey" },
        { id: 3, text: "Not sure if you're ready for AI in your organization" },
    ],
    viewport,
}) {
    // Conditional styling
    const sectionPadding =
        viewport === "mobile"
            ? "pb-10"
            : viewport === "tablet"
                ? "pb-16"
                : "pb-10 md:pb-16 lg:pb-20"

    const titleClass =
        viewport === "mobile"
            ? "text-3xl mb-2 leading-snug"
            : viewport === "tablet"
                ? "text-4xl mb-10 leading-tight"
                : "text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-8 lg:mb-10 leading-snug md:leading-tight"

    const flexDirection =
        viewport === "mobile"
            ? "flex-col"
            : viewport === "tablet"
                ? "flex-row"
                : "flex-col md:flex-row"

    const textSize =
        viewport === "mobile"
            ? "text-md"
            : viewport === "tablet"
                ? "text-lg"
                : "text-md md:text-lg lg:text-xl"

    const valueSize =
        viewport === "mobile"
            ? "text-md"
            : viewport === "tablet"
                ? "text-3xl"
                : "text-md md:text-3xl lg:text-4xl"

    const paddingClass =
        viewport === "mobile"
            ? "p-6"
            : viewport === "tablet"
                ? "p-7"
                : "p-6 md:p-7 lg:p-8"

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(checkIfMobile());
    }, []);

    return (
        <section className={`mx-auto bg-[#141414] ${sectionPadding}`}>
            {/* Hero Section */}
            <div className="text-center">
                <h2
                    className={`${titleClass} font-medium text-white`}
                >
                    {title}
                </h2>
            </div>

            {/* Points with Left Accent Bar */}
            <div
                className={`flex ${flexDirection} justify-between px-4 gap-4 pt-4 group`}
            >
                {Points.map(({ id, text, value }, index) => {
                    const isLast = index === Points.length - 1

                    return (
                        <div
                            key={id ?? index}
                            className={`flex gap-6 flex-1 ${viewport === "mobile"
                                ? "border-b border-blue-600/20"
                                : "border-b border-blue-600/20 md:border-none"
                                }`}
                        >
                            <div className="flex-1 cursor-default hover-trigger">
                                <div
                                    className={`h-full relative border-l-2 border-transparent hover:border-blue-600 transition-all duration-300 ${paddingClass}`}
                                >
                                    <p
                                        className={`${textSize} text-gray-400 hover:text-gray-200 pl-1 leading-relaxed ${viewport !== "mobile" ? "text-left md:text-center" : ""
                                            } hover:translate-x-1 transition-all duration-300`}
                                    >
                                        {value && (
                                            <>
                                                <span className={`${valueSize} text-[#455cff]`}>
                                                    {value}
                                                </span>
                                                <br />
                                            </>
                                        )}
                                        {text}
                                    </p>
                                </div>
                            </div>

                            {/* Divider line for desktop */}
                            {!isMobile && !isLast && (
                                <div className="relative flex items-center">
                                    <div className="w-0.5 h-full bg-[#455cff] origin-center rotate-12 transition-all duration-500 group-hover:opacity-0 group-hover:scale-y-50" />
                                </div>
                            )}
                            {/* Dot for mobile */}
                            {isMobile &&
                                <div className="relative flex items-center">
                                    <div className="w-2 h-2 rounded-full bg-[#455cff] origin-center rotate-12 transition-all duration-500 group-hover:opacity-0 group-hover:scale-y-50" />
                                </div>
                            }
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
