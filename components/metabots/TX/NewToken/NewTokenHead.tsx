"use client";
import React from "react";
import Stack from "../../../custom/Stack";
import { useNewStore } from "@/utils/zustanStore/newStore";
interface Props {}

const NewTokenHead = () => {
  const { isConnected } = useNewStore();
  return (
    <Stack sx="border-none bg-slate-950 w-full mt-1">
      <Stack
        justifyContent="between"
        width="w-full"
        sx="border-none flex justify-between px-2  py-1.5"
      >
        <Stack
          sx={
            !isConnected
              ? "w-7/12 text-xs font-bold leading-none"
              : "w-full text-xs font-bold leading-none"
          }
        >
          Age
        </Stack>
        <Stack
          sx={
            !isConnected
              ? "w-full flex justify-center text-center  text-xs font-bold leading-none"
              : "w-full text-xs font-bold leading-none"
          }
        >
          Token Name
        </Stack>
        {isConnected && (
          <Stack sx="w-full flex justify-center text-xs font-bold leading-none">
            Scam Score
          </Stack>
        )}
        <Stack sx="w-1/2 flex justify-end text-xs font-bold leading-none">
          Price
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NewTokenHead;
