'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, CartesianGrid, LabelList } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { configs } from "@/app/config/data"
import { useSearchParams } from "next/navigation"

const transformData = (data) => {
  const categories = ['Standard', 'Pro', 'Enterprise']
  return categories.map((category, index) => ({
    name: category,
    people: data[index].find(item => item.name === 'people').value,
    process: data[index].find(item => item.name === 'process').value,
    technology: data[index].find(item => item.name === 'technology').value,
  }))
}

export function Multiplechart({ data }) {
  const transformData = (data) => {
    const categories = ['Standard', 'Pro', 'Enterprise']
    return categories.map((category, index) => ({
      name: category,
      people: data[index].find(item => item.name === 'people').value,
      process: data[index].find(item => item.name === 'process').value,
      technology: data[index].find(item => item.name === 'technology').value,
    }))
  }
  const params = useSearchParams();
  
  const surveyModule = params.get('survey')

  const chartData = transformData(data)

  return (
    <Card className="w-full bg-background mx-auto border-none">
      <CardHeader>

        <CardTitle className="text-2xl font-bold">{`${configs?.[surveyModule]?.title} Investment Scores by Product Suite`}</CardTitle>
        <CardDescription>
          {`Individualized scores for implementation of the ServiceNow ${configs?.[surveyModule]?.title} for investment into people, process, and technology.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <ChartContainer
          config={{
            people: {
              label: "People",
              color: "hsl(var(--chart-1))",
            },
            process: {
              label: "Process",
              color: "hsl(var(--chart-2))",
            },
            technology: {
              label: "Technology",
              color: "hsl(var(--chart-3))",
            },
          }}
          className="h-[400px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              barSize={35}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                axisLine={{ stroke: 'hsl(var(--border))' }}
                tickLine={false}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border bg-background p-2 shadow-sm">
                        <div className="grid grid-cols-2 gap-2">
                          {payload.map((entry) => (
                            <div key={entry.dataKey} className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                {entry.dataKey}
                              </span>
                              <span className="font-bold text-muted-foreground">
                                {entry.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Legend />
              <Bar dataKey="people" fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="people" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="process" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="process" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="technology" fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="technology" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={value => value.toFixed(2)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}