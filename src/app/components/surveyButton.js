import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function SurveyButton({ url, title }) {
    return (
        <Link href={url}>
            <button className="flex hover:text-[#deff00] border-gray-300 bg-transparent hover:bg-blue-200/10 text-gray-300 font-thin text-xl items-center gap-2 rounded-full py-3 px-4 border-2">
                <p className="text-lg">{title}</p>
                <img src="/arrow_yellow.png" alt="Arrow" width={15} height={15} />
            </button>
        </Link>
    )
}