import React, { Suspense } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import {
  ServerDefaultSession,
} from "@/utils/types";
import Graph from "@/components/metabots/Graph";
import Wallet from "@/components/metabots/Wallet";
import { getCurrentUser } from "@/lib/session";
import TokenInfoFetch from "../dataFetchers/TokenInfoFetch";
import NewTokensfetchers from "../dataFetchers/NewTokensfetchers";
import SMMFetch from "../dataFetchers/SMMFetch";
import TNav from "@/components/metabots/Trading/TNav";

interface pageProps {
  params: {
    address: string;
  };
}

export default async function page({ params }: pageProps) {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;

  return (
    <>
      <Suspense fallback={<>Loading.....</>}>
        <TokenInfoFetch params={params} />
      </Suspense>

      {/* ------------------------ */}
      <Stack gap={4} padding="px-4" margin="mb-10">
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
              <Suspense fallback={<>Loading.....</>}>
                <NewTokensfetchers />
              </Suspense>
            </Stack>
          </Stack>
          <Suspense
            fallback={
              <Stack justifyContent="center" alignItems="center" sx="w-full h-72 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800">
                Loading....
              </Stack>
            }
          >
            <SMMFetch params={params} />
          </Suspense>
        </Stack>
        <Stack flexDirection="col" gap={10} width="w-5/12">
          <Wallet wallets={user?.wallets} />

            <TNav/>
        </Stack>
      </Stack>
    </>
  );
}
