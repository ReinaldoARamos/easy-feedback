"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  const capitalize = (str: string) => {
    if (!str) return "Home";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const title = capitalize(pathname.replace("/", "").replace("-", " "));
  console.log(title);

  return (
    <div className="mr-5 flex justify-between items-center bg-slate-200 py-3 px-3 mt-3">
      <h1 className="text-[32px] font-bold text-black">{title}</h1>

      <div className="flex items-center gap-4">
        {title === "Feedbackform" ? (
          <></>
        ) : (
         <>
          <Link
            href={"/feedbackform"}
            className="bg-purple-500 text-white hidden lg:block rounded-lg py-2 px-6 hover:scale-105 transition-transform duration-300 hover:cursor-pointer font-bold"
          >
            Novo Feedback +
          </Link>
          <Link
  href="/feedbackform"
  className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center hover:scale-105 transition-transform duration-300 font-bold"
>
  +
</Link>

         </>
        )}

        <div className="flex items-center gap-3">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwmfjfadySHoUs3-FxWj6ymYxvyYg04xXwBQ&s"
              alt="Imagem do usuário"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-black">Reinaldo Ramos</span>
            <span className="text-xs text-black">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
