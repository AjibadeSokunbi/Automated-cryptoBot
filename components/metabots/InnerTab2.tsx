import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Slider2 } from "@/components/ui/slider";

import NewTokens from "./NewTokens";
import { NewTokenType } from "@/utils/types";
import WatchList from "./WatchList/WatchList";
import { FiSettings } from "react-icons/fi";
import { Switch2 } from "../ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab3";
import ApeControll from "./ApeControll";
import { FC, Suspense } from "react";
import TxTab from "./TxTab";

interface Props {
  NewData: NewTokenType[];
}

const InnerTab2: FC<Props> = ({ ...props }) => {
  return (
    <Tabs defaultValue="Transactions" className="w-full flex flex-col p-2">
      <Stack justifyContent="between" sx="w-full flex-col md:flex-row lg:flex-row">
        <TabsList className="w-[85%] md:w-8/12 lg:w-8/12 flex justify-between h-[25px] md:h-[29px] lg:-[29px] gap-3 md:gap-2 lg:gap-2">
          <TabsTrigger
            value="Transactions"
            className="font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <span className="hidden md:inline lg:inline text-[10px] md:text-base lg:text-base"> Transactions </span>
            <span className="inline md:hidden lg:hidden text-[10px] md:text-base lg:text-base"> My Transactions </span>
          </TabsTrigger>
          <TabsTrigger
            value="New Tokens"
            className="relative font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <span className="absolute -top-1 md:-top-2 lg:-top-2 -right-3 text-[6px] font-bold  text-white bg-red-500 rounded-r rounded-l py-0.5 px-2 mb-2">
              Hot
            </span>
            <span className="text-[10px] md:text-base lg:text-base"> New Tokens </span> 
          </TabsTrigger>
          <TabsTrigger
            value="watchlist"
            className="relative font-bold font-['Instrument Sans'] leading-tight cursor-pointer data-[state=active]:border-b-2 data-[state=active]:border-y-blue-500  data-[state=active]:text-[#6C757D]"
          >
            <span className="absolute -top-1 md:-top-2 lg:-top-2 -right-3 text-[10px] font-bold  text-black bg-yellow-400 rounded-full text-center w-3 h-3">
              5
            </span>
            <span className="text-[10px] md:text-base lg:text-base"> Watchlist </span> 
          </TabsTrigger>
        </TabsList>

        <TabsList className="flex justify-between mt-2">
          <TabsTrigger
            value="New Tokens"
            className="hidden cursor-pointer data-[state=active]:flex "
          >
            <Stack alignItems="center" gap={2}>
              <ApeControll />

              <Dialog>
                <DialogTrigger asChild>
                  <FiSettings />
                </DialogTrigger>
                <DialogContent className="w-[90%] md:w-2 lg:w-2 top-[50%] md:top-[47%] lg:top-[47%] left-[50%] md:left-[57%] lg:left-[57%] max-w-sm bg-[#0C141F] border border-slate-800 p-2">
                  <Stack flexDirection="col">
                    <Stack
                      justifyContent="between"
                      height="h-6"
                      width="w-full"
                      alignItems="center"
                    >
                      <Typography
                        className="text-[12.28px] md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight"
                        color="#0A53BE"
                      >
                        App Mode Parameters
                      </Typography>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                        Liquidity:
                      </Typography>
                      <Stack alignItems="center" gap={1}>
                        <Typography
                          color="#6C757D"
                          className="text-xs md:text-sm lg:text-sm font-normal"
                        >
                          Less than
                        </Typography>
                        <Stack sx="px-2.5 font-normal rounded-lg shadow border border-slate-800 justify-center items-center">
                          <span className="text-[14.03px] md:text-sm lg:text-sm font-normal text-[#6C757D]"> $ </span>
                          <span className="text-sm font-normal"> 100000 </span>
                        </Stack>
                      </Stack>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                        Volume:
                      </Typography>
                      <Stack alignItems="center" gap={1}>
                        <Typography
                          color="#6C757D"
                          className="text-xs md:text-sm lg:text-sm font-normal"
                        >
                          Less than
                        </Typography>
                        <Stack sx="px-2.5 font-normal rounded-lg shadow border border-slate-800 justify-center items-center">
                          <span className="text-[14.03px] md:text-sm lg:text-sm font-normal text-[#6C757D]"> $ </span>
                          <span className="text-sm font-normal"> 100000 </span>
                        </Stack>
                      </Stack>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                        MarketCap
                      </Typography>
                      <Stack gap={2} alignItems="center">
                        <Stack alignItems="center" gap={1}>
                          <Typography
                            color="#6C757D"
                            className="text-xs md:text-sm lg:text-sm font-normal"
                          >
                            Less than
                          </Typography>
                          <Stack sx="px-2.5 font-normal  rounded-lg shadow border border-slate-800 justify-center items-center">
                            <span className="text-[14.03px] md:text-sm lg:text-sm font-normal text-[#6C757D]"> $ </span>
                            <span className="text-sm font-normal"> 100000 </span>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    <Typography className="ml-1 mt-1 text-white text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] leading-normal">
                      Meta Scam Score:
                      <span className="ml-1 text-amber-400 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-normal">
                        50% and above
                      </span>{" "}
                    </Typography>
                    <Slider2
                      defaultValue={[33]}
                      max={100}
                      step={1}
                      className="my-3 px-1.5"
                    />
                  </Stack>
                </DialogContent>
              </Dialog>
            </Stack>
          </TabsTrigger>
        </TabsList>
      </Stack>
      <TabsContent value="Transactions" className="w-full">
        {" "}
        <TxTab />
      </TabsContent>
      <TabsContent value="New Tokens" className="w-full">
        {" "}
        <Suspense fallback={<>Loading.....</>}>
          <NewTokens NewData={props.NewData} />
        </Suspense>
      </TabsContent>
      <TabsContent value="watchlist" className="w-full">
        {" "}
        <WatchList />
      </TabsContent>
    </Tabs>
  );
};

export default InnerTab2;
