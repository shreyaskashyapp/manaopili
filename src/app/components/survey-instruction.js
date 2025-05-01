import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const data = {
    title: "Survey Instructions",
    description: "Please fill out the survey to help us improve our services. Your feedback is valuable to us.",
}
const tableData = [
    {
        level: 0,
        title: "None",
        description: "Not implemented"
    },
    {
        level: 1,
        title: "Initial",
        description: "Mostly manual driven activities."
    },
    {
        level: 2,
        title: "Managed",
        description: "Basic repeatable activities. Use of templates, and limited workflow."
    },
    {
        level: 3,
        title: "Defined",
        description: "Workflow driven activities"
    },
    {
        level: 4,
        title: "Quantitative",
        description: "Advanced automation and reporting."
    },
    {
        level: 5,
        title: "Optimizing",
        description: "Continuously improving, aligned with business, and enabled with automation and AI"
    }
]

const points = [
    {
        title: "People/Resources",
        description: "Staffing, training, and adoption"
    },
    {
        title: "Process",
        description: "Documentation and workflow standardization"
    },
    {
        title: "Technology",
        description: "ServiceNow implementation and configuration"
    }
];

export default function SurveyInstructions() {
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