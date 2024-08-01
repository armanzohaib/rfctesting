import React, { useState } from "react";
import Wallet from "./Wallet";
import { Button } from "@/components/common";
import { BoostIcon, Calender } from "@/components/common/Icons";
import Search from "@/components/common/Icons/Search";
import { cn } from "@/lib/utils";

const Data = [
  {
    id: 1,
    transaction_id: "097967542786",
    amount: "$ 9267.00",
    status: "confirmed",
  },
  {
    id: 2,
    transaction_id: "097967542786",
    amount: "$ 9267.00",
    status: "pending",
  },
  {
    id: 3,
    transaction_id: "097967542786",
    amount: "$ 9267.00",
    status: "canceled",
  },
];

export default function WalletPage() {
  const [transaction, setTransaction] = useState(true);

  return (
    <>
      <Wallet />
      <Button className="text-black hover:text-primary flex items-center gap-2.5 w-full py-5 mt-5">
        <BoostIcon />
        Boost
      </Button>
      <h1 className="text-xl font-bold text-white mt-7">Transaction History</h1>

      {transaction && Data.length > 0 ? (
        Data.map((item) => (
          <div key={item.id}>
            <p className="font-medium text-white text-xs flex items-center gap-2.5 mt-8">
              <Calender />
              15 Jul, 2024
            </p>
            <div className="rounded-xl p-5 bg-[#1C2534] mt-3 flex items-center justify-between">
              <div>
                <h3 className="text-base font-medium text-white">
                  Transferred to Wallet
                </h3>
                <p className="mt-4 text-white/60 text-xs font-medium">
                  Transaction ID
                </p>
                <p className="mt-1.5 text-xs font-medium text-primary">
                  {item.transaction_id}
                </p>
              </div>
              <div className="flex flex-col items-end">
                <h2 className="text-xl font-bold">{item.amount}</h2>
                <div
                  className={cn(
                    item.status == "confirmed"
                      ? "bg-[#00FF9433]/20 text-[#5DC486]"
                      : item.status == "pending"
                      ? "bg-[#FFB80033]/20 text-[#F49A47]"
                      : "bg-[#F54B4B29]/20 text-[#F54B5F]",
                    "mt-3 rounded  text-[10px] font-bold p-1"
                  )}
                >
                  confirmed
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 min-h-[calc(100vh-415px)]">
          <Search />
          <p className="text-sm text-[#B0B0B0]">No Transaction yet...</p>
        </div>
      )}
    </>
  );
}
