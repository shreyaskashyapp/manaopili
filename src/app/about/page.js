import Image from "next/image";
import AboutCards from "../components/about-cards";
import Founders from "../components/founders-cards";
import GlobalImage from "../components/global-image";
import HeroSection from "../components/hero-section";
import SurveyButton from "../components/surveyButton";
import Reveal from "../components/reveal";
import SectionHeading from "../components/section-heading";

const data = {
  "resources": {
    "data": [
      {
        "title": "Architects",
        "description": "Experts in designing robust and scalable ServiceNow solutions tailored to your business needs."
      },
      {
        "title": "Consultants",
        "description": "Seasoned professionals providing strategic insights and guidance to maximize your ServiceNow investment."
      },
      {
        "title": "Business Analysts",
        "description": "Skilled in analysing business requirements and translating them into effective ServiceNow configurations and enhancements."
      },
      {
        "title": "Project Managers",
        "description": "Experienced in managing end-to-end project delivery, ensuring timely and successful implementations."
      }
    ]
  },
  "founders": {
    "teamMembers": [
      {
        "imagePath": "/about/leilani.jpeg",
        "name": "Leilani Mossman",
        "titles": [
          "Chief Executive Officer",
          "Co-Founder"
        ]
      },
      {
        "imagePath": "/about/mike.jpeg",
        "name": "Michael Yee",
        "titles": [
          "Chief Operations Officer",
          "Co-Founder"
        ]
      }
    ]
  },
  "globalPresence": {
    "title": "Global Presence, Local Expertise",
    "description": "With offices in Los Angeles, Honolulu, and Bangalore, we're strategically positioned to serve you across time zones. Our global footprint is expanding - stay tuned for more locations coming soon.",
    "imagePath": "/about/globalPresence.webp"
  }
}
const hero = {
  title: "About Us",
  description: (
    <>
      Mana’o Pili, meaning <span className="text-[#455CFF]">“connecting ideas”</span> in native Hawaiian, was founded in 2024 on the <span className="text-[#455CFF]">“customer first”</span> idea of providing customers with an efficient and cost-effective approach to maximizing their ServiceNow investment. Too often, technology investments are underutilized with customers left struggling to maintain their implementations, let alone achieving outcomes. Look no further, Mana’o Pili is here to help.    </>
  )
}

export const metadata = {
  title: "About Us | ServiceNow Experts | Mana'o Pili, LLC",
  description: "Mana’o Pili, founded in 2024, helps customers maximize their ServiceNow investment through efficient and cost-effective solutions. Led by Leilani Mossman (CEO) and Michael Yee (COO).",
  openGraph: {
    title: "About Mana’o Pili",
    description: "Mana’o Pili, founded in 2024, helps customers maximize their ServiceNow investment with a customer-first approach. Led by CEO Leilani Mossman and COO Michael Yee.",
    url: "https://manaopili.com/about",
  },
};

export default function About() {
  return (
    <div className=" bg-[#141414] w-full">
      {/* hero section */}
      <HeroSection data={hero} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
      {/* resources */}
      <section className="px-6 py-16 md:py-24 lg:px-32">
        <Reveal>
          <SectionHeading title="Our Team Resources" className="mb-12 md:mb-16" />
        </Reveal>
        <AboutCards data={data.resources.data} />
        <Reveal className="flex justify-center items-center pt-14">
          <SurveyButton title='Book Consultation' url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
        </Reveal>
      </section>
      {/* founders */}
      <section className="bg-white/[0.015] py-16 md:py-24">
        <Reveal>
          <SectionHeading title="Founders" className="mb-4" />
        </Reveal>
        <Founders team={data.founders.teamMembers} />
        <Reveal className='flex justify-center items-center'>
          <SurveyButton title='Schedule a meeting!' url={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} />
        </Reveal>
      </section>
      {/* global presence */}
      <section className="py-16 md:py-24">
        <Reveal>
          <SectionHeading title="Global Presence" className="mb-10" />
        </Reveal>
        <GlobalImage data={data.globalPresence} />
      </section>
    </div>

  )
}
