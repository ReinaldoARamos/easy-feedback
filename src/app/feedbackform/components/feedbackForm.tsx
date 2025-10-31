"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";

export const feedbackSchema = z.object({
  title: z.string(),
  comment: z.string().min(1).max(300),
  rating: z.number().min(0).max(10),
});

type FeedbackData = z.infer<typeof feedbackSchema>;

export function NewFeedbackForm() {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackData>({
    //passando o formData, que tem a tipagem com base no schema
    resolver: zodResolver(feedbackSchema), //instanceamois o useform para colocar o zodresolver passando o schema
    defaultValues: {
      rating: 0,
    },
  });
  function onSubmit(data: FeedbackData) {
    console.log("Form data:", data);
  }



  const rating = watch("rating"); // agora rating existe e atualiza quando clicar

  return (
    <div className=" mr-5 my-4 h-screen bg-slate-200 ">
      <form
        className="text-black pt-9  px-4  gap-7 flex flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-2xl  font-bold">Titulo</h1>
          <input
            {...register("title")}
            placeholder="Digite o título do feedback"
            className="bg-white w-full lg:w-[496px] mt-3  rounded-md p-1 outline-0"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Feedback</h1>
          <textarea
            {...register("comment")}
            placeholder="escreva o feedback"
            className="bg-white w-full lg:w-[496px] resize-none h-28 rounded-md  mt-3 p-1 outline-0"
          />
          {errors.comment && (
            <span className="text-red-500 text-sm">
              {errors.comment.message}
            </span>
          )}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Nota</h1>
          <div className="flex items-center gap-1 text-black pt-3">
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <button
                type="button"
                key={num}
                onClick={() => setValue("rating", num)}
                className={`
                  w-10 h-10 rounded-full grid place-items-center
                  ${
                    num <= rating
                      ? num <= 5
                        ? "bg-red-600"
                        : num <= 7
                        ? "bg-yellow-400"
                        : "bg-green-500"
                      : "bg-slate-400"
                  }
                  hover:cursor-pointer transition-all duration-300 hover:brightness-125
                `}
              >
                {num}
              </button>
            ))}
          </div>
          {errors.rating && (
            <span className="text-red-500 text-sm">
              {errors.rating.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="mt-5 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-500 transition"
        >
          Enviar Feedback
        </button>
      </form>
    </div>
  );
}
