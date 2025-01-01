'use client'

import { useState } from 'react'
import { Bar, BarChart, XAxis, YAxis, ResponsiveContainer, CartesianGrid, LabelList } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"



export default function Barchart({data}) {
  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-b from-sky-100 to-sky-50 pb-2">
        <CardTitle className="text-lg font-semibold text-gray-800">
          Implemented CSM Investment Scores
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2 pb-8 px-4 bg-gradient-to-b from-sky-50 to-sky-100">
        <ChartContainer
          config={{
            value: {
              label: "Score",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[350px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data} 
              margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
              barSize={35}
              barGap={0}
            >
              <CartesianGrid 
                horizontal={true}
                vertical={false}
                stroke="#E5E7EB"
                strokeDasharray="3 3"
              />
              <XAxis 
                dataKey="name" 
                tick={{ fill: '#374151', fontSize: 11 }}
                axisLine={{ stroke: '#E5E7EB' }}
                tickLine={false}
                interval={0}
              />
              <YAxis 
                tick={{ fill: '#374151', fontSize: 11 }}
                axisLine={{ stroke: '#E5E7EB' }}
                tickLine={false}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <Bar 
                dataKey="value" 
                fill={(d) => d.fill}
                radius={[0, 0, 0, 0]}
              >
                
                <LabelList 
                  dataKey="value" 
                  position="top" 
                  fill="#374151" 
                  fontSize={11} 
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
        <div className="bg-[#1a365d] text-white text-xs p-2 text-center mt-2">
          Aggregated scores for all implemented CSM modules.
        </div>
      </CardContent>
    </Card>
  )
}