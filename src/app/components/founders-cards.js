import Image from 'next/image'
import Reveal from './reveal'

/**
 * Editorial founder portraits — oversized name, blue role eyebrows,
 * subtle image lift on hover. No card boxes.
 */
export default function Founders({ team }) {
    return (
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-14 px-6 py-14 md:flex-row md:items-start md:gap-24">
            {team.map((member, index) => (
                <Reveal key={member.name} delay={index * 0.12} className="group w-full max-w-xs">
                    <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                        <Image
                            src={member.imagePath}
                            alt={member.name}
                            width={400}
                            height={600}
                            className="h-80 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                        {/* Bottom fade so the portrait settles into the page */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141414]/70 to-transparent"
                        />
                    </div>
                    <div className="mt-6">
                        {member.titles.map((title, i) => (
                            <p
                                key={title}
                                className="text-[11px] uppercase tracking-[0.25em] text-[#455CFF]"
                            >
                                {i === 0 && <span aria-hidden className="text-[#deff00]">— </span>}
                                {title}
                            </p>
                        ))}
                        <h3 className="font-heading mt-2 text-2xl leading-snug text-white md:text-3xl">
                            {member.name}
                        </h3>
                    </div>
                </Reveal>
            ))}
        </div>
    )
}
