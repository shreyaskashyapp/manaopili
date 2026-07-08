"use client"

import { Check } from 'lucide-react'
import { useParams } from 'next/navigation'
import Reveal from "../../components/reveal"
import WordReveal from "../../components/word-reveal"
import GlossyButton from "../../components/glossy-button"
import ContactBanner from "../../components/contact-banner"
import { motion, useReducedMotion } from "framer-motion"

const services = {
    "technology-workflows": {
        surveyCheck: true,
        "title": "Technology Workflows (Tx)",
        "description": "Expert guidance for Technology Workflows implementation and optimization",
        "features": [
            "Automated workflow design and implementation",
            "Process mapping and optimization",
            "Technical integration services",
            "Performance monitoring setup",
            "Workflow documentation and standardization"
        ],
        "benefits": [
            "Increased operational efficiency",
            "Reduced manual intervention",
            "Standardized processes",
            "Better resource utilization",
            "Improved service delivery"
        ]
    },
    "customer-workflows": {
        surveyCheck: true,
        "title": "Customer Workflows (Cx)",
        "description": "Tailored ServiceNow Customer Workflow implementation and support",
        "features": [
            "Customer journey mapping",
            "Service portal customization",
            "Case management automation",
            "Customer communication workflows",
            "Self-service implementation"
        ],
        "benefits": [
            "Enhanced customer experience",
            "Faster response times",
            "Improved customer satisfaction",
            "Reduced support costs",
            "Better service visibility"
        ]
    },
    "it-operations-management": {
        surveyCheck: true,
        "title": "IT Operations Management",
        "description": "Comprehensive ITOM solutions for long-term success and visibility",
        "features": [
            "Service mapping",
            "Infrastructure monitoring",
            "Event management automation",
            "Cloud operations management",
            "Capacity planning tools"
        ],
        "benefits": [
            "Improved system reliability",
            "Reduced downtime",
            "Proactive issue resolution",
            "Better resource optimization",
            "Enhanced operational visibility"
        ]
    },
    "strategic-portfolio-management": {
        surveyCheck: true,
        "title": "Strategic Portfolio Management",
        "description": "Optimized project and portfolio management aligned with business goals",
        "features": [
            "Portfolio prioritization",
            "Resource allocation management",
            "Project tracking and reporting",
            "Investment planning tools",
            "Strategic alignment framework"
        ],
        "benefits": [
            "Better project outcomes",
            "Optimized resource usage",
            "Improved decision-making",
            "Enhanced portfolio visibility",
            "Strategic goal alignment"
        ]
    },
    "it-asset-management": {
        surveyCheck: true,
        "title": "IT Asset Management",
        "description": "Efficient ITAM solutions for compliance and cost savings",
        "features": [
            "Asset lifecycle management",
            "License compliance tracking",
            "Cost optimization tools",
            "Vendor management",
            "Asset discovery automation"
        ],
        "benefits": [
            "Reduced asset costs",
            "Improved compliance",
            "Better asset utilization",
            "Enhanced procurement processes",
            "Accurate asset inventory"
        ]
    },
    "integrated-risk-management": {
        surveyCheck: true,
        "title": "Integrated Risk Management (IRM)",
        "description": "Comprehensive risk, security, and compliance management solutions",
        "features": [
            "Risk assessment frameworks",
            "Compliance monitoring",
            "Security controls management",
            "Audit management",
            "Policy enforcement tools"
        ],
        "benefits": [
            "Reduced risk exposure",
            "Enhanced compliance posture",
            "Better security management",
            "Streamlined audits",
            "Improved risk visibility"
        ]
    },
    "ai-and-genai": {
        surveyCheck: true,
        "title": "AI and GenAI",
        "description": "Cutting-edge AI and GenAI capabilities for ServiceNow optimization",
        "features": [
            "AI-powered automation",
            "Natural language processing",
            "Predictive analytics",
            "Machine learning integration",
            "Intelligent workflow optimization"
        ],
        "benefits": [
            "Automated decision-making",
            "Improved accuracy",
            "Enhanced productivity",
            "Reduced manual effort",
            "Smart process optimization"
        ]
    },
    "strategic-planning": {
        "title": "Strategic Planning",
        "description": "Expert guidance to maximize your ServiceNow investment and streamline workflows",
        "features": [
            "ServiceNow roadmap development",
            "Platform optimization analysis",
            "ROI assessment and planning",
            "Workflow optimization strategy",
            "Implementation prioritization"
        ],
        "benefits": [
            "Maximized platform value",
            "Aligned business objectives",
            "Optimized resource allocation",
            "Clear implementation roadmap",
            "Improved workflow efficiency"
        ]
    },
    "business-analysis": {
        "title": "Business Analysis",
        "description": "ITIL, COBIT, and Lean-trained experts for process design and improvement",
        "features": [
            "Process mapping and analysis",
            "Requirements gathering",
            "Gap analysis",
            "Best practices implementation",
            "Framework alignment (ITIL/COBIT)"
        ],
        "benefits": [
            "Standardized processes",
            "Improved operational efficiency",
            "Framework compliance",
            "Reduced process redundancy",
            "Enhanced service quality"
        ]
    },
    "process-improvement": {
        "title": "Process Improvement",
        "description": "Data-driven process improvement consulting for measurable results",
        "features": [
            "Process performance analysis",
            "Metrics definition and tracking",
            "Bottleneck identification",
            "Continuous improvement planning",
            "KPI development and monitoring"
        ],
        "benefits": [
            "Measurable performance gains",
            "Data-driven decisions",
            "Streamlined operations",
            "Reduced waste",
            "Improved service delivery"
        ]
    },
    "technology-strategy": {
        "title": "Technology Strategy",
        "description": "Optimized ServiceNow platform performance and best practices implementation",
        "features": [
            "Technical architecture review",
            "Platform optimization assessment",
            "Best practices implementation",
            "Performance tuning",
            "Scalability planning"
        ],
        "benefits": [
            "Improved platform performance",
            "Enhanced system reliability",
            "Scalable architecture",
            "Optimized resource usage",
            "Best practice alignment"
        ]
    },
    "fully-managed-platform": {
        "title": "Fully Managed Platform",
        "description": "Comprehensive managed services for your ServiceNow platform",
        "features": [
            "24/7 platform monitoring",
            "Proactive maintenance",
            "Performance optimization",
            "Security management",
            "Regular health checks"
        ],
        "benefits": [
            "Reduced operational overhead",
            "Improved platform stability",
            "Enhanced security posture",
            "Optimized performance",
            "Continuous platform support"
        ]
    },
    "staff-augmentation": {
        "title": "Staff Augmentation",
        "description": "Flexible staffing solutions for ServiceNow expertise on demand",
        "features": [
            "Skilled ServiceNow resources",
            "Flexible engagement models",
            "Rapid resource deployment",
            "Expert knowledge transfer",
            "Scalable team expansion"
        ],
        "benefits": [
            "Access to expertise",
            "Reduced hiring costs",
            "Flexible workforce scaling",
            "Quick project ramp-up",
            "Knowledge retention"
        ]
    },
    "upgrade-support": {
        "title": "Upgrade Support",
        "description": "Expert guidance for seamless ServiceNow upgrades and migrations",
        "features": [
            "Upgrade readiness assessment",
            "Migration planning",
            "Testing strategy development",
            "Risk mitigation planning",
            "Post-upgrade support"
        ],
        "benefits": [
            "Minimized downtime",
            "Reduced upgrade risks",
            "Seamless transitions",
            "Maintained customizations",
            "Version compatibility"
        ]
    },
    "system-enhancements": {
        "title": "System Enhancements",
        "description": "Tailored ServiceNow enhancements for optimal performance and user experience",
        "features": [
            "Custom module development",
            "UI/UX improvements",
            "Performance optimization",
            "Workflow automation",
            "System customization"
        ],
        "benefits": [
            "Enhanced user experience",
            "Improved system efficiency",
            "Streamlined workflows",
            "Increased productivity",
            "Better system usability"
        ]
    },
    "performance-tuning": {
        "title": "Performance Tuning",
        "description": "Data-driven performance improvements for speed and scalability",
        "features": [
            "Performance benchmarking",
            "Database optimization",
            "Script optimization",
            "Cache management",
            "Query optimization"
        ],
        "benefits": [
            "Faster system response",
            "Improved scalability",
            "Better resource utilization",
            "Enhanced user satisfaction",
            "Reduced system bottlenecks"
        ]
    },
    "integration-services": {
        "title": "Integration Services",
        "description": "Seamless ServiceNow integrations for optimized workflows and data integrity",
        "features": [
            "Third-party system integration",
            "API development",
            "Data synchronization",
            "Integration monitoring",
            "Custom connector development"
        ],
        "benefits": [
            "Streamlined data flow",
            "Enhanced data accuracy",
            "Automated processes",
            "Improved workflow efficiency",
            "Better system connectivity"
        ]
    }
}

