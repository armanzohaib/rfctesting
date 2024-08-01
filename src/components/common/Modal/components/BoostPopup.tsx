import React from "react";
import Button from "../../Button";
import Lightning from "../../Icons/Lightning";
import RFCsm from "../../Icons/RFCsm";
import { Input } from "../../Forms/Input";

type Props = {};

const BoostPopup = (props: Props) => {
  return (
    <div>
      {" "}
      <div className="AtScrollHide">
        <h3 className="font-medium text-2xl text-white text-center ">
          Mining Power Boost
        </h3>
        <p className="text-[#B0B0B0] mt-5 text-center max-w-[270px] mx-auto text-sm tracking-wide !leading-[17px]">
          Here you can rent mining power for 30 days. The more mining power you
          have, the more TON you can mine.
        </p>
        <p className="text-[#B0B0B0] mt-5 text-center max-w-[270px] mx-auto text-sm tracking-wide !leading-[17px]">
          The investment profitability is 4.4928% per day and 134.784% for 40
          days.{" "}
        </p>
        <div className="mt-5 flex justify-center items-center text-primary gap-2">
          <h1 className="h1 font-bold text-white tracking-wider">100 GH/s</h1>
          <Lightning />
        </div>

        <div className="mt-5 pl-14">
          <div className="flex items-center gap-2 text-[#B0B0B0]">
            <p className="">Total Profit: ~13.478</p>
            <RFCsm className="w-[18px] h-[18px]" />
          </div>
          <div className="flex items-center gap-2 mt-5  text-[#B0B0B0]">
            <p className="">Daily Profit: ~0.448</p>
            <RFCsm className="w-[18px] h-[18px]" />
          </div>
        </div>

        <div className="mt-5 text-[#B0B0B0]">
          <Input
            name="input"
            placeholder="10"
            className="placeholder:!text-white font-bold text-base text-white"
            AddIcon={<RFCsm className="w-[30px] h-[29px]" />}
          />
        </div>
        <div className="flex items-center justify-center gap-2 mt-5 text-[#B0B0B0]">
          <p className="">Minimum Amount: 1</p>
          <RFCsm className="w-[18px] h-[18px]" />
        </div>
        <Button className="w-full !rounded-[20px] mt-5">Add</Button>

        <Button className="text-white w-full !rounded-[20px] !bg-[#1C2534] border-none mt-5">
          Back
        </Button>
      </div>
    </div>
  );
};

export default BoostPopup;
