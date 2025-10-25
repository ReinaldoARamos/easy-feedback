import Link from "next/link";
import {
  Home,
  LayoutDashboard,
  LogOut,
  MessageSquareMore,
  User,
} from "lucide-react";

export function Sidebar() {
  return (
    <div
      className="fixed top-3 left-5 bottom-3 w-64 hidden
                 bg-gradient-to-b from-[rgba(41,33,162,0.5)]
                 via-[rgba(41,33,162,1)]
                 to-[#4B17E8]
                 rounded-lg lg:flex flex-col"
    >
      {/* Topo: Logo */}
      <div className="flex justify-center py-6 items-center gap-1">
        <MessageSquareMore size={24} className="text-[#793A86]" />
        <h1
          className="text-lg bg-gradient-to-r 
                     from-[rgba(33,26,226,1)] 
                     via-[#793A86] 
                     to-[#793A86] 
                     bg-clip-text text-transparent font-bold"
        >
          EasyFeedBack
        </h1>
      </div>

      <div className="flex flex-col flex-1 justify-between items-center pb-7 w-full">
        <div className="flex flex-col justify-center gap-1 items-center w-full ">
          <Link
            href={"/"}
            className="flex items-center w-full max-w-[150px] gap-2 text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 font-normal"
          >
            <Home size={16} className="w-6 flex-shrink-0" />
            <span className="flex-1 text-left">Home</span>
          </Link>
          <Link
            href={"/dashboard"}
            className="flex items-center w-full max-w-[150px] gap-2 text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 font-normal"
          >
            <LayoutDashboard size={16} className="w-6 flex-shrink-0" />
            <span className="flex-1 text-left">Dashboard</span>
          </Link>

          <Link
            href={`user/${1}`}
            className="flex items-center w-full max-w-[150px] gap-2 text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 font-normal"
          >
            <User size={16} className="w-6 flex-shrink-0" />
            <span className="flex-1 text-left">Usuário</span>
          </Link>
        </div>

        <span className="flex items-center w-full max-w-[150px] group  gap-2 text-white hover:cursor-pointer transition-transform duration-300 transform hover:scale-105 font-normal">
          <LogOut
            size={16}
            className="w-6 flex-shrink-0 group-hover:text-red-600 transition-all duration-300"
          />
          <span className="flex-1 text-left">Singout</span>
        </span>
      </div>
    </div>
  );
}
