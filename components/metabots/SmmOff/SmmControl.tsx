"use client";
import { Label } from "@/components/ui/label";
import { Switch2 } from "@/components/ui/switch";
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { useNewStore } from "@/utils/zustanStore/newStore";
interface Props {}

const SmmControl = () => {
  const { setSmm } = useNewStore();
  const click = () => {
    setSmm(true);
    // toast({
    //   title: "UPGRADE YOUR PLAN.",
    //   description: (
    //     <p className="hidden md:flex lg:flex text-white">
    //       This feature is only available for paid users ☹️
    //     </p>
    //   ),
    //   variant: "destructive",
    // });
  };

  return (
    <div className="flex items-center space-x-6">
      <Label
        htmlFor="smm"
        className="text-white text-[10.621px] font-bold font-['Instrument Sans'] leading-3"
      >
        Smart Money Mode
      </Label>
      <Switch2
        checked={false}
        onClick={click}
        id="smm"
        className="bg-zinc-600"
      />
    </div>
  );
};

export default SmmControl;
