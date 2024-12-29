import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = {
    "technology-workflows": {
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

export default function ServicePage({ params }) {
    const service = services[params.service]

    if (!service) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                    Coming Soon
                </h1>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-8">
            {/* Hero Section */}
            <div className="container mx-auto px-4 pt-20 pb-16 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {service.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    {service.description}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                        <Link href="/survey">
                            Take Survey <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button
                        asChild
                        variant="outline"
                        size="lg"
                        className="bg-transparent text-white border-white hover:bg-white/10 rounded-full"
                    >
                        <Link href="/contact">Contact Us</Link>
                    </Button>
                </div>
            </div>

            {/* Features and Benefits */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="bg-gray-800/50 border-gray-700">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-300">
                                        <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-gray-300 mb-8">
                        Take our quick survey to help us understand your needs and provide the best solution for your organization.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-full"
                    >
                        <Link href="/survey">
                            Take Survey Now <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
