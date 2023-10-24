
import React, { FC } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent2,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox2 } from "@/components/ui/checkbox";
import { Slider2 } from "@/components/ui/slider";

interface Props {}

const Buy = () => {

  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          Pays
        </Typography>
        <Dialog>
          <DialogTrigger asChild>
            <Typography
              color="#FFC107"
              className="cursor-pointer text-sm font-normal font-['Instrument Sans'] underline leading-tight tracking-tight"
            >
              Settings
            </Typography>
          </DialogTrigger>
          <DialogContent2 className="w-2 bg-[#0C141F] border border-slate-800 p-2">
            <Stack flexDirection="col">
              <Stack
                justifyContent="between"
                height="h-6"
                width="w-full"
                alignItems="center"
              >
                <Typography
                  className="text-sm font-bold font-['Instrument Sans'] leading-tight"
                  color="#0A53BE"
                >
                  Swap Settings
                </Typography>
                <IoIosArrowDown className="" />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                  Use Private Transactions
                </Typography>
                <Checkbox2 defaultChecked color="#FFC107" />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                  Fail-Safe Protection
                </Typography>
                <Checkbox2
                  className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
                />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                  Slippage: 25%
                </Typography>
                <Stack gap={2} alignItems="center">
                  <Typography>Autospillage</Typography>
                  <Checkbox2
                    className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
                  />
                </Stack>
              </Stack>
              <Slider2
                defaultValue={[33]}
                max={100}
                step={1}
                className="my-3"
              />
            </Stack>
          </DialogContent2>
        </Dialog>
      </Stack>
      <Stack
        justifyContent="center"
        width="w-full"
        sx="h-[40px] hidden md:flex lg:flex"
      >
        <Input
          type="text"
          placeholder="Amount"
          className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
        />
        <button
          type="submit"
          className="text-gray-300 text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
        >
          ETH
        </button>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        width="w-full"
        margin="mt-4 mb-1"
      >
        <HiArrowLongDown className="text-center w-7" size={30} />
      </Stack>
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          Receive
        </Typography>
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          <span className="text-neutral-200 text-sm font-normal font-['Instrument Sans'] leading-tight">
            Bal:{" "}
          </span>{" "}
          0.00
        </Typography>
      </Stack>
      <Stack
        justifyContent="center"
        width="w-full"
        sx="h-[40px] hidden md:flex lg:flex"
      >
        <Input
          type="text"
          placeholder="Amount"
          className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
        />
        <button
          type="submit"
          className="text-gray-300 text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
        >
          ETH
        </button>
      </Stack>
      <Button className="mt-4 bg-green-400 hover:bg-blue-900 hover:border-none">
        Auto Buy
      </Button>
    </Stack>
  );
};

export default Buy;
