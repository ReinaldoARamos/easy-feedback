"use client";

import { useQuery } from "@tanstack/react-query";
import { FeedbackCard } from "./components/FeedbackCard";
import { formatDate } from "./utils/DataConverterFunction";

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
export default function Home() {
  const { isPending, error, data } = useQuery<FeedbackDataProps[]>({
    queryKey: ["feedbacks"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/feedback`).then((res) =>
        res.json()
      ),
  });

  if (isPending) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar feedbacks!</p>;

  return (
    <div className="flex flex-col min-h-screen mr-5 my-3 bg-slate-300">
      <main className="flex-1 pt-9 px-4 gap-3 flex flex-col">
        {data.map((item) => (
          <FeedbackCard
            key={item.id}
            comment={item.comment}
            avatar_url={item.user.photo}
            created_at={`Postado há ${formatDate(item.createdAt)}`}
            title={item.feedbackTitle}
            rating={item.userRating}
            likesCount={item.likesCount}
            author={item.user.name}
          />
        ))}
      </main>

      <div className="flex items-center justify-center gap-1 pb-3 text-black mt-auto">
        <span className="w-10 h-10 bg-slate-500 rounded-full grid place-items-center">
          1
        </span>
      </div>
    </div>
  );
}
