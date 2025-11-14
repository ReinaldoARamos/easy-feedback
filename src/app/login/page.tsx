"use client";
import { Github, User } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { data: session } = useSession();
  const route = useRouter()
  return (
    <div className="flex items-center justify-center gap-48  px-5  py-5 lg:justify-normal lg:px-0 lg:py-0 lg:pl-3.5 ">
      {" "}
      <div
        className={
          "ml-5 mt-5 hidden h-screen items-center justify-center rounded-xl  px-60 lg:flex"
        }
        style={{ height: "calc(100vh - 40px)" }}
      ></div>{" "}
      <div className="flex flex-col justify-center ">
        <h1 className="text-2xl font-bold text-black  ">Boas vindas!</h1>
        <span className="pb-10 text-md text-slate-900">
          Faça seu login ou entre como visitante!
        </span>
        <div className="flex flex-col space-y-4">
          <div className="bg-slate-700 w-96 h-96 text-black rounded-lg">
            <div className="h-full flex-col gap-3 flex items-center justify-center w-full rounded-lg px-4">
              <button
                className="text-center flex  gap-2 justify-center items-center bg-slate-100 w-full  py-2 cursor-pointer transition-all duration-300 hover:scale-105 rounded-md hove:bg"
                onClick={() => signIn("github")}
              >
                <Github />
                Login com o github
              </button>
              <button
                className="text-center flex  gap-2 justify-center items-center bg-slate-100 w-full  py-2 cursor-pointer transition-all duration-300 hover:scale-105 rounded-md hove:bg"
                onClick={() => route.push('/')}
              >
                <User />
              Entrar como visitante
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
