import Image from "next/image"

/**
 * Brand yellow arrow (↘) as a small inline mark. Drops in wherever a CTA used a
 * lucide arrow icon so the trademark #deff00 arrow shows consistently. Size and
 * hover animation are controlled by the passed `className` (defaults to h-4 w-4).
 */
export default function YellowArrow({ className = "h-3 w-3" }) {
  return (
    <Image
      src="/arrow_yellow.png"
      alt=""
      aria-hidden
      width={16}
      height={16}
      className={className}
    />
  )
}
