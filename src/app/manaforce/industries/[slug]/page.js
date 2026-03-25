import Link from "next/link"
import { notFound } from "next/navigation"
import { ShieldCheck, Server, Lock, AlertTriangle, ArrowLeft, ArrowRight } from "lucide-react"

const industries = {
  "life-sciences-pharma": {
    name: "Life Sciences & Pharmaceutical",
    description: "Protecting validated systems, clinical data, and regulated processes in one of the most compliance-intensive sectors.",
    frameworks: ["21 CFR Part 11", "GxP (GMP, GCP, GLP)", "EU Annex 11", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Life sciences organizations must meet 21 CFR Part 11 for electronic records, GxP frameworks (GMP, GCP, GLP) governing validated systems, EU Annex 11 for computerized systems, and SOC 2 for service organization controls. Security controls must align without disrupting validation status.",
      },
      {
        icon: Server,
        title: "Regulated Systems Protection",
        body: "GxP-validated manufacturing systems, LIMS, electronic batch records, and clinical trial platforms require specialized protection that respects validation boundaries and change control processes.",
      },
      {
        icon: Lock,
        title: "Identity & Access Governance",
        body: "Controlling who can access validated systems - and proving it to auditors - is critical. Role-based access, MFA enforcement, and fully auditable access records are non-negotiable.",
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
    frameworks: ["HIPAA", "HITECH Act", "HITRUST CSF", "SOC 2", "NIST"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "HIPAA mandates strict controls over protected health information (PHI). The HITECH Act strengthens HIPAA enforcement and breach notification requirements. HITRUST CSF provides a certifiable framework that unifies HIPAA, NIST, and ISO controls. SOC 2 attestation is increasingly required by healthcare business associates.",
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
    frameworks: ["NERC CIP", "NIST", "ISO/IEC 27001", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Energy and utilities operators must comply with NERC CIP standards for bulk electric system cyber security - one of the most prescriptive regulatory frameworks in any industry. ISO/IEC 27001 and NIST Cybersecurity Framework provide additional governance structure, while SOC 2 is required by many service providers in the sector.",
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
    frameworks: ["SOX", "GLBA", "PCI DSS", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "SOX mandates internal controls over financial reporting systems. GLBA requires financial institutions to protect customer data with safeguards programs. PCI DSS governs any environment handling cardholder data. SOC 2 is a baseline expectation for financial service providers and insurers handling sensitive data.",
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
    frameworks: ["ISO 9001", "ISO 27001", "OSHA Regulations", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Regulated manufacturers must satisfy ISO 9001 quality management requirements alongside ISO 27001 information security controls. OSHA regulations govern workplace safety systems that increasingly intersect with cyber risk. SOC 2 is required where manufacturers operate as service providers or handle customer data.",
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
    frameworks: ["NIST RMF", "FISMA", "FedRAMP", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Federal agencies must operate within the NIST Risk Management Framework (RMF) and comply with FISMA for information security program management. FedRAMP authorization is mandatory for cloud services used by federal agencies. SOC 2 reports are required from contractors and service providers operating within government environments.",
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
    frameworks: ["ISO 27001", "GDPR", "PCI DSS", "SOC 2"],
    focusAreas: [
      {
        icon: ShieldCheck,
        title: "Compliance Requirements",
        body: "Telecom operators must comply with ISO 27001 for information security management, GDPR for customer data privacy across European operations, and PCI DSS wherever billing and payment systems are in scope. SOC 2 attestation is required by enterprise customers and regulators assessing third-party risk.",
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

export async function generateMetadata({ params }) {
  const { slug } = await params
  const industry = industries[slug]
  if (!industry) return {}
  return { title: `${industry.name} | ManaForce`, description: industry.description }
}

export default async function ManaForceIndustryPage({ params }) {
  const { slug } = await params
  const industry = industries[slug]
  if (!industry) notFound()

  return (
    <div className="min-h-screen text-white">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(69,92,255,0.14) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{ backgroundImage: "radial-gradient(rgba(69,92,255,0.05) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative pt-28 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

          <Link
            href="/manaforce"
            className="self-start inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-300 transition-colors duration-200 mb-14"
          >
            <ArrowLeft size={14} /> ManaForce
          </Link>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e2e2e2] leading-[1.02] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {industry.name}
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-5xl mb-10">
            {industry.description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {industry.frameworks.map((fw) => (
              <span
                key={fw}
                className="text-[11px] px-3 py-1.5 rounded-full border border-[#455CFF]/20 bg-[#455CFF]/[0.05] text-[#455CFF]/80 tracking-wide"
              >
                {fw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Focus Areas ── */}
      <div className="py-10 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            Key Focus Areas
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {industry.focusAreas.map((area, i) => {
            const Icon = area.icon
            return (
              <div
                key={i}
                className="group relative flex flex-col gap-4 rounded-2xl p-8 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/30 hover:shadow-[0_0_40px_rgba(69,92,255,0.07)] transition-all duration-300 overflow-hidden"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
                />
                <Icon
                  size={22}
                  className="text-[#455CFF] opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
                <h3
                  className="text-white font-bold text-xl leading-snug"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {area.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{area.body}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="pb-24 pt-12 px-6 max-w-5xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden border border-[#455CFF]/20 bg-[#0d0d1a] text-center px-10 py-16">

          {/* Radial glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(69,92,255,0.10), transparent)" }}
          />
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[1px]"
            style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Get started</p>
            <h2
              className="text-3xl md:text-4xl font-bold text-white max-w-xl leading-snug"
              style={{ letterSpacing: "-0.02em" }}
            >
              Let&apos;s talk about securing your {industry.name} operations.
            </h2>
            <p className="text-zinc-500 text-base max-w-md leading-relaxed">
              Our team will assess your environment and design a path forward.
            </p>
            <div className="flex flex-wrap gap-3 justify-center mt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#455CFF] text-white text-sm font-semibold hover:bg-[#455CFF]/80 transition-colors"
              >
                Talk to us <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
