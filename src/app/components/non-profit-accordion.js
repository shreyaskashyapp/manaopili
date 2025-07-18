import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function NonProfitAccordion({ data1 }) {
    return (
        <div className="pb-6">
            <Accordion type="single" defaultValue={data1[0]} collapsible className="w-full md:px-28 px-10">
                {
                    data1.map((item, index) => (
                        <AccordionItem key={index}  value={item} className="border-gray-700 py-6">
                            <AccordionTrigger className="text-white hover:text-[#deff00] md:text-3xl text-lg font-medium text-start" >
                                {item.title}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-400 text-sm md:text-lg">
                                <p className="leading-relaxed">
                                    {item.text}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}