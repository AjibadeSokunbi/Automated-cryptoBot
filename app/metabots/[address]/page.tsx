import React, { Suspense } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Graph from "@/components/metabots/Charts/Graph";
import Wallet from "@/components/metabots/Wallet/Wallet";

import TokenInfoFetch from "../../../components/metabots/TokenInfo/TokenInfoFetch";

import TNav from "@/components/metabots/Trading/TNav";
import { Skeleton } from "@/components/ui/skeleton";
import InnerTab2 from "@/components/metabots/TX/InnerTab2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PriceAlerts from "@/components/metabots/SmmOff/PriceAlerts";
import SMM from "@/components/metabots/SmmOff/SMM";
import { redirect } from "next/navigation";

interface pageProps {
  params: {
    address: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({ params, searchParams }: pageProps) {
  const smm = (searchParams.smm || "0") as string ;



  return (
    <>
      <Suspense
        fallback={
          <Skeleton className="h-20 w-8/12 my-4 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
        }
      >
        <TokenInfoFetch params={params} />
      </Suspense>

      {/* ------------------------ */}
      <Stack
        gap={4}
        padding="px-4"
        margin="mb-10"
        sx="hidden md:flex lg:flex md:flex-col lg:flex-row"
      >
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
                <Graph />
              </Stack>
            </Stack>

            <Stack
              margin="mb-3"
              flexDirection="col"
              sx="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800"
            >
              <Suspense
                fallback={
                  <Skeleton className="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
                }
              >
                <InnerTab2 />
              </Suspense>
            </Stack>
          </Stack>
          <Suspense
            fallback={
              <Stack justifyContent="between" gap={7}>
                <Skeleton className="w-full h-98 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
                <Skeleton className="w-full h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
              </Stack>
            }
          >
            <SMM params={params} smm={smm} />
          </Suspense>
        </Stack>
        <Stack flexDirection="col" gap={10} width="lg:w-5/12 md:w-full">
          <Suspense
            fallback={
              <Skeleton className="w-full flex flex-col h-[300px] bg-[#0C141F] rounded-lg shadow border border-slate-800 pb-2" />
            }
          >
            <Wallet />
          </Suspense>
          <TNav params={params} />
        </Stack>
      </Stack>

      {/* ------------ Mobile Layout ------------ */}
      <Stack
        gap={4}
        padding="px-4"
        flexDirection="col"
        sx="flex md:hidden lg:hidden w-full mb-5"
      >
        <Wallet />
        <Suspense
          fallback={
            <Skeleton className="w-full flex flex-col h-[300px] bg-[#0C141F] rounded-lg shadow border border-slate-800 pb-2" />
          }
        >
          <TNav params={params} />
        </Suspense>
        <Tabs
          defaultValue="transactions"
          className="w-full mt-5 overflow-x-hidden"
        >
          <TabsList className="px-1 w-full mx-auto flex justify-center items-center bg-[#0C141F]">
            <TabsTrigger
              value="transactions"
              className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}
            >
              Transactions
            </TabsTrigger>
            <TabsTrigger
              value="latestTrades"
              className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}
            >
              Latest Trades
            </TabsTrigger>
            <TabsTrigger
              value="alerts"
              className={`ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] w-full text-xs px-3 py-2 text-center font-black text-white data-[state=active]:text-white`}
            >
              Alerts
            </TabsTrigger>
          </TabsList>
          <TabsContent value="transactions" className="pt-5">
            <Stack
              flexDirection="col"
              sx="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800 overflow-auto"
            >
              <Suspense
                fallback={
                  <Skeleton className="w-full h-11/12 p-1 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
                }
              >
                <InnerTab2 />
              </Suspense>
            </Stack>
          </TabsContent>
          <TabsContent value="latestTrades" className="pt-5">
            <Suspense
              fallback={
                <Stack justifyContent="between" gap={7}>
                  <Skeleton className="w-full h-98 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800" />
                </Stack>
              }
            >
              <SMM params={params} smm={smm}  />
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
