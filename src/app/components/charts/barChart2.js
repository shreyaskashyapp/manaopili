"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, LabelList, Cell } from "recharts"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { configs } from "@/app/config/data";

export default function BarChart2({ results, mode, title }) {
  const isDarkMode = mode === 'dark';

  // Define colors for each tier with light/dark mode support
  const tierColors = {
    "Standard": !isDarkMode ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-1--dark))',
    "Pro": !isDarkMode ? 'hsl(var(--chart-2))' : 'hsl(var(--chart-2--dark))',
    "Enterprise": !isDarkMode ? 'hsl(var(--chart-3))' : 'hsl(var(--chart-3--dark))',
  }

  // Filter out tiers that have null or undefined average scores
  const chartData = Object.entries(results || {})
    .filter(([, score]) => score !== null && score !== undefined)
    .map(([name, score]) => ({
      name,
      value: Number.parseFloat(score.toFixed(2)), // Changed from 'score' to 'value' to match reference
      color: tierColors[name] || (!isDarkMode ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-1--dark))'),
    }))

  // Custom label component
  const CustomizedLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text
        x={x + 17.5}
        y={y - 10}
        fill={isDarkMode ? "#fff" : "hsl(var(--foreground))"}
        fontSize={12}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.toFixed(2)}
      </text>
    );
  };

  return (
    <Card
      className={`w-full mx-auto overflow-auto ${isDarkMode
        ? 'bg-gradient-to-br from-zinc-900 via-[#141414] to-zinc-900   border border-gray-800 backdrop-blur-sm text-white'
        : 'bg-white border-none text-black'
        }`}
    >
      <CardHeader>
        <CardTitle className={`md:text-xl text-lg font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Aggregated Scores For All {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="py-4 px-0">
        <ChartContainer
          config={Object.fromEntries(
            chartData.map((item, index) => [
              item.name,
              { label: item.name, color: item.color }
            ])
          )}
          className={`h-[350px] w-full capitalize ${isDarkMode ? 'bg-transparent' : ''}`}
        >
          <ResponsiveContainer width="80%" height="80%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 10, left: 0, bottom: 20 }}
              barSize={35}
              barGap={6}
            >
              <CartesianGrid
                stroke={isDarkMode ? "rgba(255,255,255,0.08)" : "hsl(var(--border))"}
                strokeDasharray="3 3"
                vertical={false}
              />
              <XAxis
                dataKey="name"
                tick={{
                  fill: isDarkMode ? "#fff" : "hsl(var(--foreground))",
                  fontSize: 12
                }}
                axisLine={{
                  stroke: isDarkMode ? "rgba(255,255,255,0.15)" : "hsl(var(--border))"
                }}
                tickLine={false}
                interval={0}
              />
              <YAxis
                tick={{
                  fill: isDarkMode ? "#fff" : "hsl(var(--foreground))",
                  fontSize: 12
                }}
                axisLine={{
                  stroke: isDarkMode ? "rgba(255,255,255,0.15)" : "hsl(var(--border))"
                }}
                tickLine={false}
                domain={[0, 5]}
                ticks={[0, 1, 2, 3, 4, 5]}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((item, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={item.color}
                    style={{
                      transition: 'fill 0.2s'
                    }}
                  />
                ))}
                <LabelList content={<CustomizedLabel />} position="top" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}