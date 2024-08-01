"use client";
import { Button } from "@/components/common";
import { Input } from "@/components/common/Forms/Input";
import { Clipboard, Contacts, MenuLines } from "@/components/common/Icons";
import Modal from "@/components/common/Modal";
import ReferralPopup from "@/components/common/Modal/components/ReferralPopup";
import React, { useState } from "react";
import Rewards from "./Rewards";
import FriendList from "./FriendList";
import { selectUserData } from "@/app/redux/slices/userSlice";
import { useSelector } from "react-redux";
import CopyToClipboard from "react-copy-to-clipboard";
import { showToast } from "./Alert";

declare global {
  interface Window {
    Telegram: any;
  }
}
export default function Friends() {
  const [friends, setFriends] = useState(false);
  const [popup, setPopup] = useState(false);
  const [showAlert, setShowAlert] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const user = useSelector(selectUserData);

  const [inviteLink, setInviteLink] = useState(
    `https://t.me/RFC_App_bot?start=${user?.telegramId}`
  );

  const copyToClipboard = async () => {
    // Fallback method using a temporary textarea
    const fallbackCopy = () => {
      const tempTextarea = document.createElement("textarea");
      tempTextarea.value = inviteLink;
      document.body.appendChild(tempTextarea);
      tempTextarea.select();
      try {
        document.execCommand("copy");
        setAlertMessage("Invite link copied to clipboard!");
        setShowAlert(true);
      } catch (fallbackErr) {
        console.error("Fallback error:", fallbackErr);
        setAlertMessage("Failed to copy invite link. Please try again.");
        setShowAlert(true);
      }
      document.body.removeChild(tempTextarea);
    };

    // Attempt to use the Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(inviteLink);
        setAlertMessage("Invite link copied to clipboard!");
        setShowAlert(true);
      } catch (err) {
        console.warn("Clipboard API error, using fallback:", err);
        fallbackCopy();
      }
    } else {
      fallbackCopy();
    }
  };

  const handleInviteClick = () => {
    if (typeof window !== "undefined") {
      if (window.Telegram?.WebApp) {
        const webApp = window.Telegram.WebApp;

        const message = `
        🚀 Dive into the world of RFC mining with this bot! 🌐
        
        💎 Get a RFC token airdrop!
        💸 +600 RFC as a first-time gift
        ⚡️ +2 GH/s mining power boost
        
        Join now and start mining RFC like a pro!
        `.trim(); // Removing leading and trailing whitespace and newlines

        const encodedMessage = encodeURIComponent(message);
        const telegramLink = `https://t.me/share/url?url=https://t.me/RFC_App_bot?start=${user?.telegramId}&text=${encodedMessage}`;
        webApp.openTelegramLink(telegramLink);

        // will be used to copy the link to the bot
        // https://t.me/RFC_App_bot?start=${user?.telegramId}
      }
    }
  };
  return !friends ? (
    <>
      <div className="bg bg-cover w-full rounded-[20px] px-4 py-3 border border-borderColor flex justify-between flex-col gap-3">
        <h1 className="font-bold text-lg text-white">Your Invite Link</h1>
        <div className="relative">
          <Input
            className="!text-left placeholder:!text-left !pr-14 !py-2.5 !rounded-lg"
            placeholder={inviteLink}
            name={""}
            value={inviteLink}
            readOnly
          />
          <CopyToClipboard
            text={inviteLink}
            onCopy={() =>
              showToast("Invite link copied to clipboard!", "success")
            }
          >
            <div className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer">
              <Clipboard className="text-[#B0B0B0] w-6 h-6" />{" "}
              {/* Adjust size and color as needed */}
            </div>
          </CopyToClipboard>
        </div>
      </div>
      <div className="flex items-center gap-2.5 mt-4">
        <Button
          color="info"
          onClick={handleInviteClick}
          className="w-full font-medium !h-12 flex items-center gap-2.5 !rounded-lg"
        >
          <Contacts />
          Invite a friend
        </Button>
        <div className="w-12 h-12 rounded-lg p-2.5 flex items-center justify-center bg-[#1B78E3] text-white">
          <Clipboard className="w-8 h-8" />
        </div>
      </div>

      <>
        <Button
          onClick={() => setFriends(true)}
          className="!rounded-lg font-medium flex items-center gap-2.5 w-full mt-4 !h-12"
        >
          <MenuLines />
          Open Friends List
        </Button>
        <div className="bg bg-cover w-full rounded-[20px] px-5 py-3 border border-borderColor flex flex-col gap-3 mt-4">
          <h2 className="text-white text-lg font-bold">Referral Rewards</h2>
          <Rewards level={1} rfc={100} mh={50} />
          <Rewards level={2} rfc={50} mh={25} />
          <Rewards level={3} rfc={15} mh={5} />
          <Button
            onClick={() => setPopup(true)}
            className="!rounded-[20px] w-full"
          >
            Learn More
          </Button>
        </div>
        <Modal show={popup} hide={() => setPopup(false)} className="w-full">
          <ReferralPopup />
        </Modal>
      </>
    </>
  ) : (
    <FriendList />
  );
}
