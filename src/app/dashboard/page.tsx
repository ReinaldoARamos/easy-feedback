"use client";
import { useQuery } from "@tanstack/react-query";
import { FeedbackCard } from "../components/FeedbackCard";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#22c55e", "#FFFF00", "#ef4444"]; // verde, cinza, vermelho
const pieData = [
  { name: "Positivos", value: 120 },
  { name: "Neutros", value: 45 },
  { name: "Negativos", value: 30 },
];

interface FeedbackDataProps {
  id: string;
  comment: string;
  avatar_url: string;
  createdAt: string;
  feedbackTitle: string;
  userRating: number;
  likesCount: number;

  user: {
    name: string;
    photo: string;
  };
}
export default function Dashboard() {
  const { isPending, error, data } = useQuery<FeedbackDataProps[]>({
    queryKey: ["feedbacks"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`).then((res) =>
        res.json()
      ),
  });
  return (
    <div className=" flex flex-col min-h-screen mr-5 my-3 bg-slate-200 ">
      <div className="pt-9  px-4  gap-3 flex flex-col ">
        <h1 className="text-[32px] font-bold text-black">
          Gráfico dos feedbacks
        </h1>
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
        <div className="pt-20 flex-col">
          <h1 className="text-[32px] font-bold text-black">
            Top 5 Feedback mais votados
          </h1>
        </div>
        <div className="pt-4  gap-3 flex flex-col ">
          {data?.map((item) => (
            <FeedbackCard
              key={item.id}
              comment={item.comment}
              avatar_url={item.user.photo} // substitua se tiver avatar no backend
              created_at={item.createdAt}
              title={item.feedbackTitle}
              rating={item.userRating}
              likesCount={item.likesCount}
              author={item.user.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
