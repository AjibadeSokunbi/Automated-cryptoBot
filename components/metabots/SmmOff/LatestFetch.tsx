import React, { FC } from "react";
import { ServerDefaultSession, TokenPairDetails } from "@/utils/types";
import LatestTrade from "./LatestTrade";
import PriceAlerts from "./PriceAlerts";
import { TabsContent } from "@/components/ui/tab3";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import PoolTab from "./Pool/PoolTab";
import LiveTrades from "./LiveTrades";
import { getCurrentUser } from "@/lib/session";

interface Props {

  params: {
    address: string;
  };
}

const LatestFetch: FC<Props> = async ({ params }) => {
  const res4 = await fetch(
    `https://tradeviewer.metadapp.com/chart-api/trade_history?pair=0x11b815efb8f581194ae79006d24e0d814b7697f6`,

    {
      headers: {
        "x-api-key": process.env.TRADEVIEWER_API as string,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
  );

  const history = await res4.json()
  const historyData = history?.data;


  const [res] = await Promise.all([
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
      }
    ),
  ]);

  const [data3] = await Promise.all([res.json()]);

  const pairDetails: TokenPairDetails = data3.data;
  const user: ServerDefaultSession =
  (await getCurrentUser()) as ServerDefaultSession;

  const smm = user.botdata.data.settings.autogas
  return (
    <>
      <TabsContent value="Transactions" className="w-full ">
        {" "}
      {!smm &&  <LatestTrade historyData={historyData} pairDetails={pairDetails} params={params}/>}

        {smm &&   <Stack margin="my-3" flexDirection="col" sx="hidden md:flex lg:flex">
          <Stack justifyContent="between" gap={7}>
            <Stack
              flexDirection="col"
              sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 "
            >
              <Typography className="text-white text-base font-bold font-['Instrument Sans'] leading-tight">
                Pool Activity
              </Typography>
              <PoolTab params={params} />
            </Stack>
            <Stack sx="w-full  h-96 px-2 py-3 bg-[#0C141F] rounded-lg shadow border border-slate-800 ">
              <LiveTrades params={params} />
            </Stack>
          </Stack>
        </Stack>}
      </TabsContent>

      <TabsContent value="watchlist" className="w-full ">
        {" "}
        <PriceAlerts />
      </TabsContent>
    </>
  );
};

export default LatestFetch;
