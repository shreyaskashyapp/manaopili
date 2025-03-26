import Image from "next/image";
import AboutCards from "../components/about-cards";
import Founders from "../components/founders-cards";
import GlobalImage from "../components/global-image";

const data={
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
          "imagePath": "/about/lelilani.png",
          "name": "Leilani Mossman",
          "titles": [
            "Chief Executive Officer",
            "Co-Founder"
          ]
        },
        {
          "imagePath": "/about/mike.png",
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
export default function About() {
    return (
        <div className=" bg-[#141414] w-full">
        {/* hero section */}
            <div className="relative h-[70vh] w-full flex flex-col justify-center overflow-hidden bg-gradient-to-b from-blue-800 to-[#141414]">
                <div className="relative px-8 max-w-5xl mx-auto flex flex-col gap-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font text-white mb-6 leading-tight">
                        About Us
                    </h1>
                    <p className="text-gray-300 font-thin md:text-lg text-base">
                        {`Mana’o Pili, meaning “`}
                        <span className="text-[#deff00]">{`connecting ideas`}</span>
                        {`” in native Hawaiian, was founded in 2024 on the `}
                        <span className="text-[#deff00]">{`“customer first”`}</span>
                        {` idea of providing customers with an efficient and cost-effective approach to maximizing their ServiceNow investment. Too often, technology investments are underutilized with customers left struggling to maintain their implementations, let alone achieving outcomes. Look no further, Mana’o Pili is here to help.`}
                    </p>
                </div>
            </div>
            {/* resources */}
            <div className="lg:px-32 px-6 pb-10">
                <div className="w-full lg:p-10  rounded-2xl  bg-gradient-t0-b from-[#141414] to-zinc-900">
                    <h1 className='text-5xl font-semibold text-[#e2e2e2]  text-center pb-10 '>
                        Our team resources
                    </h1>
                    <AboutCards data={data.resources.data}/>
                </div>

            </div>
            {/* founders */}
            <div>
                <h2 className='text-5xl  font-semibold text-[#e2e2e2] text-center '>
                    Founders
                </h2>
                <Founders team={data.founders.teamMembers}/>
            </div>
            {/* global presence */}
            <GlobalImage data={data.globalPresence}/>
        </div>

    )
}
