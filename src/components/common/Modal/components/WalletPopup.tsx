"use client";
import React, { useState } from "react";
import { Button } from "../../index";
import { Input } from "../../Forms/Input";

function WalletPopup() {
  return (
    <div className="AtScrollHide ">
      <h3 className="font-medium h2 text-white max-w-[291px] !leading-[30px] mx-auto text-center ">
        Enter your personal Wallet address
      </h3>
      <h5 className="font-normal text-sm text-center text-[#B0B0B0] mt-7 max-w-[291px] !leading-4">
        This amount will be sen to the RFC compatible wallet address
      </h5>
      <p className="text-white mt-7 text-center">
        Minimum send amount is 0.35 RFC
      </p>
      <Input placeholder="Your Wallet address" name={""} className="mt-5"/>
      <div className="mt-5">
        <Input
          name="input"
          placeholder="Amount"
          AddIcon={<p className="text-[#FBFD02]">MAX</p>}
        />
      </div>

      <div className="mt-5">
        <p className="text-[#888F95] text-center text-sm">Network Fee: 0 RFC</p>
        <h4 className="font-bold text-xl text-[#888F95] text-center mt-5">
          Receive Amount: 0 RFC
        </h4>

        <Button className="text-[#010F1C] w-full !rounded-[20px] opacity-40 mt-7">
          Send
        </Button>

        <Button className="text-white w-full !rounded-[20px] !bg-[#1C2534] !border-none mt-5">
          Not Yet
        </Button>
      </div>
    </div>
  );
}

export default WalletPopup;
