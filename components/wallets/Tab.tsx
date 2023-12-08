import React, { FC } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from "@/components/wallets/tokenHoldings/Table";
import TXHistory from "@/components/wallets/txHistory/TXHistory";
import { ServerDefaultSession, TokenBalance, UserLimiTrade, UserTrade } from "@/utils/types";
import { getCurrentUser } from "@/lib/session";
import { fetchGraphQLData } from "@/utils/dataPool";
//import WalletPerformance from '@/components/wallets/walletPerformance/WalletPerformance';

interface Props {
  balances: TokenBalance[];
}

const Tab: FC<Props> = async ({ balances }) => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotURL = "https://api.metadapp.com/";

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const requestOptions: RequestInit = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    `${metabotURL}trade/user/${user?.botdata?.data?._id}`,
    requestOptions
  );

  const responseData = await response?.json();

  const tradeData: UserTrade[] = responseData?.data;


  const response2 = await fetch(
    `${metabotURL}limitTrade/user/${user?.botdata?.data?._id}`,
    requestOptions
  );

  const responseData2 = await response2?.json();
  const tradeData2: UserLimiTrade[] = responseData2?.data;
const TransferData = await fetchGraphQLData(user.botdata.data.wallet[0])

  return (
    <Tabs defaultValue="tokenHoldings" className="w-full">
      <TabsList className="mb-10 px-1 w-full mx-auto flex justify-start items-center bg-[#0C141F]">
        <TabsTrigger
          value="tokenHoldings"
          className="ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-1/3 md:w-fit lg:w-fit px-2 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base"
        >
          {" "}
          Token Holdings{" "}
        </TabsTrigger>
        {/*<TabsTrigger value="walletPerformance" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-2/3 md:w-fit lg:w-fit px-4 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base'> Wallet Performance </TabsTrigger> */}
        <TabsTrigger
          value="txHistory"
          className="ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-1/3 md:w-fit lg:w-fit px-2 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base"
        >
          {" "}
          TX History{" "}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="tokenHoldings">
        <Table balances={balances} />
      </TabsContent>
      {/*<TabsContent value="walletPerformance">
        <WalletPerformance />
  </TabsContent> */}
      <TabsContent value="txHistory">
        <TXHistory tradeData={tradeData}  tradeData2={tradeData2} TransferData={TransferData?.data?.userDecodedTransactions?.transfers} />
      </TabsContent>
    </Tabs>
  );
};

export default Tab;
