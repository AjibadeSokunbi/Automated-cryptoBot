import React, { Suspense } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Graph from "@/components/metabots/Graph";
import Wallet from "@/components/metabots/Wallet";

import TokenInfoFetch from "../dataFetchers/TokenInfoFetch";
import TNW from "../dataFetchers/TNW";
import SMMFetch from "../dataFetchers/SMMFetch";
import TNav from "@/components/metabots/Trading/TNav";
import InnerTab2 from "@/components/metabots/InnerTab2";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import PriceAlerts from "@/components/metabots/SmmOff/PriceAlerts";

interface pageProps {
  params: {
    address: string;
  };
}

export default async function page({ params }: pageProps) {
  return (
    <>
      <Suspense fallback={<>Loading.....</>}>
        <TokenInfoFetch params={params} />
      </Suspense>

      {/* ------------ Desktop Layout ------------ */}
      <Stack gap={4} padding="px-4" margin="mb-10" sx="hidden md:flex lg:flex">
        <Stack width="w-full" flexDirection="col" gap={3}>
          <Stack gap={4}>
            <Stack flexDirection="col" width="w-8/12" gap={1}>
              <Typography
                color="#FFC107"
                className="text-yellow-400 text-sm font-semibold font-['Instrument Sans'] underline leading-tight"
              >
                Multi-Chart
              </Typography>
              <Stack sx="w-full h-72 p-1 bg-[#0C141F]  rounded-2xl shadow border border-slate-800 ">
                {/* <Graph /> */}
              </Stack>
            </Stack>

            <Stack
              margin="mb-3"
              flexDirection="col"
              sx="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800"
            >
              <Suspense fallback={<>Loading.....</>}>
                <TNW />
              </Suspense>
            </Stack>
          </Stack>
          <Suspense
            fallback={
              <Stack
                justifyContent="center"
                alignItems="center"
                sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800"
              >
                Loading....
              </Stack>
            }
          >
            <SMMFetch params={params} />
          </Suspense>
        </Stack>
        <Stack flexDirection="col" gap={10} width="w-5/12">
          <Wallet />
          <Suspense fallback={<>Loading.....</>}>
            <TNav params={params} />
          </Suspense>
        </Stack>
      </Stack>

      {/* ------------ Mobile Layout ------------ */}
      <Stack gap={4} padding="px-4" flexDirection="col" sx="flex md:hidden lg:hidden w-full mb-5">
        <Wallet />
        <Suspense fallback={<>Loading.....</>}>
          <TNav params={params} />
        </Suspense>
        <Tabs defaultValue="transactions" className="w-full mt-5 overflow-x-hidden">
          <TabsList className='px-1 w-full mx-auto flex justify-center items-center bg-[#0C141F]'>
              <TabsTrigger value="transactions" className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}>    
                  Transactions
              </TabsTrigger>
              <TabsTrigger value="latestTrades" className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}>
                  Latest Trades
              </TabsTrigger>
              <TabsTrigger value="alerts" className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}>
                  Alerts
              </TabsTrigger>
          </TabsList>

          <TabsContent value="transactions" className="pt-5">
            <Stack
              flexDirection="col"
              sx="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800 overflow-auto"
            >
              <Suspense fallback={<>Loading.....</>}>
                <TNW />
              </Suspense>
            </Stack>
          </TabsContent>
          <TabsContent value="latestTrades" className="pt-5">
            <Suspense
              fallback={
                <Stack justifyContent="center" alignItems="center" sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800">
                  Loading....
                </Stack>
              }
            >
              <SMMFetch params={params} />
            </Suspense>
          </TabsContent>
          <TabsContent value="alerts" className="pt-5">
            <PriceAlerts />
          </TabsContent>
        </Tabs>
      </Stack>
    </>
  );
}
