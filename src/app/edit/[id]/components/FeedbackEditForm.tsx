"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { api } from "@/app/lib/api";
import { useParams } from "next/navigation";

export const feedbackSchema = z.object({
  id: z.number(),
  title: z.string(),
  comment: z.string().min(1).max(300),
  userRating: z.number().min(1).max(10),
});

type FeedbackData = z.infer<typeof feedbackSchema>;

export function EditFeedbackForm() {
      const params = useParams(); // parametro da url
  const id = Number(params.id); // convertendo o id pra numero pra nao dar erro de tipagem
  async function onSubmit(data: FeedbackData) {
    try {
      await api.patch(`/feedbackEditFeedback?id=${id}`, {
        title: data.title,
        comment: data.comment,
        userRating: data.userRating,
        userId: 1, //id defaultr pra nao dar ruim no banco
      });

      console.log("Feedback cadastrado com sucesso!");
    } catch (err) {
      console.error(" Erro ao cadastrar:", err);
    }
    setValue("comment", "");
    setValue("title", "");
    setValue("userRating", 0);
  }

  const {
    register,
    setValue,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FeedbackData>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      userRating: 0,
      id: 1,
    },
  });

  const rating = watch("userRating");

  return (
    <div className="mr-5 my-4 h-screen bg-slate-200">
      <form
        className="text-black pt-9 px-4 gap-7 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h1 className="text-2xl font-bold">Título</h1>
          <input
            {...register("title")}
            placeholder="Digite o título do feedback"
            className="bg-white w-full lg:w-[496px] mt-3 rounded-md p-1 outline-0"
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>

        <div>
          <h1 className="text-2xl font-bold">Feedback</h1>
          <textarea
            {...register("comment")}
            placeholder="Escreva o feedback"
            className="bg-white w-full lg:w-[496px] resize-none h-28 rounded-md mt-3 p-1 outline-0"
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
                onClick={() => setValue("userRating", num)}
                className={`w-10 h-10 rounded-full grid place-items-center ${
                  num <= rating
                    ? num <= 5
                      ? "bg-red-600"
                      : num <= 7
                      ? "bg-yellow-400"
                      : "bg-green-500"
                    : "bg-slate-400"
                } hover:cursor-pointer transition-all duration-300 hover:brightness-125`}
              >
                {num}
              </button>
            ))}
          </div>
          {errors.userRating && (
            <span className="text-red-500 text-sm">
              {errors.userRating.message}
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
