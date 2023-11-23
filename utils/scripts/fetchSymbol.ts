import { ethers, Contract } from "ethers";

export async function getTokenSymbols(tokenAddresses: string[]): Promise<(string | null)[]> {
  const alchemyApiKey: string | undefined = process.env.ALCHEMY_API_KEY;
  if (!alchemyApiKey) {
    throw new Error("Alchemy API Key not found");
  }

  const provider = new ethers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`
  );

  try {
    const abi: string[] = ["function symbol() view returns (string)"];

    const symbolPromises: Promise<string | null>[] = tokenAddresses.map(async (tokenAddress: string) => {
      try {
        const contract: Contract = new ethers.Contract(tokenAddress, abi, provider);
        const symbol: string | null = await contract.symbol();
        return symbol || "---";
      } catch (error) {
        console.error(`Error fetching token symbol for ${tokenAddress}:`);
        return null;
      }
    });

    const symbols: (string | null)[] = await Promise.all(symbolPromises);
    return symbols;
  } catch (error) {
    console.error("Error fetching token symbols:", error);
    return [];
  }
};

export async function getTokenSymbol(tokenAddress: string) {
  const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
  const provider = new ethers.JsonRpcProvider(
    `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`
  );

  try {
    const abi = ["function symbol() view returns (string)"];

    const contract = new ethers.Contract(tokenAddress, abi, provider);
    const symbol = await contract.symbol();
    if (symbol) {
      return symbol;
    } else {
      return "N/A";
    }
  } catch (error) {
    console.error("Error fetching token symbol:", error);
    return null;
  }
}

