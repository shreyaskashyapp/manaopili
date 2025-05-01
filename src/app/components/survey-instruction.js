import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"


export default function SurveyInstructions({ data, tableData, points }) {
    return (
        <div className="container flex flex-col gap-3 mx-auto p-4 md:py-1 bg-[#141414]">
            <p className="text-gray-400 max-w-2xl mx-auto text-center">
                {data.description}
            </p>
            <div className="pt-3 md:flex-row gap-4 flex flex-wrap justify-center items-center ">
                {
                    tableData.map((item, index) => (
                        <Card key={index} className="md:w-[200px] md:h-[200px] w-[160px] h-[200px] p-1 border-none bg-gradient-to-b text-center from-[#141414] to-zinc-900 shadow-sm rounded-xl ">
                            <CardHeader className="p-2">
                                <CardTitle className="text-[#455CFF] text-4xl font-normal">{item.level}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col gap-2 px-2">
                                <CardDescription className="text-gray-300 text-lg" >
                                    {item.title}
                                </CardDescription>
                                <CardDescription className="text-gray-400 text-sm" >
                                    {item.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            <div className="flex flex-col text-left gap-3 lg:px-28 md:px-10 px-2 pt-3">
                <p className="text-gray-300 text-lg">
                    Provide seperate scores for:
                </p>
                <ul className="flex flex-col gap-3 ">
                    {points.map((item, index) => (
                        <li key={index} className="text-gray-400 text-base">
                            <span className=" text-[#455CFF]">{item.title}</span>: {item.description}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-300 text-lg">
                    Leave blank if a module does not apply.
                </p>
            </div>


        </div>
    )
}