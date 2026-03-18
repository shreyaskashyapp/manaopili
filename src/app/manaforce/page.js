"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import IndustriesSection from "@/app/components/industries-section"
import IntroducingManaForce from "@/app/components/introducing-manaforce"
import ManaForceServicesSection from "@/app/components/manaforce-services-section"
import ManaForceZscalerCard from "../components/manaforce-zscaler-component"
import ContactBanner from "../components/contact-banner"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

function ScrollReveal({ children, delay = 0, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function ManaForcePage() {
  return (
    <div className="text-[#e2e2e2] bg-zinc-[#141414] pb-10">

      {/* HERO */}
      <div className="relative min-h-[90vh] w-full flex flex-col justify-center items-center overflow-hidden px-6">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "1000px",
            height: "700px",
            background: "radial-gradient(ellipse at center, rgba(22,40,160,0.45) 0%, rgba(22,40,160,0.18) 40%, transparent 75%)",
            filter: "blur(70px)",
          }} />
        </div>

        <motion.div
          className="relative pt-[100px] pb-20 flex flex-col items-center text-center max-w-5xl mx-auto"
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#455CFF]/30 bg-[#455CFF]/10 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#455CFF] animate-pulse" />
            <span className="text-xs text-[#455CFF] tracking-widest uppercase font-medium">Zscaler Approved Partner</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl text-[#e2e2e2] mb-6 leading-tight font-bold"
            style={{ letterSpacing: "-0.02em" }}
          >
            Modern <span className="text-[#455cff]">Cybersecurity</span> for<br />
            Regulated Enterprises
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed"
          >
            Through <span className="text-[#455cff]">ManaForce</span>, we deliver Zero Trust architecture powered by the <span className="text-[#455cff]">Zscaler</span> platform — securing access, strengthening compliance, and enabling secure operations at scale.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="bg-transparent text-white hover:text-white border border-white hover:bg-[#455cff] hover:border-[#455cff] font-semibold px-10 py-6 text-base rounded-lg transition-all duration-300">
                Talk to us
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col gap-10 md:gap-12 lg:gap-24">

        <ScrollReveal>
          <IntroducingManaForce />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <ManaForceServicesSection />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <ManaForceZscalerCard />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <IndustriesSection />
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <ContactBanner
            color="[#455cff]"
            bgGradient="bg-gradient-to-r from-zinc-900 via-[#141414] to-zinc-900"
            content={{
              title: (
                <>
                  Ready to secure your <span className="text-[#455cff]">enterprise?</span>
                </>
              ),
              subtitle:
                "Talk to our team about Zero Trust implementation for your regulated organization. We'll assess your environment and design a path forward.",
              features: [
                "Zero Trust architecture design",
                "Zscaler platform deployment",
                "Compliance-ready from day one",
              ],
            }}
          />
        </ScrollReveal>

      </div>
    </div>
  )
}
