"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { toast } from "@/components/ui/use-toast";
import { FieldValues, useForm } from "react-hook-form";
import { ClientDefaultSession, TokenPairDetails } from "@/utils/types";
import { useSession } from "next-auth/react";
import BuySettings from "./BuySettings";
import { key, metabotURL, shortenWord } from "@/utils/indexServer";
import { useGaStore } from "@/utils/zustanStore/gasStore";
import { useParams } from "next/navigation";
import { fetchFee } from "@/utils/dataPool";
import { useQuery } from "@tanstack/react-query";
import { getTokenSymbol } from "@/utils/scripts/fetchSymbol";
import { getTokenBalance } from "@/utils/scripts/getTokenBalance";
import { FaGasPump } from "react-icons/fa";
import { getTokenPriceInUSD } from "@/utils/scripts/getPrice";

interface Props {
  tokenData: TokenPairDetails;
  priseUsdEth: number;
  ethBalance: string;
  userBalanc: string | undefined;
}

type Inputs = {
  amount1: string;
  amount2: string;
};

const Sell: FC<Props> = ({
  tokenData,
  priseUsdEth,
  ethBalance,
  userBalanc,
}) => {
  const [activeTab, setActiveTab] = useState(25);

  const { data } = useSession();

  const user: ClientDefaultSession = data as ClientDefaultSession;

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();

  const pairDetail = tokenData;

  const metabotApiKey = `${key}:${user?.botUser?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");
  const [token0balance, setToken0balance] = useState<string>(
    userBalanc as string
  );
  const { gasFee, setGasFee } = useGaStore();
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldFecth, setShouldFecth] = useState<boolean>(false);
  const [tokenName, setTokenName] = useState<string>(pairDetail?.baseSymbol);
  const [tokenAddress, setTokenAddress] = useState<string>(
    pairDetail?.baseAddress
  );
  const ethbalance = ethBalance;
  const buyPower = Number(ethbalance) + gasFee;

  const params = useParams();
  const [tokenPrice, setTokenPrice] = useState(pairDetail?.priceUsd);
  const pair = params.address;
  const rateConversion0to1 = (number: number): number => {
    const rate = pairDetail.oneEthValue * number;

    return rate;
  };
  const oneTokenValue = 1 / pairDetail.oneEthValue;
  const rateConversion1t0 = (number: number): number => {
    const rate = number * oneTokenValue;

    return rate;
  };
  const { data: feeRecall, isRefetching } = useQuery<number | undefined>({
    refetchIntervalInBackground: true,
    refetchInterval: 30 * 1000,
    queryKey: ["fee"],
    queryFn: () =>
      fetchFee(
        Number(inputB).toFixed(6).toString(),
        pair as string,
        pairDetail
      ),
    initialData: 0,
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
    const symbol = await getTokenSymbol(value);
    const tokenPrices = await getTokenPriceInUSD(value);
    setTokenName(symbol);
    setLaden(false);
    setTokenPrice(tokenPrices);
    const userBalanc = await getTokenBalance(
      user?.botUser?.data?.wallet[0],
      value
    );
    setToken0balance(userBalanc as string);
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
      setGasFee(fee ? (fee as number) : 0);
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
      action: "sell",
      walletIndex: 0,
      // paymentToken: pairDetail?.token0Address,
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
        setInputB(twentyFivePercent.toString());
        setInputA(rateConversion0to1(twentyFivePercent).toString());
        break;
      case 50:
        setInputB(fiftyPercent.toString());
        setInputA(rateConversion0to1(fiftyPercent).toString());
        break;
      case 75:
        setInputB(seventyFivePercent.toString());
        setInputA(rateConversion0to1(seventyFivePercent).toString());
        break;
      default:
        break;
    }
  };

  const gasPass = Number(inputB) !== 0  &&
    !isNaN(parseFloat(inputB)) &&
    token0balance > inputB &&
    Number(ethbalance) < gasFee;


  useEffect(() => {
    if (feeRecall !== 0) {
      setGasFee(feeRecall as number);
    }
  }, [feeRecall, setGasFee, shouldFecth]);

  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          <Typography className="my-1 text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
            <span className="text-neutral-200 text-sm font-normal font-['Instrument Sans'] leading-tight">
              Available Bal:{" "}
            </span>{" "}
            <span
              className={
                token0balance < inputB
                  ? "text-red-600"
                  : token0balance === "0.0"
                  ? "text-red-600"
                  : "text-green-500"
              }
            >
              {token0balance && Number(token0balance).toFixed(2)}
              {token0balance === "0" && ".00"}
            </span>
          </Typography>
          Sell
        </Typography>
        <BuySettings />
      </Stack>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px]  md:flex lg:flex"
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
        <Stack justifyContent="between" gap={2}>
          <Button
            disabled={token0balance === "0.0" || token0balance === "0"}
            type="button"
            onClick={() => handleTabClick(25)}
            className={`mt-4 w-full ${
              activeTab === 25 ? "border border-blue-600 " : ""
            } bg-[#161F2C] hover:bg-blue-900 hover:border-none`}
          >
            25%
          </Button>
          <Button
            disabled={token0balance === "0.0" || token0balance === "0"}
            type="button"
            onClick={() => handleTabClick(50)}
            className={`mt-4 w-full ${
              activeTab === 50 ? "border border-blue-600 " : ""
            } bg-[#161F2C] hover:bg-blue-900 hover:border-none`}
          >
            50%
          </Button>
          <Button
            disabled={token0balance === "0.0" || token0balance === "0"}
            type="button"
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
          <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
            Receive
          </Typography>
        </Stack>
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px] md:flex lg:flex"
        >
          <Input
            type="number"
            inputMode="numeric"
            placeholder="Amount"
            value={inputB}
            onChange={handleInputBChange}
            required
            className="rounded-none  bg-[#0C141F] rounded-l-lg  border-slate-800 focus:outline-none"
          />
          <div className="text-gray-300 text-base font-bold rounded-r-lg py-2  px-4 bg-slate-800 transition ease-in-out delay-150 hover:scale-95 hover:bg-[#0B0F16] duration-300">
            AMOUNT
          </div>
        </Stack>
        <Button
          disabled={
            isSubmitting ||
            token0balance === "0.0" ||
            ethBalance === "0" ||
            token0balance < inputB ||
            Number(inputB) === 0 ||
            inputB === ""
          }
          className={` w-full mt-4 ${
            !isNaN(parseFloat(inputB)) && token0balance < inputB
              ? "bg-red-600"
              : inputB !== "0" && token0balance !== "0" && gasPass
              ? "bg-yellow-400"
              : "bg-green-400"
          } hover:bg-blue-900 hover:border-none`}
        >
          {!gasPass &&
             
            !isNaN(parseFloat(inputB)) &&
            (userBalanc as string) < inputB &&
            "Insufficient Funds"}
          {gasPass !== true && (userBalanc as string) > inputB && "Auto Sell"}{isSubmitting && "...."}
          { token0balance !== "0" && gasPass && "Sell Anyways"}
        </Button>
        <Typography color="#EF4444" className="text-xs text-center my-1">
          {inputB !== "0" &&
            gasPass &&
            "Insufficient funds for Gas Fee, transaction might fail"}
        </Typography>
        <Stack
          justifyContent="between"
          alignItems="center"
          sx={isRefetching || loading ? "opacity-30 animate-pulse" : ""}
        >
          <Typography className="text-xs">
            {tokenName}: ${(Number(inputB) * tokenPrice).toFixed(1)}
          </Typography>

          <Typography className="text-xs">
            ETH: $
            {isNaN(parseFloat(inputB))
              ? "0.00"
              : (Number(inputA) * priseUsdEth).toFixed(1)}
          </Typography>
          <Stack
            margin=" mr-1"
            alignItems="center"
            gap={1}
            justifyContent="end"
          >
            <FaGasPump className="text-xs text-center" /> :{" "}
            <Typography className="text-xs">$ {gasFee?.toFixed(2)}</Typography>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Sell;
