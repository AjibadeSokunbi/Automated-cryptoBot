import ScamChecker from "@/utils/Scam";
import { ethers } from "ethers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const res3 = await fetch(
    "https://tradeviewer.metadapp.com/chart-api/new_pairs?size=10",

    {
      cache: 'no-store',
      headers: {
        "x-api-key": process.env.TRADEVIEWER_API as string,
        "Content-Type": "application/json",
      },
    }
  );

  const NewData = await res3.json();

  const scamCheckers = new ScamChecker();

  try {
    const newScore = async (address: string): Promise<number> => {
      const score = await scamCheckers.assessRisk(address);
      return score;
    };

    const newDataWithScores: any = [];
    for (const newD of NewData) {
      const score = await newScore(newD.base_id);
      newDataWithScores.push({ ...newD, score });
    }
    return NextResponse.json(newDataWithScores);
  } catch (error) {
    console.error("Error fetching token symbol:", error);
    return NextResponse.json({ message: "Error fetching scam score:" });
  }
}
