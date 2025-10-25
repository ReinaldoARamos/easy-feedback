import { formatDistanceToNow } from "date-fns";
import { pt, ptBR } from "date-fns/locale";


export function formatDate(dateString: string): string {
  if (!dateString) return "";

  try {
    return formatDistanceToNow(new Date(dateString), {
      addSuffix: true,
      locale: ptBR,
    });
  } catch {
    return "Data inválida";
  }
}