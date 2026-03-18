"use client"

import { useState } from "react"
import { Settings, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"

const panels = [
  {
    icon: () => <Settings className="w-12 h-12 text-[#deff00]" />,
    title: "ServiceNow Solutions",
    tagline: "Modernize your enterprise operations",
    bg: "from-zinc-900 to-[#141414]",
    border: "border-[#deff00]/30",
    hoverBorder: "rgba(222,255,0,0.45)",
    hoverGlow: "0 0 32px rgba(222,255,0,0.1)",
    capabilities: [
      "IT Service Management (ITSM)",
      "Enterprise Workflow Automation",
      "Platform Customization & Integration",
      "AI & GenAI Capabilities",
      "Managed Platform Services",
    ],
    link: "/services",
    accent: "#deff00",
    hoverAccent: "#deff00",
    cta: null,
  },
  {
    icon: () => <Shield className="w-12 h-12 text-[#455CFF]" />,
    title: "ManaForce",
    subtitle: "A Cybersecurity Practice of Manaʻo Pili",
    tagline: "Zero Trust security for regulated organizations",
    bg: "from-zinc-900 to-[#0a0a14]",
    border: "border-[#455CFF]/20",
    hoverBorder: "rgba(69,92,255,0.6)",
    hoverGlow: "0 0 32px rgba(69,92,255,0.12)",
    capabilities: [
      "Zero Trust Architecture",
      "Zscaler Platform Integration",
      "Identity-Driven Access",
      "Security Automation",
      "Compliance & Governance",
    ],
    link: "/manaforce",
    accent: "#455CFF",
    hoverAccent: "#455CFF",
    cta: null,
  },
]

export default function SplitScreen() {
  const [active, setActive] = useState(null)

  return (
    <section className="w-full py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-normal text-[#e2e2e2]">How We Can Help</h2>
          <p className="text-zinc-400 mt-3 text-base md:text-lg">
            Two distinct capabilities. One trusted partner.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 max-w-5xl mx-auto min-h-[420px]">
          {panels.map((panel, index) => {
            const isActive = active === index
            const isOtherActive = active !== null && active !== index
            const currentAccent = isActive ? panel.hoverAccent : panel.accent

            return (
              <div
                key={index}
                className={`
                  relative rounded-2xl border bg-gradient-to-br cursor-pointer overflow-hidden
                  transition-all duration-500 ease-in-out
                  flex flex-col justify-between p-8
                  ${panel.bg} ${panel.border}
                  ${isActive ? "md:flex-[2]" : isOtherActive ? "md:flex-[0.6]" : "md:flex-1"}
                  ${isActive ? "min-h-[420px]" : "min-h-[280px] md:min-h-[420px]"}
                `}
                style={
                  isActive
                    ? { boxShadow: panel.hoverGlow, borderColor: panel.hoverBorder }
                    : {}
                }
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === index ? null : index)}
              >
                {/* ManaForce subtle background glow when active */}
                {panel.title === "ManaForce" && isActive && (
                  <div
                    className="pointer-events-none absolute inset-0 z-0"
                    style={{
                      background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(69,92,255,0.08) 0%, transparent 70%)",
                    }}
                  />
                )}

                {/* Always visible */}
                <div className="relative z-10 flex flex-col gap-4">
                  <div className="p-3 rounded-xl bg-zinc-900/60 w-fit">
                    {panel.icon(isActive)}
                  </div>
                  <div>
                    <h3
                      className={`font-semibold text-[#e2e2e2] transition-all duration-300 ${
                        isOtherActive ? "text-lg" : "text-2xl md:text-3xl"
                      }`}
                    >
                      {panel.title}
                    </h3>
                    {panel.subtitle && !isOtherActive && (
                      <p className="text-[11px] font-medium text-[#455CFF]/70 mt-0.5 transition-all duration-300">
                        {panel.subtitle}
                      </p>
                    )}
                    <p
                      className={`text-sm font-medium mt-1 transition-all duration-300 ${
                        isOtherActive ? "opacity-0" : "opacity-100"
                      }`}
                      style={{ color: currentAccent }}
                    >
                      {panel.tagline}
                    </p>
                  </div>
                </div>

                {/* Revealed on expand */}
                <div
                  className={`relative z-10 transition-all duration-500 overflow-hidden ${
                    isActive ? "opacity-100 max-h-[300px] mt-6" : "opacity-0 max-h-0"
                  }`}
                >
                  <ul className="space-y-3 mb-6">
                    {panel.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm">
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: currentAccent }}
                        />
                        {cap}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={panel.link}
                    className="flex items-center gap-2 text-sm font-medium hover:underline"
                    style={{ color: currentAccent }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {panel.title === "ManaForce" ? "Enter ManaForce" : "Explore services"} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Collapsed hint */}
                {!isActive && (
                  <p
                    className={`relative z-10 text-zinc-600 text-xs transition-all duration-300 ${
                      isOtherActive ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    Hover to explore →
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
