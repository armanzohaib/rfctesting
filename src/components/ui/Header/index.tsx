import React from "react";
import DropdownMenu from "../DropdownMenu/DropDownMenu";

const Header = () => {
  return (
    <div className="px-5 py-5 border-b border-borderColor flex justify-between items-center sticky top-0 z-50 bg-[#000F1C]">
      <div className="flex gap-5 items-center">
        <h1 className="text-xl text-white font-medium">RFC App</h1>
      </div>
      <DropdownMenu/>
    </div>
  );
};

export default Header;
