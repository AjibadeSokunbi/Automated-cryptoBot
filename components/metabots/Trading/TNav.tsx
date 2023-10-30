import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab3";
import Buy from "./Buy";
import Sell from "./Sell";
import Limit from "./Limit";
import CopyTX from "./CopyTX";
import ExchangeRateCalculator from "@/utils/TokenAmount";
import { FC } from "react";
import { ServerDefaultSession, TokenPairDetails, UserBalanceInfoData } from "@/utils/types";
import { getClient } from "@/lib/ApolloClient";
import { USER_TOKEN_INFO as query, HISTORY_DATA } from "@/utils/Queries";
import { getCurrentUser } from "@/lib/session";

interface Props {
  params: {
    address: string;
  };
}

const TNav: FC<Props> = async ({ params }) => {
  const user: ServerDefaultSession = await getCurrentUser() as ServerDefaultSession
  let data = null;
  try {
    const res = await fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`
    );

    const data3 = await res?.json();
    const Tokendata: TokenPairDetails = data3.data;
    data = Tokendata;
  } catch (error) {
    console.log("error:", error);
  }

  const token1Address1 = data?.token0Address as string;
  const token2Address2 = data?.token1Address as string;

  const calculatorv2 = new ExchangeRateCalculator();
  await calculatorv2.getExchangeRate(
    params.address,
    token1Address1,
    token2Address2
  );

  const rate1to2 = calculatorv2.getExchangeRate0to1();
  const rate2to1 = calculatorv2.getExchangeRate1to0();

  const {
    data: balance,
    loading: balanceLoading,
    error: balanceError,
  } = await getClient().query<UserBalanceInfoData>({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 50 },
      },
    },
    variables: {
      input: {
        userAddr: user?.wallets ? user.wallets[0] : "0x464c62b952d283efe379F86da5c81ddb124B76cB",
      },
    },
  });

  const balances = balance?.userBalanceInfo?.balances;


  return (
    <Tabs
      defaultValue="buy"
      className="w-full flex flex-col  bg-[#0C141F] rounded-lg shadow border border-slate-800 pb-2"
    >
      <TabsList className="w-full  bg-[#0A1019] flex justify-between h-10 border-b border-slate-800">
        <TabsTrigger
          value="buy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          value="sell"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          value="limit"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Limits
        </TabsTrigger>
        <TabsTrigger
          value="copy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Copy Trade
        </TabsTrigger>
      </TabsList>
      <TabsContent value="buy" className="w-full ">
        <Buy rate0to1={rate1to2} balances={balances} rate1to0={rate2to1} tokenData={data as TokenPairDetails} />
      </TabsContent>
      <TabsContent value="sell" className="w-full ">
        <Sell rate0to1={rate1to2} balances={balances}  rate1to0={rate2to1} />
      </TabsContent>
      <TabsContent value="limit" className="w-full ">
        <Limit />
      </TabsContent>
      <TabsContent value="copy" className="w-full ">
        <CopyTX />
      </TabsContent>
    </Tabs>
  );
};

export default TNav;
