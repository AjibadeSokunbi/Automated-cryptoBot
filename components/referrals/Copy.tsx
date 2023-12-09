"use client";
import React, { FC, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineContentCopy } from "react-icons/md";
interface Props {
  referral: string;
}

const Copy: FC<Props> = ({ referral }) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(`https://metadapp.com?ref=${referral}`);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 100);
  };
  return (
    <button
      onClick={() => handleCopy(referral)}
      className="text-center rounded-r-lg py-3 bg-[#052759] w-[150px] md:w-[]"
    >
      <div className="flex items-center justify-center">
        <MdOutlineContentCopy className="mr-1 text-base md:text-xl lg:text-xl text-white" />
        <span className="text-[#B5B6B6] font-black text-xs md:text-base lg:text-base">
          {" "}
          Copy Link{" "}
        </span>
      </div>
    </button>
  );
};

export default Copy;
