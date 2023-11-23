import ScamChecker from "@/utils/Scam";
import { TokenPairDetails } from "@/utils/types";
import { NextResponse } from "next/server";

export async function GET(req: Request) {

  try {
    const res = await fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=0x11b815efb8f581194ae79006d24e0d814b7697f6`,

      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      }
    );
    if (res.status !== 200)
      return NextResponse.json({
        message: "Error fetching pairdetails:",
        error: res.statusText,
      });
    const data3 = await res?.json();
    const Tokendata: TokenPairDetails = data3.data;

    return NextResponse.json({ Tokendata });
  } catch (error) {
    return NextResponse.json({ message: "Error fetching token data:", error });
  }
}
