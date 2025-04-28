import { LineChart, Settings, Users, Zap, Server, Headphones, Shield, BrainCircuit, FolderKanban, Terminal, UserCircle } from 'lucide-react'
import Link from "next/link";
import HeroSection from "../components/hero-section";
import Image from 'next/image';

const data = {
    'title': "Take Our Survey",
    'description': (
        <>
            <span className="text-[#deff00]">Digital Trip (Digital Transformation In Place)</span> helps optimize underutilized ServiceNow entitlements by assessing current usage, providing a tailored roadmap, identifying quick wins, and unlocking valuable features.
            Digital Trip offers product assessments, tailored roadmaps, quick wins, and insights to <span className="text-[#deff00]">Maximize ServiceNow Value</span>.
        </>
    )
}

const modules = [
    { name: "Technology (ITSM)", icon: <Settings className="h-5 w-5" />, slug: "technology-workflows" },
    { name: "Customer (CSM)", icon: <Headphones className="h-5 w-5" />, slug: "customer-workflows" },
    { name: "ITOM", icon: <Server className="h-5 w-5 flex-shrink-0" />, slug: "it-operations-management" },
    { name: "Asset (ITAM)", icon: <LineChart className="h-5 w-5" />, slug: "strategic-portfolio-management" },
    { name: "Risk Management (GRC)", icon: <Shield className="h-5 w-5" />, slug: "integrated-risk-management", },
    { name: "AI and GenAI", icon: <BrainCircuit className="h-5 w-5" />, slug: "ai-and-genai", },
    { name: "SPM (PPM)", icon: <FolderKanban className="h-5 w-5" />, slug: "strategic-planning", },
    { name: "DevOps", icon: <Terminal className="h-5 w-5" />, slug: "", },
    { name: "Employee (HRSD)", icon: <UserCircle className="h-5 w-5" />, slug: "" }
];

export const metadata = {
    title: "Digital Trip Survey | Mana'o Pili, LLC",
    description: "Take the Digital Trip Survey to optimize ServiceNow usage. Get tailored roadmaps, quick wins, and insights to unlock the full potential of your investment.",
    openGraph: {
      title: "Digital Trip Survey - Mana’o Pili",
      description: "Take the Digital Trip Survey to assess your ServiceNow usage and get a tailored roadmap with quick wins to maximize the value of your ServiceNow investment.",
      url: "https://manaopili.com/survey",
    },
  };

export default function SurveyList() {
    return (
        <div>
            <HeroSection data={data} bgColor="from-[#455CFF] to-[#141414]" height={`[70vh]`}/>
            <div className="flex flex-col justify-center items-center gap-8 py-10">
                <h2 className="text-3xl md:text-4xl text-gray-300 text-center italic">
                    Select a Digital Trip Survey below by ServiceNow Product Line.
                </h2>
                <div className="flex flex-col w-full max-w-7xl  bg-gradient-to-r from-[#141414] via-gray-900/50 to-[#141414] px-10">
                    {modules.map((module, index) => (
                        <Link href={`/survey?survey=${module?.slug}`} key={index} className="border-b border-zinc-800 py-8 text-xl text-zinc-400 hover:text-white hover:bg-gradient-to-r from-[#141414] via-zinc-900 to-[#141414]">
                            <div className="flex justify-between items-center">
                                <div className='flex'>
                                    <div className='w-8 h-8 mr-3 text-[#deff00] bg-zinc-800 rounded-full p-1.5'>{module.icon}</div>
                                    <span>{module.name}</span>
                                </div>
                                <Image src="/arrow_yellow.png" alt="Arrow" width={20} height={20} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}