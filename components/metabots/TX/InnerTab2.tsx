import Stack from "@/components/custom/Stack";

import NewTokens from "./NewToken/NewTokens";
import WatchList from "../WatchList/WatchList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab3";
import { FC, Suspense } from "react";
import TxTab from "../Trading/TxTab";
import WatchCount from "./WatchCount";
import { ImSpinner2 } from "react-icons/im";

interface Props {}

const InnerTab2: FC<Props> = ({ ...props }) => {
  return (
    <Tabs defaultValue="Transactions" className="w-full flex flex-col p-2">
      <Stack
        justifyContent="between"
        sx="w-full flex-col md:flex-row  lg:flex-row "
      >
        <TabsList className="w-[85%] md:w-fit lg:w-fit flex justify-between h-[25px] md:h-[29px] lg:-[29px] gap-3 md:gap-3 lg:gap-3 mb-0 md:mb-0 lg:mb-0">
          <TabsTrigger
            value="Transactions"
            className="font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <span className="hidden md:inline lg:inline text-[10px] md:text-sm lg:text-base">
              {" "}
              Transactions{" "}
            </span>
            <span className="inline md:hidden lg:hidden text-[10px] md:text-base lg:text-base">
              {" "}
              My Transactions{" "}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="New Tokens"
            className="relative font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <span className="absolute -top-1 md:-top-2 lg:-top-2 -right-3 text-[6px] font-bold  text-white bg-red-500 rounded-r rounded-l py-0.5 px-2 mb-2">
              Hot
            </span>
            <span className="text-[10px] md:text-sm lg:text-base">
              {" "}
              New Tokens{" "}
            </span>
          </TabsTrigger>
          <TabsTrigger
            value="watchlist"
            className="relative font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <WatchCount />
            <span className="text-[10px] md:text-sm lg:text-base">
              {" "}
              Watchlist{" "}
            </span>
          </TabsTrigger>
        </TabsList>


      </Stack>

      <TabsContent value="Transactions" className="w-full ">
        {" "}
        <TxTab />
      </TabsContent>
      <TabsContent value="New Tokens" className="w-full ">
        {" "}
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
          <NewTokens />
        </Suspense>
      </TabsContent>
      <TabsContent value="watchlist" className="w-full ">
        {" "}
        <WatchList />
      </TabsContent>
    </Tabs>
  );
};

export default InnerTab2;
