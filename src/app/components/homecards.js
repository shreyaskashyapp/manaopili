import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

export default function Cards({ data }) {
    return (
        <section className="">
            <div className="container mx-auto ">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 pb-10 lg:mx-10 mx-4'>
                    {data.map((section, index) => (
                        <Link href={section.link} key={index} className="w-full md:w-1/3">
                            <Card className='flex flex-col w-full h-full md:h-[300px] lg:h-[280px] p-2 md:gap-3 bg-gradient-to-br from-zinc-900 to-[#141414] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-2xl border-none shadow-md hover:bg-gradient-to-br hover:from-neutral-900 hover:via-[#455CFF] hover:to-neutral-300'>
                                <CardHeader>
                                    <CardTitle className='text-xl md:text-3xl font-normal text-[#deff00] '>
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='flex-grow'>
                                    <p className='text-md md:text-lg font-normal text-[#e2e2e2] '>{section.description}</p>
                                </CardContent>
                                <CardFooter className='flex justify-end'>
                                    <Image src="/arrow_yellow.png" alt="Arrow" width={20} height={20} />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}