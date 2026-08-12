"use client"

import Image from "next/image"
import { useState } from "react"
import Reveal from "./reveal"

/** Two-letter monogram from a full name — "Nate Han" → "NH". */
function initialsOf(name) {
    return name
        .split(" ")
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join("")
        .toUpperCase()
}

/**
 * Portrait tile. Falls back to a blue monogram when the photo file
 * isn't in /public yet, so the section reads as finished either way.
 */
function Portrait({ member }) {
    const [failed, setFailed] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const showImage = member.imagePath && !failed

    return (
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] transition-colors duration-500">
            {/* Monogram sits underneath and shows through until (or unless) the photo loads */}
            <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#455CFF]/25 via-[#455CFF]/[0.06] to-transparent"
            >
                <span className="font-heading text-3xl tracking-wide text-white/30 sm:text-4xl">
                    {initialsOf(member.name)}
                </span>
            </div>
            {showImage && (
                <Image
                    src={member.imagePath}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 50vw"
                    onLoad={() => setLoaded(true)}
                    onError={() => setFailed(true)}
                    className={`object-cover object-top transition-[transform,opacity] duration-700 ease-out group-hover:scale-[1.04] ${loaded ? "opacity-100" : "opacity-0"
                        }`}
                />
            )}
            {/* Bottom fade so the portrait settles into the page */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#141414]/60 to-transparent"
            />
        </div>
    )
}

/**
 * Leadership roster — portrait, blue role eyebrow, name, department.
 * 2-up on phones, 3-up on tablet, 5-up on desktop.
 */
export default function LeadershipCards({ team }) {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-5 gap-y-1 px-6 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-5 xl:max-w-[94rem] lg:gap-x-6 xl:gap-x-8 lg:px-8">
            {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.08} className="group">
                    <Portrait member={member} />
                    <p className="mt-4 text-[10px] uppercase leading-relaxed tracking-[0.2em] text-[#455CFF] sm:text-[11px]">
                        <span aria-hidden className="text-[#deff00]">— </span>
                        {member.title}
                    </p>
                    <h3 className="font-heading mt-1.5 text-lg leading-snug text-white sm:text-xl lg:text-[1.65rem]">
                        {member.name}
                    </h3>
                    <p className="mt-1 text-md text-zinc-500">{member.department}</p>
                </Reveal>
            ))}
        </div>
    )
}
