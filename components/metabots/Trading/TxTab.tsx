import React, { Suspense } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab3";
import All from "../TX/All";
import Limit from "../TX/Limit";
// import CopyTrades from "../TX/CopyTrades";
import { ImSpinner2 } from "react-icons/im";
import Stack from "../../custom/Stack";
interface Props {}

const TxTab = () => {
  return (
    <Tabs defaultValue="bs" className="flex flex-col md:pt-1 lg:pt-1">
    <TabsList className="space-x-4 h-[20px] md:h-[29px] lg:h-[29px]">
      <TabsTrigger
        value="bs"
        className="text-xs md:text-sm lg:text-sm font-medium font-['Instrument Sans'] leading-tight cursor-pointer  text-[#6C757D]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
      >
        Buy & Sell
      </TabsTrigger>
      <TabsTrigger
        value="limits"
        className="text-xs md:text-sm lg:text-sm font-medium font-['Instrument Sans'] leading-tight cursor-pointer   text-[#6C757D]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
      >
        Limits
      </TabsTrigger>
      {/* <TabsTrigger
        value="copy"
        className="text-xs md:text-sm lg:text-sm font-medium font-['Instrument Sans'] leading-tight cursor-pointer   text-[#6C757D]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
      >
        Copy Trades
      </TabsTrigger> */}
    </TabsList>

      <TabsContent value="bs" className="w-full ">
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
          <All />
        </Suspense>
      </TabsContent>
      <TabsContent value="limits" className="w-full ">
        <Limit />
      </TabsContent>
      {/* <TabsContent value="copy" className="w-full ">
        <CopyTrades />
      </TabsContent> */}
    </Tabs>
  );
};

export default TxTab;
