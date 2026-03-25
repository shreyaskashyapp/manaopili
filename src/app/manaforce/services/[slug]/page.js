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
      {
        title: "Identity-Driven Access",
        desc: "Every access request is verified by identity and context — never by network location alone.",
      },
      {
        title: "Segmented Application Access",
        desc: "Users connect directly to applications, never to the network — eliminating lateral movement risk.",
      },
      {
        title: "Secure Remote & Vendor Access",
        desc: "Replace VPN with ZTNA for secure, scoped access without broad network exposure.",
      },
      {
        title: "Reduced Attack Surface",
        desc: "Micro-segmentation limits the blast radius of any breach or compromise.",
      },
      {
        title: "Protect Regulated Data & Systems",
        desc: "Enforce access controls across cloud, on-prem, and hybrid environments for regulated data.",
      },
    ],
    outcomes: [
      {
        title: "Implicit Trust Eliminated",
        tag: "Zero Trust",
        desc: "Network location no longer grants access. Every request is verified by identity and context, every time.",
      },
      {
        title: "Reduced Attack Surface",
        tag: "Risk Reduction",
        desc: "Micro-segmentation contains blast radius and eliminates lateral movement paths that VPN models leave exposed.",
      },
      {
        title: "Secure Remote Access",
        tag: "Operations",
        desc: "Users and vendors access only what they need — without VPN infrastructure or broad network exposure.",
      },
      {
        title: "Compliance-Ready Controls",
        tag: "Compliance",
        desc: "Access controls are documented, auditable, and aligned to regulatory frameworks from day one.",
      },
    ],
  },
  "regulated-cybersecurity": {
    icon: Shield,
    title: "Compliance & Governance",
    subtitle: "Continuous compliance readiness, audit defensibility, and governance operationalization for regulated organizations.",
    description: "Regulated organizations face mounting pressure to demonstrate cybersecurity controls to auditors, regulators, and customers. ManaForce builds compliance into the security architecture — not as an afterthought, but as a foundational capability.",
    tags: ["HIPAA", "FedRAMP", "SOC 2", "ISO 27001", "21 CFR Part 11"],
    capabilities: [
      {
        title: "Compliance-Aligned Cybersecurity",
        desc: "Security controls designed to satisfy auditors and regulators from day one.",
      },
      {
        title: "Continuous Compliance Readiness",
        desc: "Ongoing monitoring and documentation so you're never caught unprepared for an audit.",
      },
      {
        title: "Audit Defensibility",
        desc: "Evidence collection and control mapping that holds up under scrutiny.",
      },
      {
        title: "Governance Operationalization",
        desc: "Governance programs that work in practice — not just on paper.",
      },
      {
        title: "Protection of Regulated Systems",
        desc: "Cybersecurity controls built around your regulated environment's specific requirements.",
      },
    ],
    outcomes: [
      {
        title: "Audit-Ready Year-Round",
        tag: "Compliance",
        desc: "Controls are continuously documented and evidence-ready — no scramble before audit season.",
      },
      {
        title: "Reduced Compliance Burden",
        tag: "Efficiency",
        desc: "Automated monitoring and reporting frees internal teams from manual compliance tracking.",
      },
      {
        title: "Defensible Controls",
        tag: "Governance",
        desc: "Every security control has documented evidence and framework mapping auditors can verify.",
      },
      {
        title: "Faster Certifications",
        tag: "Operations",
        desc: "Structured readiness accelerates regulatory approvals and certification timelines.",
      },
    ],
  },
  "identity-access-governance": {
    icon: Lock,
    title: "Identity & Access Governance",
    subtitle: "End-to-end identity lifecycle management with strong authentication, privileged access governance, and auditable access at enterprise scale.",
    description: "Identity is the new perimeter. ManaForce builds identity governance programs that control who accesses what — and proves it to auditors. From onboarding to offboarding, every access decision is governed, logged, and defensible.",
    tags: ["MFA", "PAM", "SSO", "Access Reviews", "SoD"],
    capabilities: [
      {
        title: "Identity Lifecycle Management",
        desc: "Automated provisioning and deprovisioning across your entire user population.",
      },
      {
        title: "Strong Authentication",
        desc: "MFA enforcement and SSO deployment across all critical systems and applications.",
      },
      {
        title: "Privileged Access Governance",
        desc: "PAM controls that eliminate standing privileges and enforce just-in-time access.",
      },
      {
        title: "Vendor Access Control",
        desc: "Third-party access governed, scoped, and time-limited by policy.",
      },
      {
        title: "Segregation of Duties",
        desc: "SoD conflict detection and remediation for SOX, SOC 2, and regulated environments.",
      },
      {
        title: "Auditable Access",
        desc: "Every access decision logged, reviewed, and defensible to auditors.",
      },
    ],
    outcomes: [
      {
        title: "Zero Standing Privileges",
        tag: "Privileged Access",
        desc: "High-risk accounts operate on just-in-time access — no persistent admin rights left exposed.",
      },
      {
        title: "Complete Access Auditability",
        tag: "Governance",
        desc: "Every access grant, review, and revocation is logged and traceable across all systems.",
      },
      {
        title: "Eliminated Excess Access",
        tag: "Risk Reduction",
        desc: "Orphaned accounts and over-provisioned roles are identified and removed systematically.",
      },
      {
        title: "SoD Compliance",
        tag: "Compliance",
        desc: "Segregation of duties enforced for SOX and regulated environments with documented evidence.",
      },
    ],
  },
  "cyber-operations": {
    icon: Workflow,
    title: "Security Automation",
    subtitle: "Automate security operations and compliance workflows through ServiceNow integration and orchestrated response.",
    description: "Manual security operations don't scale. ManaForce automates threat detection, incident response, and compliance workflows — reducing mean time to respond and freeing your team from repetitive tasks. Built on ServiceNow SecOps and integrated with your security stack.",
    tags: ["SOAR", "ServiceNow SecOps", "IR", "Threat Intelligence"],
    capabilities: [
      {
        title: "Security Workflow Automation",
        desc: "Repetitive security tasks handled by orchestrated workflows — not analyst hours.",
      },
      {
        title: "Incident Response Orchestration",
        desc: "Automated playbooks that contain and respond to threats faster than manual processes.",
      },
      {
        title: "Cross-Platform Containment",
        desc: "Coordinated response across your full security stack from a single orchestration layer.",
      },
      {
        title: "Evidence & Compliance Automation",
        desc: "Compliance evidence collected and documented automatically with every security action.",
      },
      {
        title: "Risk-Based Prioritization",
        desc: "Security events ranked by business risk so teams focus where it matters most.",
      },
    ],
    outcomes: [
      {
        title: "Faster Detection & Response",
        tag: "Operations",
        desc: "Automated workflows reduce MTTD and MTTR — threats are contained before they escalate.",
      },
      {
        title: "Workflows, Not Tickets",
        tag: "Automation",
        desc: "Security events trigger automated response actions — not manual ticket queues.",
      },
      {
        title: "Consistent IR Processes",
        tag: "Governance",
        desc: "Every incident handled through auditable, repeatable playbooks — no improvisation under pressure.",
      },
      {
        title: "Freed Analyst Capacity",
        tag: "Efficiency",
        desc: "Automation handles the routine so your team can focus on high-judgment, high-value work.",
      },
    ],
  },
  "protecting-regulated-systems": {
    icon: FlaskConical,
    title: "Protecting Validated Systems",
    subtitle: "GxP system protection, data integrity (ALCOA+), and preservation of validation status for regulated environments.",
    description: "Life sciences and manufacturing organizations operate validated systems where security controls must be implemented without disrupting validation status. ManaForce understands the intersection of cybersecurity and regulatory compliance for GxP environments.",
    tags: ["GxP / CSV", "21 CFR Part 11", "ALCOA+", "LIMS", "MES"],
    capabilities: [
      {
        title: "GxP System Protection",
        desc: "Security controls implemented without disrupting your validated system state.",
      },
      {
        title: "Data Integrity (ALCOA+)",
        desc: "Access and change controls that preserve attributable, legible, and complete data records.",
      },
      {
        title: "Controlled System Boundaries",
        desc: "Defined and enforced boundaries between validated and non-validated environments.",
      },
      {
        title: "Secure Regulated Environments",
        desc: "Cybersecurity measures designed for the constraints of regulated manufacturing and lab systems.",
      },
      {
        title: "Preserve Validation Status",
        desc: "Every security change managed through your quality system to maintain validation integrity.",
      },
    ],
    outcomes: [
      {
        title: "Validation Status Preserved",
        tag: "GxP Compliance",
        desc: "Security controls are implemented and documented within your existing quality change control process.",
      },
      {
        title: "ALCOA+ Data Integrity",
        tag: "Data Integrity",
        desc: "Access and audit trail controls ensure records remain attributable, legible, and tamper-evident.",
      },
      {
        title: "Audit-Ready Access Records",
        tag: "Compliance",
        desc: "Every access event to validated systems is logged and available for regulatory inspection.",
      },
      {
        title: "Reduced Production Risk",
        tag: "Operations",
        desc: "Cyber risk to manufacturing and quality operations contained without disrupting production.",
      },
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const svc = services[slug]
  if (!svc) return {}
  return { title: `${svc.title} | ManaForce`, description: svc.subtitle }
}

export default async function ManaForceServicePage({ params }) {
  const { slug } = await params
  const svc = services[slug]
  if (!svc) notFound()

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
            <ArrowLeft size={14} />
            ManaForce
          </Link>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#e2e2e2] leading-[1.02] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            {svc.title}
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-5xl mb-3">
            {svc.subtitle}
          </p>
          <p className="text-zinc-500 text-base leading-relaxed max-w-3xl mb-10">
            {svc.description}
          </p>

          <div className="flex flex-wrap gap-2 justify-center">
            {svc.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] px-3 py-1.5 rounded-full border border-[#455CFF]/20 bg-[#455CFF]/[0.05] text-[#455CFF]/80 tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── What We Deliver ── */}
      <div className="py-10 px-6 max-w-7xl mx-auto">

        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            What We Deliver
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {svc.capabilities.map((cap, i) => (
            <div
              key={i}
              className="group relative flex flex-col justify-between gap-6 py-10 rounded-2xl p-8 border border-white/[0.07] bg-[#0d0d1a] hover:border-[#455CFF]/30 hover:shadow-[0_0_40px_rgba(69,92,255,0.07)] transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #455CFF, transparent)" }}
              />
              <div>
                <p
                  className="text-white font-bold text-xl mb-3 leading-snug"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {cap.title}
                </p>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {cap.desc}
                </p>
              </div>
             
            </div>
          ))}
        </div>
      </div>

      {/* ── What You Gain ── */}
      <div className="py-20 px-6 max-w-5xl mx-auto border-t border-zinc-800/60">

        <div className="text-center mb-14">
          <h2
            className="text-3xl md:text-4xl font-bold text-white"
            style={{ letterSpacing: "-0.02em" }}
          >
            What You Gain
          </h2>
        </div>

        <div className="flex flex-col">
          {svc.outcomes.map((out, i) => (
            <div
              key={i}
              className="group grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-12 py-8 border-t border-zinc-800/60 hover:border-zinc-700/80 transition-colors duration-200"
            >
              {/* Left */}
              <div className="flex flex-col gap-2">
                <p
                  className="text-white font-semibold text-xl leading-snug group-hover:text-[#455CFF] transition-colors duration-200"
                  style={{ letterSpacing: "-0.01em" }}
                >
                  {out.title}
                </p>
                <span className="text-[11px] tracking-widest uppercase text-zinc-600">
                  {out.tag}
                </span>
              </div>
              {/* Right */}
              <p className="text-zinc-500 text-sm leading-relaxed self-center group-hover:text-zinc-400 transition-colors duration-200">
                {out.desc}
              </p>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-zinc-800/60" />
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="pb-24 px-6 max-w-5xl mx-auto">
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
              Let&apos;s talk about {svc.title} for your organization.
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
