import Link from "next/link"
import { notFound } from "next/navigation"
import { ShieldCheck, Server, Lock, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react"

const industries = {
  "life-sciences-pharma": {
    name: "Life Sciences & Pharmaceutical",
    description: "Protecting validated systems, clinical data, and regulated processes in one of the most compliance-intensive sectors.",
    frameworks: ["21 CFR Part 11", "GxP / CSV / CSA", "ISO 27001"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Life sciences organizations must meet 21 CFR Part 11 for electronic records and GxP/CSV/CSA frameworks governing validated systems. Security controls must align without disrupting validation status.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "GxP-validated manufacturing systems, LIMS, electronic batch records, and clinical trial platforms require specialized protection that respects validation boundaries and change control processes.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Controlling who can access validated systems — and proving it to auditors — is critical. Role-based access, MFA enforcement, and fully auditable access records are non-negotiable.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "A security incident affecting a validated manufacturing line can halt production, compromise batch records, and trigger regulatory investigations. Operational continuity depends on proactive cyber risk management.",
      },
    ],
  },
  "healthcare": {
    name: "Healthcare",
    description: "Securing patient data, clinical systems, and healthcare operations under one of the strictest regulatory environments.",
    frameworks: ["HIPAA", "NIST", "ISO 27001"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "HIPAA mandates strict controls over protected health information (PHI). Organizations must implement administrative, physical, and technical safeguards, with breach notification obligations and audit controls.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "EHR platforms, medical devices, imaging systems, and telehealth infrastructure require layered security controls that protect patient safety while maintaining clinical availability.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Clinician access to patient records must be controlled, monitored, and auditable. Role-based access tied to clinical roles, with segregation between departments and clear access lifecycle management.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Ransomware attacks on healthcare organizations can directly impact patient care. Cyber resilience planning must account for clinical operations, not just IT recovery timelines.",
      },
    ],
  },
  "energy-utilities": {
    name: "Energy & Utilities",
    description: "Protecting critical infrastructure and operational technology environments in an increasingly targeted sector.",
    frameworks: ["NIST", "IEC 62443", "ISO 27001"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Energy and utilities operators must align with NIST Cybersecurity Framework and IEC 62443 for industrial control systems. Regulatory obligations vary by geography and asset criticality.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "SCADA systems, industrial control systems (ICS), and operational technology (OT) environments require security approaches that prioritize availability and safety alongside confidentiality.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Controlling access to OT environments and critical infrastructure systems requires strict segmentation, privileged access management, and vendor access governance.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Attacks on energy infrastructure can cascade into community-level disruptions. Threat modelling, incident response planning, and OT-specific security monitoring are essential.",
      },
    ],
  },
  "finance-insurance": {
    name: "Finance & Insurance",
    description: "Managing cyber risk and regulatory compliance across financial services and insurance operations.",
    frameworks: ["SOX", "NIST", "ISO 27001"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "SOX mandates internal controls over financial reporting systems. Financial institutions also face GLBA, state-level regulations, and increasing SEC cybersecurity disclosure requirements.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "Core banking platforms, trading systems, policy administration systems, and financial data warehouses require security controls that protect integrity and ensure continuous availability.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Segregation of duties is a SOX requirement. Enforcing role-based access, detecting conflicts, and maintaining auditable access records across financial systems is foundational.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Financial fraud, data breaches, and insider threats are persistent risks. Cyber risk management must integrate with enterprise risk governance and regulatory reporting obligations.",
      },
    ],
  },
  "regulated-manufacturing": {
    name: "Regulated Manufacturing",
    description: "Securing production environments and quality systems in manufacturing sectors operating under regulatory oversight.",
    frameworks: ["ISO 27001", "NIST", "IEC 62443"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Regulated manufacturers must demonstrate security controls that protect quality systems, production data, and intellectual property. ISO 27001 provides the governance foundation.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "MES, ERP, quality management systems, and production line control systems require protection that accounts for legacy technology, OT protocols, and production uptime requirements.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Production floor access, remote maintenance by vendors, and change control across quality systems require strict identity governance with full audit trails.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Downtime in regulated manufacturing carries significant financial and compliance consequences. Supply chain cyber risks, ransomware, and IP theft are primary threat vectors.",
      },
    ],
  },
  "public-sector": {
    name: "Public Sector / Government",
    description: "Helping government agencies meet federal cybersecurity mandates and protect citizen-facing systems.",
    frameworks: ["FedRAMP", "FISMA", "NIST"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Federal agencies and contractors must comply with FedRAMP for cloud services, FISMA for information security, and NIST SP 800-53 control families covering the full security lifecycle.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "Citizen data systems, law enforcement platforms, benefits administration systems, and classified networks require tiered security controls aligned to data sensitivity and mission criticality.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "PIV/CAC-based authentication, role-based access across agencies, and Zero Trust implementation are federal directives that require structured identity governance programs.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Nation-state threats, ransomware targeting government services, and insider risks make public sector cybersecurity a national security concern requiring continuous vigilance.",
      },
    ],
  },
  "telecommunications": {
    name: "Telecommunications",
    description: "Protecting network infrastructure and customer data across highly targeted telecom environments.",
    frameworks: ["ISO 27001", "NIST", "CPNI"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Telecom operators face CPNI regulations, data protection obligations, and where publicly traded, SOX requirements. Network security standards increasingly align with NIST and ISO 27001.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "Core network infrastructure, billing systems, OSS/BSS platforms, and customer data repositories require robust security controls and rapid incident response capabilities.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Network operations centers, vendor access to network infrastructure, and privileged administrative access to core systems require strict governance with real-time monitoring.",
      },
      {
        icon: AlertTriangle,
        title: "Cyber Risk to Operations",
        body: "Telecom companies are high-value targets for state-sponsored espionage, SS7 attacks, and supply chain compromises. Network resilience and security monitoring are critical operational priorities.",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }))
}

