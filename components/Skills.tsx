"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
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
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [animatedData, setAnimatedData] = useState(
    SKILLS.map(skill => ({ ...skill, A: 0 }))
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(SKILLS.map(skill => ({ ...skill, A: skill.level })));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const chartVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const skillItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const getProficiencyColor = (proficiency: string) => {
    switch (proficiency) {
      case "Strong":
        return "text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20";
      case "Medium":
        return "text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20";
      case "Low":
        return "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20";
      default:
        return "text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20";
    }
  };

  const getProficiencyIcon = (proficiency: string) => {
    switch (proficiency) {
      case "Strong":
        return "🔥";
      case "Medium":
        return "⚡";
      case "Low":
        return "🌱";
      default:
        return "📚";
    }
  };

  return (
    <div className="relative">
      <motion.div
        variants={chartVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <ResponsiveContainer width="100%" height={340}>
          <RadarChart cx="50%" cy="50%" outerRadius="65%" data={animatedData}>
            <PolarGrid
              gridType="circle"
              className="text-slate-300 dark:text-slate-600"
              stroke="currentColor"
              strokeOpacity={0.3}
            />
            <PolarAngleAxis
              className="text-slate-800 dark:text-white"
              dataKey="subject"
              tick={({ payload, x, y, textAnchor }) => (
                <text
                  x={x}
                  y={y}
                  textAnchor={textAnchor}
                  fontSize={12}
                  fill="currentColor"
                  dy={y < 120 ? -5 : y > 280 ? 15 : 5}
                  className="font-medium"
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
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.2}
              strokeWidth={2}
              animationDuration={1500}
              animationBegin={500}
            />
            <Legend 
              wrapperStyle={{ paddingTop: "20px" }} 
              iconType="circle"
            />
          </RadarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Skill Level Indicators */}
      <motion.div 
        className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm"
        initial="hidden"
        animate="visible"
      >
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.subject}
            variants={skillItemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`
              flex items-center justify-between p-3 rounded-lg transition-all duration-300
              ${hoveredSkill === skill.subject 
                ? 'bg-indigo-50 dark:bg-indigo-900/20 scale-105' 
                : 'bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
              }
            `}
            onMouseEnter={() => setHoveredSkill(skill.subject)}
            onMouseLeave={() => setHoveredSkill(null)}
            whileHover={{ y: -2 }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">
                {getProficiencyIcon(skill.proficiency)}
              </span>
              <span className="font-medium text-slate-700 dark:text-slate-300">
                {skill.subject}
              </span>
            </div>
            
            <motion.span
              className={`
                px-3 py-1 rounded-full text-xs font-semibold
                ${getProficiencyColor(skill.proficiency)}
              `}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.3 }}
            >
              {skill.proficiency}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Legend */}
      <motion.div 
        className="mt-6 flex flex-wrap justify-center gap-4 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="flex items-center gap-1">
          <span>🔥</span>
          <span className="text-green-600 dark:text-green-400 font-medium">Strong</span>
        </div>
        <div className="flex items-center gap-1">
          <span>⚡</span>
          <span className="text-yellow-600 dark:text-yellow-400 font-medium">Medium</span>
        </div>
        <div className="flex items-center gap-1">
          <span>🌱</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">Learning</span>
        </div>
      </motion.div>
    </div>
  );
}
