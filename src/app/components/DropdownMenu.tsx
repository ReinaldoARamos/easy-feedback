import Link from "next/link";
import { DropdownMenu } from "radix-ui";
import { Home, LayoutDashboard, User, Plus, Menu } from "lucide-react";

export function HamguerguerMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="text-black outline-none block lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="dropdown-content lg:hidden min-w-[220px] rounded-lg bg-slate-400 p-[5px]"
          sideOffset={5}
        >
          <DropdownMenu.Item asChild>
            <Link
              href="/"
              className="group relative flex h-[25px] items-center rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
            >
              Home <Home className="ml-auto pl-5 font-bold" size={40} />
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/dashboard"
              className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
            >
              Dashboard{" "}
              <LayoutDashboard className="ml-auto pl-5 font-bold" size={40} />
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/user"
              className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
            >
              Usuário <User className="ml-auto pl-5 font-bold" size={40} />
            </Link>
          </DropdownMenu.Item>

          <DropdownMenu.Item asChild>
            <Link
              href="/feedbackform"
              className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
            >
              Novo feedback{" "}
              <Plus className="ml-auto pl-5 font-bold" size={40} />
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
