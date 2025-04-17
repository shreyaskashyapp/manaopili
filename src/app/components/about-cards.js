import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutCards({ data }) {
    return (
        <div className="lg:px-10 grid md:grid-cols-2 gap-10">
            {data.map((section, index) => (
                <Card key={index} className="w-full h-full px-4 border-none bg-gradient-to-b from- to-[#141414] shadow-lg rounded-xl ">
                    <CardHeader>
                        <CardTitle className="text-[#deff00] font-normal">{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <CardDescription className="text-gray-400 text-base " >
                            {section.description}
                        </CardDescription>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}