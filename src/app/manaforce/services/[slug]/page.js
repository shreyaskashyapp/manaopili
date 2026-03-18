import Link from "next/link"
import { notFound } from "next/navigation"
import { Shield, Lock, ShieldCheck, Workflow, FlaskConical, ArrowLeft, ArrowRight } from "lucide-react"

const services = {
  "zero-trust-regulated": {
    icon: ShieldCheck,
    title: "Zero Trust Architecture",
    subtitle: "Replace legacy perimeter models with identity-driven, context-aware access for users, apps, and data across every environment.",
    description: "ManaForce delivers Zero Trust architecture powered by the Zscaler platform. We help regulated organizations move away from implicit network trust toward a model where every access request is verified — regardless of user location, device, or application.",
    tags: ["Zscaler Platform", "Identity-First", "Zero Trust", "ZTNA"],
    capabilities: [
      "Zero Trust Network Access (ZTNA) design and deployment",
      "Zscaler Internet Access (ZIA) and Private Access (ZPA) implementation",
      "User-to-application segmentation replacing VPN",
      "Cloud access security broker (CASB) integration",
      "Continuous verification and least-privilege enforcement",
      "Architecture assessment and roadmap development",
    ],
    outcomes: [
      "Eliminated implicit network trust",
      "Reduced attack surface through micro-segmentation",
      "Secure remote and vendor access without VPN sprawl",
      "Compliance-aligned access controls",
    ],
  },
  "regulated-cybersecurity": {
    icon: Shield,
    title: "Compliance & Governance",
    subtitle: "Continuous compliance readiness, audit defensibility, and governance operationalization for regulated organizations.",
    description: "Regulated organizations face mounting pressure to demonstrate cybersecurity controls to auditors, regulators, and customers. ManaForce builds compliance into the security architecture — not as an afterthought, but as a foundational capability.",
    tags: ["HIPAA", "FedRAMP", "SOC 2", "ISO 27001", "21 CFR Part 11"],
    capabilities: [
      "Compliance gap assessments against relevant frameworks",
      "Control design and implementation for HIPAA, FedRAMP, SOC 2",
      "Audit-ready evidence collection and documentation",
      "Governance program design and operationalization",
      "Continuous compliance monitoring and reporting",
      "Regulatory change management and advisory",
    ],
    outcomes: [
      "Audit-ready posture year-round",
      "Reduced compliance burden on internal teams",
      "Defensible security controls with documented evidence",
      "Faster regulatory approvals and certifications",
    ],
  },
  "identity-access-governance": {
    icon: Lock,
    title: "Identity & Access Governance",
    subtitle: "End-to-end identity lifecycle management with strong authentication, privileged access governance, and auditable access at enterprise scale.",
    description: "Identity is the new perimeter. ManaForce builds identity governance programs that control who accesses what — and proves it to auditors. From onboarding to offboarding, every access decision is governed, logged, and defensible.",
    tags: ["MFA", "PAM", "SSO", "Access Reviews", "SoD"],
    capabilities: [
      "Identity lifecycle management — joiner, mover, leaver automation",
      "Multi-factor authentication (MFA) deployment and enforcement",
      "Privileged access management (PAM) for IT and OT environments",
      "Segregation of duties (SoD) conflict detection and remediation",
      "Vendor and third-party access governance",
      "Role-based access control design and implementation",
    ],
    outcomes: [
      "Zero standing privileges for high-risk accounts",
      "Auditable access records across all systems",
      "Eliminated orphaned and excess access",
      "SoD compliance for SOX and regulated environments",
    ],
  },
  "cyber-operations": {
    icon: Workflow,
    title: "Security Automation",
    subtitle: "Automate security operations and compliance workflows through ServiceNow integration and orchestrated response.",
    description: "Manual security operations don't scale. ManaForce automates threat detection, incident response, and compliance workflows — reducing mean time to respond and freeing your team from repetitive tasks. Built on ServiceNow SecOps and integrated with your security stack.",
    tags: ["SOAR", "ServiceNow SecOps", "IR", "Threat Intelligence"],
    capabilities: [
      "Security orchestration, automation, and response (SOAR) implementation",
      "ServiceNow Security Operations (SecOps) configuration and integration",
      "Automated incident response playbooks and workflows",
      "Cross-platform containment and remediation automation",
      "Threat intelligence platform integration",
      "Compliance evidence automation and reporting",
    ],
    outcomes: [
      "Reduced mean time to detect and respond (MTTD/MTTR)",
      "Security events that trigger workflows — not tickets",
      "Consistent, auditable incident response processes",
      "Freed analyst capacity for high-value work",
    ],
  },
  "protecting-regulated-systems": {
    icon: ShieldCheck,
    title: "Protecting Validated Systems",
    subtitle: "GxP system protection, data integrity (ALCOA+), and preservation of validation status for regulated environments.",
    description: "Life sciences and manufacturing organizations operate validated systems where security controls must be implemented without disrupting validation status. ManaForce understands the intersection of cybersecurity and regulatory compliance for GxP environments.",
    tags: ["GxP / CSV", "21 CFR Part 11", "ALCOA+", "LIMS", "MES"],
    capabilities: [
      "Security control implementation within GxP validation constraints",
      "Data integrity assessment and remediation (ALCOA+)",
      "Controlled access to validated manufacturing and lab systems",
      "Security change control integration with quality management systems",
      "LIMS, MES, and electronic batch record system protection",
      "Regulatory inspection readiness for cybersecurity controls",
    ],
    outcomes: [
      "Security controls implemented without breaking validation status",
      "ALCOA+ data integrity compliance",
      "Audit-ready access records for regulated systems",
      "Reduced cyber risk to production and quality operations",
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const svc = services[params.slug]
  if (!svc) return {}
  return { title: `${svc.title} | ManaForce`, description: svc.subtitle }
}

export default function ManaForceServicePage({ params }) {
  const svc = services[params.slug]
  if (!svc) notFound()
  const Icon = svc.icon

  return (
    <div className="min-h-screen bg-[#141414] text-white">

      {/* Hero */}
      <div className="pt-28 pb-16 px-6 max-w-5xl mx-auto">
        <Link href="/manaforce" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-12">
          <ArrowLeft size={14} /> ManaForce
        </Link>

        <div className="flex flex-wrap gap-2 mb-7">
          {svc.tags.map((t) => (
            <span key={t} className="text-[11px] px-3 py-1 rounded-full border border-[#455CFF]/25 text-[#455CFF]/70 tracking-wide">
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: "-0.03em" }}>
          {svc.title}
        </h1>
        <p className="text-zinc-300 text-xl leading-relaxed max-w-2xl mb-4">{svc.subtitle}</p>
        <p className="text-zinc-500 text-base leading-relaxed max-w-2xl">{svc.description}</p>
      </div>

      <div className="h-px bg-zinc-800" />

      {/* Capabilities */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-10">What We Deliver</p>
        <div className="flex flex-col">
          {svc.capabilities.map((cap, i) => (
            <div key={i}>
              <div className="flex items-start gap-8 py-7">
                <span className="text-xs font-mono text-zinc-700 mt-1 w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-zinc-200 text-lg leading-relaxed">{cap}</p>
              </div>
              {i < svc.capabilities.length - 1 && <div className="h-px bg-zinc-800/60" />}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-zinc-800" />

      {/* Outcomes */}
      <div className="py-16 px-6 max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-10">What You Gain</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
          {svc.outcomes.map((out, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-[#455CFF]/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-[#455CFF]" />
              </div>
              <p className="text-zinc-300 text-base leading-relaxed">{out}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="h-px bg-zinc-800" />

      {/* CTA */}
      <div className="py-20 px-6 max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
        <div>
          <p className="text-white text-2xl font-semibold mb-2" style={{ letterSpacing: "-0.01em" }}>Ready to get started?</p>
          <p className="text-zinc-500 text-base">Talk to our team about {svc.title.toLowerCase()} for your organization.</p>
        </div>
        <Link
          href="/contact"
          className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#455CFF] text-white text-sm font-semibold hover:bg-[#3449e8] transition-colors"
        >
          Talk to us <ArrowRight size={14} />
        </Link>
      </div>

    </div>
  )
}
