import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function SurveyInstructions({ data }) {
    return (
        <div className="container flex flex-col gap-2 mx-auto p-2 md:py-1 bg-[#141414]">
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
                {data?.info?.description}
            </p>
            <div className="pt-2 md:flex-row gap-4 flex flex-wrap justify-center items-center ">
                {
                    data?.scores?.map((item, index) => (
                        <Card key={index} className="w-[150px] md:w-[200px] h-[140px] p-1 border-[#141414] bg-gradient-to-b text-center from-[#141414] to-zinc-900  rounded-xl ">
                            <CardHeader className="px-2 py-0.5">
                                <CardTitle className="text-[#455CFF] text-2xl font-normal">{item.level}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-0.5 px-0.5">
                                <CardDescription className="text-gray-300 text-base" >
                                    {item.title}
                                </CardDescription>
                                <CardDescription className="text-gray-400 text-xs" >
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <div className="flex flex-col justify-center items-center text-left gap-3 lg:px-28 md:px-10 px-2 pt-2">
                <p className="text-gray-300 text-base">
                    Provide seperate scores for:
                </p>
                <ul className="flex flex-col md:flex-row w-full gap-3 md:justify-between md:items-center ">
                    {data?.bulletPoints?.map((item, index) => (
                        <li key={index} className="flex flex-col md:flex-1 text-center text-gray-400 text-base">
                            <span className=" text-[#455CFF]">{item.title}</span> {item.description}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-300 pt-2 text-sm italic">
                    Leave blank if a module does not apply.
                </p>
            </div>
        </div>
    )
}