import Reveal from "./reveal"

/**
 * Editorial resource rows — no card boxes; blue accent bar + type scale
 * carry the hierarchy (matches the differentiators language).
 */
export default function AboutCards({ data }) {
    return (
        <div className="mx-auto grid max-w-5xl gap-x-14 gap-y-12 md:grid-cols-2">
            {data.map((section, index) => (
                <Reveal key={section.title} delay={index * 0.08}>
                    <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-[#455CFF]" />
                    <h3 className="font-heading text-2xl leading-snug text-white md:text-3xl">
                        {section.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-zinc-400">{section.description}</p>
                </Reveal>
            ))}
        </div>
    )
}
