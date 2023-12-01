"use client";
import { toast } from "@/components/ui/use-toast";
import React, { FC, useState } from "react";
import { PiCopySimpleBold } from "react-icons/pi";

interface Props {
  address: string;
}

const CopyAddress: FC<Props> = ({ address }) => {
  const [isPulsing, setIsPulsing] = useState(false);
  const handleCopy = (address: string) => {
    toast({
      title: "Copied to clipboard",
      variant: "copied",
    });
    navigator.clipboard.writeText(address);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 100);
  };
  return (
    <PiCopySimpleBold
      onClick={() => handleCopy(address)}
      className={`${
        isPulsing ? "h-5 w-5" : "w-4 h-4"
      } transition-all cursor-pointer`}
    />
  );
};

export default CopyAddress;
