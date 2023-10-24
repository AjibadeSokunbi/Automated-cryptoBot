"use client";
import React, { useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import All from "./TX/All";
import Limit from "./TX/Limit";
import CopyTrades from "./TX/CopyTrades";

interface Props {}

const TxTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Stack flexDirection="col" padding="pt-1">
        <Stack gap={4} height="h-[20px]">
          <Typography
            color={activeTab === 0 ? "#FFC107" : "#6C757D"}
            onClick={() => handleTabClick(0)}
            className={`text-sm font-medium  cursor-pointer ${
              activeTab === 0 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            Buy & Sell
          </Typography>
          <Typography
            color={activeTab === 1 ? "#FFC107" : "#6C757D"}
            onClick={() => handleTabClick(1)}
            className={`text-sm font-medium  cursor-pointer ${
              activeTab === 1 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            Limits
          </Typography>
          <Typography
            color={activeTab === 2 ? "#FFC107" : "#6C757D"}
            onClick={() => handleTabClick(2)}
            className={`text-sm font-medium  cursor-pointer ${
              activeTab === 2 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            Copy Trades
          </Typography>
        </Stack>
        {activeTab === 0 && <All/>}
        {activeTab === 1 && <Limit/>}
        {activeTab === 2 && <CopyTrades/>}
      </Stack>
    </>
  );
};

export default TxTab;
