import { Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
    {
        icon: Youtube,
        name: "Youtube",
        link: "https://www.youtube.com/@Manaopili-info",
        color:"red-600"
    },
    {
        icon: Linkedin,
        name: "LinkedIn",
        link: "https://www.linkedin.com/company/mana-o-pili/",
        color:"blue-600"
    },

]

export default function FloaterCTA() {
    return (
        <div className="fixed flex flex-col gap-2 bottom-5 left-3 z-50 ">
            {socials.map((social, index) => (
                <Link
                    href={social.link}
                    target="_blank"
                    className={`bg-${social.color} p-2 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:bg-opacity-60 hover:scale-105`}
                    aria-label='Contact us'
                    key={index}
                >
                    <div className="flex justify-center items-center gap-2">
                        <social.icon className="w-4 h-4" />
                    </div>
                </Link>
            ))}
        </div>
    )
}