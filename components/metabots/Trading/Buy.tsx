"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Input } from "@/components/ui/input";
import { HiArrowLongDown } from "react-icons/hi2";
import { toast } from "@/components/ui/use-toast";
import { checkScientificNotation, shortenWord } from "@/utils/indexServer";
import {
  TokenPairDetails,
  UserSetting,
  feeFetch,
} from "@/utils/types";
import BuySettings from "./BuySettings";
import BuySettingsMobile from "./BuySettingsMobile";
import Link from "next/link";
import { fetchFee } from "@/utils/dataPool";
import { useQuery } from "@tanstack/react-query";
import { useGaStore } from "@/utils/zustanStore/gasStore";
import { getTokenSymbol } from "@/utils/scripts/fetchSymbol";
import { FaGasPump } from "react-icons/fa";
import { getTokenPriceInUSD } from "@/utils/scripts/getPrice";
import { onBuyAction } from "@/utils/formAction/buyAction";
import BuyButton from "./BuyButton";
import { LucideShieldCheck } from "lucide-react";

interface Props {
  tokenData: TokenPairDetails;
  priseUsdEth: number;
  ethBalance: string;
  userBalanc: string | undefined;
  settings: UserSetting;
  params: {
    address: string
  }
}

const Buy: FC<Props> = ({ tokenData, priseUsdEth, ethBalance, settings, params }) => {
  const pairDetail = tokenData;
  const { gasFee, setGasFee } = useGaStore();
  const [inputA, setInputA] = useState<string>("");
  const [inputB, setInputB] = useState<string>("");
  const [tokenPrice, setTokenPrice] = useState(pairDetail?.priceUsd);
  const [loading, setLoading] = useState<boolean>(false);
  const [shouldFecth, setShouldFecth] = useState<boolean>(false);

  const ethbalance = ethBalance;


  const pair = params.address;

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
    if (inputA !== "") {
      setInputA(rateConversion1t0(Number(value)).toFixed(4).toString());
    }
  };

  const handleInputBChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    
    setInputB(value);
    setInputA(rateConversion1t0(Number(value)).toFixed(3).toString());

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

  const buyPower2 = Number(inputB) + Number(gasFee.feeEth);

  const transactionPossibility =
    Number(inputB) !== 0 &&
    inputB !== "" &&
    inputB <= ethbalance &&
    buyPower2 > Number(ethbalance);

  useEffect(() => {
    if (feeRecall.feeUsd !== 0) {
      setGasFee(feeRecall.feeUsd ? feeRecall : { feeUsd: 0, feeEth: "0" });
    }
  }, [feeRecall, setGasFee]);

  const isButtonDisabled =
    buyPower2.toString() === "0" || ethbalance < inputB || Number(inputB) === 0;

  const getButtonColorClass = () => {
    if (!isNaN(parseFloat(inputB)) && ethbalance < inputB) {
      return "bg-red-600";
    } else if (transactionPossibility) {
      return "bg-yellow-400";
    } else {
      return "bg-green-400";
    }
  };

  const getButtonText = () => {
    if (!transactionPossibility) {
      if (!isNaN(parseFloat(inputB)) && ethbalance < inputB) {
        return "Insufficient Funds";
      } else {
        return "Auto Buy";
      }
    } else {
      return "Buy Anyways";
    }
  };

  return (
    <Stack flexDirection="col" padding="px-4 mt-4">
      <Stack width="w-full" justifyContent="between" margin="mb-2">
        <Typography className="text-neutral-200 text-sm font-bold font-['Instrument Sans'] leading-tight">
          Pays
        </Typography>
        <BuySettings settings={settings} params={params} />
        <BuySettingsMobile settings={settings} params={params}  />
      </Stack>
      <form
        action={async (formData) => {
          const result = await onBuyAction(formData, pair as string);
          if (result?.message === "success") {
            toast({
              title: "Purchase Successful!",
              variant: "default",
              description: (
                <Link
                  className="underline text-yellow-600"
                  target="_blank"
                  href={`https://etherscan.io/tx/${result?.txHash}`}
                >
                  Click to view your Transaction Status
                </Link>
              ),
            });
          } else if (result?.message === "error") {
            toast({
              title: "Error",
              variant: "destructive",
              description: (
                <p className="underline text-red-600">{result?.reason}</p>
              ),
            });
          }
        }}
      >
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px] md:flex lg:flex"
        >
          <Input
            type="number"
            name="amount"
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
        <Stack
          justifyContent="center"
          width="w-full"
          sx="h-[40px] md:flex lg:flex"
        >
          <Input
            type="text"
            name="tokenAddress"
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
        <BuyButton
          getButtonColorClass={getButtonColorClass}
          getButtonText={getButtonText}
          isButtonDisabled={isButtonDisabled}
        />
        <Typography color="#EF4444" className="text-xs text-center my-1">
          {transactionPossibility &&
            "Insufficient funds for Gas Fee, transaction might fail"}
        </Typography>
        <Stack alignItems="center" gap={2} margin="mt-2">
          <LucideShieldCheck
            color="#FFC107"
            className="text-[14px]"
            size={15}
          />
          <div className=" text-[#FFC107] text-base font-normal font-['Instrument Sans'] underline leading-tight">
            Failsafe Protection
          </div>
          <div className="px-2.5 py-0.5 bg-[#06C270] rounded-full text-emerald-700 text-xs font-bold border border-emerald-700 justify-center items-center ">
          On
          </div>
        </Stack>

        <Stack
          width={inputB !== "" || !isNaN(parseFloat(inputB)) ?   "w-full flex" : "hidden"}
          flexDirection="col"
          gap={2}
          margin="mt-2"
          sx={isRefetching || loading ? "opacity-30 animate-pulse" : ""}
        >
          <Stack width="full" justifyContent="between">
            <Typography className="text-center text-white text-sm font-semibold font-['Instrument Sans'] leading-tight">
              ETH:
            </Typography>
            <Typography className="text-center text-white text-sm font-normal font-['Instrument Sans'] leading-tight">
              $
              {isNaN(parseFloat(inputB))
                ? "0.00"
                : (Number(inputB) * priseUsdEth).toFixed(1)}
            </Typography>
          </Stack>

          <Stack width="full" justifyContent="between">
            <Typography className="text-center text-white text-sm font-semibold font-['Instrument Sans'] leading-tight">
              {tokenName}:
            </Typography>
            <Typography className="text-center text-white text-sm font-normal font-['Instrument Sans'] leading-tight">
              {!isNaN(parseFloat(inputA)) ? inputA : "0"} {tokenName}
            </Typography>
          </Stack>

          <Stack width="full" justifyContent="between">
            <Typography className="text-sm font-semibold font-['Instrument Sans'] leading-tight flex flex-row gap-1 text-center items-center">
              {" "}
              Slippage:
            </Typography>
            <Typography className="text-center text-white text-sm font-normal font-['Instrument Sans'] leading-tight">
              {settings.slippage}%
            </Typography>
          </Stack>
          <Stack width="full" justifyContent="between">
            <Typography className="text-sm font-semibold font-['Instrument Sans'] leading-tight flex flex-row gap-1 text-center items-center">
              {" "}
              Gass Fee <FaGasPump className="text-xs text-center" /> :
            </Typography>
            <Typography className="text-center text-white text-sm font-normal font-['Instrument Sans'] leading-tight">
              $ {gasFee?.feeUsd.toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export default Buy;
