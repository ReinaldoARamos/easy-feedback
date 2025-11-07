"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface DeleteButtonProps {
  id: string;
}

export function DeleteButton({ id }: DeleteButtonProps) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/feedbackDelete?feedbackId=${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) throw new Error("Erro ao deletar feedback");
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
    },
  });

  return (
    <button
      onClick={() => mutation.mutate()}
      className="text-red-600 hover:text-red-800 transition-all"
    >
      🗑️
    </button>
  );
}
