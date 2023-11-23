import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";

import { ServerDefaultSession, TokenPairDetails } from "@/utils/types";
import React, { FC, Suspense } from "react";
import LiveTrades from "./LiveTrades";
import PoolTab from "./Pool/PoolTab";
import SmmOFF from "./SmmOFF";
import PairSet from "./PairSet";
import { ImSpinner2 } from "react-icons/im";
import { getCurrentUser } from "@/lib/session";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SmmControl from "./SmmControl";
import LatestFetchMobile from "./LatestFetchMobile";

interface Props {
  params: {
    address: string;
  };
}

const SMM: FC<Props> = async ({ ...props }) => {
  // const user: ServerDefaultSession =
  //   (await getCurrentUser()) as ServerDefaultSession;

  // const sub = user?.botdata?.data?.tier;

  return (
    <>
      {
        <Stack margin="my-3" flexDirection="col" sx="hidden md:flex lg:flex">
          {/* <PairSet data={data} /> */}
          <Stack justifyContent="between" gap={7}>
            <Stack
              flexDirection="col"
              sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 "
            >
              <Typography className="text-white text-base font-bold font-['Instrument Sans'] leading-tight">
                Pool Activity
              </Typography>
              <PoolTab params={props.params} />
            </Stack>
            <Stack sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
              <LiveTrades params={props.params} />
            </Stack>
          </Stack>
        </Stack>
      }

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
      <Stack sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
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
            {<SmmControl />}
            <LatestFetchMobile params={props.params} />
          </Suspense>
        </div>
      </Stack>
    </>
  );
};

export default SMM;
