"use client"
import { Label } from "@/components/ui/label";
import { Switch2 } from "@/components/ui/switch";
import { useSmm } from "@/utils/zustanStore/smm";
import React, { FC, useState } from "react";

interface Props {

}

const Example: FC<Props> = ({}) => {
 const {smm, setSmm} = useSmm()
  const handleChange = () => {
    setSmm(smm ? false : true);
  };

  return (
    <div className="items-center space-x-6">
      <Label
        htmlFor="smm"
        className="text-white text-[10.621px] font-bold font-['Instrument Sans'] leading-3"
      >
        Smart Money Mode
      </Label>

      <Switch2
        name="autoGas"
        defaultChecked={smm}
        onChange={handleChange}
        onClick={handleChange}
        id="smm"
        className="bg-zinc-600 data-[state=checked]:bg-green-700"
      />
    </div>
  );
};

export default Example;
