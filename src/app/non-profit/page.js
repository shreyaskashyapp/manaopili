import HeroSection from "../components/hero-section";
import { Leaf, Droplets, Sprout, Heart } from "lucide-react"
import ImageContentBlock from "../components/image-content-block";
import ImpactSection from "../components/impact-section";
import NonProfitContentBlock from "../components/non-profit-content-block";



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

const impacts = {
    heading: "What Supporting Makes Possible",
    description: "Every contribution creates tangible, measurable impact. Your support flows directly toward protecting Hawaii's sacred lands and ecosystems.",
    items: [
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
}

const nonProfitContent = {
  footerNote: {
    text: "If you have any questions or would like to request different photos please reach out to",
    email: "info@crbhawaii.org",
  },
  items: [
  {
    id: "coconut-tree",
    image: {
      src: "/non-profit/hawai-coconut-tree.png",
      alt: "Sacred coconut palm tree silhouette against Hawaiian sunset"
    },
    eyebrow: {
      label: "About the",
      highlight: "Coconut Tree"
    },
    title: "The Tree of Life",
    description:
      "The coconut tree is more than just a food source—it's a sacred, life-sustaining symbol of adaptation, creativity, and unity with nature. For Native Hawaiians and Pacific Islanders, it truly earns the title \"Tree of Life\" because it sustains the body, spirit, and culture.",
    bordered: true
  },
  {
    id: "anahulu-valley",
    image: {
      src: "/non-profit/nonprofit_1.png",
      alt: "Lush green Anahulu Valley in Hawaii",
      credit: "CRB Response"
    },
    eyebrow: {
      label: "About the",
      highlight: "Anahulu Valley"
    },
    title: "Anahulu Valley",
    description:
      "Nestled in the heart of Hawaii, the Anahulu Valley Preservation Fund is dedicated to protecting the sacred lands, cultural treasures, and natural beauty of our cherished valley. Mana'o Pili partners with the Anahulu Valley Preservation Fund. Each month, a portion of our proceeds is directed toward restoring, safeguarding, and preserving the valley's rich history.",
    bordered: false
  }
  ]
};

const quote = {
    text: "By supporting the Anahulu Valley Preservation Fund, you're not just helping to maintain this land's unique ecosystems but also contributing to the legacy and history that shape our island identity. Together, we honor Hawaii's cultural heritage and ensure that future generations can experience the natural beauty and historical depth of the Anahulu Valley. Join us in our mission to protect, preserve, and celebrate Hawaii's sacred land.",
    attribution: "Anahulu Valley Preservation Fund",
};

const CRBSectionData = {
    label: "The Threat",
    title: "The Coconut Rhinoceros Beetle",
    subTitle: "Oryctes rhinoceros",
    image: {
        src: "/non-profit/crb-1.jpg",
        alt: "Coconut Rhinoceros Beetle",
        credit: "CRB Response",
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
                                    src="/non-profit/hawai-cover-image.png"
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
                        What{`'`}s At Stake?
                    </h2>
                    <NonProfitContentBlock data={nonProfitContent} />
                </div>
                <div className="">
                    <div className="max-w-5xl mx-auto px-2">
                        <div className="rounded-lg p-10 border border-[#DEFF00]/10">
                            <svg className="w-12 h-12 text-[#DEFF00] mb-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5-6 0-6 5.338-6 8c0 7 0 8 6 8z" />
                            </svg>

                            <p className="text-lg leading-relaxed text-gray-300 mb-6">
                                {quote.text}
                            </p>

                            <div className="flex items-center gap-3">
                                <div className="w-1 h-8 bg-[#DEFF00]" />
                                <p className="text-[#DEFF00] font-semibold">{quote.attribution}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-6 md:p-12 lg:p-20 ">
                    <ImpactSection data={impacts} />
                </div>
            </div>
        </div>
    )
}