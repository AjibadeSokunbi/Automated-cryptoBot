import React, { FC, Suspense } from "react";
import Stack from "@/components/custom/Stack";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tab3";
import LatestFetch from "./LatestFetch";
import { ImSpinner2 } from "react-icons/im";
import SmmControl from "./SmmControl";

interface Props {

  // sub: "FREE" | "PAID"
  params: {
    address: string;
  };
  smm: string
}

const SmmOFF: FC<Props> = ({ ...props }) => {
  return (
    <>
      <Tabs defaultValue="Transactions" className="w-full hidden md:flex lg:flex md:flex-col lg:md:flex-col p-2">
        <Stack justifyContent="between" width="w-full">
          <TabsList className="w-7/12 flex gap-4 h-[29px]">
            <TabsTrigger
              value="Transactions"
              className="text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer    data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500 text-[#6C757D] data-[state=active]:text-[#ffff]"
            >
              Latest Trade
            </TabsTrigger>
            <TabsTrigger
              value="watchlist"
              className="text-base relative font-bold font-['Instrument Sans'] leading-tight cursor-pointer    data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500 text-[#6C757D] data-[state=active]:text-[#ffff]"
            >
              Price Alerts
            </TabsTrigger>
          </TabsList>
           <SmmControl params={props.params} smm={props.smm}/>
        </Stack>
        <Suspense
          fallback={
            <Stack
              alignItems="center"
              alignContent="center"
              justifyContent="center"
              height="h-[200px]"
            >
              <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
            </Stack>
          }
        >
          <LatestFetch params={props.params} smm={props.smm}/>
          
        </Suspense>
      </Tabs>
    </>
  );
};

export default SmmOFF;
