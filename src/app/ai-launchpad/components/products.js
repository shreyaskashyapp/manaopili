'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const services = [
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
        id: "agent-assist",
        category: "Platform",
        title: "Agent Assist",
        description: "Get suggested response for agents"
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
        id: "virtual-agent",
        category: "ITSM/CSM",
        title: "Virtual Agent",
        description: "Virtual Agent with Generative Enhancements"
    },
    {
        id: "predicted-resolution",
        category: "ITSM/CSM",
        title: "Predicted Resolution",
        description: "Predict resolution based on KB articles or historical tickets"
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
    {
        id: "predictive-service-health",
        category: "ITOM",
        title: "Predictive Service Health",
        description: "Issue detection and early warning"
    },
    {
        id: "risk-compliance",
        category: "ITOM",
        title: "Risk & Compliance",
        description: "sdsd"
    }
];
const categories = ["Platform", "ITSM/CSM", "ITOM"]

export default function Products() {

    const [activeTab, setActiveTab] = useState("Platform");

    const getServicesByCategory = (category) => {
        return services.filter(
            (s) => s.category === category || (category === "ITSM/CSM" && s.category === "CSM")
        );
    };

    return (
        <div className="py-10">
            <div className="space-y-10">
                <header className="text-center space-y-4 mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance mb-1">
                        AI Starter Solutions for ITOM and ITSM/CSM
                    </h1>
                    {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose your preferred design for showcasing our services. Each design offers a unique way to explore and select solutions.
                    </p> */}
                </header>
            </div>
            {/* TABs */}
            <div className="w-full space-y-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="flex w-full mb-8 bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 ">
                        {categories.map((cat) => (
                            <TabsTrigger key={cat} value={cat} className="flex-1 data-[state=active]:bg-indigo-900/20 data-[state=active]:text-white text-sm sm:text-base">
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {categories.map((category) => (
                        <TabsContent key={category} value={category}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                                {getServicesByCategory(category).map((service) => (
                                    <Card key={service.id} className="hover:border-[#455cff] transition-all bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 duration-300 cursor-pointer group">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2 ">
                                                <span className="text-xs font-semibold px-2 py-1 rounded bg-[#455cff]/10 text-[#455cff]">
                                                    {service.category}
                                                </span>
                                            </div>
                                            <CardTitle className="text-lg text-white">{service.title}</CardTitle>
                                            <CardDescription className="text-sm text-gray-400">{service.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

        </div>
    )
}
