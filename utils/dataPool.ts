import { UserDecodedTransactions } from "./Queries";
import FeeEstimator from "./scripts/feeEstimator";
import { TokenPairDetails, feeFetch } from "./types";

export const fetchWalletTxn = async (addresses: string[]) => {
  try {
    const data4 = await fetch(
      "https://tradeviewer.metadapp.com/chart-api/wallet_txns",
      {
        method: "POST",
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          addresses: addresses,
        }),
        next: { revalidate: 10 },
      }
    );
    const walletDatas = await data4.json();
    return walletDatas;
  } catch (error) {
    console.log(error);
  }
};

export const fetchFee = async (
  value: string,
  pair: string,
  pairDetail: TokenPairDetails
): Promise<feeFetch> => {
  try {
    const estimator = new FeeEstimator();
    const fee = await estimator.getFeeUsd(
      "0x464c62b952d283efe379F86da5c81ddb124B76cB",
      pairDetail.baseAddress,
      value,
      "buy",
      pairDetail.quoteAddress,
      pair as string,
      pairDetail.dexName as "uniswapv2" | "uniswapv3"
    );
    if (fee !== undefined && fee !== null) {
      return fee;
    } else {
      return { feeUsd: 0, feeEth: "0" };
    }
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch fee");
  }
};

export const newTokensScam = async () => {
  try {
    const res3 = await fetch("https://test2-umber-phi.vercel.app/api/scam", {
      next: { revalidate: 10 },
    });

    if (res3.status === 200) {
      const NewData = await res3.json();
      return NewData;
    } else {
      return [];
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
};

export async function fetchGraphQLData(address: string) {
  const response = await fetch("https://metadapp.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: process.env.NEXT_PUBLIC_REACT_APP_GRAPHQL as string,
    },
    body: JSON.stringify({
      query: UserDecodedTransactions,
      variables: {
        input: {
          chain: "eth",
          userAddr: address,
        },
      },
    }),
    next: { revalidate: 10 },
  });

  return response.json();
}
