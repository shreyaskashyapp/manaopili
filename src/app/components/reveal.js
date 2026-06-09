"use client"

import { motion } from "framer-motion"

/**
 * Subtle scroll-reveal wrapper.
 * Fades + lifts its children into view once, with a soft easing curve.
 *
 * Props:
 *  - delay:  stagger offset in seconds (default 0)
 *  - y:      starting vertical offset in px (default 16, kept small for subtlety)
 *  - amount: how much of the element must be visible before triggering (default 0.2)
 *  - once:   animate only the first time it enters view (default true)
 *  - as:     motion element tag, e.g. "section" | "div" | "li" (default "div")
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 16,
  amount = 0.2,
  once = true,
  as = "div",
  ...rest
}) {
  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  )
}
