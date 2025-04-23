
import {
  Check,
  LineChart,
  Settings,
  Users,
  X,
  Zap
} from 'lucide-react'
import CompareCard from '../components/comparisionCards'
import HeroSection from '../components/hero-section'
import ServicesAccordion from '../components/services-accordion'
import SurveyButton from '../components/surveyButton'

const categories = ["IMPLEMENTATIONS", "CONSULTING", "MANAGED SERVICES", "ENHANCEMENTS"]

const services = {
  IMPLEMENTATIONS: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Technology Workflows (Tx)",
      description: "Expert guidance for Technology Workflows implementation and optimization.",
      slug: "technology-workflows",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customer Workflows (Cx)",
      description: "Tailored ServiceNow Customer Workflow implementation and support.",
      slug: "customer-workflows",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "IT Operations Management",
      description: "Comprehensive ITOM solutions for long-term success and visibility.",
      slug: "it-operations-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Strategic Portfolio Management",
      description: "Optimized project and portfolio management aligned with business goals.",
      slug: "strategic-portfolio-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "IT Asset Management",
      description: "Efficient ITAM solutions for compliance and cost savings.",
      slug: "it-asset-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Integrated Risk Management (IRM)",
      description: "Comprehensive risk, security, and compliance management solutions.",
      slug: "integrated-risk-management",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "AI and GenAI",
      description: "Cutting-edge AI and GenAI capabilities for ServiceNow optimization.",
      slug: "ai-and-genai",
    },
  ],
  CONSULTING: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Strategic Planning",
      description: "Expert guidance to maximize your ServiceNow investment and streamline workflows.",
      slug: "strategic-planning",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Business Analysis",
      description: "ITIL, COBIT, and Lean-trained experts for process design and improvement.",
      slug: "business-analysis",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Process Improvement",
      description: "Data-driven process improvement consulting for measurable results.",
      slug: "process-improvement",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Technology Strategy",
      description: "Optimized ServiceNow platform performance and best practices implementation.",
      slug: "technology-strategy",
    },
  ],
  "MANAGED SERVICES": [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fully Managed Platform",
      description: "Comprehensive managed services for your ServiceNow platform.",
      slug: "fully-managed-platform",
    },
    {
      icon: <LineChart className="w-5 h-5" />,
      title: "Staff Augmentation",
      description: "Flexible staffing solutions for ServiceNow expertise on demand.",
      slug: "staff-augmentation",
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Upgrade Support",
      description: "Expert guidance for seamless ServiceNow upgrades and migrations.",
      slug: "upgrade-support",
    },
  ],
  ENHANCEMENTS: [
    {
      icon: <Settings className="w-5 h-5" />,
      title: "System Enhancements",
      description: "Tailored ServiceNow enhancements for optimal performance and user experience.",
      slug: "system-enhancements",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Performance Tuning",
      description: "Data-driven performance improvements for speed and scalability.",
      slug: "performance-tuning",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Integration Services",
      description: "Seamless ServiceNow integrations for optimized workflows and data integrity.",
      slug: "integration-services",
    },
  ],
}

const data = {
  "Mana'o Pili":
    [
      {
        title: "SAVINGS UPTO",
        value: 70,
        label: "70%"
      },
      {
        title: "EXPERIENCE LEVEL",
        subtitle: "% of expert & experienced team members*",
        value: 40,
        label: "40%+"
      },
      {
        title: "TECHNICAL EXPERTISE",
        subtitle: "% of technical team members",
        value: 75,
        label: "75%"
      },
      {
        title: "CLIENT CENTRIC APPROACH",
        label: "Balanced",
        logo: <Check className="text-green-400" />
      },
      {
        title: "RISK FOR LICENSE UPSELL",
        label: "Low",
        color: 'rounded-full w-3 h-3 bg-green-500'
      }
    ],
  "Service Now Partners": [
    {
      title: "SAVINGS UPTO",
      value: 30,
      label: "30%"
    },
    {
      title: "EXPERIENCE LEVEL",
      subtitle: "% of expert & experienced team members*",
      value: 25,
      label: "25%"
    },
    {
      title: "TECHNICAL EXPERTISE",
      subtitle: "% of technical team members",
      value: 50,
      label: "50%+"
    },
    {
      title: "CLIENT CENTRIC APPROACH",
      label: "Overly Prescriptive",
      logo: <X className="text-yellow-300" />
    },
    {
      title: "RISK FOR LICENSE UPSELL",
      label: "Medium",
      color: 'rounded-full w-3 h-3 bg-yellow-300'
    }
  ],
  "GSI":
    [
      {
        title: "SAVINGS UPTO",
        value: 70,
        label: "70%"
      },
      {
        title: "EXPERIENCE LEVEL",
        subtitle: "% of expert & experienced team members*",
        value: 10,
        label: "10%"
      },
      {
        title: "TECHNICAL EXPERTISE",
        subtitle: "% of technical team members",
        value: 50,
        label: "50%"
      },
      {
        title: "CLIENT CENTRIC APPROACH",
        label: "Non-Prescriptive",
        logo: <X className="text-red-400" />
      },
      {
        title: "RISK FOR LICENSE UPSELL",
        label: "High",
        color: 'rounded-full w-3 h-3 bg-red-400'
      }
    ]
};

const companies = [
  "Mana'o Pili",
  "Service Now Partners",
  "GSI",
]

const hero = {
  title: "Services",
  description: (
    <>
      Empowering your business with end-to-end <span className="text-[#deff00]">ServiceNow</span> solutions, driven by expert professionals to maximize <span className="text-[#deff00]">platform value</span>.
    </>
  )
}
const buttonData={
  link:"/survey-list",
  text:"Get Started"
}
export const metadata = {
  title: "Services | End-To-End ServiceNow solutions | Mana'o Pili, LLC",
  description: "Mana’o Pili provides end-to-end ServiceNow solutions across all product lines. Our services include IT operations, customer workflows, AI and GenAI, strategic portfolio management, and consulting services.",
  openGraph: {
    title: "Our Services - Mana’o Pili",
    description: "Mana’o Pili offers end-to-end ServiceNow solutions, including technology workflows, AI, IT asset management, and strategic portfolio management, with consulting and managed services.",
    url: "https://manaopili.com/services",
  },
};


export default function Component() {
  return (
    <div className=" bg-[#141414]">
      <div className="w-full">
        {/* //hero */}
        <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
        <div className="container mx-auto px-4 py-10">
          <ServicesAccordion services={services} categories={categories} />

          <div className="mt-16 text-center">
            <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
              {`Ready to experience the Mana'o Pili difference?`}
            </p>
            <SurveyButton data={buttonData}/>
          </div>
          {/* comparision section */}
          {/* <Comparison/> */}
          <div className='mt-16 text-center'>
            <h2 className='text-5xl font-normal text-[#e2e2e2] text-center'>
              Why Choose Us?
            </h2>
            <CompareCard data={data} companies={companies} />
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl text-zinc-300 mb-6 md:mb-8 px-4">
              {`Ready to experience the Mana'o Pili difference?`}
            </p>
            <SurveyButton data={buttonData}/>
          </div>
        </div>
      </div>
    </div>
  );
}