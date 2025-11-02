import { ThumbsUpIcon } from "lucide-react";
import { api } from "../lib/api";

interface LikeButtonProps {
  id: string;
}

export function RemoveLikeButton({ id }: LikeButtonProps) {
  async function unSubmitLike(id: string) {
    try {
      await api.patch(`/feedbackRemoveLikeCounter?id=${id}`);
      console.log("Like removido");
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  }

  return (
    <ThumbsUpIcon fill="blue" size={12} onClick={() => unSubmitLike(id)} />
  );
}
