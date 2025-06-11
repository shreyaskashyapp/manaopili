'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, CartesianGrid, LabelList } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { configs } from "@/app/config/data"
import { useSearchParams } from "next/navigation"

export function Multiplechart(
  {
    data,
    modules
  }) {
  const transformData = (data) => {
    const categories = modules
    return categories.map((category, index) => ({
      name: category,
      People: data[index].find(item => item.name === 'People').value,
      Process: data[index].find(item => item.name === 'Process').value,
      Technology: data[index].find(item => item.name === 'Technology').value,
    }))
  }
  const params = useSearchParams();

  const surveyModule = params.get('survey')

  const chartData = transformData(data)

  return (
    <Card className="w-full bg-white mx-auto border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-normal">{`${configs?.[surveyModule]?.title} Investment Scores by Product Suite`}</CardTitle>
        <CardDescription>
          {`Individualized scores for implementation of the ServiceNow ${configs?.[surveyModule]?.title} for investment into people, process, and technology.`}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-2">
        <ChartContainer
          config={{
            People: {
              label: "People",
              color: "hsl(var(--chart-1))",
            },
            Process: {
              label: "Process",
              color: "hsl(var(--chart-2))",
            },
            Technology: {
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
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
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
              <Bar dataKey="People" name={modules[0]} fill="hsl(var(--chart-1))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="People" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="Process" name={modules[1]} fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="Process" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="Technology" name={modules[2]} fill="hsl(var(--chart-3))" radius={[4, 4, 0, 0]}>
                <LabelList dataKey="Technology" position="top" fill="hsl(var(--foreground))" fontSize={12} fontWeight="normal" formatter={value => value.toFixed(2)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}