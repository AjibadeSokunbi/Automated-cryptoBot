import { Label } from "@/components/ui/label";
import React, { FC } from "react";
import { Switch2 } from "@/components/ui/switch";
import Link from "next/link";


interface Props {
  params: {
    address: string;
  };
  smm: string;
}

const SmmControl: FC<Props> = ({ smm, params }) => {
  const pair = params.address;

  return (
    <Link href={`${pair}?smm=${smm === "1" ? "0" : "1"}`}>
      <div className="flex items-center space-x-6">
        <Label
          htmlFor="smm"
          className="text-white text-[10.621px] font-bold font-['Instrument Sans'] leading-3"
        >
          Smart Money Mode
        </Label>

        <Switch2
          name="autoGas"
          defaultChecked={smm === "1" ? true : false}
          id="smm"
          className="bg-zinc-600 data-[state=checked]:bg-green-700"
        />
      </div>
    </Link>
  );
};

export default SmmControl;
