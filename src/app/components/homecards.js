import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';

export default function Cards({ data }) {
    return (
        <section className="bg-[#141414]">
            <div className="container mx-auto ">
                <div className='flex flex-col md:flex-row justify-center items-center gap-4 py-10 md:py-16 lg:mx-10 mx-4'>
                    {data.map((section, index) => (
                        <Link href={section.link} key={index} className="w-full md:w-1/3">
                            <Card className='flex flex-col w-full h-full md:h-[300px] lg:h-[280px] lg:py-1 md:px-1 px-3 gap-3 bg-gradient-to-br from-zinc-900 to-[#141414] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-2xl border-none shadow-md hover:bg-gradient-to-br hover:from-neutral-900 hover:via-[#455CFF] hover:to-neutral-300'>
                                <CardHeader>
                                    <CardTitle className='text-2xl lg:text-3xl font-normal text-[#deff00] '>
                                        {section.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className='flex-grow'>
                                    <p className='text-lg lg:text-xl font-normal text-[#e2e2e2] '>{section.description}</p>
                                </CardContent>
                                <CardFooter className='flex justify-end'>
                                    <Image src="/arrow_yellow.png" alt="Arrow" width={25} height={25} />
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}

                </div>
            </div>
        </section>
    )
}