"use client";
import { selectUserData } from "@/app/redux/slices/userSlice";
import { Button } from "@/components/common";
import {
  Clipboard,
  Contacts,
  Hash,
  Language,
  RFCsm,
  Support,
  USA,
} from "@/components/common/Icons";
import ImageComponent from "@/components/common/ImageComponent.tsx";
import { getFullName } from "@/utils/fullName";
import {
  DynamicConnectButton,
  DynamicWidget,
} from "@dynamic-labs/sdk-react-core";
import React from "react";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { showToast } from "./Alert";
import CopyToClipboard from "react-copy-to-clipboard";

export default function More() {
  const userData = useSelector(selectUserData);
  const { isConnected } = useAccount({});
  
  const children = (
    <div
      className="w-full flex gap-2 text-black hover:text-primary"
      data-testid="exampleChild"
    >
      Connect
    </div>
  ) as React.ReactElement;
  return (
    <>
      <div className="px-5 py-2">
        <div className="w-full rounded-[20px] p-3 border border-borderColor flex gap-3 justify-between items-center">
          <div className="flex flex-col gap-5 truncate">
            <p className="text-base font-medium">Hello,</p>
            <h2 className="font-medium text-[28px] whitespace-nowrap truncate">
              {getFullName(userData.firstName, userData.lastName)}
            </h2>
          </div>
          <ImageComponent
            src="/assets/images/User.svg"
            figClassName=""
            width={60}
            height={60}
            alt=""
          />
        </div>
      </div>
      <div className="py-3 border-borderColor border-y px-5">
        <DynamicWidget
          variant="modal"
          innerButtonComponent={
            <Button className="AtConnect">Connect Wallet</Button>
          }
          buttonClassName="!bg-primary !text-[#333333] font-bold"
        />
        {/* <DynamicConnectButton>{children}</DynamicConnectButton> */}
      </div>
      <div className="mt-4 px-5 flex flex-col gap-1.5 pb-">
        <div className="flex justify-between bg-[#1C2534] rounded-[20px] py-4 px-4">
          <div className="flex items-center text-white gap-2.5">
            <Hash />
            <h3 className="text-base font-medium">My ID</h3>
          </div>
          <div className="flex items-center gap-2.5 text-[#B0B0B0]">
            <CopyToClipboard
              text={userData?.telegramId}
              onCopy={() => showToast("Successfully copied!")}
            >
              <Clipboard className="text-[#B0B0B0] w-6 h-6" />
            </CopyToClipboard>
            <p className="text-sm font-light">{userData?.telegramId}</p>
          </div>
        </div>
        <div className="flex justify-between bg-[#1C2534] rounded-[20px] py-4 px-4">
          <div className="flex items-center text-white gap-2.5">
            <Language />
            <h2 className="text-base font-medium">Language</h2>
          </div>
          <div className="flex items-center gap-2.5 text-[#B0B0B0]">
            <USA />
            <p className="text-sm font-light">English</p>
          </div>
        </div>
        <div className="flex items-center text-white gap-2.5 bg-[#1C2534] rounded-[20px] py-4 px-4">
          <Contacts />
          <h3 className="text-base font-medium">Invite Friends</h3>
        </div>
        <div className="flex items-center text-white gap-2.5 bg-[#1C2534] rounded-[20px] py-4 px-4">
          <Support />
          <h2 className="text-base font-medium">Contact Support</h2>
        </div>
      </div>
    </>
  );
}
