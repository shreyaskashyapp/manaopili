import HeroSection from "../components/hero-section";
import { Leaf, Droplets, Sprout, Heart } from "lucide-react"
import ImageContentBlock from "../components/image-content-block";
import NonProfitAccordion from "../components/non-profit-accordion";
import ImpactSection from "../components/impact-section";
import NonProfitContentBlock from "../components/non-profit-content-block";


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

export const metadata = {
    title: "Non-Profit Partnership | Mana'o Pili, LLC",
    description: "Mana’o Pili partners with the Anahulu Valley Preservation Fund to protect sacred lands and cultural treasures in Hawaii.",
    openGraph: {
        title: "Mana’o Pili - Supporting Anahulu Valley Preservation",
        description: "Mana’o Pili partners with the Anahulu Valley Preservation Fund to safeguard sacred lands in Hawaii. By supporting Mana’o Pili, you support environmental preservation.",
        url: "https://manaopili.com/non-profit",
    },
};

const impacts = [
    {
        title: "Preserve Coconut Trees",
        description:
            "Direct support toward restoring and protecting Hawaii's native coconut trees from the Coconut Rhinoceros Beetle.",
        icon: Leaf,
    },
    {
        title: "Irrigation & Infrastructure",
        description:
            "Funds go toward irrigation systems, water pumps, and infrastructure needed to maintain the Anahulu Valley Coconut Farm.",
        icon: Droplets,
    },
    {
        title: "Tree Replacement Programs",
        description:
            "Support replanting efforts to restore coconut trees across affected areas of Hawaii and revive ecosystems.",
        icon: Sprout,
    },
    {
        title: "Cultural & Community Healing",
        description:
            "Preserve the sacred connection between Hawaiian communities and their land for generations to come.",
        icon: Heart,
    },
]

const CRBSectionData = {
    label: "The Threat",
    title: "The Coconut Rhinoceros Beetle",
    subTitle: "Oryctes rhinoceros",
    image: {
        src: "/non-profit/crb-1.jpg",
        alt: "Coconut Rhinoceros Beetle",
    },
    description:
        "The CRB is an invasive species native to Southeast Asia. It was first discovered in Hawaii in December 2013 and has been devastating our palm populations ever since.",
    infoBlocks: [
        {
            heading: "How It Destroys",
            type: "text",
            content:
                "The beetle kills trees by burrowing into the crown of palm trees to feed on sap, destroying new fronds and eventually killing the entire tree.",
        },
        {
            heading: "How to Identify",
            type: "list",
            content: [
                "Adult are about 2 inches in size",
                "Single prominent horn on their head",
                "Typically dark brown or black",
                "Larvae have creamy white body with brown head",
            ],
        },
    ],
};

const AnahuluSectionData = {
    label: "Our Partner",
    title: "Anahulu Valley Preservation Fund",
    image: {
        src: "/non-profit/nonprofit_2.png",
        alt: "Anahulu Valley scenic view",
    },
    description: [
        "Nestled in the heart of Hawaii, the Anahulu Valley Preservation Fund is dedicated to protecting the sacred lands, cultural treasures, and natural beauty of our cherished valley.",
        "Mana'o Pili partners with the Anahulu Valley Preservation Fund. Each month, a portion of our proceeds is directed toward restoring, safeguarding, and preserving the valley's rich history - from ancient fish ponds to historic burial grounds that tell the stories of our ancestors.",
        "Together, we honor Hawaii's cultural heritage and ensure that future generations can experience the natural beauty and historical depth of the Anahulu Valley. Join us in our mission to protect, preserve, and celebrate Hawaii’s sacred land.",
    ],
}

const CoconutTreeSectionData = {
    label: "Sacred Symbol",
    title: "The Coconut Tree",
    subTitle: 'The "Tree of Life"',
    description: [
        "The coconut tree is more than just a food source—it's a sacred, life-sustaining symbol of adaptation, creativity, and unity with nature.",
        "For Native Hawaiians and Pacific Islanders, it truly earns the title \"Tree of Life\" because it sustains the body, spirit, and culture.",
    ],
    image: {
        src: "/non-profit/coconut-tree.jpg",
        alt: "Healthy coconut tree",
    },
    reverse: true, // 👈 THIS handles the order
};


