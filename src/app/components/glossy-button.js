import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Sleek, glossy outline pill CTA — the site's primary button.
 * Glassy translucent fill + inset highlight, blue hover. Reuse everywhere.
 *
 * Props:
 *  - href:   destination (works for internal routes and external links)
 *  - icon:   lucide icon component (default ArrowUpRight); pass null to omit
 *  - className: extra classes
 *  - children: button label
 */
export default function GlossyButton({ href = "#", icon: Icon = ArrowUpRight, className = "", children, ...props }) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm md:text-base tracking-wide text-white",
        "border border-white/20 bg-white/[0.06] backdrop-blur-md",
        "ring-1 ring-inset ring-white/10 shadow-lg shadow-black/20",
        "transition-all duration-300 hover:border-[#455CFF]/70 hover:bg-[#455CFF]/15 hover:ring-[#455CFF]/30",
        className
      )}
      {...props}
    >
      {children}
      {Icon && (
        <Icon className="h-4 w-4 transition-transform text-[#DEFF00] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </Link>
  )
}
