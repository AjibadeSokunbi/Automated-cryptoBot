import React, { FC } from "react";
import LatestTrade from "./LatestTrade";
import { TokenPairDetails } from "@/utils/types";

interface Props {

    params: {
        address: string;
    };
}

const LatestFetchMobile: FC<Props> = async ({ params}) => {
    const [res4] = await Promise.all([
        fetch(
          `https://tradeviewer.metadapp.com/chart-api/trade_history?pair=${params.address}`,
          
    {
      headers: {
        "x-api-key": process.env.TRADEVIEWER_API as string,
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    }
        ),
      ]);
    
      const [history] = await Promise.all([res4.json()]);
    
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

  return (<LatestTrade historyData={historyData} pairDetails={pairDetails} params={params} />);
};

export default LatestFetchMobile;
