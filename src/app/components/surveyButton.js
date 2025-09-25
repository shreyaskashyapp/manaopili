import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function SurveyButton({ url, title }) {
    return (
        <Link href={url} target="_blank">
            <button className="flex hover:text-white border-gray-300 bg-transparent hover:bg-[#455cff] hover:border-[#455cff] text-gray-300 font-thin text-xl items-center gap-2 rounded-lg py-3 px-4 border-2">
                <p className="text-lg">{title}</p>
                <img src="/arrow_white.png" alt="Arrow" width={13} height={13} />
            </button>
        </Link>
    )
}