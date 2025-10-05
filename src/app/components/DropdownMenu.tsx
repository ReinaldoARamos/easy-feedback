"use cliente";

import { HamburgerIcon, Menu, User } from "lucide-react";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";
export function HamguerguerMenu() {
  const [bookmarksChecked, setBookmarksChecked] = useState(true);
  const [urlsChecked, setUrlsChecked] = useState(false);
  const [person, setPerson] = useState("pedro");

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="text-black outline-none block lg:hidden "
          aria-label="Customise options"
        >
        <Menu size={24}/>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
      <DropdownMenu.Content
  className="dropdown-content lg:hidden min-w-[220px] rounded-lg bg-slate-400 p-[5px]"
  sideOffset={5}
>
          <DropdownMenu.Item className="group relative flex h-[25px] items-center rounded-[3px] pl-[25px] pr-[5px] text-md leading-none text-white font-bold outline-none">
            New Tab{" "}
           <User className="ml-auto pl-5 font-bold " size={40}/>
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
