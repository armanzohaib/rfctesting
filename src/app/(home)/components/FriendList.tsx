import Search from "@/components/common/Icons/Search";
import React from "react";

export default function FriendList() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 1</p>
          <h2 className="text-2xl font-medium">0</h2>
        </div>
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 2</p>
          <h2 className="text-2xl font-medium">0</h2>
        </div>
        <div className="bg bg-cover py-3 px-5 w-full flex flex-col items-center justify-center gap-2.5 border-borderColor border rounded-[20px]">
          <p className="text-xs font-medium whitespace-nowrap">Level 3</p>
          <h2 className="text-2xl font-medium">0</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-300px)]">
        <Search />
        <p className="font-normal text-sm text-[#B0B0B0]">
          You have no friends yet.....
        </p>
        <p className="font-normal text-sm text-primary">Go back</p>
      </div>
    </>
  );
}
