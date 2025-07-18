'use client'

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, CartesianGrid, LabelList } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer } from "@/components/ui/chart"
import { configs } from "@/app/config/data"
import { useSearchParams } from "next/navigation"

export function Multiplechart(
  {
    data,
    modules,
    mode, // Default to light mode, can be overridden
    currentModule, // Default module
  }) {
  const transformData = (data) => {
    const categories = modules
    return categories.map((category, index) => ({
      name: category,
      people: data[index].find(item => item.name === 'people').value,
      process: data[index].find(item => item.name === 'process').value,
      technology: data[index].find(item => item.name === 'technology').value,
    }))
  }
  const params = useSearchParams();

  const surveyModule = currentModule || params.get('survey')

  const chartData = transformData(data)

  const isDarkMode = mode === 'dark';

  return (
    <Card className={`w-full mx-auto overflow-auto ${isDarkMode
      ? 'bg-gray-900/30 backdrop-blur-sm border border-gray-800 text-white'
      : 'bg-white border-none text-black '
      }`}>
      <CardHeader>
        <CardTitle className="md:text-xl font-normal text-lg">{`${configs?.[surveyModule]?.title} Investment Scores by Product Suite`}</CardTitle>
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
          className={`h-[400px] ${isDarkMode ? 'bg-transparent' : ''}`}
        >
          <ResponsiveContainer width="100%" height="100%" className="">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              barSize={35}
              barGap={8}
            >
              <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? "rgba(255,255,255,0.08)" : "hsl(var(--border))"} vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fill: isDarkMode ? "#fff" : "hsl(var(--foreground))", fontSize: 12 }}
                axisLine={{ stroke: isDarkMode ? "rgba(255,255,255,0.15)" : "hsl(var(--border))" }}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{ fill: isDarkMode ? "#fff" : "hsl(var(--foreground))", fontSize: 12 }}
                axisLine={{ stroke: isDarkMode ? "rgba(255,255,255,0.15)" : "hsl(var(--border))" }}
                tickLine={false}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Tooltip
                cursor={{ opacity:0 }}
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
              <Bar dataKey="people" name={modules[0]} fill={`${!isDarkMode ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-1--dark))'}`} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="people" position="top" fill={isDarkMode ? "#fff" : "hsl(var(--foreground))"} fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="process" name={modules[1]} fill={`${!isDarkMode ? 'hsl(var(--chart-2))' : 'hsl(var(--chart-2--dark))'}`} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="process" position="top" fill={isDarkMode ? "#fff" : "hsl(var(--foreground))"} fontSize={12} fontWeight="normal" formatter={(value) => value.toFixed(2)} />
              </Bar>
              <Bar dataKey="technology" name={modules[2]} fill={`${!isDarkMode ? 'hsl(var(--chart-3))' : 'hsl(var(--chart-4--dark))'}`} radius={[4, 4, 0, 0]}>
                <LabelList dataKey="technology" position="top" fill={isDarkMode ? "#fff" : "hsl(var(--foreground))"} fontSize={12} fontWeight="normal" formatter={value => value.toFixed(2)} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}