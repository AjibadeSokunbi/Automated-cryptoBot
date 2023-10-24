import InnerTab from "@/components/metabots/InnerTab";
import ScamChecker from "@/utils/Scam";
import React, { FC } from "react";

interface Props {}
export const dynamic = 'force-dynamic'
const NewTokensfetchers: FC<Props> = async ({}) => {
  const res3 = await fetch(
    "https://tradeviewer.metadapp.com/chart-api/new_pairs?size=10",
    {
      next: { revalidate: 5 },
    }
  );

  const NewData = await res3.json();
//   const scamCheckers = new ScamChecker();

//   const newScore = async (address: string): Promise<number> => {
//     const score = await scamCheckers.assessRisk(address);
//     return score;
//   };

//   const newDataWithScores: any = [];

//   for (const newD of NewData) {
//     const score = await newScore(newD.base_id);
//     newDataWithScores.push({ ...newD, score });
//   }

  return <InnerTab NewData={NewData} />;
};

export default NewTokensfetchers;
