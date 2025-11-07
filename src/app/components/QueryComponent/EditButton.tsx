import { Pen } from "lucide-react";

interface EditButtonProps {
  id: string;
}
export function EditButton({ id }: EditButtonProps) {
  function testeEdit(id: string) {
    console.log("teste " + id);
  }
  return (
    <button className="flex gap-1  transition-all duration-300 items-center hover:cursor-pointer hover:text-red-500 leading-none">
      <Pen onClick={() => testeEdit(id)} size={12} />
    </button>
  );
}
