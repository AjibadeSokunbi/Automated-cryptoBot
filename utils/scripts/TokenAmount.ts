import IUniswapV3PoolABI from "../abi/IUniswapV3PoolABI.json";
import Quoter from "../abi/Quoter.json";
import { ethers } from "ethers";
import { QUOTER_CONTRACT_ADDRESS } from "@/lib/constants";
import { fromReadableAmount, toReadableAmount } from "./conversion";
import PAIR_ABI from "../abi/PAIR_ABI.json";

class ExchangeRateCalculator {
  private provider: ethers.JsonRpcProvider;

  private exchangeRate1to2: number = 0;
  private exchangeRate2to1: number = 0;

  constructor() {
    const alchemyApiKey = process.env.ALCHEMY_API_KEY;
    this.provider = new ethers.JsonRpcProvider(
      `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`,
    );
  }

  private async getDecimals(tokenAddress: string): Promise<number> {
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ["function decimals() view returns (uint8)"],
      this.provider
    );
    return tokenContract.decimals();
  }

  public async getExchangeRate(
    pairAddress: string,
    token0Address: string,
    token1Address: string
  ): Promise<void> {
    try {
      const pairContract = new ethers.Contract(
        pairAddress,
        PAIR_ABI,
        this.provider
      );

      const quoterContract = new ethers.Contract(
        QUOTER_CONTRACT_ADDRESS,
        Quoter,
        this.provider
      );
      const factory = await pairContract.factory();

      const token0Decimals = await this.getDecimals(token0Address);
      const token1Decimals = await this.getDecimals(token1Address);

      if (factory === "0x1F98431c8aD98523631AE4a59f267346ea31F984") {
        const poolConstants = await this.getPoolConstants(pairAddress);
        const quoterContract: any = new ethers.Contract(
          QUOTER_CONTRACT_ADDRESS,
          Quoter,
          this.provider
        );
        const quotedAmountOut =
          await quoterContract.quoteExactInputSingle.staticCall(
            token0Address,
            token1Address,
            poolConstants.fee,
            fromReadableAmount(1, token0Decimals).toString(),
            0
          );

        this.exchangeRate1to2 = toReadableAmount(
          quotedAmountOut,
          token1Decimals
        ) as any;
        this.exchangeRate2to1 = 1 / this.exchangeRate1to2;
      } else if (factory === "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f") {
        const [reserveToken0, reserveToken2] = await pairContract.getReserves();

        const token1Amount = parseFloat(
          ethers.formatUnits(reserveToken0, token0Decimals)
        );
        const token2Amount = parseFloat(
          ethers.formatUnits(reserveToken2, token1Decimals)
        );

        this.exchangeRate1to2 = token2Amount / token1Amount;
        this.exchangeRate2to1 = token1Amount / token2Amount;
      }
    } catch (error) {
      console.error("Error: TRADEVIEWER ERROR:" );
    }
  }

  private async getPoolConstants(pairAddress: string): Promise<{
    token0: string;
    token1: string;
    fee: number;
    factory: string;
  }> {
    const poolContract = new ethers.Contract(
      pairAddress,
      IUniswapV3PoolABI,
      this.provider
    );

    const [token0, token1, fee, factory] = await Promise.all([
      poolContract.token0(),
      poolContract.token1(),
      poolContract.fee(),
      poolContract.factory(),
    ]);

    return {
      token0,
      token1,
      fee,
      factory,
    };
  }

  public getExchangeRate0to1(): number {
    return this.exchangeRate1to2;
  }

  public getExchangeRate1to0(): number {
    return this.exchangeRate2to1;
  }
}
export default ExchangeRateCalculator;
