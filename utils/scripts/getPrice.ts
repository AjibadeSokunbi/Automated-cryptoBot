import { ExchangeResponse } from "../types";

export async function getTokenPriceInUSD(
  tokenAddress: string
): Promise<number> {
  const stableCoinsCheck =
    tokenAddress === "0xdac17f958d2ee523a2206206994597c13d831ec7" ||
    tokenAddress === "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48" ||
    tokenAddress === "0x6b175474e89094c44da98b954eedeac495271d0f" ||
    tokenAddress === "0x853d955acef822db058eb8505911ed77f175b99e";

  try {
    if (stableCoinsCheck) {
      return 1;
    } else {
      const search = await fetch(
        `https://tradeviewer.metadapp.com/chart-api/autocomplete_search?search_term=${tokenAddress}`,
        {
          headers: {
            "x-api-key": process.env.NEXT_PUBLIC_TRADEVIEWER_API as string,
            "Content-Type": "application/json",
          },
          next: { revalidate: 5 },
        }
      );

      if (!search.ok) {
        console.error("Error:", search.statusText);
        return 0;
      }

      const searchResult: ExchangeResponse = await search.json();

      if (!searchResult.results || searchResult.results.length === 0) {
        console.warn("No results found for the token address:", tokenAddress);
        return 0;
      }

      const searchPrice = searchResult.results.find(
        (result) => result?.token0 === tokenAddress
      );

      if (!searchPrice) {
        console.warn("No price found for the token address:", tokenAddress);
        return 0;
      }

      return searchPrice.price;
    }
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}
