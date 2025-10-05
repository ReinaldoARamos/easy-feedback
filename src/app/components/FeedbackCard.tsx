"use client";
import { Clock, Star, ThumbsUpIcon, X } from "lucide-react";
import { Dialog } from "radix-ui";
/* eslint-disable @next/next/no-img-element */

export function FeedbackCard() {
  const texto: string =
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  return (
    <Dialog.Root>
      <div className="text-black   w-full rounded-sm bg-white py-2 px-2">
        <div className="flex gap-2.5 w-full  justify-between items-center ">
          <div className="flex gap-2.5 items-center">
            <img
              width={85}
              height={85}
              alt=""
              src="https://preview.redd.it/neaijti7dns91.png?width=921&format=png&auto=webp&s=f172c0f39bdb89e497786744b06e3567f92d437f"
              className="rounded-md object-cover flex-shrink-0 w-[85px] h-[85px]"
            />

            <div className="flex flex-col gap-1.5 flex-1 max-w-[348px]">
           <div className="flex gap-1">
               <h1 className="text-black font-bold text-[16px]">
                Teste de feedback
              </h1>
               <span className="flex align-text-bottom gap-1 text-xs items-center leading-none">
              <Clock size={12} /> Postado há 3 horas
            </span>
           </div>
              <span className="text-xs break-words">
                {texto.length > 197 ? (
                  <>
                    {texto.slice(0, 197)}{" "}
                    <Dialog.Trigger asChild>
                      <button
                        className="text-xs text-purple-500 font-semibold  hover:cursor-pointer duration-300 transition-all hover:text-purple-400 hover:underline"
                        onClick={() => console.log("Expandir texto")}
                      >
                        ver mais
                      </button>
                    </Dialog.Trigger>
                  </>
                ) : (
                  texto
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-black text-xs">
            <span className="flex gap-1 items-center leading-none">
              <ThumbsUpIcon size={12} /> Curtidas
            </span>
           
            <span className="flex gap-1 items-center leading-none">
              <Star size={12} /> Nota : 10
            </span>
          </div>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 opacity-50 bg-slate-200 data-[state=open]:animate-overlayShow" />
        <Dialog.Content className="fixed left-1/2 bg-slate-500 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none data-[state=open]:animate-contentShow">
          <Dialog.Title className="m-0 text-lg font-bold text-white">
            Teste de feedback
          </Dialog.Title>
          <span className="text-sm">
            Autor: <b>Reinaldo</b>
          </span>

          <div className="mt-6  gap-5 mb-5 break-words  text-md leading-normal ">
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute hover:cursor-pointer  text-red-700 hover:text-500 transition-all duration-300 right-2.5 top-2.5   size-[25px] appearance-none items-center justify-center  focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
