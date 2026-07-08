import { Linkedin, Youtube } from "lucide-react"
import SurveyButton from "./surveyButton"
import Reveal from "./reveal"
import WordReveal from "./word-reveal"

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

const headings = ['Company', 'Legal', 'Connect']

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b via-[#455cff]/20 to-[#141414] from-[#141414] text-zinc-300 border-t border-white/10 overflow-hidden">
      <Reveal className="flex flex-col gap-10 md:flex-row justify-between max-w-7xl mx-auto py-14 md:py-20 px-6">
        {/* logo */}
        <div className="flex flex-col flex-1 gap-6">
          <div>
            <h1 className="font-heading md:text-4xl text-3xl font-thin italic text-white leading-tight">Transform your business with</h1>
            <h1 className="font-heading text-[#455CFF] font-thin text-5xl md:text-7xl italic leading-tight">{`Mana'o Pili`}</h1>
          </div>
          <div>
            <SurveyButton title="Take Our Survey" url="/survey-list" />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-wrap lg:flex-1 justify-between pr-10 gap-8 lg:flex-row">
        {headings.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 md:pr-10">
            <h2 className="text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">{item}</h2>
            {links[item].map((link, idx) => (
              <div key={idx} className="">
                <a href={link.href} target={item==="Connect" ? "_blank" : ""}>
                  <p className="text-base text-zinc-300 hover:text-[#455CFF] transition-colors duration-200 items-center">
                    {link.icon && link.icon}
                    {link.name}
                  </p>
                </a>
              </div>
            ))}
          </div>
        ))}
        </div>

      </Reveal>
      {/* copyrights */}
      <div className="border-t border-white/10 py-5 mx-6 max-w-7xl md:mx-auto flex justify-center">
        <p className="text-sm text-zinc-500">
          &copy; 2025 {`Mana'o Pili LLC. All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}
