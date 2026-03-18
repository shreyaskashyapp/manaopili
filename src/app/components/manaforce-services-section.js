import Link from "next/link"
import { Shield, Lock, ShieldCheck, Workflow, FlaskConical, ArrowRight } from "lucide-react"

const services = [
  {
    slug: "zero-trust-regulated",
    num: "01",
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    tagline: "Replace legacy perimeter models with identity-driven, context-aware access for users, apps, and data — across every environment.",
    tags: ["Zscaler Platform", "Identity-First", "ZTNA"],
    featured: true,
  },
  {
    slug: "regulated-cybersecurity",
    num: "02",
    icon: Shield,
    title: "Compliance & Governance",
    tagline: "Continuous compliance readiness, audit defensibility, and governance operationalization for regulated organizations.",
    tags: ["HIPAA", "FedRAMP", "SOC 2"],
  },
  {
    slug: "identity-access-governance",
    num: "03",
    icon: Lock,
    title: "Identity & Access Governance",
    tagline: "Enforce the right access for the right people at the right time — at enterprise scale.",
    tags: ["MFA", "PAM", "SoD"],
  },
  {
    slug: "cyber-operations",
    num: "04",
    icon: Workflow,
    title: "Security Automation",
    tagline: "Automate security operations and compliance workflows through ServiceNow integration.",
    tags: ["SOAR", "ServiceNow SecOps", "IR"],
  },
  {
    slug: "protecting-regulated-systems",
    num: "05",
    icon: FlaskConical,
    title: "Protecting Validated Systems",
    tagline: "GxP system protection, data integrity (ALCOA+), and preservation of validation status.",
    tags: ["GxP / CSV", "21 CFR Part 11", "ALCOA+"],
  },
]

export default function ManaForceServicesSection() {
  return (
    <section className="w-full px-6">
      <div className="mx-auto">

        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-normal text-[#e2e2e2] text-center"
            style={{ letterSpacing: "-0.03em" }}
          >
            Security Capabilities We Offer
          </h2>
          <p className="text-zinc-500 text-sm mt-3 leading-relaxed text-center">
            Practical, scalable cybersecurity for regulated enterprises.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

          {/* Card 1 — featured, 2 cols */}
          {(() => {
            const s = services[0]
            const Icon = s.icon
            return (
              <Link
                key={s.slug}
                href={`/manaforce/services/${s.slug}`}
                className="group relative md:col-span-2 flex flex-col justify-between gap-6 rounded-2xl p-8 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/40 hover:bg-[#455CFF]/[0.04] transition-all duration-300 hover:shadow-[0_0_40px_rgba(69,92,255,0.08)]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-5 h-5" style={{ color: "#455CFF" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-white font-bold text-2xl md:text-3xl group-hover:text-[#455CFF] transition-colors duration-300"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-md">{s.tagline}</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full border border-[#455CFF]/20 text-[#455CFF]/60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-zinc-600 group-hover:text-[#455CFF] transition-colors duration-300">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </div>
              </Link>
            )
          })()}

          {/* Cards 2–5 — single col */}
          {services.slice(1).map((s) => {
            const Icon = s.icon
            return (
              <Link
                key={s.slug}
                href={`/manaforce/services/${s.slug}`}
                className="group relative flex flex-col justify-between gap-5 rounded-2xl p-7 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/40 hover:bg-[#455CFF]/[0.04] transition-all duration-300 hover:shadow-[0_0_32px_rgba(69,92,255,0.07)]"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
                />
                <div className="flex items-start justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" style={{ color: "#455CFF" }} />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3
                    className="text-white font-bold text-lg leading-snug group-hover:text-[#455CFF] transition-colors duration-300"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">{s.tagline}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {s.tags.map((t) => (
                      <span key={t} className="text-[10px] px-2 py-0.5 rounded-full border border-[#455CFF]/20 text-[#455CFF]/55">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-700 group-hover:text-[#455CFF] group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            )
          })}

        </div>
      </div>
    </section>
  )
}
