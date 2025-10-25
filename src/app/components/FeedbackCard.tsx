"use client";
import { Clock, Star, ThumbsUpIcon, X } from "lucide-react";
import { Dialog } from "radix-ui";
/* eslint-disable @next/next/no-img-element */

interface FeecbackCardProps {
  comment: string;
  avatar_url: string;
  created_at: string;
  title: string;
  rating: number;
  likesCount: number;
  author: string;
}
export function FeedbackCard({
  avatar_url,
  created_at,
  comment,
  likesCount,
  rating,
  title,
  author,
}: FeecbackCardProps) {
  return (
    <Dialog.Root>
      <div className="text-black   w-full rounded-sm  bg-white py-2 px-2">
        <div className="flex gap-2.5 w-full md:flex-row flex-col  justify-between md:items-center ">
          <div className="flex gap-2.5 flex-col md:flex-row md:item-center ">
            <img
              width={85}
              height={85}
              alt=""
              src={avatar_url}
              className="rounded-md object-cover flex-shrink-0 w-[85px] h-[85px]"
            />

            <div className="flex flex-col gap-1.5 flex-1 max-w-[348px]">
              <div className="flex gap-1">
                <h1 className="text-black font-bold text-[16px]">{title}</h1>
                <span className="flex align-text-bottom gap-1 lg:text-[10px] text-xs items-center leading-none">
                  <Clock size={12} /> {created_at}
                </span>
              </div>
              <span className="text-xs break-words ">
                {comment.length > 197 ? (
                  <>
                    {comment.slice(0, 197)}{" "}
                    <Dialog.Trigger asChild>
                      <button className="text-xs text-purple-500 font-semibold  hover:cursor-pointer duration-300 transition-all hover:text-purple-400 ">
                        ver mais
                      </button>
                    </Dialog.Trigger>
                  </>
                ) : (
                  comment
                )}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 text-black text-xs">
            <span className="flex gap-1 items-center leading-none">
              <ThumbsUpIcon size={12} /> {likesCount}
            </span>

            <span className="flex gap-1 items-center leading-none">
              <Star size={12} /> Nota : {rating}
            </span>
          </div>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 opacity-50 bg-slate-200" />
        <Dialog.Content className="fixed left-1/2 bg-slate-500 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-gray1 p-[25px] shadow-[var(--shadow-6)] focus:outline-none ">
          <Dialog.Title className="m-0 text-lg font-bold text-white">
            {title}
          </Dialog.Title>
          <span className="text-sm">
            Autor: <b>{author}</b>
          </span>

          <div className="mt-6  gap-5 mb-5 break-words  text-md leading-normal ">
            {comment}
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
