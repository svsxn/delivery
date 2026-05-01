"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

const chartData = [
  { day: "pn.", amount: 104.23 },
  { day: "wt.", amount: 43.78 },
  { day: "śr.", amount: 23.98 },
  { day: "czw.", amount: 0 },
  { day: "pt.", amount: 78.51 },
  { day: "sob.", amount: 43.21 },
  { day: "ndz.", amount: 121.98 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

export function WeeklyChart() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-50 w-full bg-neutral-900 rounded-xl border border-neutral-800 p-4"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} stroke="#262626" />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
        />
        {false && <ChartTooltip content={<ChartTooltipContent />} />}
        <Bar dataKey="amount" fill="var(--color-desktop)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
