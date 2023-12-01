import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import React, { FC, Suspense } from "react";
import LiveTrades from "./LiveTrades";
import PoolTab from "./Pool/PoolTab";
import SmmOFF from "./SmmOFF";
import { ImSpinner2 } from "react-icons/im";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmmControl from "./SmmControl";
import LatestFetchMobile from "./LatestFetchMobile";

interface Props {
  params: {
    address: string;
  };
}

const SMM: FC<Props> = async ({ ...props }) => {


  return (
    <>
 
      {/* mobile___________-------------------------------  */}
      {
        <Stack
          flexDirection="col"
          margin="mb-2"
          sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 block md:hidden lg:hidden"
        >
          <Tabs
            defaultValue="liveTrade"
            className="w-full mt-5 overflow-x-hidden"
          >
            <TabsList className="px-1 w-full mx-auto flex justify-center items-center bg-[#0C141F]">
              <TabsTrigger
                value="liveTrade"
                className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}
              >
                Live Trades
              </TabsTrigger>
              <TabsTrigger
                value="poolActivity"
                className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}
              >
                Pool Activity
              </TabsTrigger>
            </TabsList>

            <TabsContent value="liveTrade" className="pt-5">
              <Suspense
                fallback={
                  <Stack
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                    height="h-full"
                    width="w-full"
                  >
                    <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
                  </Stack>
                }
              >
                <LiveTrades params={props.params} />
              </Suspense>
            </TabsContent>

            <TabsContent value="poolActivity" className="pt-2.5">
              <PoolTab params={props.params} />
            </TabsContent>
          </Tabs>
        </Stack>
      }
      <Stack flexDirection="col" gap={2} sx="w-full px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
        <div className="hidden md:flex lg:flex w-full">
          <SmmOFF params={props.params} />
        </div>

        
        <div className="w-full flex flex-col md:hidden lg:hidden">
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
            {/* {<SmmControl />} */}
            <LatestFetchMobile params={props.params} />
          </Suspense>
        </div>
      </Stack>
    </>
  );
};

export default SMM;
