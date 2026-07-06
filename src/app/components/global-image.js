"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

/**
 * Global presence — slow scroll parallax on the map image gives the
 * page its standout moment. Text overlay unchanged in spirit.
 */
export default function GlobalImage({ data }) {
    const ref = useRef(null)
    const reduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], [40, -40])

    return (
        <div ref={ref} className="relative flex w-full justify-center overflow-hidden px-2 py-6 lg:px-20">
            <motion.img
                src={data?.imagePath}
                alt="Global presence map"
                className="w-full will-change-transform"
                style={reduceMotion ? undefined : { y, scale: 1.06 }}
            />
            <div className="absolute flex flex-col items-center justify-center gap-2 overflow-hidden py-2 md:max-w-7xl md:px-7 md:py-10 lg:gap-6 lg:py-16 px-4">
                <h2 className="font-heading text-xl text-black md:text-5xl lg:text-6xl xl:text-7xl">
                    {data.title}
                </h2>
                <p className="text-center text-xs text-zinc-600 md:px-14 md:text-lg lg:text-xl">
                    {data.description}
                </p>
            </div>
        </div>
    )
}
