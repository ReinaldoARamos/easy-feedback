import Image from "next/image";
import { FeedbackCard } from "./components/FeedbackCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen mr-5 my-3   bg-slate-300">
      <main className="flex-1 pt-9 px-4 gap-3 flex flex-col">
        <FeedbackCard
          feecback=""
          avatar_url=""
          created_at=""
          title=""
          rating={10}
          likesCount={3}
        />
        
      </main>

      <div className="flex items-center justify-center gap-1 text-black mt-auto ">
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
  );
}
