import { Trash } from "lucide-react"

interface DeleteButtonProps{
    id: string
}
export function DeleteButton({id} : DeleteButtonProps) {
    function testeDelete(id:string) {
    console.log("teste " + id) 
  }
    return (
          <button className="flex gap-1  transition-all duration-300 items-center hover:cursor-pointer hover:text-red-500 leading-none">
              <Trash   onClick={() => testeDelete(id)} size={12} />
            </button>
    )
}