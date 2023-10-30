import Stack from "@/components/custom/Stack";
import InnerTab2 from "@/components/metabots/InnerTab2";
import ScamChecker from "@/utils/Scam";
import React, { FC } from "react";

interface Props {}

const TNW: FC<Props> = async ({}) => {
  const res3 = await fetch(
    "https://tradeviewer.metadapp.com/chart-api/new_pairs?size=10",
    {
      next: { revalidate: 10 },
    }
  );

  const NewData = await res3.json();

  return <InnerTab2 NewData={NewData} />;
};

export default TNW;
