'use client'

import { useState } from 'react'
import { 
  Zap, 
  Settings, 
  Users, 
  LineChart,
  Percent,
  Brain,
  Wrench as Tool,
  UserCheck,
  ShieldAlert 
} from 'lucide-react'
import Link from 'next/link'
import { cn } from "@/lib/utils"

const categories = [
  "IMPLEMENTATIONS",
  "CONSULTING",
  "MANAGED SERVICES",
  "ENHANCEMENTS"
];

const services = {
  "IMPLEMENTATIONS": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Technology Workflows (Tx)",
      description: "Mana'o Pili offers expert guidance for Technology Workflows, from implementation to system migration and consolidation. We deliver customized solutions while following Service Management best practices like ITIL, COBIT, and Lean principles."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Customer Workflows (Cx)",
      description: "Mana'o Pili provides expert ServiceNow Customer Workflow implementation, offering tailored solutions, data integration, process automation, and ongoing support. We collaborate to enhance case management, self-service, and omni-channel communications, ensuring seamless integration, hands-on training, and continuous post-launch support for optimal performance."
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "IT Operations Management",
      description: "Mana'o Pili delivers IT Operations Management (ITOM) solutions for long-term success. We build a robust CMDB using CSDM, provide real-time health monitoring, and customize ITOM workflows for better visibility and performance. Our solutions include automation and seamless integration with other systems."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Strategic Portfolio Management",
      description: "Mana'o Pili optimizes project and portfolio management with ServiceNow Strategic Portfolio Management (SPM), aligning it with business goals for efficiency. We assess your framework, collaborate with stakeholders, and create a tailored deployment roadmap. Our expertise also integrates SPM with ITSM, ITOM, Order Management, and Service Portal for a seamless system."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "IT Asset Management",
      description: "Mana'o Pili implements ServiceNow IT Asset Management (ITAM) solutions, covering Software (SAM) and Hardware (HAM) management. We ensure compliance and cost savings by managing licenses, automating asset lifecycles, and optimizing workflows. Our solutions help reduce risks, improve visibility, and cut unnecessary spending."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integrated Risk Management (IRM)",
      description: "Mana'o Pili specializes in ServiceNow Integrated Risk Management (IRM), providing design, implementation, and support for risk, security, compliance, and vendor management. We offer end-to-end InfoSec solutions, including Vulnerability Management, Security Incident Response (SIR), and Vendor Risk Management for full visibility and control."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "AI and GenAI",
      description: "Mana'o Pili optimizes ServiceNow automation with AI and GenAI capabilities. We implement Predictive Intelligence for decision automation, Document Intelligence for data processing, and Task Intelligence for workflow optimization. Our GenAI configurations include AI Summarization and automated Resolution Notes, driving productivity and cost savings."
    }                                                                                                                             
  ],
  "CONSULTING": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Strategic Planning",
      description: "Mana'o Pili offers expert Strategic Planning services to help ServiceNow customers maximize their investment, streamline workflows, and achieve real automation. By aligning ServiceNow solutions with business objectives, we enable clients to boost efficiency, improve decision-making, and drive impactful results."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Business Analysis",
      description: "Mana'o Pili's business analysis services leverage ITIL, COBIT, and Lean-trained experts to deliver consulting in process design, improvement, and automation. We help companies optimize workflows, boost efficiency, and align processes with business objectives for lasting impact."
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Process Improvement",
      description: "Mana'o Pili provides process improvement consulting by capturing and analyzing baseline metrics to identify key areas for impact. Our experts make prescriptive recommendations that \"move the needle,\" enhancing efficiency and delivering measurable improvements aligned with strategic business goals."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Technology Strategy",
      description: "Mana'o Pili offers Technology Strategy services for ServiceNow, focusing on platform performance, troubleshooting, upgrades, and best practices. Our experts ensure optimized, reliable, and scalable platform solutions that drive efficiency and support business goals."
    }
  ],
  "MANAGED SERVICES": [
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Fully Managed Platform",
      description: "Mana'o Pili offers a comprehensive suite of managed services for your ServiceNow platform, from supplementing system administrators to complete management. Our services include 24/7 support, adherence to your SDLC or ServiceNow's, dedicated experts familiar with your environment, and options for Service Level Objectives for rapid response."
    },
    {
      icon: <LineChart className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Staff Augmentation",
      description: "Mana'o Pili provides Staff Augmentation Services to help organizations scale with skilled professionals for short-term projects, long-term initiatives, or specialized ServiceNow expertise. Our flexible staffing solutions ensure the right talent is available when you need it."
    },
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Upgrade Support",
      description: "Mana'o Pili's ServiceNow Upgrade Support Approach ensures seamless upgrades with expert guidance and proactive management. Our team collaborates closely with your organization to plan, test, and execute upgrades, minimizing downtime. We emphasize Pre-Upgrade Planning, Testing, Issue Resolution, and Continuous Support."
    },
  ],
  "ENHANCEMENTS": [
    {
      icon: <Settings className="w-6 h-6 md:w-8 md:h-8" />,
      title: "System Enhancements",
      description: "Mana'o Pili's approach creates an agile, user-focused platform by aligning ServiceNow enhancements with business goals, optimizing workflows, and ensuring a seamless experience. Through automation, integrations, data governance, and ongoing feedback, we help maximize ServiceNow's value, optimizing performance, scalability, and security for lasting impact across all business functions."
    },
    {
      icon: <Zap className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Performance Tuning",
      description: "Mana'o Pili's performance tuning approach drives continuous, data-informed improvements to enhance system speed, responsiveness, and scalability. By aligning tuning with business goals and optimizing workflows, scripts, and interfaces, we ensure ServiceNow remains agile and high-performing, adapting to evolving user and business needs for a fast, scalable, reliable platform."
    },
    {
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      title: "Integration Services",
      description: "Mana'o Pili's ServiceNow Integration Services create seamless, scalable connections with other systems, aligning integrations with business goals to optimize workflows, ensure data integrity, and maintain security. Our approach focuses on efficiency, user experience, and continuous improvement, adapting to evolving needs and tech advancements."
    },
  ]
};
const comparisonData = [
    {
      category: "SAVINGS",
      icon: <Percent className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Up to 70%",
      traditional: "Up to 30%",
      gsi: "Up to 70%"
    },
    {
      category: "EXPERIENCE LEVEL",
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "40%+",
      traditional: "Up to 25%",
      gsi: "Up to 10%",
      description: "% of expert & experienced team members*"
    },
    {
      category: "TECHNICAL EXPERTISE",
      icon: <Tool className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "75%",
      traditional: "50%+",
      gsi: "50%",
      description: "% of technical team members"
    },
    {
      category: "CLIENT CENTRIC APPROACH",
      icon: <UserCheck className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Balanced",
      traditional: "Overly Prescriptive",
      gsi: "Non-Prescriptive",
      manaoPiliDesc: "Takes time to understand customer needs and provide balanced prescriptive guidance.",
      traditionalDesc: "Can focus too much on verbose assessments and service offerings (i.e. accelerators) that often doesn't align with client use case.",
      gsiDesc: "Been known to implement what customer asks for, regardless of best practice"
    },
    {
      category: "RISK FOR LICENSE UPSELL",
      icon: <ShieldAlert className="w-6 h-6 md:w-8 md:h-8" />,
      manaoPili: "Low",
      traditional: "Medium",
      gsi: "High",
      manaoPiliDesc: "Focus on maximizing existing licenses before recommending new ones.",
      traditionalDesc: "Recommend solutions using existing solution set. Only recommend licensing when absolutely needed.",
      gsiDesc: "Mandatory to maintain partner level. Financial incentives by ServiceNow."
    }
  ];

