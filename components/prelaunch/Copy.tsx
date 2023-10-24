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
    navigator.clipboard.writeText(`http://localhost:3000?ref=${referral}`);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 100);
  };
  return (
    <Button
      variant="default"
      onClick={() => handleCopy(referral)}
      className="bg-[#052759] hover:bg-[#052759] rounded-lg rounded-l-none py-4 px-5 hover:border-none w-[50%]"
    >
      <MdOutlineContentCopy className="mr-1 text-sm md:text-base lg:text-base text-[#B5B6B6]" />
      <span className="text-[#B5B6B6] text-[8.89px] md:text-base lg:text-base">
        {" "}
        Copy Link{" "}
      </span>
    </Button>
  );
};

export default Copy;
