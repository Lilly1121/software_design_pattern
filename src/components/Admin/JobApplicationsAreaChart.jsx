"use client";

import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", postings: 150 },
  { month: "February", postings: 200 },
  { month: "March", postings: 180 },
  { month: "April", postings: 120 },
  { month: "May", postings: 220 },
  { month: "June", postings: 250 },
];

const chartConfig = {
  postings: {
    label: "Job Postings",
    color: "hsl(var(--chart-2))",
  },
};

export const JobApplicationsAreaChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Job Postings</CardTitle>
        <CardDescription>
          Showing total job postings from January to June 2024
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="postings"
              type="linear"
              fill="var(--color-postings)"
              fillOpacity={0.4}
              stroke="var(--color-postings)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 6.7% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobApplicationsAreaChart;
