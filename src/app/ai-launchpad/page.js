import { Compass, DollarSign, HelpCircle } from "lucide-react";
import Introduction from "../components/ai-introduction";
import HeroSection from "../components/hero-section";

const hero = {
    title: "AI LaunchPad",
    description: (
        <>
            <span className="text-[#deff00]">Start small, scale fast</span> - Launchpad makes ServiceNow AI adoption clear, practical, and effortless.
        </>
    )
}
const painPoints = [
    {
        icon: DollarSign,
        text: "Worried about Cost of Implementing AI",
    },
    {
        icon: Compass,
        text: "Don't know where and how to start the journey",
    },
    {
        icon: HelpCircle,
        text: "Not sure if you're ready for AI in your organization",
    },
];



export default function AiLaunchPad() {
    return (
        <div>
            <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
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
        </div>
    )
}