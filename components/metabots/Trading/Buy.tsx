"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { type FieldValues, useForm } from "react-hook-form";
import { useNewStore } from "@/utils/zustanStore/newStore";
import {
  checkScientificNotation,
  findTokenBalance,
  findTokenBalanceS,
  shortenWord,
} from "@/utils/indexServer";
import { useSession } from "next-auth/react";
import {
  ClientDefaultSession,
  TokenBalance,
  TokenPairDetails,
} from "@/utils/types";
import BuySettings from "./BuySettings";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type Inputs = {
  amount1: string;
  amount2: string;
};

interface Props {
  rate0to1: number;
  rate1to0: number;
  tokenData: TokenPairDetails;
  balances: TokenBalance[];
}

const Buy: FC<Props> = ({ rate0to1, rate1to0, tokenData, balances }) => {
  const { pairDetail } = useNewStore();


  const token1balances = findTokenBalanceS(balances, pairDetail.token1Name);
  const ethbalance = findTokenBalanceS(balances, "ETH");

  const { data } = useSession();

  const user: ClientDefaultSession = data as ClientDefaultSession;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const { addPairDetails } = useNewStore();

  useEffect(() => {
    if (!pairDetail) {
      addPairDetails(tokenData);
    }
  }, [addPairDetails, pairDetail, tokenData]);

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
      token: pairDetail.token0Address,
      amount: Number(inputB).toFixed(6).toString(),
      action: "buy",
      walletIndex: 0,
      paymentToken:
        token1balances < inputB && pairDetail.token1Name === "WETH"
          ? undefined
          : pairDetail.token1Address,
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
        title: "Purchase Successful!",
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
  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Stack flexDirection="col">
          <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight mb-3 md:mb-0 lg:mb-0">
            Pay
          </Typography>
          <Typography className="text-neutral-200 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight">
            <span className="text-neutral-200 text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-tight">
              Available Bal:{" "}
            </span>{" "}
            <span className={inputB && token1balances < inputB ? "text-red-600" : token1balances === "0" ? "text-red-600" :  "text-green-500"}>{token1balances}
            {token1balances === "0" && ".00"}</span> 
          </Typography>
        </Stack>
        <BuySettings />
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          justifyContent="center"
          alignItems="center"
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
          <div className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-3 md:py-2 lg:py-2 px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
            {pairDetail?.token1Name}
          </div>
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
          alignItems="center"
          width="w-full"
          sx="h-[40px] mb-3 md:mb-0 lg:mb-0"
        >
          <Input
            type="number"
            placeholder="Amount"
            inputMode="numeric"
            aria-controls=""
            required
            value={inputA}
            onChange={handleInputAChange}
            className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800 focus:outline-none"
          />
          <div className="text-gray-300 text-xs md:text-base lg:text-base font-bold rounded-r-lg py-3 md:py-2 lg:py-2 px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
            {pairDetail?.token0Name
              ? shortenWord(pairDetail?.token0Name, 4)
              : ""}
          </div>
        </Stack>
        <Button
          disabled={
            isSubmitting ||
            (token1balances === "0" && pairDetail.quoteSymbol === "WETH" || token1balances < inputB)
          }
          className=" w-full mt-4 bg-green-400 hover:bg-blue-900 hover:border-none"
        >
          Buy{isSubmitting && "...."}
        </Button>
      </form>
    </Stack>
  );
};

export default Buy;
