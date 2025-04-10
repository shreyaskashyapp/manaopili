import { ArrowRight, Linkedin, Youtube } from "lucide-react"
import Image from "next/image"
import SurveyButton from "./surveyButton"

const links = {
  Company: [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },

  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
  Connect: [
    { name: "Youtube", icon: <Youtube className="inline mr-2 w-5 h-5" />, href: "https://www.youtube.com/@Manaopili-info" },
    { name: "LinkedIn", icon: <Linkedin className="inline mr-2 w-5 h-5" />, href: "https://www.linkedin.com/company/mana-o-pili/ " },
  ],
};
const buttonData={
  link:"/survey-list",
  text:"Take Our Survey"
}

const headings = ['Company', 'Legal', 'Connect']

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-neutral-900 via-[#455CFF] to-zinc-700 text-zinc-300 border-red-500">
      <div className="flex flex-col gap-6 md:flex-row justify-between max-w-7xl mx-auto py-7 px-5 ">
      {/* logo */}
        <div className="flex flex-col flex-1 gap-3">
          <div>
            <h1 className="text-3xl font-thin italic text-white">Transform your business with</h1>
            <h1 className="text-[#deff00] font-thin text-5xl italic">{`Mana'o Pili`}</h1>
          </div>
          <div>
            <SurveyButton data={buttonData} />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-wrap lg:flex-1 justify-between pr-10 gap-4 lg:flex-row">
        {headings.map((item, index) => (
          <div key={index} className="flex flex-col gap-0.5 pr-10">
            <h2 className="text-xl font-semibold text-white">{item}</h2>
            {links[item].map((link, idx) => (
              <div key={idx} className="">
                <a href={link.href}>
                  <p className="text-base text-zinc-300 hover:text-[#deff00] items-center">
                    {link.icon && link.icon}
                    {link.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        ))}
        </div>
        
      </div>
      {/* copyrights */}
      <div className="border-t border-gray-300 py-4 mx-6 max-w-7xl md:mx-auto flex justify-center">
        <p className="text-sm text-zinc-300">
          &copy; 2025 {`Mana'o Pili LLC. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}