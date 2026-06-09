import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

export default function Cards({ data }) {
    return (
        <section className="">
            <div className="container mx-auto ">
                <div className='flex flex-col md:flex-row justify-center items-stretch gap-4 pb-10 lg:mx-10 mx-4'>
                    {data.map((section, index) => (
                        <Link href={section.link} key={index} className="group w-full md:w-1/3">
                            <Card className='relative overflow-hidden flex flex-col w-full h-full md:h-[300px] lg:h-[280px] p-2 md:gap-3 rounded-xl border border-zinc-800 shadow-lg bg-gradient-to-br from-zinc-900 to-[#141414] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#455CFF]/35 hover:shadow-[0_18px_50px_-24px_rgba(69,92,255,0.3)]'>
                                {/* Soft blue glow bleeding from the top on hover */}
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-[#455CFF] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.12]"
                                />
                                {/* Thin accent line along the top edge */}
                                <span
                                    aria-hidden
                                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-transparent to-transparent transition-all duration-500 group-hover:via-[#deff00]/70"
                                />

                                <CardHeader className="relative z-10">
                                    <CardTitle className='text-xl md:text-3xl font-normal leading-snug text-[#deff00]'>
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='relative z-10 flex-grow'>
                                    <p className='text-md md:text-lg font-normal text-[#e2e2e2] transition-colors duration-500 group-hover:text-white'>
                                        {section.description}
                                    </p>
                                </CardContent>
                                <CardFooter className='relative z-10 flex justify-end'>
                                    <Image
                                        src="/arrow_yellow.png"
                                        alt="Arrow"
                                        width={20}
                                        height={20}
                                        className="transition-transform duration-500 ease-out group-hover:translate-x-1.5"
                                    />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}
