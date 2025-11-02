import { ThumbsUpIcon } from "lucide-react";
import { api } from "../lib/api";

interface RemoveLikeButtonProps {
  id: string;
  onDislike?: () => void; // callback para atualizar o front
}

export function RemoveLikeButton({ id, onDislike }: RemoveLikeButtonProps) {
  async function unSubmitLike() {
    try {
      await api.patch(`/feedbackRemoveLikeCounter?id=${id}`);
      console.log("Like removido");
      if (onDislike) onDislike(); //atualizar estado no dash
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
    }
  }

  return <ThumbsUpIcon fill="blue" size={12} onClick={unSubmitLike} />;
}
