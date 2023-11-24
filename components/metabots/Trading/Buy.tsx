"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { type FieldValues, useForm } from "react-hook-form";
import {
  checkScientificNotation,
  key,
  metabotURL,
  shortenWord,
} from "@/utils/indexServer";
import {
  ClientDefaultSession,
  TokenPairDetails,
  feeFetch,
} from "@/utils/types";
import BuySettings from "./BuySettings";
import BuySettingsMobile from "./BuySettingsMobile";
import Link from "next/link";
import { useParams } from "next/navigation";
import { fetchFee } from "@/utils/dataPool";
import { useQuery } from "@tanstack/react-query";
import { useGaStore } from "@/utils/zustanStore/gasStore";
import { useSession } from "next-auth/react";
import { getTokenSymbol } from "@/utils/scripts/fetchSymbol";
import { FaGasPump } from "react-icons/fa";
import { getTokenPriceInUSD } from "@/utils/scripts/getPrice";

type Inputs = {
  amount1: string;
  amount2: string;
};

interface Props {
  tokenData: TokenPairDetails;
  priseUsdEth: number;
  ethBalance: string;
  userBalanc: string | undefined;
}

const Buy: FC<Props> = ({ tokenData, priseUsdEth, ethBalance }) => {
  const pairDetail = tokenData;
  const { gasFee, setGasFee } = useGaStore();
  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");
  const [tokenPrice, setTokenPrice] = useState(pairDetail?.priceUsd);
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldFecth, setShouldFecth] = useState<boolean>(false);

  const ethbalance = ethBalance;

  const params = useParams();
  const pair = params.address;

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const { data } = useSession();

  const user: ClientDefaultSession = data as ClientDefaultSession;

  const metabotApiKey = `${key}:${user?.botUser?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });
  const [tokenName, setTokenName] = useState<string>(pairDetail?.baseSymbol);
  const [tokenAddress, setTokenAddress] = useState<string>(
    pairDetail?.baseAddress
  );

  const preOneValue = tokenPrice / priseUsdEth;
  const oneTokenValue = 1 / preOneValue;
  const rateConversion1t0 = (number: number): number => {
    const rate = number * oneTokenValue;

    return rate;
  };

  const { data: feeRecall, isRefetching } = useQuery<feeFetch>({
    refetchIntervalInBackground: true,
    refetchInterval: 30 * 1000,
    queryKey: ["fee"],
    queryFn: () =>
      fetchFee(
        Number(inputB).toFixed(6).toString(),
        pair as string,
        pairDetail
      ),
    initialData: { feeUsd: 0, feeEth: "0" },
    staleTime: 30 * 1000,
    enabled: inputB !== "0" && !isNaN(parseFloat(inputB)) && shouldFecth,
  });

  let typingTimeout: NodeJS.Timeout | null = null;
  let fetchingTimeout: NodeJS.Timeout | null = null;
  const [laden, setLaden] = useState<boolean>(false);
  const handleInputAChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setLaden(true);
    setTokenAddress(value);
    setTokenPrice(0);
    const symbol = await getTokenSymbol(value);
    const tokenPrices = await getTokenPriceInUSD(value);
    setTokenName(symbol);
    setLaden(false);

    setTokenPrice(tokenPrices);
    setInputA(rateConversion1t0(parseFloat(inputB)).toString());
  };

  const handleInputBChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputB(value);
    setInputA(rateConversion1t0(parseFloat(value)).toString());

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    typingTimeout = setTimeout(async () => {
      typingTimeout = null;
      setLoading(true);
      setShouldFecth(false);
      const fee = await fetchFee(
        Number(value).toFixed(6).toString(),
        pair as string,
        pairDetail
      );
      setGasFee(fee.feeUsd ? fee : { feeUsd: 0, feeEth: "0" });
      setLoading(false);
    }, 1000);

    fetchingTimeout = setTimeout(async () => {
      fetchingTimeout = null;
      setShouldFecth(true);
    }, 30000);
  };

  async function onSubmit(data: FieldValues) {
    const requestBody = JSON.stringify({
      token: tokenAddress,
      amount: Number(inputB).toFixed(6).toString(),
      action: "buy",
      walletIndex: 0,
      // paymentToken: pairDetail.token1Address,
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
            <p className="underline text-red-600">{result?.message}</p>
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
  const buyPower2 = Number(inputB) + gasFee.feeEth;

  const transactionPossibility =
    Number(inputB) !== 0 &&
    inputB !== "" &&
    inputB <= ethbalance &&
    buyPower2 > ethbalance;

  useEffect(() => {
    if (feeRecall.feeUsd !== 0) {
      setGasFee(feeRecall.feeUsd ? feeRecall : { feeUsd: 0, feeEth: "0" });
    }
  }, [feeRecall, setGasFee, shouldFecth]);

  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          Pays
        </Typography>
        <BuySettings />
        <BuySettingsMobile />
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px] md:flex lg:flex"
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
          <div className="text-gray-300 text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
            ETH
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
        {/* <Stack width="w-full" justifyContent="between" margin="mb-2">
          <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
            Receive
          </Typography>
        </Stack> */}
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px] md:flex lg:flex"
        >
          <Input
            type="text"
            placeholder="Token Address"
            aria-controls=""
            required
            value={tokenAddress}
            onChange={handleInputAChange}
            className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800 focus:outline-none"
          />
          <div className="text-gray-300 text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
            {shortenWord(tokenName, 4)}
            {laden && "...."}
          </div>
        </Stack>
        <Button
          disabled={
            isSubmitting ||
            buyPower2.toString() === "0" ||
            ethbalance < inputB ||
            Number(inputB) === 0
          }
          className={` w-full mt-4 ${
            !isNaN(parseFloat(inputB)) && ethbalance < inputB
              ? "bg-red-600"
              : transactionPossibility
              ? "bg-yellow-400"
              : "bg-green-400"
          } hover:bg-blue-900 hover:border-none`}
        >
          {!transactionPossibility &&
            (!isNaN(parseFloat(inputB)) && ethbalance < inputB
              ? "Insufficient Funds"
              : "Auto Buy")}
          {transactionPossibility && "Buy Anyways"}
        </Button>
        <Typography color="#EF4444" className="text-xs text-center my-1">
          {transactionPossibility &&
            "Insufficient funds for Gas Fee, transaction might fail"}
        </Typography>
        <Stack
          justifyContent="between"
          alignItems="center"
          sx={isRefetching || loading ? "opacity-30 animate-pulse" : ""}
        >
          <Typography className="text-xs">
            {tokenName}:
            <span className="ml-1">
              {!isNaN(parseFloat(inputA)) ? Number(inputA).toFixed(1) : "0"}
            </span>
          </Typography>

          <Typography className="text-xs">
            ETH: $
            {isNaN(parseFloat(inputB))
              ? "0.00"
              : (Number(inputB) * priseUsdEth).toFixed(1)}
          </Typography>
          <Stack
            margin=" mr-1"
            alignItems="center"
            gap={1}
            justifyContent="end"
          >
            <FaGasPump className="text-xs text-center" /> :{" "}
            <Typography className="text-xs">
              $ {gasFee?.feeUsd.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Buy;
