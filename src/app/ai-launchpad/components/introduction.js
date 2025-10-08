import { Description } from "@radix-ui/react-dialog";
import { Sparkles, Zap, TrendingUp, Shield, Rocket, Target } from "lucide-react";


export default function Introduction({data}) {
    return (
        <section className="">
            <div className="">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#455cff]/10 border border-[#455cff]/20 mb-6">
                            <span className="text-xs font-medium text-[#455cff]">AI Solutions</span>
                        </div> */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            {data.title}
                        </h2>
                        <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    <div className="space-y-4">
                        {data.features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-2 md:p-4 rounded-xl bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 hover:border-[#455cff]/20 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#455cff]/10 flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-[#455cff]" />
                                </div>
                                <p className="md:text-base text-sm font-semibold text-gray-400">
                                    {feature.title}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}