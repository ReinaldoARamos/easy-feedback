/* eslint-disable @next/next/no-img-element */
"use client";

import { FeedbackCard } from "@/app/components/FeedbackCard";
import { formatDate } from "@/app/utils/DataConverterFunction";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

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
export default function User() {
  const params = useParams();
  const userId = params.id as string; // 👈 pega o ID da URL (ex: /user/123)

  const { isPending, error, data } = useQuery<FeedbackDataProps[]>({
    queryKey: ["feedbacks"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user-feedback?userId=${userId}`
      ).then((res) => res.json()),
  });

  return (
    <div className=" mr-5  flex flex-col min-h-screen  my-3  bg-slate-200 ">
      <div className="pt-9  px-4  gap-3 flex flex-col ">
        <h1 className="text-[32px] font-bold text-black">Reinaldo Ramos</h1>

        <img
          width={264}
          height={264}
          alt=""
          src="https://preview.redd.it/neaijti7dns91.png?width=921&format=png&auto=webp&s=f172c0f39bdb89e497786744b06e3567f92d437f"
          className="rounded-md object-cover flex-shrink-0"
        />
        <div className="pt-20 flex-col">
          <h1 className="text-[32px] font-bold text-black">Meus feedbacks</h1>
        </div>
        <div className="pt-4  gap-3 flex flex-col ">
          {data?.map((item) => {
            return (
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
                      />
            );
          })}
        </div>
      
      </div>
         <div className="flex items-center justify-center gap-1 pb-3 text-black mt-auto">
        <span className="w-10 h-10 bg-slate-500 rounded-full grid place-items-center">
          1
        </span>
      </div>
    </div>
  );
}
