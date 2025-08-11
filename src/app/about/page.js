import Image from "next/image";
import AboutCards from "../components/about-cards";
import Founders from "../components/founders-cards";
import GlobalImage from "../components/global-image";
import HeroSection from "../components/hero-section";
import SurveyButton from "../components/surveyButton";

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
    "imagePath": "/about/globalPresence.png"
  }
}
const hero = {
  title: "About Us",
  description: (
    <>
      Mana’o Pili, meaning <span className="text-[#deff00]">“connecting ideas”</span> in native Hawaiian, was founded in 2024 on the <span className="text-[#deff00]">“customer first”</span> idea of providing customers with an efficient and cost-effective approach to maximizing their ServiceNow investment. Too often, technology investments are underutilized with customers left struggling to maintain their implementations, let alone achieving outcomes. Look no further, Mana’o Pili is here to help.    </>
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
      <div className="lg:px-32 px-6 py-10">
        <div className="w-full  rounded-2xl  bg-gradient-t0-b from-[#141414] to-zinc-900">
          <h1 className='text-4xl md:text-5xl font-normal text-[#e2e2e2]  text-center pb-10 '>
            Our team resources
          </h1>
          <AboutCards data={data.resources.data} />
        </div>

      </div>
      {/* founders */}
      <div>
        <h2 className='text-4xl md:text-5xl  font-normal text-[#e2e2e2] text-center '>
          Founders
        </h2>
        <Founders team={data.founders.teamMembers} />
        <div className='flex justify-center items-center'>
          <SurveyButton title='Schedule a meeting!' url='https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink' />
        </div>
      </div>
      {/* global presence */}
      <GlobalImage data={data.globalPresence} />
    </div>

  )
}
