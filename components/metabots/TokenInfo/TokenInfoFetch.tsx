import ScamChecker from "@/utils/Scam";
import { TokenPairDetails, TokenSecurity } from "@/utils/types";
import React, { FC } from "react";
import TokenInfo from "./TokenInfo";

interface Props {
  params: {
    address: string;
  };
}

const TokenInfoFetch: FC<Props> = async ({ params }) => {
  let data = null;
  try {
    const res = await fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
      }
    );

    const data3 = await res?.json();
    const Tokendata: TokenPairDetails = data3.data;
    data = Tokendata;
  } catch (error) {
    console.log("error:", error);
  }

  const scamCheckers = new ScamChecker();

  const score = await scamCheckers.assessRisk(data?.baseAddress as string);

  const aSecurity = scamCheckers.getAddressSecurityData();

  const aToken = scamCheckers.getTokenSecurityData();

  return (
    <TokenInfo
      data={data as TokenPairDetails}
      data_2={aToken as TokenSecurity}
      params={params}
      score={score}
      aToken={aToken}
      aSecurity={aSecurity}
    />
  );
};

export default TokenInfoFetch;
