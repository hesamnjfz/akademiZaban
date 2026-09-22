"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { activityData } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export default function ActivityChart() {
  const { lang } = useLang();
  const data = activityData.map((d) => ({
    ...d,
    label: lang === "fa" ? d.fa : d.day,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorMinutes" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffffff" stopOpacity={0.45} />
              <stop offset="95%" stopColor="#ffffff" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#2a2a2a"
            vertical={false}
          />
          <XAxis
            dataKey="label"
            stroke="#9aa5a1"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            hide
            stroke="#9aa5a1"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "#101010",
              border: "1px solid #2a2a2a",
              borderRadius: 12,
              color: "#fff",
            }}
            labelStyle={{ color: "#9aa5a1" }}
          />
          <Area
            type="monotone"
            dataKey="minutes"
            stroke="#ffffff"
            strokeWidth={2}
            fill="url(#colorMinutes)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
