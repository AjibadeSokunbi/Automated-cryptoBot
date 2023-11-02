"use client";
import React, { FC, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { TradeData } from "@/utils/types";
import LatestTrade from "./LatestTrade";
import PriceAlerts from "./PriceAlerts";
import { Switch2 } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Props {
  setSmm: React.Dispatch<React.SetStateAction<boolean>>;
  historyData: TradeData[];
}

const SmmOFF: FC<Props> = ({ ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Stack flexDirection="col" width="w-full" padding="p-2" sx="hidden md:flex lg:flex">
        <Stack width="w-full" justifyContent="between">
          <Stack gap={4} height="h-[29px]">
            <Typography
              color={activeTab === 0 ? "#ffff" : "#6C757D"}
              onClick={() => handleTabClick(0)}
              className={`text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer ${
                activeTab === 0
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Latest Trade
            </Typography>
            <Typography
              color={activeTab === 1 ? "#ffff" : "#6C757D"}
              onClick={() => handleTabClick(1)}
              className={`text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer ${
                activeTab === 1
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Price Alerts
            </Typography>
          </Stack>
          <div className="flex items-center space-x-6">
            <Label
              htmlFor="smm"
              className="text-white text-[10.621px] font-bold font-['Instrument Sans'] leading-3"
            >
              Smart Money Mode
            </Label>
            <Switch2
              onClick={() => props.setSmm(true)}
              id="smm"
              className="bg-zinc-600"
            />
          </div>
        </Stack>

        {activeTab === 0 && (
          <>
            <LatestTrade   historyData={props.historyData} />
          </>
        )}
        {activeTab === 1 && (
          <>
            <PriceAlerts />
          </>
        )}
      </Stack>

      <Stack flexDirection="col" sx="w-full flex md:hidden lg:hidden" gap={5}>
        <Stack alignItems="center" gap={3} justifyContent="start">
          <Label
            htmlFor="smm"
            className="text-white text-[10px] md:text-[8px] lg:text-[8px] font-bold font-['Instrument Sans'] leading-3"
          >
            Smart Money Mode
          </Label>
          <Switch2
            onClick={() => props.setSmm(true)}
            id="smm"
            className="bg-zinc-600"
          />
        </Stack>
        <LatestTrade historyData={props.historyData} /> 
      </Stack>
    </>
  );
};

export default SmmOFF;
