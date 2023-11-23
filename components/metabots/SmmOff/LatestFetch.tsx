import React, { FC } from "react";
import { TokenPairDetails } from "@/utils/types";
import LatestTrade from "./LatestTrade";
import PriceAlerts from "./PriceAlerts";
import { TabsContent } from "@/components/ui/tab3";

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
  return (
    <>
      <TabsContent value="Transactions" className="w-full ">
        {" "}
        <LatestTrade historyData={historyData} pairDetails={pairDetails} params={params}/>
      </TabsContent>

      <TabsContent value="watchlist" className="w-full ">
        {" "}
        <PriceAlerts />
      </TabsContent>
    </>
  );
};

export default LatestFetch;
