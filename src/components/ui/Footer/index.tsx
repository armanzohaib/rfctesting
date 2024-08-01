"use client";
import { HomeIcon, More, People, Wallet } from "@/components/common/Icons";
import React, { useState } from "react";

interface IProps {
  selected: string;
  setSelected: any;
}

const FooterCards = [
  {
    icon: (color: string, fill: string) => (
      <HomeIcon color={color} fill={fill} />
    ),
    dec: "Home",
  },
  {
    icon: (color: string, fill: string) => <Wallet color={color} fill={fill} />,
    dec: "Wallet",
  },
  {
    icon: (color: string, fill: string) => <People color={color} fill={fill} />,
    dec: "Friends",
  },
  {
    icon: (color: string, fill: string) => <More color={color} fill={fill} />,
    dec: "More",
  },
];

const Footer = ({ selected, setSelected }: IProps) => {
  return (
    <div className="px-5 sticky py-2.5 bottom-0 bg-[#000F1C]">
      <div className="bg-[#00182F] flex justify-between py-4 px-4 rounded-full">
        {FooterCards.map((item) => (
          <div
            key={item.dec}
            className={`flex justify-center items-center gap-1.5 rounded-full cursor-pointer ${
              selected === item.dec
                ? "border-2 border-[#FBFD02] w-[105px] h-[44px] flex justify-center items-center"
                : ""
            }`}
            onClick={() => setSelected(item.dec)}
          >
            <div>
              {item.icon(
                selected === item.dec ? "#FBFD02" : "#FFFFFF",
                selected === item.dec ? "#FBFD02" : "none"
              )}
            </div>
            <p
              className={`font-medium text-xs ${
                selected === item.dec ? "text-[#FBFD02]" : "hidden"
              }`}
            >
              {item.dec}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
