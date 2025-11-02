import { ThumbsUpIcon } from "lucide-react";
import { api } from "../lib/api";

interface LikeButtonProps {
  id: string;
  onLike?: () => void; // callback para atualizar o front
}

export function LikeButton({ id, onLike }: LikeButtonProps) {
  async function SubmitLike() {
    try {
      await api.patch(`/feedbackLikeCounter?id=${id}`);
      console.log("Like registrado");
      if (onLike) onLike(); //atualiza o estado no dashboard
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  }

  return <ThumbsUpIcon size={12} onClick={SubmitLike} />;
}
