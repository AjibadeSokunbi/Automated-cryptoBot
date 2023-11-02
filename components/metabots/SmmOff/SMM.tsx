"use client";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Label } from "@/components/ui/label";
import { Switch, Switch3 } from "@/components/ui/switch";
import { PoolActivityData, TokenPairDetails, TradeData, WalletDatas } from "@/utils/types";
import React, { FC, useEffect, useState } from "react";
import LiveTrades from "./LiveTrades";
import PoolTab from "./Pool/PoolTab";
import SmmOFF from "./SmmOFF";
import { useNewStore } from "@/utils/zustanStore/newStore";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Props {
  poolData: PoolActivityData[];
  data: TokenPairDetails
  historyData: TradeData[]
  walletData: WalletDatas[]
}

const SMM: FC<Props> = ({...props}) => {

  const [smm, setSmm] = useState(false);
  const { addPairDetails } = useNewStore();

  useEffect(() => {
    addPairDetails(props.data)
  }, [addPairDetails, props.data]);
  return (
    <>
      {" "}
      {!smm ? (
        <Stack sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800">
          <SmmOFF setSmm={setSmm} historyData={props.historyData} />
        </Stack>
      ) : (
        <>
          <Stack margin="my-3" flexDirection="col" sx="hidden md:flex lg:flex">
            <div className="flex items-center md:justify-end lg:justify-end md:space-x-6 lg:space-x-6 md:mb-4 lg:mb-4 gap-3 md:gap-0 lg:gap-0">
              <Label
                htmlFor="smm"
                className="text-white text-xs md:text-base lg:text-base font-bold font-['Instrument Sans'] leading-3"
              >
                Smart Money Mode
              </Label>
              <Switch3
                onClick={() => setSmm(false)}
                checked
                id="smm"
                className="bg-zinc-600"
              />
            </div>
            <Stack justifyContent="between" gap={7}>
              <Stack
                flexDirection="col"
                sx="w-full h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 "
              >
                <Typography className="text-white text-base font-bold font-['Instrument Sans'] leading-tight">
                  Pool Activity
                </Typography>
                <PoolTab poolData={props.poolData} data={props.data}/>
              </Stack>
              <Stack sx="w-full h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
                <LiveTrades historyData={props.historyData} walletData={props.walletData} />
              </Stack>
            </Stack>
          </Stack>

          <Stack flexDirection="col" sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 block md:hidden lg:hidden">
            <div className="flex items-center md:justify-end lg:justify-end md:space-x-6 lg:space-x-6 md:mb-4 lg:mb-4 gap-3">
              <Label
                htmlFor="smm"
                className="text-white text-[8px] md:text-base lg:text-base font-bold font-['Instrument Sans'] leading-3"
              >
                Smart Money Mode 
              </Label>
              <Switch3
                onClick={() => setSmm(false)}
                checked
                id="smm"
                className="bg-zinc-600"
              />
            </div>
            <Tabs defaultValue="liveTrade" className="w-full mt-5 overflow-x-hidden">
              <TabsList className='px-1 w-full mx-auto flex justify-center items-center bg-[#0C141F]'>
                <TabsTrigger value="liveTrade" className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}>    
                    Live Trade
                </TabsTrigger>
                <TabsTrigger value="poolActivity" className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}>
                    Pool Activity
                </TabsTrigger>
              </TabsList>

              <TabsContent value="liveTrade" className="pt-5">
                <LiveTrades historyData={props.historyData} walletData={props.walletData} />
              </TabsContent>

              <TabsContent value="poolActivity" className="pt-5">
                <PoolTab poolData={props.poolData} data={props.data}/>
              </TabsContent>
            </Tabs>
          </Stack>
        </>
      )}
    </>
  );
};

export default SMM;
