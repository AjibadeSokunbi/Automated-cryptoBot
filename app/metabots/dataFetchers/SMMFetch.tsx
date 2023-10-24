import SMM from "@/components/metabots/SmmOff/SMM";
import { TokenPairDetails, TradeData } from "@/utils/types";
import React, { FC } from "react";

interface Props {
  params: {
    address: string;
  };
}

const SMMFetch: FC<Props> = async ({ params }) => {

  const [res, res2, res4] = await Promise.all([
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`
    ),
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/get_liquidity?pair=${params.address}&page=1&size=20`,
      { next: { revalidate: 10 } }
    ),
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/trade_history?pair=${params.address}`,
      { next: { revalidate: 10 } }
    ),
  ]);

  const [data3, poolData, history] = await Promise.all([
    res.json(),
    res2.json(),
    res4.json(),
  ]);

  const historyData = history?.data;

  const data: TokenPairDetails = data3.data;

  const transaction = historyData?.map((v: TradeData) => v.address);
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        addresses: addresses,
      }),
      next: { revalidate: 10 },
    }
  );

  const walletData = await data4.json();
  return (
    <SMM
      historyData={historyData}
      poolData={poolData.data}
      data={data}
      walletData={walletData.data}
    />
  );
};

export default SMMFetch;