export default function NonProfit() {
    return (
        <div className="w-full pb-20" >
            <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className="max-w-7xl mx-auto flex flex-col gap-20 px-4">
                {/* Hawaii Image Section */}
                <section className="">
                    <div className="mx-auto">
                        <div className="text-center mb-8">
                            <p className="text-[#DEFF00] md:text-sm text-xs font-medium tracking-widest uppercase mb-2">
                                A Paradise at Risk
                            </p>
                            <h2 className="font-display text-3xl md:text-5xl font-semibold text-[#E2E2E2] mb-4 leading-tight">
                                The Beauty of Hawaii
                            </h2>
                            <p className="text-white/70 md:text-lg text-md max-w-2xl mx-auto leading-relaxed">
                                Hawaii is a cherished destination for people around the globe - a sanctuary of natural beauty, rich culture and sacred lands.
                            </p>
                        </div>

                        <div className="relative rounded-lg overflow-hidden">
                            <div className="aspect-[21/9]">
                                <img
                                    src="/non-profit/hawaii.jpg"
                                    alt="Beautiful Hawaiian islands aerial view"
                                    className="w-full h-full object-cover opacity-70"
                                />
                            </div>
                        </div>
                        <p className="text-center text-white/70 lg:text-xl text-md md:mt-12 mt-6 max-w-3xl mx-auto leading-relaxed">
                            But something is slowly killing this beauty - an invasive species threatening the very trees that define our island paradise.
                        </p>
                    </div>
                </section>
                {/* Threat CRB Section */}
                <ImageContentBlock data={CRBSectionData} />
                <div>
                    <h2 className="font-display text-center text-3xl md:text-5xl font-semibold text-[#E2E2E2] mb-4 md:mb-6 lg:mb-10 leading-tight">
                        What's At Stake?
                    </h2>
                    <NonProfitContentBlock />
                </div>
                <div className="">
                    <div className="max-w-5xl mx-auto px-2">
                        <div className="rounded-lg p-10 border border-[#DEFF00]/10">
                            <svg className="w-12 h-12 text-[#DEFF00] mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-6 5.338-6 8c0 7 0 8 6 8z" />
                            </svg>

                            <p className="text-lg leading-relaxed text-gray-300 mb-6">
                                By supporting the Anahulu Valley Preservation Fund, you{`'`}re not just helping to maintain this land{`'`}s
                                unique ecosystems but also contributing to the legacy and history that shape our island identity. Together,
                                we honor Hawaii{`'`}s cultural heritage and ensure that future generations can experience the natural beauty
                                and historical depth of the Anahulu Valley. Join us in our mission to protect, preserve, and celebrate
                                Hawaii{`'`}s sacred land.
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#DEFF00]" />
                                <p className="text-[#DEFF00] font-semibold">Anahulu Valley Preservation Fund</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 md:p-12 lg:p-20 ">
                    <ImpactSection data={impacts} />
                </div>
                {/* <NonProfitAccordion data1={NonProfitData} /> */}
            </div>
        </div>

    )
}

{/* <div className="flex flex-col items-center justify-center pt-4 pb-10">
                <h2 className="flex italic justify-center text-3xl px-2  md:text-4xl max-w-5xl text-gray-300 text-center ">
                    By supporting Mana’o Pili you are supporting the Anahulu
                    Valley Preservation.
                </h2>
                <div className="w-full md:px-28 md:py-10 px-4 py-4 flex flex-col gap-6 ">
                    <Image src='/non-profit/nonprofit_1.png' alt="Beach" className="w-full" width={500} height={500} />
                </div>
            </div> */}
{/* <NonProfitAccordion data1={NonProfitData} />
 */}