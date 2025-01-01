'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"

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
  const chartData = transformData(data)

  return (
    <Card className="w-full bg-background mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">CSM Investment Scores by Product Suite</CardTitle>
        <CardDescription>
          Individualized scores for implementation of the ServiceNow CSM suite for investment into people, process, and technology.
        </CardDescription>
      </CardHeader>
      <CardContent>
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
            <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <XAxis dataKey="name" />
              <YAxis domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
              <Tooltip />
              <Legend />
              <Bar dataKey="people" fill="hsl(var(--chart-1))" />
              <Bar dataKey="process" fill="hsl(var(--chart-2))" />
              <Bar dataKey="technology" fill="hsl(var(--chart-3))" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

