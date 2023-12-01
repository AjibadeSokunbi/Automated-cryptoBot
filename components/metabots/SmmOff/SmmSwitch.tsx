"use client";
import Stack from "@/components/custom/Stack";
import { Switch2 } from "@/components/ui/switch";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";

interface Props {
  smm: boolean;
}

const SmmSwitch: FC<Props> = ({ smm }) => {
  const { pending } = useFormStatus();
  return (
    <Stack flexDirection="row" gap={2} alignItems="center">
     <Switch2
     type="submit"
      aria-disabled={pending}
      name="autoGas"
      defaultChecked={smm}
      id="smm"
      className="bg-zinc-600 data-[state=checked]:bg-green-700"
    />
    { pending &&       <ImSpinner2 className="text-[#18283f] animate-spin " />}
    </Stack>
   
  );
};

export default SmmSwitch;
