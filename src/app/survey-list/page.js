'use client'
import { LineChart, Settings, Zap, Server, Headphones, Shield, BrainCircuit, FolderKanban, Terminal, UserCircle, ArrowUpRight } from 'lucide-react'
import Link from "next/link";
import HeroSection from "../components/hero-section";
import Reveal from "../components/reveal";
import { useEffect } from 'react';
import { activateServer } from '@/lib/utils';

const data = {
    'title': "Take Our Survey",
    'description': (
        <>
            <span className="text-[#455CFF]">Digital Trip (Digital Transformation In Place)</span> helps optimize underutilized ServiceNow entitlements by assessing current usage, providing a tailored roadmap, identifying quick wins, and unlocking valuable features.
            Digital Trip offers product assessments, tailored roadmaps, quick wins, and insights to <span className="text-[#455CFF]">Maximize ServiceNow Value</span>.
        </>
    )
}

const modules = [
    { name: "Technology (ITSM)", icon: <Settings className="h-5 w-5" />, slug: "technology-workflows" },
    { name: "Customer (CSM)", icon: <Headphones className="h-5 w-5" />, slug: "customer-workflows" },
    { name: "ITOM", icon: <Server className="h-5 w-5 flex-shrink-0" />, slug: "it-operations-management" },
    { name: "SPM (PPM)", icon: <FolderKanban className="h-5 w-5" />, slug: "strategic-portfolio-management", },
    { name: "Asset (ITAM)", icon: <LineChart className="h-5 w-5" />, slug: "it-asset-management" },
    { name: "Risk Management (GRC)", icon: <Shield className="h-5 w-5" />, slug: "integrated-risk-management", },
    { name: "AI and GenAI", icon: <BrainCircuit className="h-5 w-5" />, slug: "ai-and-genai", },
    { name: "DevOps", icon: <Terminal className="h-5 w-5" />, slug: "devops", },
    { name: "Employee (HRSD)", icon: <UserCircle className="h-5 w-5" />, slug: "employee-hrsd" }
];


export default function SurveyList() {
    useEffect(()=>{
        activateServer();
    },[])
    return (
        <div>
            <HeroSection data={data} bgColor="from-[#455CFF] to-[#141414]" height={`[70vh]`} />
            <div className="flex flex-col justify-center items-center gap-10 pt-4 pb-16 md:pb-24">
                <Reveal>
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-gray-300 text-center px-6">
                        Select a Digital Trip Survey below by ServiceNow Product Line.
                    </h2>
                </Reveal>
                <div className="flex w-full max-w-5xl flex-col border-b border-white/10 px-6 md:px-10">
                    {modules.map((module, index) => (
                        <Reveal key={module.slug} delay={Math.min(index * 0.05, 0.35)} className="border-t border-white/10">
                            <Link
                                href={`/new-survey?survey=${module?.slug}`}
                                className="group flex items-center justify-between gap-4 py-7 md:py-8"
                            >
                                <div className="flex items-center gap-5">
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#455CFF]/25 bg-[#455CFF]/10 text-[#455CFF] transition-colors duration-300 group-hover:border-[#455CFF]/50 group-hover:bg-[#455CFF]/20">
                                        {module.icon}
                                    </span>
                                    <span className="font-heading text-xl text-zinc-400 transition-colors duration-300 group-hover:text-white md:text-2xl">
                                        {module.name}
                                    </span>
                                </div>
                                <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#455CFF]" />
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
