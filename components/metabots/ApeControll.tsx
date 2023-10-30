"use client";
import React, { useEffect, useState } from "react";
import { Switch2 } from "../ui/switch";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { useNewStore } from "@/utils/zustanStore/newStore";
interface Props {}

const ApeControll = () => {
  const { isConnected, setIsConnected } = useNewStore();

  const handleApe = () => {
    setIsConnected(!isConnected ? true : false);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && (
        <Stack alignItems="center" gap={2}>
          <Typography className="text-white text-xs font-bold font-['Instrument Sans'] leading-3">
            Ape Mode
          </Typography>
          <Switch2
            onCheckedChange={handleApe}
            className="data-[state=checked]:bg-green-700"
          />
        </Stack>
      )}
    </>
  );
};

export default ApeControll;
