import { Description } from "@radix-ui/react-dialog";
import { Sparkles, Zap, TrendingUp, Shield, Rocket, Target } from "lucide-react";
import Image from "next/image";


export default function Introduction({ data }) {
    return (
        <section className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 lg:mb-0 text-white">
                {data.title}
            </h2>
            <div className="grid lg:grid-cols-2 gap-6 items-center">
                <div className="order-2 lg:order-1">
                    <p className="text-md md:text-lg text-gray-400 leading-relaxed">
                        {data.description}
                    </p>
                    <div className="pt-6 space-y-4 ">
                        {data.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 p-2 rounded-xl  border border-[#141414] hover:border-[#455cff]/20 transition-all duration-300 group"
                            >
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-5 h-5 text-[#455cff]" />
                                </div>
                                <p className="md:text-base text-sm font-medium text-gray-400">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative w-full lg:h-[500px] md:h-[400px] h-[200px] order-1 lg:order-2">
                    <Image src='/ai-launchpad/ai_launchpad.png' alt="Beach" className="opacity-50 object-cover rounded-lg" fill />
                </div>
            </div>
        </section>
    )
}