export function generateMetadata({ params }) {
  const industry = industries[params.slug]
  if (!industry) return {}
  return { title: `${industry.name} | ManaForce`, description: industry.description }
}

export default function ManaForceIndustryPage({ params }) {
  const industry = industries[params.slug]
  if (!industry) notFound()

  return (
    <div className="min-h-screen bg-[#141414] text-white">

      {/* Hero — full width with glow */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(69,92,255,0.2) 0%, transparent 70%)"
        }} />
        <div className="relative pt-28 pb-20 px-6 max-w-6xl mx-auto">
          <Link href="/manaforce" className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors mb-12">
            <ArrowLeft size={14} /> ManaForce
          </Link>

          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-widest text-[#455CFF] mb-5">Industry Focus</p>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-[1.02]" style={{ letterSpacing: "-0.03em" }}>
              {industry.name}
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10">{industry.description}</p>

            {/* Framework pills */}
            <div className="flex flex-wrap gap-2">
              {industry.frameworks.map((fw) => (
                <span key={fw} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#455CFF]/10 border border-[#455CFF]/25 text-[#455CFF] text-xs font-medium tracking-wide">
                  <span className="w-1 h-1 rounded-full bg-[#455CFF]" />
                  {fw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Focus areas — 2×2 visual grid */}
      <div className="px-6 pb-8 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-zinc-500 mb-8">Key Focus Areas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industry.focusAreas.map((area, i) => {
            const Icon = area.icon
            return (
              <div
                key={i}
                className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-[#455CFF]/[0.06] p-8 overflow-hidden hover:border-[#455CFF]/40 transition-all duration-300"
              >
                {/* Background glow on hover */}
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "radial-gradient(circle, rgba(69,92,255,0.15), transparent 70%)" }} />

                {/* Icon */}
                <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: "rgba(69,92,255,0.12)", border: "1px solid rgba(69,92,255,0.25)" }}>
                  <Icon size={24} style={{ color: "#455CFF" }} />
                </div>

                <h3 className="text-white font-bold text-xl mb-3 relative" style={{ letterSpacing: "-0.01em" }}>
                  {area.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed relative">{area.body}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#455CFF]/0 to-transparent group-hover:via-[#455CFF]/50 transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>

      {/* Frameworks visual strip */}
      <div className="px-6 py-12 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-6">
          <p className="text-zinc-500 text-sm font-medium flex-shrink-0">Compliance Frameworks</p>
          <div className="h-px sm:h-8 w-px bg-zinc-800 flex-shrink-0 hidden sm:block" />
          <div className="flex flex-wrap gap-3">
            {industry.frameworks.map((fw) => (
              <span key={fw} className="text-sm text-white font-medium px-4 py-1.5 rounded-lg bg-zinc-800 border border-zinc-700">
                {fw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-24 max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden"
          style={{ background: "linear-gradient(135deg, rgba(69,92,255,0.15) 0%, rgba(20,20,20,0.95) 60%)", border: "1px solid rgba(69,92,255,0.2)" }}>
          <div className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(69,92,255,0.2), transparent 70%)", filter: "blur(40px)" }} />
          <div className="relative px-10 py-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <p className="text-white text-3xl font-bold mb-2" style={{ letterSpacing: "-0.02em" }}>
                Ready to secure your<br />{industry.name.split(" ")[0]} operations?
              </p>
              <p className="text-zinc-400 text-base">Let&apos;s discuss your compliance requirements and cybersecurity challenges.</p>
            </div>
            <Link
              href="/contact"
              className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#455CFF] text-white text-sm font-semibold hover:bg-[#3449e8] transition-colors"
            >
              Talk to us <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
