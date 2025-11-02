"use client";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";



export function PieCharts() {
  const COLORS = ["#22c55e", "#FFFF00", "#ef4444"]; // verde, cinza, vermelho
  const pieData = [
    { name: "Positivos", value: 120 },
    { name: "Neutros", value: 45 },
    { name: "Negativos", value: 30 },
  ];
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={pieData}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={100}
        dataKey="value"
      >
        {pieData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
