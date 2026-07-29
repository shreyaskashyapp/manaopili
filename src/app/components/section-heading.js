import WordReveal from "./word-reveal"

/**
 * Shared section header — small eyebrow + Degular title that assembles
 * word-by-word as it scrolls into view. Keeps every section visually consistent.
 */
export default function SectionHeading({ eyebrow, title, align = "center", className = "" }) {
    const alignment = align === "left" ? "text-left" : "text-center mx-auto"
    const headingClass = "font-heading text-4xl md:text-5xl leading-tight text-[#e2e2e2]"
    return (
        <div className={`${alignment} max-w-3xl px-4 ${className}`}>
            {eyebrow && (
                <p className="mb-3 text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#455CFF]">
                    <span aria-hidden className="text-[#deff00]">— </span>{eyebrow}
                </p>
            )}
            {typeof title === "string" ? (
                <WordReveal as="h2" words={title} trigger="inView" className={headingClass} />
            ) : (
                <h2 className={headingClass}>{title}</h2>
            )}
        </div>
    )
}
