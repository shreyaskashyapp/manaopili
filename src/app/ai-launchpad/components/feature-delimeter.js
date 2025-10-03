"use client"

import { Button } from "@/components/ui/button"

export function FeatureDelimitedSection({ data }) {
    return (
        <section className="mx-auto py-8">
            {/* Hero Section */}
            <div className="mb-8 text-white">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance mb-1">{data?.hero?.title ?? ""}</h1>
                <h2 className="text-3xl md:text-5xl font-boldleading-tight text-balance">{data?.hero?.subtitle ?? ""}</h2>
            </div>

            {/* Pain Points with Left Accent Bar */}
            <div className="flex items-stretch justify-between gap-6 mb-8 group">
                {data?.painPoints?.map((point, index) => (
                    <div key={point?.id ?? index} className="flex items-stretch gap-6 flex-1">
                        <div className="flex-1 cursor-default hover-trigger">
                            <div className="h-full p-6 relative border-l-2 border-transparent hover:border-blue-600 transition-all duration-300">
                                <p className="text-md md:text-lg text-zinc-400 leading-relaxed text-center hover:text-zinc-100 hover:translate-x-1 transition-all duration-300">
                                    {point?.text ?? ""}
                                </p>
                            </div>
                        </div>

                        {index < (data?.painPoints?.length ?? 0) - 1 && (
                            <div className="relative flex items-center">
                                <div className="w-0.5 h-24 bg-blue-600/40 origin-center rotate-12 transition-all duration-500 group-hover:opacity-0 group-hover:scale-y-50" />
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA Section */}
            <div className="bg-blue-600 rounded-lg p-6 md:p-8 text-center">
                <p className="text-sm md:text-base text-white leading-relaxed mb-4 text-balance max-w-3xl mx-auto">
                    {data?.cta?.statement ?? ""}
                </p>
                <Button
                    size="sm"
                    className="bg-white text-blue-600 hover:bg-zinc-100 text-sm px-6 py-2 h-auto font-semibold"
                    asChild
                >
                    <a href={data?.cta?.buttonLink ?? "#"}>{data?.cta?.buttonText ?? ""}</a>
                </Button>
            </div>
        </section>
    )
}
