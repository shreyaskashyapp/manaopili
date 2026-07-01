"use client"

import { useEffect } from "react"
import { useReducedMotion } from "framer-motion"
import Lenis from "lenis"
import "lenis/dist/lenis.css"

/**
 * Headless smooth-scroll driver (Lenis).
 * - Disabled entirely when the user prefers reduced motion (native scroll).
 * - Touch devices keep native scrolling (smoothWheel only); Lenis handles wheel/trackpad.
 * Mounted once in the root layout.
 */
export default function SmoothScroll() {
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return

    const lenis = new Lenis({
      duration: 1.45,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [reduceMotion])

  return null
}
