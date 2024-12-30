'use client'

import { useState } from 'react'
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const colorPalette = [
  'hsl(var(--chart-1) / 0.8)',
  'hsl(var(--chart-2) / 0.8)',
  'hsl(var(--chart-3) / 0.8)',
  'hsl(var(--chart-4) / 0.8)',
  'hsl(var(--chart-5) / 0.8)'
]

export function RandomDataBarChart() {
  const [data, setData] = useState(generateRandomData())

  function generateRandomData() {
    const labels = ['A', 'B', 'C', 'D', 'E']
    return labels.map((label, index) => ({
      name: label,
      value: Math.floor(Math.random() * 100),
      fill: colorPalette[index]
    }))
  }

  const handleRegenerateData = () => {
    console.log(generateRandomData)
    setData(generateRandomData())
  }

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 pb-8">
        <CardTitle className="text-2xl font-bold text-foreground/90">Soft-Edged Random Data</CardTitle>
        <CardDescription className="text-foreground/70">A gentle display of randomly generated values</CardDescription>
      </CardHeader>
      <CardContent className="pt-6 pb-8 px-8">
        <ChartContainer
          config={{
            value: {
              label: "Value",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[300px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 20 }}>
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'hsl(var(--foreground) / 0.7)' }}
                axisLine={{ stroke: 'hsl(var(--border) / 0.5)' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--foreground) / 0.7)' }}
                axisLine={{ stroke: 'hsl(var(--border) / 0.5)' }}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                cursor={{ fill: 'hsl(var(--accent) / 0.1)' }}
              />
              <Bar 
                dataKey="value" 
                radius={[8, 8, 8, 8]}
                className="drop-shadow-md transition-all duration-300 hover:brightness-110"
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={handleRegenerateData}
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Generate New Soft Data
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

