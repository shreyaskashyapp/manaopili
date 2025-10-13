'use client'
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

export default function Products({data}) {

    const [activeTab, setActiveTab] = useState("Platform");

    const getServicesByCategory = (category) => {
        return data?.services?.filter(
            (s) => s.category === category || (category === "ITSM/CSM" && s.category === "CSM")
        );
    };

    return (
        <div className="md:py-10 py-4">
            <div className="space-y-10">
                <header className="text-center space-y-4 md:mb-10 mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight text-balance mb-1">
                        AI Starter Solutions for ITOM and ITSM/CSM
                    </h1>
                    {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Choose your preferred design for showcasing our services. Each design offers a unique way to explore and select solutions.
                    </p> */}
                </header>
            </div>
            {/* TABs */}
            <div className="w-full space-y-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="flex w-full mb-8 bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 ">
                        {data?.categories?.map((cat) => (
                            <TabsTrigger
                                key={cat}
                                value={cat}
                                className={`flex-1 data-[state=active]:bg-[#455cff]/10 data-[state=active]:text-white text-sm sm:text-base relative
                                    ${activeTab === cat ? "after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-1 after:h-1 after:bg-[#455cff] after:rounded-t" : ""}
                                `}
                                style={{ position: "relative" }}
                            >
                                {cat}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {data?.categories?.map((category) => (
                        <TabsContent key={category} value={category}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                                {getServicesByCategory(category)?.map((service) => (
                                    <Card key={service?.id} className="hover:border-[#455cff]/20 transition-all bg-gradient-to-b from-zinc-900 to-[#141414] border border-zinc-900 duration-300 cursor-pointer group">
                                        <CardHeader>
                                            <div className="flex items-start justify-between mb-2 ">
                                                <span className="text-xs font-semibold px-2 py-1 rounded text-[#455cff]">
                                                    {service?.category}
                                                </span>
                                            </div>
                                            <CardTitle className="text-lg text-white">{service?.title}</CardTitle>
                                            <CardDescription className="text-sm text-gray-400">{service?.description}</CardDescription>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>

        </div>
    )
}
