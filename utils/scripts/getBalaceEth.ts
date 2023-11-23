import { ethers } from "ethers";

export async function getUserBalance(walletAddress: string) {
  const alchemyApiKey = process.env.ALCHEMY_API_KEY;
  const provider = new ethers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`
  );

  try {
    const balanceWei = await provider.getBalance(walletAddress);

    const balanceEther = ethers.formatEther(balanceWei);

    return balanceEther;
  } catch (error) {
    console.error("Error:", error);
  }
}
