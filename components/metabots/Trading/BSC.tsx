import { TabsContent } from "@/components/ui/tab3";
import Buy from "./Buy";
import Sell from "./Sell";
import Limit from "./Limit";
import CopyTX from "./CopyTX";

import { FC } from "react";
import { ServerDefaultSession, TokenPairDetails } from "@/utils/types";
import { getCurrentUser } from "@/lib/session";
import { getUserBalance } from "@/utils/scripts/getBalaceEth";
import { getTokenBalance } from "@/utils/scripts/getTokenBalance";


interface Props {
  params: {
    address: string;
  };
}

export const dynamic = "force-dynamic";
const BSC: FC<Props> = async ({ params }) => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;

  const [res, res2, userEth] = await Promise.all([
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
      }
    ),
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=0x11b815efb8f581194ae79006d24e0d814b7697f6`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
      }
    ),
    getUserBalance(user?.botdata?.data?.wallet[0]),
  ]);

  const [data3, data2] = await Promise.all([res?.json(), res2?.json()]);

  const pairDetails: TokenPairDetails = data3?.data;
  const ethDetails: TokenPairDetails = data2?.data;
  const data = pairDetails;
  const userBalanc = await getTokenBalance(
    user?.botdata?.data?.wallet[0],
    pairDetails?.baseAddress
  );




  return (
    <>
  
      <TabsContent value="buy" className="w-full ">
        <Buy

          settings= {user.botdata.data.settings}
          ethBalance={userEth as string}
          tokenData={data as TokenPairDetails}
          priseUsdEth={ethDetails.priceUsd}
          userBalanc={userBalanc}
          params={params}
        />
      </TabsContent>
      <TabsContent value="sell" className="w-full ">
        <Sell
           settings= {user.botdata.data.settings}
          ethBalance={userEth as string}
          tokenData={data as TokenPairDetails}
          priseUsdEth={ethDetails.priceUsd}
          userBalanc={userBalanc}
          params={params}
        />
      </TabsContent>
      <TabsContent value="limit" className="w-full ">
        <Limit
           settings= {user.botdata.data.settings}
          ethBalance={userEth as string}
          tokenData={data as TokenPairDetails}
          priseUsdEth={ethDetails.priceUsd}
          userBalanc={userBalanc}
          params={params}
        />
      </TabsContent>
      <TabsContent value="copy" className="w-full ">
        <CopyTX />
      </TabsContent>
    </>
  );
};

export default BSC;
