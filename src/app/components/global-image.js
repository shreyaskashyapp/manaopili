"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"

export default function GlobalImage({ data }) {
    const ref = useRef(null)
    const reduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    // Percentage-based drift stays inside the 120% tall image at every screen size.
    const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"])

    // Colour the clause after the comma blue, matching the site's headline accent.
    const [lead, ...restOfTitle] = (data.title || "").split(",")
    const accent = restOfTitle.join(",").trim()

    return (
        <div ref={ref} className="mx-auto w-[80%]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] sm:aspect-[16/10] lg:aspect-[21/9]">
                <motion.img
                    src={data?.imagePath}
                    alt=""
                    aria-hidden
                    className="absolute inset-x-0 -top-[10%] h-[120%] w-full object-cover will-change-transform"
                    style={reduceMotion ? undefined : { y }}
                />
                {/* Scrim so the copy reads over the bright sky */}
                <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-b from-[#141414]/60 via-[#141414]/20 to-transparent"
                />
                <div className="absolute inset-x-0 top-0 p-6 text-center md:p-10 lg:p-14">
                    <h3 className="font-heading text-2xl leading-tight text-white md:text-4xl lg:text-5xl">
                        {lead}
                        {accent && (
                            <>
                                ,<br className="sm:hidden" />{" "}
                                <span className="text-[#DEFF00]">{accent}</span>
                            </>
                        )}
                    </h3>
                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 md:mt-4 md:text-base lg:text-lg">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
