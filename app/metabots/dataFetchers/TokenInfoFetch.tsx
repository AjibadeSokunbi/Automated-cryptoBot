import TokenInfo from "@/components/metabots/TokenInfo";
import ScamChecker from "@/utils/Scam";
import { TokenPairDetails } from "@/utils/types";
import React, { FC } from "react";

interface Props {
  params: {
    address: string;
  };
}

const TokenInfoFetch: FC<Props> = async ({ params }) => {
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

  const response = data
    ? await fetch(
        `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=${data.baseAddress}`
      )
    : await fetch(
        `https://api.gopluslabs.io/api/v1/token_security/1?contract_addresses=0xc251f0493effd83efeadc900f93d3a0208ade96f`
      );

  const data_2 = await response?.json();

  const scamCheckers = new ScamChecker();

  const score = await scamCheckers.assessRisk(data?.baseAddress as string);

  const aSecurity = scamCheckers.getAddressSecurityData();

  const aToken = scamCheckers.getTokenSecurityData();


  return (
    <TokenInfo
      data={data as TokenPairDetails}
      data_2={data_2}
      params={params}
      score={score}
      aToken={aToken}
      aSecurity={aSecurity}
    />
  );
};

export default TokenInfoFetch;
