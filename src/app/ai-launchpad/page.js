import { Compass, DollarSign, HelpCircle } from "lucide-react";
import Introduction from "./components/introduction";
import HeroSection from "../components/hero-section";
import { FeatureDelimitedSection } from "./components/feature-delimeter";
import CTA from "./components/cta";
import Products from "./components/products";
import PricingCards from "./components/pricing-cards";
import SurveyButton from "../components/surveyButton";
import ContactBanner from "../components/contact-banner";
import { Sparkles, Zap, TrendingUp, Shield, Rocket, Target } from "lucide-react";
import Media from "./components/media";

const data = {
    hero: {
        title: "AI LaunchPad",
        description: (
            <>
                <span className="text-[#deff00]">Start small, scale fast</span> - Launchpad makes ServiceNow AI adoption clear, practical, and effortless.
            </>
        )
    },
    introduction: {
        title: "What is AI Launchpad?",
        description: `Mana'o Pili's AI Launchpad helps organizations unlock ServiceNow AI.
            Leveraging ServiceNow AI Starter Pack available for up to 25 licensed users,
            you can test real GenAI use cases and realize quick outcomes — without the
            need for a full- scale investment.AI Launchpad introduces AI with clarity,
            purpose, and measurable impact.`,
        features: [
            {
                title: "Rapid AI Implementations",
                icon: Zap,
            },
            {
                title: "Highly Cost Efficient",
                icon: TrendingUp,
            },
            {
                title: "Low-Risk, High Value Entry Point",
                icon: Shield,
            },
            {
                title: "Scalable Foundation for Growth",
                icon: Rocket,
            },
        ],
    },
    painPoints: {
        hero: {
            title: "Mana'o Pili Transforms ServiceNow AI",
            subtitle: "from Complexity into Clarity",
        },
        painPoints: [
            {
                id: 1,
                text: "Worried about Cost of Implementing AI",
            },
            {
                id: 2,
                text: "Don't know where and how to start the journey",
            },
            {
                id: 3,
                text: "Not sure if you're ready for AI in your organization",
            },
        ],
        cta: {
            statement: "Statement of executing AI with a fraction of the investment and time but realizing value immediately",
            buttonText: "Link to SN AI Starter",
            buttonLink: "#",
        },

    },
    cta: {
        url: "https://www.servicenow.com/now-platform.html",
        title: <>Your Clear Path to <span className="text-[#455cff]">AI Success.</span></>,
        subTitle: <>Execute AI in a fraction of the cost <span className="text-[#455cff]">investment</span> and <span className="text-[#455cff]">time</span>, start realizing value today.</>
    },
    products: {
        services: [
            // Platform
            {
                id: "summarizations",
                category: "Platform",
                title: "Summarizations",
                description: "Incident, Case, Alert Summarization"
            },
            {
                id: "ai-search",
                category: "Platform",
                title: "AI Search",
                description: "Natural Language Search"
            },
            {
                id: "ai-query",
                category: "Platform",
                title: "AI Query",
                description: "Query and get answers on Incidents, Case, CI or Asset Records"
            },
            {
                id: "kb-drafts",
                category: "Platform",
                title: "KB Drafts",
                description: "Knowledge Article Drafting & Improvement Suggestions"
            },
            // ITSM/CSM
            {
                id: "triage",
                category: "ITSM/CSM",
                title: "Triage",
                description: "Automated categorization and routing"
            },
            {
                id: "customer-sentiment",
                category: "CSM",
                title: "Customer Sentiment",
                description: "Analyze customer feedback and escalate"
            },
            {
                id: "proactive-support",
                category: "CSM",
                title: "Proactive Support",
                description: "Predict potential service issues and trigger notifications"
            },
            // ITOM
            {
                id: "contract-renewals",
                category: "ITOM",
                title: "Contract Renewals",
                description: "Predict at risk Contracts"
            },
            {
                id: "warranty-management",
                category: "ITOM",
                title: "Warranty Management",
                description: "Suggest renewal terms, discounts or escalation."
            },
            {
                id: "lifecycle-notifications",
                category: "ITOM",
                title: "Lifecycle Notifications",
                description: "Suggest maintenance, starting renewal negotiations"
            },
        ],
        categories:
            ["Platform", "ITSM/CSM", "ITOM"]
    },
    valuePoints: {
        hero: {
            title: "Companies Using ServiceNow AI Starter experience ",
            subtitle: "fewer incidents with quicker response times",
        },
        painPoints: [
            {
                id: 1,
                value: "12",
                text: "month Payback",
            },
            {
                id: 2,
                value: "30%",
                text: "decrease in resolution times (MTTR)",
            },
            {
                id: 3,
                value: "250%",
                text: "return on investment from incidents resolved faster",
            },
        ],
        cta: {
            statement: "Statement of executing AI with a fraction of the investment and time but realizing value immediately",
            buttonText: "Link to SN AI Starter",
            buttonLink: "#",
        },
    },
    tiers: [
        {
            name: 'Bronze',
            pricing: "$10,000",
            duration: '2 weeks',
            level: 'Starter',
            features: [
                ' Enablement of up to 3 AI Starter Solutions',
                'AI Readiness Assessment',
                'AI Solution Driven Roadmap'
            ],
            color: 'text-[#CE8946]',
            border: 'border-[#CE8946]',
            bg: 'bg-[#CE8946]',
        },
        {
            name: 'Silver',
            pricing: "$25,000",
            duration: '4 weeks',
            level: 'Professional',
            recommended: true,
            features: [
                ' Enablement of up to 3 AI Starter Solutions',
                'AI Readiness Assessment',
                'AI data cleanup and normalization',
                'AI Model Training',
                'AI Solution Driven Roadmap'
            ],
            color: 'text-[#C4C4C4]',
            border: 'border-[#C4C4C4]',
            bg: 'bg-[#9a9998]',
        },
        {
            name: 'Gold',
            pricing: "$50,000+",
            duration: '8 weeks',
            level: 'Enterprise',
            features: [
                ' Enablement of up to 5 AI Starter Solutions',
                'AI Readiness Assessment',
                'AI data cleanup and normalization',
                'AI Model Training',
                'AI Solution Driven Roadmap',
                'AI Tuning and Optimization'
            ],
            color: 'text-[#D3AF37]',
            border: 'border-[#D3AF37]',
            bg: 'bg-[#D3AF37]',
        }
    ],
}

export default function AiLaunchPad() {
    return (
        <div>
            <HeroSection data={data?.hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className="w-full max-w-7xl px-6 mx-auto">
                <div className="py-10">
                    <Introduction data={data?.introduction} />
                </div>
                <div className="flex justify-center items-center py-4">
                    <SurveyButton title="Book Consultation" url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
                </div>
                <div>
                    <FeatureDelimitedSection data={data?.painPoints} />
                    <CTA data={data?.cta} />
                </div>
                <div>
                    <Media url="https://www.youtube.com/embed/VvHlJ7Ei_es?si=nww4wEZqwkdDv9bO" />
                </div>
                <div>
                    <Products data={data?.products} />
                </div>
                <div className="flex justify-center items-center py-6">
                    <SurveyButton title="Book Consultation" url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
                </div>
                <div>
                    <FeatureDelimitedSection data={data?.valuePoints} />
                </div>
                <div>
                    <PricingCards data={data.tiers} />
                </div>
                <div className="md:py-16 py-10">
                    <ContactBanner color="[#455cff]" />
                </div>
            </div>
        </div>
    )
}