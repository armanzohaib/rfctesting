"use client";
import { Button } from "@/components/common";
import Lightning from "@/components/common/Icons/Lightning";
import ImageComponent from "@/components/common/ImageComponent.tsx";
import Wallet from "./Wallet";
import { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import ClaimPopUp from "@/components/common/Modal/components/ClaimPopUp";
import { BoostIcon, Claim } from "@/components/common/Icons";
import BoostPopup from "@/components/common/Modal/components/BoostPopup";
import {
  selectUserData,
  updateStartMining,
} from "@/app/redux/slices/userSlice";
import { useSelector } from "react-redux";
import { userService } from "@/services/user.service";
import { useDispatch } from "react-redux";

// Define types for state variables
interface User {
  startMining: boolean;
}

export default function Landing() {
  const user = useSelector(selectUserData);
  const dispatch = useDispatch();

  const [mining, setMining] = useState(false);
  const [popup, setPopup] = useState(false);
  const [boost, setBoost] = useState(false);
  const [rfcValue, setRfcValue] = useState(0.0000000001); // Initial value
  const [ghs, setGhs] = useState(2); // Increment value in GH/s
  useEffect(() => {
    if (user) setMining(user?.startMining);
  }, [user]);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (mining) {
      interval = setInterval(() => {
        setRfcValue((prev: any) => prev + ghs * 1e-10);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mining, ghs]);

  const spinWheel = () => {
    console.log("spin");
    const wheel = document.querySelector(".wheel") as HTMLElement;
    const wheelcenter = document.querySelector(".wheelcenter") as HTMLElement;

    // Add the fast-spin animation class
    if (wheel) {
      wheel.style.animation = "fast-spin 0.5s linear infinite";
      wheelcenter.style.animation = "fast-spin 0.5s linear infinite";
      wheelcenter.classList.add("AtCenterImg");

      // Remove the fast-spin animation class after 1 second and revert to normal spin
      setTimeout(() => {
        wheel.style.animation = "rotate 5s linear infinite";
        wheelcenter.style.animation = "none";
        wheelcenter.classList.remove("AtCenterImg");
      }, 500);
    }
  };
  const startMining = async () => {
    try {
      setMining(true);
      const response = await userService.startMining();
      dispatch(updateStartMining());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" flex flex-col items-center justify-center">
      <Wallet />
      <div onClick={spinWheel} className="relative">
        <ImageComponent
          src="/assets/images/fan2.svg"
          figClassName="py-5"
          className={`${mining ? "rotate wheel" : ""}`}
          width={180}
          height={180}
          alt=""
          priority
        />
        <div>
          <ImageComponent
            src="/assets/images/rfc1.svg"
            fill
            figClassName={`${
              mining ? "wheelcenter" : ""
            } h-14 w-14 !absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2`}
            alt=""
          />
        </div>
      </div>
      <h1 className="font-medium text-2xl text-white text-center whitespace-nowrap w-full flex justify-center">
        <span className="flex items-start w-[52%] AtCounter">
          {rfcValue.toFixed(10)}
        </span>{" "}
        RFC
      </h1>
      <p className="flex font-bold text-white items-center pt-2 pb-2">
        {ghs} GH/s
        <span className="text-primary ml-1">
          <Lightning className="w-2.5 h-4" />
        </span>
      </p>
      {mining ? (
        <div className="flex items-center gap-2 w-full">
          <Button
            className="w-full flex gap-2 text-black hover:text-primary"
            onClick={() => {
              setPopup(true);
            }}
          >
            <Claim />
            Claim
          </Button>
          <Button
            color="info"
            className="w-full flex gap-2 text-black hover:text-primary"
            onClick={() => {
              setBoost(true);
            }}
          >
            <BoostIcon />
            Boost
          </Button>
        </div>
      ) : (
        <Button
          onClick={startMining}
          className="w-full flex gap-2 text-black hover:text-primary"
        >
          <Lightning />
          Start Mining
        </Button>
      )}
      <Modal show={popup} hide={() => setPopup(false)} className="w-full">
        <ClaimPopUp />
      </Modal>
      <Modal show={boost} hide={() => setBoost(false)} className="w-full">
        <BoostPopup />
      </Modal>
    </div>
  );
}
