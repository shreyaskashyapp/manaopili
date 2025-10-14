import SurveyButton from "@/app/components/surveyButton";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTA({ data }) {
    return (
        <section className="pb-10">
            <div className="max-w-6xl mx-auto space-y-10">
                <div className="relative">
                    <div className="relative backdrop-blur-xl bg-gradient-to-b from-zinc-900 to-[#141414]  rounded-xl p-10 md:p-14 shadow-lg">
                        <div className="text-center space-y-6">
                            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffffff] leading-tight">
                                {data?.title}
                            </h2>
                            <p className="text-md md:text-2xl text-gray-400 font-normal max-w-3xl mx-auto leading-relaxed">
                                {data?.subTitle}
                            </p>
                            <div className="flex justify-center">
                                <Link href={data?.url} target="_blank">
                                    <Button size="lg" className="md:px-10 px-5 py-7 text-lg border border-gray-400 hover:bg-[#455cff] hover:border-[#455cff] rounded-lg group relative overflow-hidden">
                                        <p className="relative">Learn More about ServiceNow AI</p>
                                        <ArrowRight className="relative ml-2 group-hover:translate-x-2 transition-transform" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}