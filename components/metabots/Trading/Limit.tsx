"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown, HiArrowsUpDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs2";
import {
  Dialog,
  DialogContent2,
  DialogTrigger,
} from "@/components/ui/dialog";
import {  Checkbox2 } from "@/components/ui/checkbox";
import { Slider2 } from "@/components/ui/slider";
import { IoIosArrowDown } from "react-icons/io";
interface Props {}

const Limit = () => {
  return (
    <Stack flexDirection="col" padding="px-2 mt-4">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="w-full px-2 py-5 bg-slate-800 rounded-lg mb-2 text-white text-xs font-bold font-['Instrument Sans'] leading-none">
          <TabsTrigger
            value="buy"
            className="py-2 ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold text-[10px] md:text-xs lg:text-xs w-full"
          >
            Buy Limit Order
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="py-2 ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold text-[10px] md:text-xs lg:text-xs w-full"
          >
            Sell Limit Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="w-full ">
        <Dialog>
          <DialogTrigger asChild>
            <Typography
              color="#FFC107"
              className="cursor-pointer text-end text-sm font-normal font-['Instrument Sans'] underline leading-tight tracking-tight"
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
          <Stack width="w-full" justifyContent="between" sx="mb-2 mt-3 md:mt-0 lg:mt-0">
            <Typography className="w-full text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Buy
            </Typography>
            <Typography className="w-full text-neutral-200 text-start text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Price
            </Typography>
          </Stack>

          <Stack width="w-full" gap={2} justifyContent="between">
            <Stack
              justifyContent="center"
              width="w-full"
              sx="h-[40px]"
            >
              <Input
                type="text"
                placeholder="Amount"
                className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
              />
              <button
                type="submit"
                className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
              >
                ETH
              </button>
            </Stack>
            <Stack
              justifyContent="center"
              width="w-full"
              sx="h-[40px]"
            >
              <Input
                type="text"
                placeholder="Amount"
                className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
              />
              <button
                type="submit"
                className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
              >
                ETH
              </button>
            </Stack>
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
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Receive
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            width="w-full"
            sx="h-[40px]"
          >
            <Input
              type="text"
              placeholder="Amount"
              className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
            />
            <button
              type="submit"
              className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
            >
              ETH
            </button>
          </Stack>
          <Stack width="w-full" justifyContent="between" margin="my-2">
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight mb-2">
              <span className="text-white text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-normal tracking-tight mr-1">
                Name:
              </span>{" "}
              Metacoin
            </Typography>
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              <span className="text-neutral-200 text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-tight">
                Bal:{" "}
              </span>{" "}
              0.00
            </Typography>
          </Stack>
          <Button className="mt-4 w-full bg-green-400 hover:bg-blue-900 hover:border-none">
            Auto Buy
          </Button>
        </TabsContent>

        <TabsContent value="sell">
          {" "}
          <Dialog>
          <DialogTrigger asChild>
            <Typography
              color="#FFC107"
              className="cursor-pointer text-end text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] underline leading-tight tracking-tight"
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
                  className="text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight"
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
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
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
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
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
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
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
          <Stack width="w-full" justifyContent="between" sx="mb-2 mt-3 md:mt-0 lg:mt-0">
            <Typography className="w-full text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Sell
            </Typography>
            <Typography className="w-full text-neutral-200 text-start text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Price
            </Typography>
          </Stack>
          <Stack width="w-full" gap={2} justifyContent="between">
            <Stack
              justifyContent="center"
              width="w-full"
              sx="h-[40px]"
            >
              <Input
                type="text"
                placeholder="Amount"
                className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
              />
              <button
                type="submit"
                className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
              >
                ETH
              </button>
            </Stack>
            <Stack
              justifyContent="center"
              width="w-full"
              sx="h-[40px]"
            >
              <Input
                type="text"
                placeholder="Amount"
                className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
              />
              <button
                type="submit"
                className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
              >
                ETH
              </button>
            </Stack>
          </Stack>
          <Stack
            alignItems="center"
            justifyContent="center"
            width="w-full"
            margin="mt-4 mb-1"
          >
            <HiArrowsUpDown className="text-center w-7 hidden md:block lg:block" size={30} />
            <HiArrowLongDown className="text-center w-7 block md:hidden lg:hidden" size={30} />
          </Stack>
          <Stack width="w-full" justifyContent="between" margin="mb-2">
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              Receive
            </Typography>
          </Stack>
          <Stack
            justifyContent="center"
            width="w-full"
            sx="h-[40px]"
          >
            <Input
              type="text"
              placeholder="Amount"
              className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800  focus-none"
            />
            <button
              type="submit"
              className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300"
            >
              ETH
            </button>
          </Stack>
          <Stack width="w-full" justifyContent="between" margin="my-2">
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight mb-2">
              <span className="text-white text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-normal tracking-tight mr-1">
                Name:
              </span>{" "}
              Metacoin
            </Typography>
            <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
              <span className="text-neutral-200 text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-tight">
                Bal:{" "}
              </span>{" "}
              0.00
            </Typography>
          </Stack>
          <Button className="mt-4 w-full bg-[#FF3B3B] hover:bg-blue-900 hover:border-none">
            Auto Sell
          </Button>
        </TabsContent>
      </Tabs>
    </Stack>
  );
};

export default Limit;
