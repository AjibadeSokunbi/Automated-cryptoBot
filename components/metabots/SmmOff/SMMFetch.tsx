import SMM from "@/components/metabots/SmmOff/SMM";
import { TokenPairDetails, TradeData } from "@/utils/types";
import React, { FC } from "react";

interface Props {
  params: {
    address: string;
  };
}

const SMMFetch: FC<Props> = async ({ params }) => {


  return <SMM  params={params} />;
};

export default SMMFetch;
