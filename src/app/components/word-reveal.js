"use client"

import { Fragment } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "@/lib/utils"

/**
 * Cinematic "assembling" heading — words rise from behind a mask (clip reveal)
 * with a staggered ease-out, using the shared site animation rhythm.
 *
 * Props:
 *  - words:           string, OR array of { text, accent? } tokens
 *  - as:              motion element tag (default "h1")
 *  - className:       classes for the heading element
 *  - accentClassName: classes applied to tokens flagged accent (default blue)
 *  - stagger:         delay between each word (default 0.08s)
 *  - delayChildren:   delay before the first word (default 0)
 *  - trigger:         "load" (animate on mount, e.g. hero) | "inView" (on scroll)
 *  - amount:          in-view threshold for trigger="inView" (default 0.2)
 */
export default function WordReveal({
  words,
  as = "h1",
  className = "",
  accentClassName = "text-[#455CFF]",
  stagger = 0.08,
  delayChildren = 0,
  trigger = "load",
  amount = 0.2,
  ...rest
}) {
  const MotionTag = motion[as] || motion.h1
  const reduceMotion = useReducedMotion()

  const tokens = typeof words === "string"
    ? words.split(" ").map((text) => ({ text }))
    : (words || [])
  const plainText = tokens.map((t) => t.text).join(" ")

  // Reduced motion / no JS animation: render the final state immediately.
  if (reduceMotion) {
    const Tag = as
    return (
      <Tag className={className} {...rest}>
        {tokens.map((t, i) => (
          <Fragment key={i}>
            <span className={cn(t.accent && accentClassName)}>{t.text}</span>
            {i < tokens.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </Tag>
    )
  }

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren } },
  }
  const word = {
    hidden: { y: "115%" },
    show: { y: "0%", transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const triggerProps = trigger === "inView"
    ? { whileInView: "show", viewport: { once: true, amount } }
    : { animate: "show" }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      aria-label={plainText}
      {...triggerProps}
      {...rest}
    >
      {tokens.map((t, i) => (
        <Fragment key={i}>
          {/* Mask: each word rises from behind this clipped box */}
          <span className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom">
            <motion.span
              aria-hidden
              variants={word}
              className={cn("inline-block will-change-transform", t.accent && accentClassName)}
            >
              {t.text}
            </motion.span>
          </span>
          {i < tokens.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </MotionTag>
  )
}
