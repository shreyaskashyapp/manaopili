'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip } from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, Cell } from "recharts"

export default function Barchart({ data}) {
  const colors = [
    'hsl(var(--chart-1))',
    'hsl(var(--chart-2))',
    'hsl(var(--chart-3))',
  ]

  const CustomizedLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text 
        x={x + 17.5} 
        y={y - 10} 
        fill="hsl(var(--foreground))"
        fontSize={12}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value.toFixed(2)}
      </text>
    );
  };

  return (
    <Card className="w-full bg-background mx-auto border-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{data?.[0]?.title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <ChartContainer
          config={Object.fromEntries(data.map((item, index) => [
            item.name,
            { label: item.name, color: colors[index % colors.length] }
          ]))}
          className="h-[350px]"
        >
          <ResponsiveContainer width="80%" height="80%">
            <BarChart
              data={data}
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
              <Bar
                dataKey="value"
                radius={[4, 4, 0, 0]}
              >
                {data.map((item, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
                <LabelList
                  content={<CustomizedLabel />}
                  position="top"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}