import react from "react";
import BarGraph from "../components/charts/barchart";

const data = [
    [
        {
            "name": "people",
            "value": 5,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Standard"
        },
        {
            "name": "process",
            "value": 4,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Standard"
        },
        {
            "name": "technology",
            "value": 3,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Standard"
        }
    ],
    [
        {
            "name": "people",
            "value": 5,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Pro"
        },
        {
            "name": "process",
            "value": 4,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Pro"
        },
        {
            "name": "technology",
            "value": 3,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Pro"
        }
    ],
    [
        {
            "name": "people",
            "value": 5,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Enterprise"
        },
        {
            "name": "process",
            "value": 4,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Enterprise"
        },
        {
            "name": "technology",
            "value": 3,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Enterprise"
        }
    ],
    [
        {
            "name": "people",
            "value": 5,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Overall"
        },
        {
            "name": "process",
            "value": 4,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Overall"
        },
        {
            "name": "technology",
            "value": 3,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Overall"
        }
    ],
    [
        {
            "name": "people",
            "value": 5,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Implemented Investment Scores"
        },
        {
            "name": "process",
            "value": 4,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Implemented Investment Scores"
        },
        {
            "name": "technology",
            "value": 3,
            "fill": "hsl(var(--chart-1) / 0.8)",
            "title": "Implemented Investment Scores"
        }
    ]
]

export default function Test() {
    return (
        <div className="p-10 flex flex-col space-y-10">
            {
                data?.map((item, index) => {
                    return (
                        <BarGraph key={index} data={item} />
                    )
                })
            }
        </div>
    )
}