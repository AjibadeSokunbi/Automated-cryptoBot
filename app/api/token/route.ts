import { ethers } from "ethers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

    const { tokenAddress } = await req.json()
   
    const alchemyApiKey = process.env.ALCHEMY_API_KEY;
    const provider = new ethers.JsonRpcProvider(
      `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`
    );

    try {
        const abi = ["function symbol() view returns (string)"];
    
        const contract = new ethers.Contract(tokenAddress, abi, provider);
        const symbol = await contract.symbol();
        if (symbol) {
          return NextResponse.json(symbol);
        } else {
          return  NextResponse.json("---");
        }
      } catch (error) {
        console.error("Error fetching token symbol:", error);
        return NextResponse.json({"message": "Error fetching token symbol:" });
      }
  }