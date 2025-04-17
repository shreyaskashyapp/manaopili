import Image from "next/image";
import GlobalImage from "../components/global-image";
import HeroSection from "../components/hero-section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import NonProfitAccordion from "../components/non-profit-accordion";

const NonProfitData = [
    {
        title: "About Anahulu Valley Preservation Fund",
        text: "Nestled in the heart of Hawaii, the Anahulu Valley Preservation Fund is dedicated to protecting the sacred lands, cultural treasures, and natural beauty of our cherished valley. Mana’o Pili partners with the Anahulu Valley Preservation fund. Each month, a portion of our proceeds is directed toward restoring, safeguarding, and preserving the valley’s rich history, from ancient fish ponds to historic burial grounds that tell the stories of our ancestors. By supporting the Anahulu Valley Preservation Fund, you’re not just helping to maintain this land’s unique ecosystems but also contributing to the legacy and history that shape our island identity. Together, we honor Hawaii’s cultural heritage and ensure that future generations can experience the natural beauty and historical depth of the Anahulu Valley. Join us in our mission to protect, preserve, and celebrate Hawaii’s sacred land.",
    },
    {
        title: "Historical Significance of Anahulu Valley",
        text: "Historically, the Anahulu Valley served as a thriving agricultural and aquacultural hub, where Native Hawaiians cultivated crops and developed innovative fishpond systems that sustained entire communities. The burial grounds here are a testament to the valley's spiritual significance, honoring ancestors who shaped the culture and identity of Hawaii itself.",
    },
    {
        title: "Threats and Preservation Efforts",
        text: "Yet today, these lands face increasing threats from modernization, environmental change, and erosion, risking the loss of this irreplaceable heritage. The Anahulu Valley Preservation Fund is committed to actively restoring these lands and educating our community about the valley’s cultural and environmental importance. Monthly, a portion of our proceeds goes directly into preserving these spaces: clearing invasive species, maintaining fish ponds, and creating interpretive sites to share the valley’s story.",
    },
    {
        title: "Our Vision for the Future",
        text: "We envision a future where the Anahulu Valley continues to thrive, preserving its legacy for all who come after.",
    },
];


const hero = {
    title: "To Protect the Land",
    description: (
        <>
            <span className="text-[#deff00]">Our Mission is Simple</span>
        </>
    ),
};

export default function NonProfit() {
    return (
        <div className="w-full" >
            <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className="flex flex-col items-center justify-center">
                <h2 className="flex italic justify-center text-4xl max-w-5xl text-gray-300 text-center ">
                    By supporting Mana’o Pili you are supporting the Anahulu
                    Valley Preservation.
                </h2>
                <div className="w-full md:px-28 py-10 px-10 flex flex-col gap-6 ">
                    <img src='/non-profit/nonprofit_1.png' alt="Beach" className="w-full" />
                </div>
            </div>
            <NonProfitAccordion data1={NonProfitData} />


        </div>

    )
}