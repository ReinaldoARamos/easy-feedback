"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FeedbackCard } from "./components/FeedbackCard";
import { formatDate } from "./utils/DataConverterFunction";
import { useAutoAnimate } from "@formkit/auto-animate/react";

interface FeedbackDataProps {
  id: string;
  comment: string;
  avatar_url: string;
  createdAt: string;
  feedbackTitle: string;
  userRating: number;
  likesCount: number;
  isLiked: boolean;
  user: { name: string; photo: string , id: number};
}

export default function Home() {
    const [parent, enableAnimations] = useAutoAnimate({ duration: 300 });
  const [page, setPage] = useState(1); //paginas
  const perPage = 10; //maximo de itens por pagina

  const { data, isLoading, error } = useQuery({
    queryKey: ["feedbacks", page],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/feedback?page=${page}&perPage=${perPage}` //faz a query
      );
    
      return res.json();
    },
    //keepPreviousData: true,
  });
  console.log(data)
  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar feedbacks!</p>;

  const totalPages = Math.ceil(data?.totalCount / perPage); //quantidade total de paginas para o array 

  return (
    <div className="flex flex-col min-h-screen mr-5 my-3 bg-slate-300">
      <main className="flex-1 pt-9 px-4 gap-3 flex flex-col" ref={parent}>
        {data?.data?.map((item: FeedbackDataProps) => (
          <FeedbackCard
            key={item.id}
            comment={item.comment}
            avatar_url={item.user.photo}
            created_at={`Postado há ${formatDate(item.createdAt)}`}
            title={item.feedbackTitle}
            rating={item.userRating}
            likesCount={item.likesCount}
            author={item.user.name}
            id={item.id}
            isLiked={item.isLiked}
             user={{
              id: item.user.id
            }}            
          />
        ))}
      </main>

      {/* Paginação */}
      <div className="flex items-center justify-center gap-2 pb-3 text-black mt-auto">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => ( //array from que monta o array com os icones com base no total de paginas
          <button
            key={num}
            onClick={() => setPage(num)} //ao clicar ele muda o state, que por sua vez muda a chamada da api query
            className={`w-10 h-10 rounded-full grid place-items-center ${
              num === page ? "bg-blue-600 text-white" : "bg-slate-500"
            }`}
          >
            {num}
          </button>
        ))}
      </div>
    </div>
  );
}
