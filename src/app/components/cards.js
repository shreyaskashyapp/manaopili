import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const sections = [
    {
      title: "Get Started",
      description: "Begin your journey with our tailored assessment.",
      link: "/survey",
    },
    {
      title: "What We Do",
      description: "Explore our comprehensive suite of AI-driven solutions to boost efficiency.",
      link: "/services",
    },
    {
      title: "About",
      description: "Learn why industry leaders choose us to achieve their operational goals.",
      link: "/about",
    }
  ];


export default function Cards() {
    return (
        <section className="pt-20  bg-[#141414]">
            <div className="container mx-auto ">
                <div className='flex justify-center items-center md:gap-2 gap-0 px-3  '>
                    <h2 className="text-5xl  font-normal text-[#e2e2e2] text-center">Transform your business.</h2>
                    <Image src="/arrow_yellow.png" alt="Arrow" width={28} height={28} />
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-5 py-10 lg:py-20 lg:mx-10 mx-4'>
                    {sections.map((section, index) => (
                        <Card key={index} className='flex flex-col md:w-1/3 md:h-[300px] lg:h-[250px] lg:py-2 md:px-1 px-3 gap-3 bg-gradient-to-br from-zinc-900 to-[#141414] transition-all duration-500 hover:translate-y-[-6px] hover:shadow-2xl border-none shadow-md hover:bg-gradient-to-br hover:from-neutral-900 hover:via-blue-800 hover:to-neutral-300'>
                            <CardHeader>
                                <CardTitle className='text-2xl lg:text-3xl font-normal text-[#deff00] '>
                                    {section.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className='text-lg lg:text-xl font-normal text-[#e2e2e2] '>{section.description}</p>
                            </CardContent>
                            <CardFooter className='flex justify-end'>
                                <Image src="/arrow_yellow.png" alt="Arrow" width={25} height={25} />
                            </CardFooter>
                        </Card>
                    ))}

                </div>
            </div>
        </section>
    )
}
