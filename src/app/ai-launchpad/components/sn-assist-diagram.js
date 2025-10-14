
"use client"

import React, { useEffect, useState } from "react"
import { Search, Reply, FileText, Pencil, Workflow, SquarePen } from "lucide-react"

function Circle({ label, icon: Icon, size = "lg", className }) {
    const sizes =
        size === "lg"
            ? "h-32 w-32 lg:h-56 lg:w-56"
            : size === "sm"
                ? "h-8 w-8 lg:h-16 lg:w-16"
                : "h-16 w-16"

    return (
        <div
            className={`grid place-items-center bg-gradient-to-br from-zinc-800 to-[#141414]  border-gray-400 hover:border-[#455cff] rounded-full bg-red- border ${sizes} ${className} transition-all duration-300 cursor-pointer group`}
        >
            {Icon ? (
                <Icon className="lg:h-5 lg:w-5 w-3 h-3 text-[#455cff] group-hover:scale-110 transition-all duration-300" />
            ) : (
                <h2 className="px-3 text-center lg:text-3xl font-semibold text-lg text-[#455cff] transition-colors duration-300">
                    {label}
                </h2>
            )}
        </div>
    )
}

function ArrowLabel() {
    return (
        <div className="lg:flex ">
            <div
                className="lg:px-6 lg:py-6 py-3 px-2 text-xs lg:text-sm font-medium text-gray-300 
                bg-gradient-to-br from-zinc-800 to-[#141414]  
                
                rounded-lg"
                style={{
                    clipPath: "polygon( 0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80% )",
                }}
            >
                <p className="lg:mr-4 mr-2 text-[9px] lg:text-[15px]">Benefits</p>
            </div>
        </div>
    )
}

function BenefitPill({ title, img }) {
    return (
        <div className="rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 p-2 lg:p-4 border border-gray-900 hover:border-[#455cff] lg:pr-5 pr-1.5">
            <div className="flex items-center gap-2 lg:gap-4">
                {/* <img
                    src={img}
                    alt={title}
                    className="w-9 h-9 lg:h-16 lg:w-16 border border-[#455cff]/10 rounded-full object-contain"
                /> */}
                <span className="lg:text-base text-[9px] whitespace-nowrap text-gray-300 font-medium">{title}</span>
            </div>
        </div>
    )
}

export default function ServiceNowAssistDiagram() {
    const [radius, setRadius] = useState(180);

    useEffect(() => {
        setRadius(window.innerWidth > 1024 ? 180 : 100)
    },[])

    const features = [
        { label: "Search", Icon: Search, top: true },
        { label: "Respond", Icon: Reply, top: true },
        { label: "Summary", Icon: FileText, centre: true },
        { label: "Create", Icon: SquarePen, top: false },
        { label: "Workflow", Icon: Workflow, top: false },
    ]

    // Benefits array
    const benefits = [
        { id: 1, title: <>Decrease  Impact</>, img: "/ai-launchpad/decrease.png" },
        { id: 2, title: <>Optimize Responses</>, img: "/ai-launchpad/optimize-responses.png" },
        { id: 3, title: <>Streamline Workflows</>, img: "/ai-launchpad/streamline-workflows.png" },
        { id: 4, title: <>Increase Productivity</>, img: "/ai-launchpad/increase-productivity.png" },
    ]


    const startAngle = -90 // top of the circle
    const endAngle = 90 // bottom of the circle
    const angleStep = (endAngle - startAngle) / (features.length - 1)

    return (
        <div className="flex items-center lg:gap-10 justify-center">
            {/* Orbit + Main Circle */}
            <div className="relative w-[270px] h-[300px] lg:w-[450px] lg:h-[500px] flex items-center justify-center">

                {/* smaller circles along left semicircle */}
                <div>
                    {features.map((f, index) => {
                        const angle = startAngle + index * angleStep
                        const rad = (angle * Math.PI) / 180
                        const x = -radius * Math.cos(rad) // negative for left side
                        const y = radius * Math.sin(rad)

                        return (
                            <div
                                key={f.label}
                                className="absolute transform flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group"
                                style={{
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                }}
                            >
                                {
                                    f?.top
                                    &&
                                    <p className="lg:text-sm text-xs pb-2 text-gray-300 group-hover:text-[#455cff] transition-colors duration-300">{f.label}</p>
                                }
                                <Circle label={f.label} size="sm" icon={f.Icon} />
                                {
                                    !f?.top
                                    &&
                                    <p className="lg:text-sm text-xs pt-2 text-gray-300 group-hover:text-[#455cff] transition-colors duration-300">{f.label}</p>
                                }
                            </div>
                        )
                    })}
                </div>

                {/* center main circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Circle label="ServiceNow NowAssist" size="lg" />
                </div>
            </div>

            <div className="absolute flex lg:pl-[180px] pl-[100px] md:pl-[100px] ">
                <ArrowLabel />
            </div>




            {/* Benefits section stays same */}
            <section className="space-y-4">
                <div className="flex flex-col gap-4">
                    {benefits.map((benefit) => (
                        <BenefitPill key={benefit.id} title={benefit.title} img={benefit.img} />
                    ))}
                </div>
            </section>
        </div>
    )
}