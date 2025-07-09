'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, Cell } from "recharts"

export default function Barchart({ data, mode }) {
  const isDarkMode = mode === 'dark';
  const colors = [
    !isDarkMode ? 'hsl(var(--chart-1))' : 'hsl(var(--chart-1--dark))',
    !isDarkMode ? 'hsl(var(--chart-2))' : 'hsl(var(--chart-2--dark))',
    !isDarkMode ? 'hsl(var(--chart-3))' : 'hsl(var(--chart-4--dark))',
  ]

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
      className={`w-full mx-auto ${isDarkMode
        ? 'bg-gray-900/30 backdrop-blur-sm border border-gray-800 text-white'
        : 'bg-white border-none text-black'
        }`}
    >
      <CardHeader>
        <CardTitle className={`text-2xl font-normal ${isDarkMode ? 'text-white' : 'text-black'}`}>
          {data?.[0]?.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={Object.fromEntries(
            data.map((item, index) => [
              item.name,
              { label: item.name, color: colors[index % colors.length] }
            ])
          )}
          className={`h-[350px] capitalize ${isDarkMode ? 'bg-transparent' : ''}`}
        >
          <ResponsiveContainer width="80%" height="80%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
              barSize={35}
              barGap={8}
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
              <Bar dataKey="value" radius={[4, 4, 0, 0]} >
                {data.map((item, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                    // Add hover effect for dark/light mode
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