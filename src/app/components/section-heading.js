/**
 * Shared section header — small acid eyebrow + Degular title.
 * Keeps every homepage section visually consistent.
 */
export default function SectionHeading({ eyebrow, title, align = "center", className = "" }) {
    const alignment = align === "left" ? "text-left" : "text-center mx-auto"
    return (
        <div className={`${alignment} max-w-3xl px-4 ${className}`}>
            {eyebrow && (
                <p className="mb-3 text-[11px] md:text-xs uppercase tracking-[0.25em] text-[#deff00]">
                    {eyebrow}
                </p>
            )}
            <h2 className="font-heading text-4xl md:text-5xl leading-tight text-[#e2e2e2]">
                {title}
            </h2>
        </div>
    )
}
