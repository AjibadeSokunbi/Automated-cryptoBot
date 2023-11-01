import React, { FC } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { AiOutlineBell } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  fixNum,
  fixNum2,
  isScientificNotation,
  shortenWord,
  siNumber,
  toFixedNum,
} from "@/utils/indexServer";
import {
  AddressSecurity,
  TokenPairDetails,
  TokenSecurity,
} from "@/utils/types";
import { Watch } from "@/components/metabots/Watch";
import { Dialog, DialogContent2, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import ScamBot from "@/components/metabots/ScamBot";
import CopyAddress from "@/components/metabots/Copy";
import TokenInfoMobile from "@/components/metabots/TokenInfoMobile";


interface Props {
  data: TokenPairDetails;
  data_2: any;
  params: {
    address: string;
  };
  score: number;
  aSecurity: AddressSecurity | null;
  aToken: TokenSecurity | null;
}

const TokenInfo: FC<Props> = ({
  data,
  data_2,
  params,
  score,
  aSecurity,
  aToken,
}) => {

const price = fixNum(data?.priceUsd, 6, true)

  const header =
    data && data_2
      ? [
          {
            title: "Price",
            price: data?.priceUsd,
            isDollar: true,
            isSiNumber: true,
            subPrice: {
              price: `${toFixedNum(data?._24hPriceChange)}%`,
              isUp: data?.isUp,
            },
          },
          {
            title: "24H Volume(USD)",
            price: `$ ${siNumber(toFixedNum(data?._24h_volume))}`,
            isDollar: true,
            isSiNumber: true,
          },
          {
            title: "Market Cap",
            price: `$ ${siNumber(
              toFixedNum(data?.priceUsd * data?.totalSupply)
            )}`,
            isDollar: true,
            isSiNumber: true,
          },
          {
            title: "Buys (24H)",
            price: `${data?._24h_buys}`,
            isDollar: false,
          },
          {
            title: "Sells (24H)",
            price: `${data?._24h_sells}`,
            isDollar: false,
          },
          {
            title: "Token Holders",
            price: data_2?.result[data?.baseAddress]?.holder_count !== undefined ? data_2?.result[data?.baseAddress]?.holder_count : 0,
            isDollar: false,
            isSiNumber: false,
          },
        ]
      : [];

  return (
    <>
      <Stack sx="flex-col md:flex-row lg:flex-row gap-4 md:gap-2 lg:gap-2 p-0 md:p-4 lg:p-4 mb-5 md:mb-0 lg:mb-0 hidden md:flex lg:flex">
        <Stack flexDirection="col" sx="gap-3 md:gap-0 lg:gap-0">
          <Stack gap={2} alignItems="center">
            <Image
              width={100}
              height={100}
              alt="icon"
              src={data?.icon !== null ? data?.icon : "/ethereum_icon.svg"}
              className="h-12 w-12 rounded-full"
            />
            <Stack flexDirection="col"> 
              <Stack>
                <Typography className="text-white text-xl font-bold font-['Instrument Sans']">
                  {data && data?.token0Name}
                </Typography>{" "}
                <CopyAddress address= {data?.token0Address}/>
                /{" "}
                <Typography className="text-white text-xl font-bold font-['Instrument Sans']">
                  {data && data?.token1Name}
                </Typography>{" "}
              </Stack>

              <Stack gap={1} alignItems="center">
                <span className="text-white text-lg font-normal underline">
                  {data &&
                    data?.baseSymbolName &&
                    shortenWord(data?.baseSymbolName, 15)}
                </span>{" "}
                <AiOutlineBell color="#0D6EFD" className="w-6 h-6" size={18} />
                <Watch id={params.address} tokenPairDetails={data} />
              </Stack>
            </Stack>
          </Stack>
          <Stack
            margin="mt-2"
            sx="text-zinc-400 justify-between md:justify-normal lg:justify-normal items-center"
          >
            <Stack sx="gap-4 md:gap-2 lg:gap-2 items-center"></Stack>
            {/*<Button className="bg-red-950 border border-[#E53535] text-[#F74141] block md:hidden lg:hidden">
              {" "}
              <Typography variant="bold" className="text-xs">
                {" "}
                Scam Check{" "}
              </Typography>{" "}
                  </Button> */}
          </Stack>
        </Stack>
        <Stack sx="hidden md:flex lg:flex ml-6" gap={7}>
          {data && header?.map((val, index) => (
              <Stack key={index} padding="lg:pt-1" flexDirection="col">
                <Typography
                  variant="normal"
                  color="#6C757D"
                  className="text-sm leading-normal"
                >
                  {val?.title}
                </Typography>
                <Stack gap={1}>
                  <Typography
                    variant="bold"
                    className="text-white text-lg font-bold font-['Instrument Sans'] leading-normal"
                  >
                    {val.title === "Price" ? fixNum2(val?.price, 6, true)  : val?.price}
                  </Typography>
                  <Typography
                    variant="bold"
                    color={val.subPrice?.isUp ? "#4CA244" : "#d21a1a"}
                    className="text-base font-semibold font-['Open Sans']"
                  >
                    {val?.subPrice && val?.subPrice.price}
                  </Typography>
                </Stack>
              </Stack>
            ))}
          <Stack
            height="h-1/2"
            background="bg-gray-900"
            padding="p-2 py-6"
            margin="m-1"
            sx="rounded-lg border border-slate-800 bg-gray-900"
            justifyContent="between"
            alignItems="center"
            gap={2}
          >
            <Stack flexDirection="col">
              <Typography
                color="#6C757D"
                className="text-gray-500 text-sm font-normal font-['Instrument Sans'] leading-normal"
              >
                Scam Score:
              </Typography>

              <Dialog>
                <DialogTrigger asChild>
                  <Typography
                    color="#FFC107"
                    className="cursor-pointer text-yellow-400 text-xs font-normal font-['Instrument Sans'] underline leading-none tracking-tight"
                  >
                    Click to view:
                  </Typography>
                </DialogTrigger>
                <DialogContent2 className="top-[47%] left-[85%] max-w-[256px] bg-[#0C141F] border border-slate-800 p-1">
                  <ScamBot
                    address={data?.baseAddress}
                    score={score}
                    aToken={aToken}
                    aSecurity={aSecurity}
                  />
                </DialogContent2>
              </Dialog>
            </Stack>
            <Stack alignItems="center">
              <Typography
                color={
                  score >= 70 ? "#5BE12C" : score < 50 ? "#EA4228" : "#F5CD19"
                }
                className="text-center"
              >
                {score}%
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      
      <TokenInfoMobile 
        data={data as TokenPairDetails}
        data_2={data_2}
        params={params}
        score={score}
        aToken={aToken}
        aSecurity={aSecurity}
      />

    </>
  );
};

export default TokenInfo;
