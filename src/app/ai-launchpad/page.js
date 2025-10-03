import { Compass, DollarSign, HelpCircle } from "lucide-react";
import Introduction from "../components/ai-introduction";
import HeroSection from "../components/hero-section";
import { FeatureDelimitedSection } from "./components/feature-delimeter";

const hero = {
    title: "AI LaunchPad",
    description: (
        <>
            <span className="text-[#deff00]">Start small, scale fast</span> - Launchpad makes ServiceNow AI adoption clear, practical, and effortless.
        </>
    )
}
const painPoints = {
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
}



export default function AiLaunchPad() {
    return (
        <div>
            <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className="px-20 ">
            <div className="flex flex-col items-center justify-center pt-4 pb-10">
                <div className="w-full max-w-5xl px-10 py-4 flex flex-col gap-6 ">
                    {/* <Image src='/non-profit/nonprofit_1.png' alt="Beach" className="w-full" width={500} height={500} /> */}
                    <iframe
                        src="https://www.youtube.com/embed/VvHlJ7Ei_es?si=nww4wEZqwkdDv9bO"
                        title="wait"
                        className="w-full aspect-video rounded-xl"
                        allow=""
                        allowFullScreen
                    />
                </div>
            </div>
            <Introduction />
            <div>
                <FeatureDelimitedSection data={painPoints} />
            </div>
            </div>
        </div>
    )
}