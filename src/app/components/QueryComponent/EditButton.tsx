"use client";
import { Pen } from "lucide-react";
import { useRouter } from "next/navigation";

interface EditButtonProps {
  id: string;
}

export function EditButton({ id }: EditButtonProps) {
  const router = useRouter();
  return (
    <button className="flex gap-1  transition-all duration-300 items-center hover:cursor-pointer hover:text-blue-500 leading-none">
      <Pen onClick={() => router.push(`/edit/${id}`)} size={12} />
    </button>
  );
}
