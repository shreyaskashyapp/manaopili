import { Check } from "lucide-react"
import WordReveal from "./word-reveal"
import Reveal from "./reveal"
import GlossyButton from "./glossy-button"

const content = {
  titleWords: [
    { text: "Ready" },
    { text: "to" },
    { text: "Transform" },
    { text: "Your" },
    { text: "ServiceNow", accent: true },
    { text: "Journey?" },
  ],
  subtitle:
    "Let our experts guide you through every step of your ServiceNow transformation. From discovery to ongoing innovation, we're here to help you succeed.",
  features: [
    "Easy consultation process",
    "Tailored to your specific needs",
    "Expert guidance throughout",
  ],
}

/**
 * Full-width editorial CTA beat — no card box; scale, whitespace and one
 * glossy action carry it. `color` kept for backwards compatibility.
 */
export default function ContactBanner({ color }) {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-16">
      {/* Blue aurora glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.10] blur-[150px]"
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <WordReveal
          as="h2"
          trigger="inView"
          words={content.titleWords}
          className="font-heading text-4xl font-light leading-[1.1] text-white md:text-6xl"
        />

        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-zinc-400 md:text-lg">
            {content.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-10 flex justify-center">
          <GlossyButton href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK || "/contact"}>
            Book a Consultation
          </GlossyButton>
        </Reveal>

        <Reveal
          delay={0.35}
          className="mt-12 flex flex-col items-center divide-y divide-white/10 sm:flex-row sm:justify-center sm:divide-y-0 sm:divide-x"
        >
          {content.features.map((feature) => (
            <span
              key={feature}
              className="flex items-center gap-2.5 px-6 py-3 text-sm text-zinc-400 sm:py-0"
            >
              <Check className="h-3.5 w-3.5 shrink-0 text-[#455CFF]" strokeWidth={3} />
              {feature}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