export default function Component() {
  const [activeCategory, setActiveCategory] = useState("IMPLEMENTATIONS");

  return (
    <div className="min-h-screen bg-zinc-900 pt-20">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white">Our Services</h1>
        </div>

        <div className="grid grid-cols-2 md:flex md:justify-center md:gap-10 mb-6 md:mb-12 gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "pb-2 md:pb-4 text-xs md:text-sm font-medium transition-colors relative whitespace-nowrap px-2",
                activeCategory === category
                  ? "text-blue-600"
                  : "text-zinc-400 hover:text-white"
              )}
            >
              {category}
              {activeCategory === category && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
              )}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
          {services[activeCategory].map((service, index) => (
            <div
              key={service.title}
              className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-sm"
            >
              <div className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-lg hover:shadow-blue-600/10 transition-all duration-300 h-full flex flex-col items-center text-center border border-zinc-600/50">
                <div className="mb-3 md:mb-4 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-xs md:text-sm text-justify text-zinc-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
            Ready to transform your ServiceNow experience?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-9 md:h-10 px-6 md:px-8 text-sm md:text-base font-medium text-white bg-blue-600 hover:bg-blue-600 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white text-center">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {comparisonData.map((item, index) => (
              <div key={index} className="bg-zinc-800/50 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-zinc-600/50">
                <div className="flex items-center mb-4">
                  <div className="mr-4 text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{item.category}</h3>
                </div>
                {item.description && (
                  <p className="text-sm text-zinc-400 mb-4">{item.description}</p>
                )}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">{`MANA'O PILI`}</span>
                    <span className="text-white font-bold">{item.manaoPili}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">TRADITIONAL PARTNERS</span>
                    <span className="text-zinc-300">{item.traditional}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">{`TRADITIONAL GSI's`}</span>
                    <span className="text-zinc-300">{item.gsi}</span>
                  </div>
                </div>
                {item.manaoPiliDesc && (
                  <p className="mt-4 text-sm text-blue-600">{item.manaoPiliDesc}</p>
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-400 mt-6 text-center">
            *Expert and experienced team members are defined as ServiceNow certified technical resources with more than 3 years of implementation experience on the ServiceNow platform.
          </p>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
            {`Ready to experience the Mana'o Pili difference?`}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-base font-medium text-white bg-blue-600 hover:bg-blue-600 rounded-md transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}