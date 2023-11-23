import { TradeData, WalletDatas } from "@/utils/types";
import { FC } from "react";
import LiveTradesTable from "./LiveTradesTable";

interface Props {
  params: {
    address: string;
  };
}

const LiveFetch: FC<Props> = async ({ params }) => {
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

  const historyData: TradeData[] = history?.data;

  const transaction = historyData?.map((v: TradeData) => v?.address);
  const addresses = transaction
    ? transaction?.filter(
        (item: string, index: number) => transaction?.indexOf(item) === index
      )
    : [];

  const data4 = await fetch(
    "https://tradeviewer.metadapp.com/chart-api/wallet_txns",
    {
      method: "POST",
      headers: {
        "x-api-key": process.env.TRADEVIEWER_API as string,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addresses: addresses,
      }),
      next: { revalidate: 10 },
    }
  );
  const walletDatas = await data4.json();
  const walletData: WalletDatas[] = walletDatas;

  return (
    <LiveTradesTable walletData={walletData} historyData={historyData} params={params}/>
  );
};

export default LiveFetch;
