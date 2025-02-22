"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { SKILLS } from "@/lib/consts";

export default function Skills() {
  return (
    <ResponsiveContainer width="100%" height={340} >
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={SKILLS}>
        <PolarGrid gridType="circle" />
        <PolarAngleAxis
          dataKey="subject"
          tick={({ payload, x, y, textAnchor }) => (
            <text
              x={x}
              y={y}
              textAnchor={textAnchor}
              fontSize={14}
              fill="#fff"
              dy={y < 120 ? -5 : y > 280 ? 15 : 5}
            >
              {payload.value}
            </text>
          )}
          tickLine={false}
        />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Radar
          name="Technical Proficiency"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend wrapperStyle={{ paddingTop: "30px" }} />
      </RadarChart>
    </ResponsiveContainer>
  );
}
