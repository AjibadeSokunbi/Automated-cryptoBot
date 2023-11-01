"use client";
import React, { FC, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import PoolActivity from "./All";
import { PoolActivityData, TokenPairDetails } from "@/utils/types";
import Remove from "./Removes";
import Adds from "./Adds";

interface Props {
  poolData: PoolActivityData[];
  data: TokenPairDetails;
}

const PoolTab: FC<Props> = ({ ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <>
      <Stack flexDirection="col" padding="pt-1" sx="mt-0 md:mt-4 lg:mt-4">
        <Stack gap={4} height="h-[20px]">
          <Typography
            color={activeTab === 0 ? "#FFC107" : "#ffff"}
            onClick={() => handleTabClick(0)}
            className={`text-xs md:text-sm lg:text-sm font-bold cursor-pointer ${
              activeTab === 0 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            All
          </Typography>
          <Typography
            color={activeTab === 1 ? "#FFC107" : "#ffff"}
            onClick={() => handleTabClick(1)}
            className={`text-xs md:text-sm lg:text-sm font-bold cursor-pointer ${
              activeTab === 1 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            Adds
          </Typography>
          <Typography
            color={activeTab === 2 ? "#FFC107" : "#ffff"}
            onClick={() => handleTabClick(2)}
            className={`text-xs md:text-sm lg:text-sm font-bold cursor-pointer ${
              activeTab === 2 ? " border-b-2 border-[#FFC107]" : ""
            }`}
          >
            Removes
          </Typography>
        </Stack>
        {activeTab === 0 && (
          <PoolActivity poolData={props.poolData} data={props.data} />
        )}
        {activeTab === 1 && (
          <Adds
            poolData={props.poolData?.filter((val) => val.type === "dec_liq")}
            data={props.data}
          />
        )}
        {activeTab === 2 && (
          <Remove
            poolData={props.poolData?.filter((val) => val.type === "inc_liq")}
            data={props.data}
          />
        )}
      </Stack>
    </>
  );
};

export default PoolTab;
