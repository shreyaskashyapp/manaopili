"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ManaForceTransitionLink({ children, href }) {
  const router = useRouter()
  const [transitioning, setTransitioning] = useState(false)

  const handleClick = () => {
    if (transitioning) return
    setTransitioning(true)
    setTimeout(() => {
      router.push(href)
    }, 650)
  }

  return (
    <>
      <div onClick={handleClick} style={{ display: "inline-block", cursor: "pointer" }}>
        {children}
      </div>
      <AnimatePresence>
        {transitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "#0a0a14",
              zIndex: 9999,
              pointerEvents: "all",
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
