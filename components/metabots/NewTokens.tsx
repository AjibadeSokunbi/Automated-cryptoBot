import { NewTokenType } from "@/utils/types";
import { FC } from "react";
import NewTokenTable from "./NewTokenTable";
import ScamChecker from "@/utils/Scam";

interface Props {
  NewData: NewTokenType[];
}

const NewTokens: FC<Props> = async ({ NewData }) => {
  // const scamCheckers = new ScamChecker();

  // const newScore = async (address: string): Promise<number> => {
  //   const score = await scamCheckers.assessRisk(address);
  //   return score;
  // };

  // const newDataWithScores: any = [];

  // for (const newD of NewData) {
  //   const score = await newScore(newD.base_id);
  //   newDataWithScores.push({ ...newD, score });
  // }



  return <NewTokenTable NewData={NewData} />;
};

export default NewTokens;
