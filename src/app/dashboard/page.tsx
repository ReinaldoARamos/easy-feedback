"use client";
import { FeedbackCard } from "../components/FeedbackCard";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#22c55e", "#FFFF00", "#ef4444"]; // verde, cinza, vermelho
const data = [
  { name: "Positivos", value: 120 },
  { name: "Neutros", value: 45 },
  { name: "Negativos", value: 30 },
];
export default function Dashboard() {
  return (
    <div className=" mr-5 my-4 h-full bg-slate-200 ">
      <div className="pt-9  px-4  gap-3 flex flex-col ">
        <h1 className="text-[32px] font-bold text-black">
          Gráfico dos feedbacks
        </h1>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        <div className="pt-20 flex-col">
          <h1 className="text-[32px] font-bold text-black">
            Top 5 Feedback mais votados
          </h1>
        </div>
        <div className="pt-4  gap-3 flex flex-col ">
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
      </div>
    </div>
  );
}
