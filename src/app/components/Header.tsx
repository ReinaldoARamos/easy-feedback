"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { useParams, usePathname } from "next/navigation";
import { HamguerguerMenu } from "./DropdownMenu";
import { useSession } from "next-auth/react";

export function Header() {
  const params = useParams();
  const userId = params.id as string;
  const { data: session } = useSession();
  const pathname = usePathname();

  const capitalize = (str: string) => {
    if (!str) return "Home";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const title = capitalize(pathname.replace("/", "").replace("-", " ")).replace(
    `/${userId}`,
    ""
  );
  const hideHeaderAndSidebar = pathname === "/login";

  return (
    <div
      className={
        hideHeaderAndSidebar
          ? "hidden "
          : "mr-5 flex justify-between items-center bg-slate-200 py-3 px-3 mt-3"
      }
    >
      <div className="flex gap-2 items-center">
        {" "}
        <HamguerguerMenu />
        <h1 className="text-[32px] font-bold text-black">{title}</h1>{" "}
      </div>

      <div className="flex items-center gap-4">
        {title === "Feedbackform" ? (
          <></>
        ) : (
          <>
            {!session ? (
              <></>
            ) : (
              <Link
                href={"/feedbackform"}
                className="bg-purple-500 text-white hidden lg:block rounded-lg py-2 px-6 hover:scale-105 transition-transform duration-300 hover:cursor-pointer font-bold"
              >
                Novo Feedback +
              </Link>
            )}
          </>
        )}

        <div className="flex items-center gap-3">
          {!session ? (
            <Link
              href={"/login"}
              className="bg-purple-500 text-white hidden lg:block rounded-lg py-2 px-6 hover:scale-105 transition-transform duration-300 hover:cursor-pointer font-bold"
            >
              Login
            </Link>
          ) : (
            <div className="w-[60px] h-[60px] rounded-full overflow-hidden">
              <img
                src={
                  session?.user?.image ??
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8BSDMyxsc8n91H1uoyEn9gpZLhzWGelzhUA&s"
                }
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
          )}

          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold text-black">
              {session?.user.name}
            </span>
            <span className="text-xs font-bold text-black">
              {session?.user.id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
