import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

/**
 * Secondary CTA pill — same glossy language as GlossyButton, kept as its own
 * component so its many call-sites ({ url, title } props) stay unchanged.
 */
export default function SurveyButton({ url, title }) {
  return (
    <Link
      href={url}
      className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-7 py-3 text-sm tracking-wide text-white backdrop-blur-md ring-1 ring-inset ring-white/10 shadow-lg shadow-black/20 transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 hover:ring-[#455CFF]/30 md:text-base"
    >
      {title}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  )
}
