"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Checkbox, Checkbox2 } from "@/components/ui/checkbox";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { Slider, Slider2 } from "@/components/ui/slider";

interface Props {}

const CopyTX = () => {
  const [toggle, setToggle] = useState(false);

  const show = () => {
    setToggle(!toggle ? true : false);
  };
  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
          Input Address
        </Typography>
      </Stack>
      <Stack
        justifyContent="center"
        width="w-full"
        sx="h-[40px]"
      >
        <Input
          type="text"
          placeholder="Address"
          className=" bg-[#0C141F] border-slate-800  focus-none"
        />
      </Stack>
      <Stack width="w-full" justifyContent="between" margin="my-2">
        <Stack alignItems="center" gap={1}>
          <AiOutlineInfoCircle size={10} />
          <div className="text-white text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-normal">
            Use same Trade Settings as copied wallet
          </div>
        </Stack>

        <Checkbox2 color="#FFC107" />
      </Stack>
      <Typography
        color="#FFC107"
        onClick={show}
        className="cursor-pointer text-xs md:text-sm lg:text-sm font-normal text-end w-full my-4 font-['Instrument Sans'] underline leading-tight tracking-tight"
      >
        Edit Trade Settings
      </Typography>

      {toggle && (
        <>
          {" "}
          <Stack width="w-full" justifyContent="between" margin="mb-2">
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Amount
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            width="w-full"
            sx="h-[40px]"
          >
            <Input
              type="text"
              placeholder="Enter Amount"
              className=" bg-[#0C141F] border-slate-800  focus-none"
            />
          </Stack>
          <Stack width="w-full" flexDirection="col" margin="my-2" gap={4}>
            <Stack alignItems="center" gap={1}>
              <div className="text-white text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-normal">
                Use Gas fee:{" "}
                <span className="text-amber-400 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-normal">
                  50% more than
                </span>{" "}
                copied wallet
              </div>
            </Stack>
            <Slider2 defaultValue={[33]} max={100} step={1} className="bg-blue-600" />
          </Stack>{" "}


        </>
      )}
      <Button className="mt-4 bg-green-400 hover:bg-blue-900 hover:border-none">
        Copy Trade
      </Button>
    </Stack>
  );
};

export default CopyTX;
