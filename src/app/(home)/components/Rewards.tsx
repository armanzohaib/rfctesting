import ImageComponent from "@/components/common/ImageComponent.tsx";
import React from "react";

interface IProps {
  level: number;
  rfc: number;
  mh: number;
}

const Rewards = ({ level, rfc, mh }: IProps) => {
  return (
    <div className="rounded-[20px] bg-[#1C2534]/60 p-3 flex gap-2.5 justify-between items-center">
      <div className=" flex flex-col gap-2.5 items-center justify-center text-base font-medium">
        <h3 className="text-[#B0B0B0]">Level</h3>
        <h2 className="text-white">{level}</h2>
      </div>
      <div className="bg-[#1C2534] w-full rounded-xl flex gap-2.5 py-2.5 px-[18px] xs1:px-2 justify-between items-center">
        <div className=" flex flex-col gap-2.5 items-center text-base xs1:text-sm font-medium">
          <h3 className="text-primary">{rfc}</h3>
          <h2 className="text-white">RFC</h2>
        </div>
        <ImageComponent
          src="/assets/images/RFC-Coin.svg"
          figClassName=""
          width={38}
          height={43}
          alt=""
        />
      </div>
      <div className="bg-[#1C2534] w-full rounded-xl flex gap-2.5  py-2.5 px-[18px] xs1:px-2 justify-between items-center">
        <div className=" flex flex-col gap-2.5 items-center text-base xs1:text-sm font-medium">
          <h3 className="text-primary">{mh}</h3>
          <h2 className="text-white">MH/s</h2>
        </div>
        <ImageComponent
          src="/assets/images/Lightning.svg"
          figClassName=""
          width={27}
          height={43}
          alt=""
        />
      </div>
    </div>
  );
};

export default Rewards;
