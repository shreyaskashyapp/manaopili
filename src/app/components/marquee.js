/**
 * Ghost capability ticker — slow infinite marquee of oversized Degular text.
 * Purely decorative texture beat between sections (aria-hidden, no pointer events).
 * Two identical tracks scroll -50% for a seamless loop; CSS pauses it under
 * prefers-reduced-motion (see .marquee-track in globals.css).
 */
const DEFAULT_ITEMS = [
  "ITSM",
  "CSM",
  "ITOM",
  "SPM",
  "AI & Automation",
  "Information Technology",
  "Information Security",
  "Cyber Security",
]

export default function Marquee({ items = DEFAULT_ITEMS, className = "" }) {
  const Track = ({ ariaHidden }) => (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="whitespace-nowrap px-10 font-heading text-6xl uppercase tracking-wide text-white/[0.07] md:px-14 md:text-8xl">
            {item}
          </span>
          <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-[#455CFF]/50 md:h-2.5 md:w-2.5" />
        </span>
      ))}
    </div>
  )

  return (
    <div
      aria-hidden
      className={`pointer-events-none relative w-full select-none overflow-hidden py-10 md:py-14 ${className}`}
    >
      <div className="marquee-track flex w-max">
        <Track />
        <Track ariaHidden />
      </div>

      {/* Edge fades so the ticker dissolves into the page */}
      <div
        aria-hidden
        className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#141414] to-transparent md:w-48"
      />
      <div
        aria-hidden
        className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#141414] to-transparent md:w-48"
      />
    </div>
  )
}
