'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"
import Image from "next/image";

import { useState } from "react";


export default function CompareCard({data,companies}) {
    const [activeTab, setActiveTab] = useState(companies[0])

    const handleClick = (company) => {
        setActiveTab(company)
    }
    return (
        <section>
        {/* desktop view */}
            <div className="hidden md:flex justify-center w-full lg:gap-10 md:gap-4 xl:px-20 lg:py-10 md:px-10">
                {companies.map((company, index) => (
                    <Card key={index} className={`flex flex-col flex-grow bg-gray-900/50 border ${index === 0 ? 'border-[#455CFF]' : 'border-gray-800/50'} w-1/3`}>
                        <CardHeader className={`${index === 0 ? 'bg-[#455CFF]' : 'bg-gray-800/50'} py-4 flex justify-center items-center rounded-t-md`}>
                            <CardTitle className="flex justify-center items-center gap-2">
                            {index===0 && <Image src="/Logo_white.png" alt="Arrow" width={30} height={30} />}
                                <h2 className='text-2xl font-semibold text-white '>
                                    {company}
                                </h2>
                            </CardTitle>
                        </CardHeader>
                        {data[company].map((item, idx) => (
                            <CardContent key={idx} className="flex flex-col gap-2 pt-5 border-t border-zinc-800">
                                <CardDescription className="text-gray-300">
                                    {item.title}
                                </CardDescription>
                                {item.subtitle && (
                                    <CardDescription>{item.subtitle}</CardDescription>
                                )}
                                <CardDescription className="text-white font-semibold text-xl">
                                    {item.label}
                                </CardDescription>
                                {item.value && <CardDescription>
                                    <Progress value={item.value} className={`bg-black border ${index === 0 ? '[&>div]:bg-[#455CFF]' : '[&>div]:bg-gray-300'} border-[#141414]`}/>
                                </CardDescription>}
                                {item.logo && <CardDescription>
                                    <div className="flex justify-center gap-2">{item.logo}{item.label}</div>
                                </CardDescription>}
                                {item.color && <CardDescription className='flex justify-center gap-2 items-center'>
                                    <div className={`${item.color}`}></div>
                                    {item.label}
                                </CardDescription>}
                            </CardContent>
                        ))}
                    </Card>
                ))}
            </div>
            {/* Mobile view */}
            <div className="md:hidden flex flex-col py-6">
                <div className="flex">
                    {companies?.map((company, index) => (
                        <Button
                            onClick={() => handleClick(company)}
                            key={index}
                            className={`flex-1 w-full py-3  text-lg font-medium ${
                            activeTab===company?' text-[#455CFF] bg-gray-900':'text-white'
                            }`}>
                            {company}
                        </Button>
                    ))}
                </div>
                <div className="w-full mx-auto flex flex-col gap-6 py-6 px-3">
                    {data[activeTab].map((item, idx) => (
                        <Card key={idx} className="border-none  bg-gray-900/50 ">
                        
                            <CardHeader className="bg-gray-900 text-white py-3 rounded-t-lg">
                                <CardTitle className="flex justify-start">
                                    <h2 className="text-lg">{item.title}</h2>
                                </CardTitle>
                                {item.subtitle &&
                                    <CardDescription className="flex justify-start text-xs text-gray-300">
                                        {item.subtitle}
                                    </CardDescription>}
                            </CardHeader>
                            <CardContent className="flex flex-col py-3">
                                <CardDescription className="flex flex-col items-start gap-2 text-white text-lg font-bold">
                                    <div className="flex w-full justify-between">
                                        {item.label}
                                        {activeTab==="Mana'o Pili" &&(
                                        <span className="bg-[#455CFF] items-center flex justify-center text-white px-3 rounded-full text-xs font-semibold">OURS</span>
                                    )}
                                    </div>
                                    {item.value &&
                                        <Progress value={item.value} className={`${activeTab==="Mana'o Pili" ? '[&>div]:bg-[#455CFF]' : '[&>div]:bg-gray-300'} h-2 bg-black`} />
                                    }

                                </CardDescription>
                                <CardDescription>
                                    {item.logo &&
                                        <CardDescription className="flex justify-start text-gray-300">{item.logo}</CardDescription>
                                    }
                                    {item.color && <CardDescription className='flex justify-start gap-2 items-center'>
                                        <div className={`${item.color}`}></div>
                                        {item.label}
                                    </CardDescription>}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
