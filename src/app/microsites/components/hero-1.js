export default function HeroSection({
    title = "Mana'o Pili",
    subtitle = "With Mana'o Pili's Digital Trip approach, we help you unlock the full potential of Service Now, creating value at every step.",
    viewport
}) {
    // Compute classes based on viewport
    const containerMargin = viewport === "mobile"
        ? "mx-2"
        : viewport === "tablet"
            ? "mx-20"
            : "mx-2 md:mx-20 lg:mx-44";

    const headingSize = viewport === "mobile"
        ? "text-5xl"
        : viewport === "tablet"
            ? "text-6xl"
            : "text-5xl md:text-6xl lg:text-7xl";

    const subtitleSize = viewport === "mobile" ? "text-base" : "text-base md:text-xl";

    return (
        <div className="w-full h-[70vh] flex justify-start items-center bg-gradient-to-b from-[#455CFF] to-[#141414]">
            <div className={`px-8 ${containerMargin} max-w-5xl flex flex-col gap-5`}>
                <h2 className={`font-heading text-white leading-tight ${headingSize}`}>
                    {title}
                </h2>
                <p className={`text-gray-200 ${subtitleSize} leading-relaxed flex-1`}>
                    {subtitle}
                </p>
            </div>
        </div>
    )
}

