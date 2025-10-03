import { Sparkles, Zap, TrendingUp, Shield, Rocket, Target } from "lucide-react";

const features = [
    {
        title: "Rapid AI Implementations",
        icon: Zap,
    },
    {
        title: "Highly Cost Efficient",
        icon: TrendingUp,
    },
    {
        title: "Low-Risk, High Value Entry Point",
        icon: Shield,
    },
    {
        title: "Scalable Foundation for Growth",
        icon: Rocket,
    },
];

export default function Introduction() {
    return (
        <section className="py-10 md:py-16">
            <div className="">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#455cff]/10 border border-[#455cff]/20 mb-6">
                            <span className="text-xs font-medium text-[#455cff]">AI Solutions</span>
                        </div> */}
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            What is AI Launchpad?
                        </h2>
                        <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
                            Mana'o Pili's AI Launchpad helps organizations unlock ServiceNow AI.
                            Leveraging ServiceNow AI Starter Pack available for up to 25 licensed users,
                            you can test real GenAI use cases and realize quick outcomes — without the
                            need for a full-scale investment. AI Launchpad introduces AI with clarity,
                            purpose, and measurable impact.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 hover:border-[#455cff]/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-[#455cff]/10 flex items-center justify-center flex-shrink-0">
                                    <feature.icon className="w-6 h-6 text-[#455cff]" />
                                </div>
                                <p className="text-base font-semibold text-gray-400">
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