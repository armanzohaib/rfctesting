import React from "react";
import Button from "../../Button";

type Props = {};

const ClaimPopUp = (props: Props) => {
  return (
    <div className="AtScrollHide">
      <h3 className="font-medium text-2xl text-white max-w-[326px] mx-auto text-center ">
        Claim RFC to Wallet Balance
      </h3>
      <p className="text-[#B0B0B0] mt-5 text-center max-w-[380px] mx-auto text-sm !leading-[17px]">
        Once Claimed, the mined RFC will be deducted from your mining balance
        and will be credited to your wallet balance.
      </p>

      <p className="text-white text-center mt-5 max-w-[273px] mx-auto tracking-wider !leading-[20px]">
        Minimum claim amount is 0.015 RFC
      </p>

      <Button className="w-full !rounded-lg mt-5 !h-12">Claim</Button>

      <Button className="text-white w-full !rounded-lg !bg-[#1C2534] border-none mt-5 !h-12">
        Not Yet
      </Button>
    </div>
  );
};

export default ClaimPopUp;
