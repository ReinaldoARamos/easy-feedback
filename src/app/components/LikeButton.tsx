import { ThumbsUpIcon } from "lucide-react";
import { api } from "../lib/api";

interface LikeButtonProps {
  id: string;

}

export function LikeButton({ id }: LikeButtonProps) {
  async function SubmitLike(id: string) {
    try {
      await api.patch(`/feedbackLikeCounter?id=${id}`);
      console.log("Like registrado");
      

    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  }

  return <ThumbsUpIcon size={12} onClick={() => SubmitLike(id)} />;
}
