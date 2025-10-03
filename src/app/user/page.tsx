/* eslint-disable @next/next/no-img-element */
"use client";

import { FeedbackCard } from "@/app/components/FeedbackCard";

export default function User() {
  return (
    <div className=" mr-5 my-4 h-screen bg-slate-200 ">
      <div className="pt-9  px-4  gap-3 flex flex-col ">
        <h1 className="text-[32px] font-bold text-black">Reinaldo Ramos</h1>
        <span className="text-md text-black">Admin</span>

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
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
          <FeedbackCard />
        </div>
        <div className="flex  items-center justify-center gap-1  text-black mt-8">
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            1
          </span>
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            2
          </span>
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            3
          </span>
          <span>...</span>
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            50
          </span>
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            51
          </span>
          <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-slate-400 bg-slate-500 rounded-full grid place-items-center">
            53
          </span>
        </div>
      </div>
    </div>
  );
}
