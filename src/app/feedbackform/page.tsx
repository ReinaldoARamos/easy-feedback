import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Feedback",
  description: "Página do formulário",
};
export default function FeedbackForm() {
  return (
    <div className=" mr-5 my-4 h-screen bg-slate-200 ">
      <form className="text-black pt-9  px-4  gap-7 flex flex-col ">
        <div>
          <h1 className="text-2xl font-bold">Titulo</h1>
          <input
            placeholder="Digite o título do feedback"
            className="bg-white w-[496px] mt-3  rounded-md p-1 outline-0"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Feedback</h1>
          <textarea
            placeholder="escreva o feedback"
            className="bg-white w-[496px]  resize-none h-28 rounded-md  mt-3 p-1 outline-0"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Feedback</h1>
          <div className="flex  items-center  gap-1  text-black pt-3">
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-red-500 bg-red-600 rounded-full grid place-items-center">
              1
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-red-500 bg-red-600 rounded-full grid place-items-center">
              2
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-red-500 bg-red-600 rounded-full grid place-items-center">
              3
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-red-500 bg-red-600 rounded-full grid place-items-center">
              4
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-red-500 bg-red-600 rounded-full grid place-items-center">
              5
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-yellow-300 bg-yellow-400 rounded-full grid place-items-center">
              6
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-yellow-300 bg-yellow-400 rounded-full grid place-items-center">
              7
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-green-400 bg-green-500 rounded-full grid place-items-center">
              8
            </span>
            <span className="w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-green-400 bg-green-500 rounded-full grid place-items-center">
              9
            </span>
            <span className=" w-10 h-10 hover:cursor-pointer transition-all duration-300 hover:bg-green-500 bg-green-600 rounded-full grid place-items-center">
              10
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
