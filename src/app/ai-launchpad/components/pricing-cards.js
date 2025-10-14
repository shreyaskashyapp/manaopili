import { Check, Sparkles } from 'lucide-react';

export default function PricingCards({ data }) {
    return (
        <div className="py-10 px-4">
            <div className="mx-auto">
                <div className="text-center md:mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">AI Starter Solutions for ITOM and ITSM/CSM</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto">
                    {data?.map((tier) => (
                        <div
                            key={tier?.name}
                            className={`relative bg-gradient-to-b from-zinc-900 to-[#141414] border ${tier?.border} rounded-2xl p-8 transition-all duration-300 ${tier.recommended
                                ? ' shadow-lg shadow-[#9a9998]/20 scale-105 md:scale-110'
                                : 'hover:scale-105 shadow-lg shadow-yellow-800/20'
                                }`}
                        >
                            {tier?.recommended && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9a9998] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                                    POPULAR
                                </div>
                            )}

                            <div className="flex flex-col gap-2 md:pt-4 text-center mb-4">
                                <h3 className={`md:text-5xl text-3xl font-bold ${tier.color} mb-1`}>{tier?.name}</h3>
                                <p className={`md:text-3xl font-normal ${tier.color} mb-1`}>{tier?.pricing}</p>
                                {/* <h3 className="text-5xl font-bold text-[#455cff] mb-1">5</h3> */}
                                <p className="text-zinc-400 text-sm mb-2">{tier?.level}</p>
                                <p className={`${tier.color} text-sm mb-2`}>Duration - {tier?.duration}</p>
                            </div>

                            <div className="space-y-3 mb-8">
                                {tier?.features?.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 group"
                                    >
                                        <div className={`w-5 h-5 rounded-full ${tier.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                            <Check className="w-3 h-3 text-white" />
                                        </div>
                                        <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