function TickColumn({ heading, items, delay = 0 }) {
    return (
        <Reveal delay={delay} className="px-2 py-10 md:px-12 md:py-4">
            <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-[#455CFF]" />
            <h2 className="font-heading text-2xl leading-snug text-white md:text-3xl">{heading}</h2>
            <ul className="mt-7 space-y-3.5">
                {items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300 md:text-base">
                        <Check className="mt-1 h-3.5 w-3.5 shrink-0 text-[#455CFF]" strokeWidth={3} />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </Reveal>
    )
}

export default function ServicePage() {
    const params = useParams();
    const service = services[params?.service]
    const reduceMotion = useReducedMotion()

    const appear = (delay = 0) =>
        reduceMotion
            ? {}
            : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
              }

    if (!service) {
        return (
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#141414]">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.12] blur-[150px]"
                />
                <WordReveal
                    words="Coming Soon"
                    trigger="load"
                    className="relative z-10 text-5xl font-light text-white md:text-7xl"
                />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-[#141414] text-[#e2e2e2]">
            {/* Hero — homepage character: aurora, grain, assembling title */}
            <section className="relative flex min-h-[70vh] items-center overflow-hidden">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-[55%] h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.14] blur-[160px]"
                />
                <div aria-hidden className="hero-grain pointer-events-none absolute inset-0 z-[1]" />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_50%,#141414_100%)]"
                />

                <div className="container relative z-10 mx-auto px-6 pb-16 pt-28 text-center">
                    <WordReveal
                        words={service.title}
                        trigger="load"
                        delayChildren={0.1}
                        className="mx-auto max-w-4xl text-4xl font-light leading-[1.1] text-white md:text-6xl lg:text-7xl"
                    />
                    <motion.p
                        {...appear(0.55)}
                        className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-zinc-300 md:text-xl"
                    >
                        {service.description}
                    </motion.p>
                    <motion.div {...appear(0.75)} className="mt-10 flex flex-wrap justify-center gap-4">
                        {service.surveyCheck && (
                            <GlossyButton href={`/new-survey?survey=${params?.service}`}>
                                Take Survey
                            </GlossyButton>
                        )}
                        <GlossyButton href="/contact">Contact Us</GlossyButton>
                    </motion.div>
                </div>
            </section>

            {/* Features & Benefits — editorial split, no cards */}
            <section className="py-14 md:py-24">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid divide-y divide-white/10 md:grid-cols-2 md:divide-x md:divide-y-0">
                        <TickColumn heading="Key Features" items={service.features} />
                        <TickColumn heading="Benefits" items={service.benefits} delay={0.12} />
                    </div>
                </div>
            </section>

            {/* Closing CTA */}
            {service.surveyCheck ? (
                <section className="relative overflow-hidden py-16 md:py-24">
                    <div
                        aria-hidden
                        className="pointer-events-none absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#455CFF] opacity-[0.10] blur-[150px]"
                    />
                    <div className="container relative z-10 mx-auto max-w-3xl px-6 text-center">
                        <WordReveal
                            as="h2"
                            trigger="inView"
                            words="Ready to Get Started?"
                            className="font-heading text-3xl font-light leading-tight text-white md:text-5xl"
                        />
                        <Reveal delay={0.15}>
                            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-zinc-400">
                                Take our quick survey to help us understand your needs and provide the best
                                solution for your organization.
                            </p>
                        </Reveal>
                        <Reveal delay={0.25} className="mt-9 flex justify-center">
                            <GlossyButton href={`/survey?survey=${params?.service}`}>
                                Take Survey Now
                            </GlossyButton>
                        </Reveal>
                    </div>
                </section>
            ) : (
                <div className="pb-14 md:pb-20">
                    <ContactBanner />
                </div>
            )}
        </div>
    )
}
