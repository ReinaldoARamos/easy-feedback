"use client";
import { useQuery } from "@tanstack/react-query";
import { FeedbackCard } from "../components/FeedbackCard";

import { formatDate } from "../utils/DataConverterFunction";
import { FeedbackPieChart } from "./components/PieChart";

interface FeedbackDataProps {
  id: string;
  comment: string;
  avatar_url: string;
  createdAt: string;
  feedbackTitle: string;
  userRating: number;
  likesCount: number;
  isLiked: boolean;

  user: {
    name: string;
    photo: string;
  };
}
export default function Dashboard() {
  const { isPending, error, data } = useQuery<FeedbackDataProps[]>({
    queryKey: ["feedbacks"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedbackTopFive`).then((res) =>
        res.json()
      ),
  });
  console.log(data);
  return (
    <div className=" flex flex-col min-h-screen mr-5 my-3 bg-slate-200 ">
      <div className="pt-9  px-4  gap-3 flex flex-col ">
        <h1 className="text-[32px] font-bold text-black">
          Gráfico dos feedbacks
        </h1>
<FeedbackPieChart />
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
              created_at={`Postado há ${formatDate(item.createdAt)}`}
              title={item.feedbackTitle}
              rating={item.userRating}
              likesCount={item.likesCount}
              author={item.user.name}
              id={item.id}
              isLiked={item.isLiked}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
