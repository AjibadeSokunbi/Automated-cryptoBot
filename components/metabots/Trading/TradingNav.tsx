"use client";
import React, { useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Buy from "./Buy";
import Sell from "./Sell";
import Limit from "./Limit";
import CopyTX from "./CopyTX";
interface Props {}

const TradingNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Stack
        flexDirection="col"
        sx="w-full rounded-lg shadow border border-slate-800 pb-2"
      >
        <Stack
          alignItems="center"
          sx="w-full justify-between h-10 border-b border-slate-800"
        >
          <Typography
            onClick={() => handleTabClick(0)}
            color={activeTab === 0 ? "#0D6EFD" : "#ffff"}
            className={`cursor-pointer text-center h-full py-2 text-white w-full ${
              activeTab === 0 ? "border-r bg-gray-900" : ""
            }  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight`}
          >
            Buy
          </Typography>
          <Typography
            onClick={() => handleTabClick(1)}
            color={activeTab === 1 ? "#0D6EFD" : "#ffff"}
            className={`cursor-pointer text-center h-full py-2 text-white w-full ${
              activeTab === 1 ? "border-r border-l bg-gray-900" : ""
            }  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight`}
          >
            Sell
          </Typography>
          <Typography
            onClick={() => handleTabClick(2)}
            color={activeTab === 2 ? "#0D6EFD" : "#ffff"}
            className={`cursor-pointer text-center h-full py-2 text-white w-full ${
              activeTab === 2 ? "border-r border-l bg-gray-900" : ""
            } border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight`}
          >
            Limit
          </Typography>
          <Typography
            onClick={() => handleTabClick(3)}
            color={activeTab === 3 ? "#0D6EFD" : "#ffff"}
            className={`cursor-pointer text-center h-full py-2 text-white w-full ${
              activeTab === 3 ? "border-l bg-gray-900" : ""
            }  pl-2 border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight`}
          >
            Copy Trade
          </Typography>
        </Stack>
        {activeTab === 0 && <Buy />}
        {activeTab === 1 && <Sell/>}
        {activeTab === 2 && <Limit/>}
        {activeTab === 3 && <CopyTX/>}
      </Stack>
    </>
  );
};

export default TradingNav;
