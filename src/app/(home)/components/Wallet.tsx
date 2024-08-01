"use client";
import { RFC, WalletIcon } from "@/components/common/Icons";
import Modal from "@/components/common/Modal";
import WalletPopup from "@/components/common/Modal/components/WalletPopup";
import React, { useEffect, useState } from "react";
// import WebApp from "@twa-dev/sdk";
import { HttpService } from "@/services/base.service";
import { authService } from "@/services/auth.telegram";
import { useDispatch, useSelector } from "react-redux";
import { loginUpdate, selectUserData } from "@/app/redux/slices/userSlice";

declare global {
  interface Window {
    Telegram: any;
  }
}

export default function Wallet() {
  const [popup, setPopup] = useState(false);
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.Telegram.WebApp.initData && !user) {
        fetchUser(window.Telegram.WebApp.initData);
      }
    }
  }, []);

  /**
   * authorize user from telegram using out backend
   * @param userData
   */
  const fetchUser = async (userData: any) => {
    try {
      const user = await authService.authenticateUser({ userData });
      if (user?.data.success) {
        dispatch(loginUpdate(user?.data.user));
        if (user?.data.user.access_token)
          HttpService.setToken(user?.data.user.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full bg bg-cover rounded-[20px] pl-2 py-3 pr-6 border border-borderColor flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <RFC />
          <div className="flex flex-col gap-2.5">
            <p className="text-xs text-white font-medium">Balance</p>
            <h2 className="text-2xl font-medium ">0 RFC</h2>
          </div>
        </div>
        <div
          className=""
          onClick={() => {
            setPopup(true);
          }}
        >
          <WalletIcon />
        </div>
      </div>
      <Modal show={popup} hide={() => setPopup(false)} className="!max-w-lg">
        <WalletPopup />
      </Modal>
    </>
  );
}
