import ContactForm from "../components/contact-form";
import HeroSection from "../components/hero-section";
import Image from "next/image";

const data = {
    title: "Contact Us",
    description: (
        <>
            Let’s <span className="text-[#deff00]">connect</span> with some ideas. Fill out the contact form to have someone on our team <span className="text-[#deff00]">contact</span> you.
            You can also book some time with our team directly using&nbsp;
            <a href={process.env.NEXT_PUBLIC_OUTLOOK_BOOKING_LINK} target="_blank" className="text-[#deff00] underline">
                Online Booking!
            </a>
        </>
    )
}


export default function Contact() {
    return (
        <div>
            <HeroSection data={data} bgColor={`from-[#455CFF] to-[#141414]`} height={`[70vh]`} />
            <div className="pt-4 pb-10">
                <ContactForm />
            </div>

        </div>
    )
}