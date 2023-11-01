"use client";
import React, { useState, FC } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { BiChevronRight, BiChevronDown, BiCopy } from "react-icons/bi";
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
import { AiFillStar } from "react-icons/ai";

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

const TokenInfoMobile: FC<Props> = ({
    data,
    data_2,
    params,
    score,
    aSecurity,
    aToken,
  }) => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const header = data && data_2 ? [
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
    <Stack flexDirection="col" sx="flex md:hidden lg:hidden border-b border-[#212E40] p-2 w-[95%] h-auto mx-auto mb-5">
        <Stack flexDirection="col">
            <Stack alignItems="center" justifyContent="between" sx='mb-3 md:mb-0 lg:mb-0'>
                <Stack alignItems="center" sx="w-1/2">
                    {!open ? (
                        <Typography variant="bold" className='text-base mr-3'> <span className="text-[#0D6EFD]"> Token Details </span> </Typography>) : (
                        <Typography variant="bold" className='text-base mr-3'> <span className="text-[#0D6EFD]"> My Token Details </span> </Typography>
                        )}
                    <Stack sx='w-fit cursor-pointer' onClick={handleOpen}>
                        {!open ? <BiChevronRight className="text-lg text-white font-bold" /> : <BiChevronDown className="text-lg text-white font-bold" />}
                    </Stack>
                </Stack>

                {!open && (
                    <Stack flexDirection="col" sx="rounded-lg border border-[#212E40] px-4 py-2 w-1/2"
                        justifyContent="between"
                        gap={2}
                    >
                        <Stack alignItems="center" justifyContent="between">
                            <Typography
                                color="#6C757D"
                                className="text-sm font-normal font-['Instrument Sans'] leading-normal"
                            >
                                <span className="text-[#6C757D]"> Scam Score: </span>                        
                            </Typography>

                            <Typography
                                color={
                                score >= 70 ? "#1BA97F" : score < 50 ? "#E63E3A" : "#F5CD19"
                                }
                                className="text-center font-bold"
                            >
                                {score}%
                            </Typography>
                        </Stack>
                        <Stack alignItems="center">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Typography
                                        color="#FFC107"
                                        className="cursor-pointer text-xs font-normal font-['Instrument Sans'] underline leading-none tracking-tight"
                                    >
                                        <span className="text-[#FFC107]"> Click to view: </span>
                                    </Typography>
                                </DialogTrigger>
                                <DialogContent2 className="top-[50%] md:top-[47%] lg:top-[47%] left-[50%] md:left-[85%] lg:left-[85%] max-w-[80%] md:max-w-[256px] lg:max-w-[256px] bg-[#0C141F] border border-slate-800 p-1">
                                    <ScamBot
                                        address={data?.baseAddress}
                                        score={score}
                                        aToken={aToken}
                                        aSecurity={aSecurity}
                                    />
                                </DialogContent2>
                            </Dialog>
                        </Stack>
                    </Stack>
                )}
            </Stack>
        
            {open && (
                <>
                    <Stack justifyContent="between" alignItems="center" sx="w-full mb-5">
                        <Stack sx="w-1/2">
                            <Stack gap={2} alignItems="center">
                                <Image
                                width={30}
                                height={30}
                                alt="icon"
                                src={data?.icon !== null ? data?.icon : "/ethereum_icon.svg"}
                                className="rounded-full"
                                />
                                <Stack flexDirection="col" sx="gap-1">
                                    <Stack alignItems="center">
                                        <Typography className="text-white text-xs font-bold font-['Instrument Sans']">
                                            {data && data?.token0Name}
                                        </Typography>{" "}
                                        /{" "}
                                        <Typography className="text-white text-xs font-bold font-['Instrument Sans']">
                                            {data && data?.token1Name}
                                        </Typography>{" "}
                                    </Stack>

                                    <Stack gap={1} alignItems="center">
                                        <span className="text-white text-[10px] font-normal underline">
                                            {data && data?.baseSymbolName && shortenWord(data?.baseSymbolName, 15)}
                                        </span>{" "}
                                        <AiOutlineBell color="#0D6EFD" className="text-lg" />
                                        <Watch id={params.address} tokenPairDetails={data} />
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Stack>
                        {open && (
                            <Stack flexDirection="col" sx="rounded-lg border border-[#212E40] px-4 py-2 w-1/2"
                                justifyContent="between"
                                gap={2}
                            >
                                <Stack alignItems="center" justifyContent="between">
                                    <Typography
                                        color="#6C757D"
                                        className="text-sm font-normal font-['Instrument Sans'] leading-normal"
                                    >
                                        <span className="text-[#6C757D]"> Scam Score: </span>                        
                                    </Typography>

                                    <Typography
                                        color={
                                        score >= 70 ? "#1BA97F" : score < 50 ? "#E63E3A" : "#F5CD19"
                                        }
                                        className="text-center font-bold"
                                    >
                                        {score}%
                                    </Typography>
                                </Stack>
                                <Stack alignItems="center">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Typography
                                                color="#FFC107"
                                                className="cursor-pointer text-xs font-normal font-['Instrument Sans'] underline leading-none tracking-tight"
                                            >
                                                <span className="text-[#FFC107]"> Click to view: </span>
                                            </Typography>
                                        </DialogTrigger>
                                        <DialogContent2 className="top-[50%] md:top-[47%] lg:top-[47%] left-[50%] md:left-[85%] lg:left-[85%] max-w-[80%] md:max-w-[256px] lg:max-w-[256px] bg-[#0C141F] border border-slate-800 p-1">
                                            <ScamBot
                                                address={data?.baseAddress}
                                                score={score}
                                                aToken={aToken}
                                                aSecurity={aSecurity}
                                            />
                                        </DialogContent2>
                                    </Dialog>
                                </Stack>
                            </Stack>
                        )}
                    </Stack>
                
                    <Stack flexDirection="col" sx="flex md:hidden lg:hidden w-full">
                        <div className="grid grid-cols-3 w-full justify-between items-center mb-3 gap-5"> 
                            {header?.filter(val => val.title === "Price")?.map((val, index) => (
                                <Stack key={index} flexDirection="col" sx="w-full" gap={2}>
                                <Typography
                                    variant="normal"
                                    color="#DBDBDC"
                                    className={"text-sm leading-normal"}
                                >
                                    {val?.title}
                                </Typography>
                                <Typography
                                    variant="black"
                                    color="#DBDBDC"
                                    className="text-lg leading-tight"
                                >
                                    {val.title === "Price" ? fixNum2(val?.price, 6, true)  : val?.price}
                                </Typography>
                                <Typography
                                variant="bold"
                                color={val.subPrice ? "#4CA244" : "#d21a1a"}
                                className="text-xs leading-tight"
                                >
                                    {val?.subPrice && val?.subPrice.price}
                                </Typography>
                                </Stack>
                            ))}
                        </div>
                        <div className="grid grid-cols-3 w-full justify-between items-center">
                            {header?.filter(val => val.title !== "Price")?.map((val, index) => (
                                <Stack key={index} sx={`w-full mb-3 ${val.title === "Market Cap" && "pl-0"} ${val.title === "Token Holders" && "pl-2"}`} flexDirection="col">
                                    <Typography
                                        variant="normal"
                                        color="#DBDBDC"
                                        className={`text-xs ${val.title === "Buys (24H)" ? 'text-[#4CA244]' : ''} ${val.title === "Sells (24H)" ? 'text-[#A52A27]' : ''}`}
                                    >
                                        {val?.title}
                                    </Typography>
                                    <Typography
                                        variant="bold"
                                        color="#DBDBDC"
                                        className="text-xs leading-tight"
                                    >
                                        {val.title === "Price" ? fixNum2(val?.price, 6, true)  : val?.price}
                                    </Typography>
                                </Stack>
                            ))}
                        </div>
                </Stack>
                </>
            )}

        </Stack>
    </Stack>
  )
}

export default TokenInfoMobile