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
        <Stack margin="my-3" flexDirection="col">
          <div className="flex items-center justify-end space-x-6 mb-4">
            <Label
              htmlFor="smm"
              className="text-white  text-base font-bold font-['Instrument Sans'] leading-3"
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
              sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 "
            >
              <Typography className="text-white text-base font-bold font-['Instrument Sans'] leading-tight">
                Pool Activity
              </Typography>
              <PoolTab poolData={props.poolData} data={props.data}/>
            </Stack>
            <Stack sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
          <LiveTrades historyData={props.historyData} walletData={props.walletData} />
            </Stack>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export default SMM;
