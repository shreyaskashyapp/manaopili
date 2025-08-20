import Image from "next/image";
import Link from "next/link";

export default function FloaterCTA() {
    return (
        <div className="fixed bottom-10 right-5 z-50 ">
            <Link
                href='https://outlook.office.com/bookwithme/user/2d20486392d94cf9b823bc508a230121@manaopili.com?anonymous&ep=plink'
                target="_blank"
                className={`bg-zinc-800 p-3 rounded-full flex items-center justify-center text-white hover:text-white transition-all duration-300 hover:bg-[#455cff] hover:scale-105`}
                aria-label='Contact us'
            >
                <div className="flex justify-center items-center gap-2">
                    <Image src="/Logo_white.png" alt="Arrow" width={30} height={30} />
                    <h2 className="">Book a demo</h2>
                    {/* <Image src="/arrow_yellow.png" alt="Arrow" width={15} height={15} /> */}
                </div>
            </Link>
        </div>
    )
}