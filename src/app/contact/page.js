import ContactForm from "../components/contact-form";
import HeroSection from "../components/hero-section";
import Image from "next/image";

const data = {
    title: "Contact Us",
    description: (
        <>
            Let’s <span className="text-[#deff00]">connect</span> with some ideas. Fill out the contact form to have someone on our team <span className="text-[#deff00]">contact</span> you.
            You can also book some time with our team directly using&nbsp;
            <a href='https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121%40manaopili.com/meetingtype/DxI_vD9gjkeIW8tY5UxRYQ2?anonymous&isanonymous=true' className="text-[#deff00] underline">
                Online Booking!
            </a>
        </>
    )
}
// const buttonData={
//     link:"/survey",
//     text:"Book Online"
// }
export default function Contact() {
    return (
        <div>
            <HeroSection data={data} />
            <div className="">
                <ContactForm />
            </div>

        </div>
    )
}