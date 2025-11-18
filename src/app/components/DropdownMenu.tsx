import Link from "next/link";
import { DropdownMenu } from "radix-ui";
import { Home, LayoutDashboard, User, Plus, Menu, LogOut, LogIn } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export function HamguerguerMenu() {
  const { data: session } = useSession();
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
              href={`user/${session?.user.id}`}
              className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
            >
              Usuário <User className="ml-auto pl-5 font-bold" size={40} />
            </Link>
          </DropdownMenu.Item>

          {!session ? (
            <></>
          ) : (
            <DropdownMenu.Item asChild>
              <Link
                href="/feedbackform"
                className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
              >
                Novo feedback{" "}
                <Plus className="ml-auto pl-5 font-bold" size={40} />
              </Link>
            </DropdownMenu.Item>
          )}

            {!session ? (
           <DropdownMenu.Item asChild>
              <Link
                href="/login"
                className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
              >
              Login
                <LogIn className="ml-auto pl-5 font-bold" size={40} />
              </Link>
            </DropdownMenu.Item>
          ) : (
            <DropdownMenu.Item asChild>
              <div
               onClick={() => signOut()}
                className="group relative flex h-[25px] items-center mt-0.5 rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none"
              >
               Sair
                <LogOut className="ml-auto pl-5 font-bold" size={40} />
              </div>
            </DropdownMenu.Item>
          )}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
