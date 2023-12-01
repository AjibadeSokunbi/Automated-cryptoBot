import { ethers } from "ethers";

export async function getTokenBalance(
    walletAddress: string,
    tokenAddress: string
  ): Promise<string | undefined> {
    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
    const provider = new ethers.AlchemyProvider(
      "homestead",
      alchemyApiKey
    );
  
    try {
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ["function balanceOf(address) view returns (uint256)"],
        provider
      );
  
      const balance = await tokenContract.balanceOf(walletAddress);

      const tokenDecimals = new ethers.Contract(
        tokenAddress,
        ["function decimals() view returns (uint8)"],
       provider
      );
  

      const decimals = await tokenDecimals.decimals();
  
 
      const bal = ethers.formatUnits(balance, decimals);
  
      if (bal) {
        return bal;
      } else {
        return "0";
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
