"use client";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


interface FeedbackDataProps {
  id: string;
  userRating: number;
}
export function FeedbackPieChart()  {
  const COLORS = ["#22c55e", "#FFFF00", "#ef4444"]; // verde, cinza, vermelho
  const {data, isLoading, error} =  useQuery<FeedbackDataProps[]>({
    queryKey: ["feedbackpiechatdata"],
    queryFn: async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`);
      const json = await res.json();
      return json.data; // seu backend retorna { data: [...], totalCount }
    }
  })

  if (isLoading) return <p>carregando</p>
    if (error) return <p>Erro ao carregar feedbacks</p>;
    //contador dos feedbacks
const count = {
    positivos: 0,
    negativos: 0,
    neutros: 0
}


 data?.forEach((f) => {
    if (f.userRating >= 8) count.positivos += 1;
    else if (f.userRating >= 6) count.neutros += 1;
    else count.negativos += 1;
  });

  const pieData = [
    {name: "Positivos", value : count.positivos},
     {name: "Neutros", value : count.neutros},
      {name: "Negativos", value : count.negativos}
  ]
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
