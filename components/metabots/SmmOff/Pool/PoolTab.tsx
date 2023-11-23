import React, { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tab3";
import PoolTabFetcher from "./PoolTabFetcher";
interface Props {
  params: {
    address: string;
  };
}

const PoolTab: FC<Props> = ({ ...props }) => {
  return (
    <>
      <Tabs defaultValue="bs" className="flex flex-col pt-1">
        <TabsList className="space-x-4  h-[29px]">
          <TabsTrigger
            value="bs"
            className="text-sm font-bold font-['Instrument Sans'] leading-tight cursor-pointer  text-[#ffff]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
          >
            All
          </TabsTrigger>
          <TabsTrigger
            value="limits"
            className="text-sm font-bold font-['Instrument Sans'] leading-tight cursor-pointer   text-[#ffff]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
          >
            Adds
          </TabsTrigger>
          <TabsTrigger
            value="copy"
            className="text-sm font-bold font-['Instrument Sans'] leading-tight cursor-pointer   text-[#ffff]  data-[state=active]:border-b-2 data-[state=active]:border-y-yellow-500  data-[state=active]:text-[#FFC107]"
          >
            Removes
          </TabsTrigger>
        </TabsList>

        <PoolTabFetcher params={props.params}  />
      </Tabs>
    </>
  );
};

export default PoolTab;
