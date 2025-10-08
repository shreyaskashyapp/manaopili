"use client"

import { Button } from "@/components/ui/button"

export function FeatureDelimitedSection({ data }) {
    return (
        <section className="mx-auto py-10">
            {/* Hero Section */}
            <div className="mb-10 text-white text-center">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-balance mb-1">{data?.hero?.title ?? ""}</h1>
                <h2 className="text-2xl md:text-4xl font-semibold leading-tight text-balance">{data?.hero?.subtitle ?? ""}</h2>
            </div>

            {/* Pain Points with Left Accent Bar */}
            <div className="flex flex-col md:flex-row justify-between gap-8 pt-4 group">
                {data?.painPoints?.map((point, index) => (
                    <div key={point?.id ?? index} className="flex gap-6 flex-1 md:border-none border-b pb-4 border-blue-600/20">
                        <div className="flex-1 cursor-default hover-trigger">
                            <div className="h-full md:p-8 relative border-l-2 border-transparent hover:border-blue-600 transition-all duration-300">
                                <p className="text-sm md:text-xl text-zinc-400 pl-1 leading-relaxed md:text-center hover:text-zinc-100 hover:translate-x-1 transition-all duration-300">
                                    {point?.value &&
                                        <>
                                            <span className="md:text-4xl text-sm text-[#455cff]">
                                                {point.value}
                                            </span>
                                            <br />
                                        </>
                                    }
                                    {point?.text ?? ""}
                                </p>
                            </div>
                        </div>

                        {index < (data?.painPoints?.length ?? 0) - 1 && (
                            <div className="hidden relative md:flex items-center">
                                <div className="w-0.5 h-full bg-[#455cff] origin-center rotate-12 transition-all duration-500 group-hover:opacity-0 group-hover:scale-y-50" />
                            </div>
                        )}
                        {index < (data?.painPoints?.length ?? 0) && (
                            <div className="md:hidden relative flex items-center">
                                <div className="w-2 h-2 rounded-full bg-[#455cff] origin-center rotate-12 transition-all duration-500 group-hover:opacity-0 group-hover:scale-y-50" />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
