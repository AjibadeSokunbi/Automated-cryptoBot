"use client";
import { toast } from "@/components/ui/use-toast";
import React, { FC, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

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
    <MdOutlineContentCopy
      onClick={() => handleCopy(address)}
      className={`${
        isPulsing ? "h-6 w-6" : "w-5 h-5"
      } transition-all cursor-pointer`}
    />
  );
};

export default CopyAddress;
