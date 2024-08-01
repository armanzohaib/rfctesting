"use client";
import { MenuIcon, OpenBot, Reload, TermsOfUse } from "@/components/common/Icons";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export default function DropdownMenu() {
  
  return (
    <div className="inline text-right bg-[#101828]">
      <Menu>
        <MenuButton>
          <MenuIcon />
        </MenuButton>
        <MenuItems
          transition
          anchor="bottom end"
          className="w-[200px] py-3 rounded-md border border-[#38434D] bg-[#101828] text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0 relative z-50"
        >
            <div className="group flex w-full items-center gap-5 py-1.5 px-[30px] rounded-lg hover:bg-white/10 cursor-pointer">
              <OpenBot />
              Open Bot
            </div>
            <div className="group flex w-full items-center gap-5 py-1.5 px-[30px] rounded-lg  hover:bg-white/10 cursor-pointer">
              <Reload />
              Reload Page
            </div>
            <div className="group flex w-full items-center gap-5 py-1.5 px-[30px] whitespace-nowrap rounded-lg  hover:bg-white/10 cursor-pointer">
              <TermsOfUse />
              Terms of Use
            </div>
        </MenuItems>
      </Menu>
    </div>
  );
}