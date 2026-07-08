import Reveal from "./reveal"

/**
 * Legal/static page body — readable measure, numbered eyebrows, hairline
 * dividers between sections, single subtle reveal per section.
 */
export default function StaticContent({ data }) {
    return (
        <div className="container mx-auto max-w-3xl px-6 py-16 text-white md:py-24">
            {data.map((section, index) => (
                <Reveal
                    key={index}
                    delay={Math.min(index * 0.04, 0.2)}
                    className="border-t border-white/[0.07] py-10 first:border-t-0 first:pt-0 md:py-12"
                >
                    <p aria-hidden className="mb-3 text-[11px] uppercase tracking-[0.25em] text-[#455CFF]">
                        {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-heading text-2xl font-light leading-snug text-white md:text-3xl">
                        {section?.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-zinc-400">{section?.content.text}</p>
                    {section?.content?.bulletPoints && (
                        <ul className="mt-4 list-disc space-y-2 pl-5">
                            {section?.content?.bulletPoints?.map((point, pointIndex) => (
                                <li key={pointIndex} className="leading-relaxed text-zinc-400">{point}</li>
                            ))}
                        </ul>
                    )}
                </Reveal>
            ))}
        </div>
    )
}
