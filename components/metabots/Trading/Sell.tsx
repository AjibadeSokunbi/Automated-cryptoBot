"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent2, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox2 } from "@/components/ui/checkbox";
import { Slider2 } from "@/components/ui/slider";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { useNewStore } from "@/utils/zustanStore/newStore";
import { FieldValues, useForm } from "react-hook-form";
import { ClientDefaultSession, TokenBalance } from "@/utils/types";
import { useSession } from "next-auth/react";
import BuySettings from "./BuySettings";
import {
  checkScientificNotation,
  findTokenBalance,
  findTokenBalanceS,
} from "@/utils/indexServer";

interface Props {
  rate0to1: number;
  rate1to0: number;
  balances: TokenBalance[];
}

type Inputs = {
  amount1: string;
  amount2: string;
};

const Sell: FC<Props> = ({ rate0to1, rate1to0, balances }) => {
  const [activeTab, setActiveTab] = useState(25);

  const { data } = useSession();

  const user: ClientDefaultSession = data as ClientDefaultSession;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<Inputs>();

  const { pairDetail } = useNewStore();

  const token0balance = findTokenBalanceS(balances, pairDetail.token0Name);
  const token1balances = findTokenBalanceS(balances, pairDetail.token1Name);
  const ethbalance = findTokenBalanceS(balances, "ETH");

  const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;

  const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;

  const metabotApiKey = `${key}:${user?.botUser?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");

  const rateConversion0to1 = (number: number): number => {
    if (rate0to1) {
      const rate = number * rate0to1;

      return rate;
    } else {
      const rate = pairDetail.oneEthValue * number;

      return rate;
    }
  };

  const rateConversion1t0 = (number: number): number => {
    if (rate1to0) {
      const rate = number * rate1to0;

      return rate;
    } else {
      const rate = number / pairDetail.oneEthValue;

      return rate;
    }
  };

  const handleInputAChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputA(value);
    setInputB(rateConversion0to1(parseFloat(value)).toString());
  };

  const handleInputBChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputB(value);
    setInputA(rateConversion1t0(parseFloat(value)).toString());
  };

  async function onSubmit(data: FieldValues) {
    const requestBody = JSON.stringify({
      token: pairDetail.token1Address,
      amount: Number(inputA).toFixed(6).toString(),
      action: "sell",
      walletIndex: 0,
      paymentToken: pairDetail?.token0Address,
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: requestBody,
    };

    try {
      const response = await fetch(`${metabotURL}trade/`, requestOptions);
      const result = await response.json();
      if (response.status !== 200) {
        return toast({
          title: "Error",
          variant: "destructive",
          description: (
            <p
              className="underline text-red-600"
            >
              {result?.message}
            </p>
          ),
        });
      }
      toast({
        title: "AutoSell Successful!",
        variant: "default",
        description: (
          <Link
            className="underline text-yellow-600"
            target="_blank"
            href={`https://goerli.etherscan.io/tx/${result.data.txnHash}`}
          >
            Click to view your Transaction Status
          </Link>
        ),
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  // Define the percentages for 25%, 50%, and 75%
  const twentyFivePercent = (25 / 100) * parseFloat(token0balance);
  const fiftyPercent = (50 / 100) * parseFloat(token0balance);
  const seventyFivePercent = (75 / 100) * parseFloat(token0balance);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    switch (index) {
      case 25:
        setInputA(twentyFivePercent.toString());
        setInputB(rateConversion0to1(twentyFivePercent).toString());
        break;
      case 50:
        setInputA(fiftyPercent.toString());
        setInputB(rateConversion0to1(fiftyPercent).toString());
        break;
      case 75:
        setInputA(seventyFivePercent.toString());
        setInputB(rateConversion0to1(seventyFivePercent).toString());
        break;
      default:
        break;
    }
  };

  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight mb-2">
        {/* <span className="text-white text-base font-normal font-['Instrument Sans'] leading-normal tracking-tight mr-1">Name:</span>  Metacoin */}
      </Typography>
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
          Sell Amount
          <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
            <span className="text-neutral-200 text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-tight">
              Available Bal:{" "}
            </span>{" "}
            <span
              className={
                inputA && token0balance < inputB
                  ? "text-red-600"
                  : token0balance === "0"
                  ? "text-red-600"
                  : "text-green-500"
              }
            >
              {token0balance}
              {token0balance === "0" && ".00"}
            </span>
          </Typography>
        </Typography>
        <BuySettings />
      </Stack>
      <form action="">
      <Stack
        justifyContent="center"
        width="w-full"
        sx="h-[40px]"
      >
        <Input
          type="number"
          placeholder="Amount"
          inputMode="numeric"
          aria-controls=""
          required
          value={checkScientificNotation(inputA)}
          onChange={handleInputAChange}
          className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800 focus:outline-none"
        />
        <div className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
          {pairDetail?.token0Name}
        </div>
      </Stack>
      <Stack justifyContent="between" gap={2}>
        <Button
          disabled={token0balance === "0"}
          onClick={() => handleTabClick(25)}
          className={`mt-4 w-full ${
            activeTab === 25 ? "border border-blue-600 " : ""
          } bg-[#161F2C] hover:bg-blue-900 hover:border-none`}
        >
          25%
        </Button>
        <Button
          disabled={token0balance === "0"}
          onClick={() => handleTabClick(50)}
          className={`mt-4 w-full ${
            activeTab === 50 ? "border border-blue-600 " : ""
          } bg-[#161F2C] hover:bg-blue-900 hover:border-none`}
        >
          50%
        </Button>
        <Button
          disabled={token0balance === "0"}
          onClick={() => handleTabClick(75)}
          className={`mt-4 w-full ${
            activeTab === 75 ? "border border-blue-600 " : ""
          } bg-[#161F2C] hover:bg-blue-900 hover:border-none`}
        >
          75%
        </Button>
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
          type="number"
          inputMode="numeric"
          placeholder="Amount"
          value={checkScientificNotation(inputB)}
          onChange={handleInputBChange}
          required
          className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800 focus:outline-none"
        />
        <div className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
          {pairDetail?.token1Name}
        </div>
      </Stack>
      <Button
        disabled={
          isSubmitting ||
          (token0balance === "0" && pairDetail.token0Name === "WETH") ||
          token0balance < inputB ||
          token0balance === "0"
        }
        className="mt-4 bg-[#FF3B3B] hover:bg-blue-900 hover:border-none w-full"
      >
        Auto Sell{isSubmitting && "ing...."}
      </Button>
      </form>

    </Stack>
  );
};

export default Sell;
