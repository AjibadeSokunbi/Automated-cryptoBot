import { Contract, ethers } from "ethers";
import v3RouterABI from "../abi/v3RouterABI.json";
import v2RouterABI from "../abi/v2RouterABI.json";
import { TokenPairDetails } from "../types";

const zeroAddress = "0x0000000000000000000000000000000000000000";

class FeeEstimator {
  private priceETH: number = 0
  getProvider() {
    const alchemyApiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
    return new ethers.JsonRpcProvider(
      `https://eth-mainnet.alchemyapi.io/v2/${alchemyApiKey}`
    );
  }

  async getTokenPriceFromDefillama() {
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

    const data3 = await res?.json();
    const Tokendata: TokenPairDetails = data3.data;
      this.priceETH = Tokendata.priceUsd
    return Tokendata.priceUsd;
  }

  private async getTokenDecimal(tokenAddress: string): Promise<number> {
    const provider = this.getProvider();
    const tokenContract = new ethers.Contract(
      tokenAddress,
      ["function decimals() view returns (uint8)"],
      provider
    );
    return tokenContract.decimals();
  }

  async getV3PairFee(pair: string) {
    const provider = this.getProvider();
    const v3Contract = new Contract(
      pair,
      ["function fee() view returns (uint24)"],
      provider
    );
    const fee = await v3Contract.fee();
    return fee;
  }

  async estimateV2Fee(
    address: string,
    token0: string,
    token1: string,
    recipient: string,
    amountIn: any
  ) {
    try {
      const provider = this.getProvider();
      const deadline = Math.floor(Date.now() / 1000) + 60 * 10;
      const routerContract = new Contract(
        "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
        v2RouterABI,
        provider
      );
      let fee;
      if (token0 != zeroAddress && token1 != zeroAddress) {
        fee = await routerContract.swapExactTokensForTokens.estimateGas(
          amountIn,
          0,
          [token0, token1],
          recipient,
          deadline,
          { from: address }
        );
      } else if (token0 == zeroAddress) {
        fee = await routerContract.swapExactETHForTokens.estimateGas(
          0,
          ["eth", token1],
          recipient,
          deadline,
          {
            from: address,
            amount: amountIn,
          }
        );
      } else if (token1 == zeroAddress) {
        fee = await routerContract.swapExactTokensForETH.estimateGas(
          amountIn,
          0,
          [token0, "eth"],
          recipient,
          deadline,
          { from: address }
        );
      }
      return fee;
    } catch (error) {
      //use fallback error in case of STF error
      return BigInt(130000);
    }
  }

  async estimateV3Fee(
    address: string,
    token0: string,
    token1: string,
    fee: number,
    recipient: string,
    amountIn: BigInt
  ) {
    try {
      const provider = this.getProvider();
      const routerContract = new Contract(
        "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45",
        v3RouterABI,
        provider
      );
      const swapFee = await routerContract.exactInputSingle.estimateGas(
        {
          tokenIn: token0 == zeroAddress ? "eth" : token0,
          tokenOut: token1 == zeroAddress ? "eth" : token1,
          fee: fee,
          recipient: recipient,
          amountIn: amountIn,
          amountOutMinimum: 0,
          sqrtPriceLimitX96: 0,
        },
        {
          from: address,
        }
      );
      return swapFee;
    } catch (error) {
      //use fallback error in case of STF error
      return BigInt(160000);
    }
  }
  async getGasLimit(
    address: string,
    token: string,
    paymentAmount: string,
    action: "buy" | "sell",
    paymentToken: string = zeroAddress,
    pair: string,
    version: "uniswapv3" | "uniswapv2"
  ) {
    const tokenDecimal =
      action === "buy"
        ? await this.getTokenDecimal(paymentToken)
        : await this.getTokenDecimal(token);
    const amountIn = ethers.parseUnits(paymentAmount, tokenDecimal);

    let feeValue;
    let estimateFunction;

    if (version === "uniswapv3") {
      feeValue =
        action === "buy"
          ? await this.getV3PairFee(pair)
          : await this.getV3PairFee(token);
      estimateFunction = this.estimateV3Fee.bind(
        this,
        address,
        action === "buy" ? paymentToken : token,
        action === "buy" ? token : paymentToken,
        feeValue,
        address,
        amountIn
      );
    } else {
      estimateFunction = this.estimateV2Fee.bind(
        this,
        address,
        action === "buy" ? paymentToken : token,
        action === "buy" ? token : paymentToken,
        address,
        amountIn
      );
    }

    return estimateFunction();
  }


  public getPriceUsd(): number {
    return this.priceETH;
  }

  async getFeeUsd(
    address: string,
    token: string,
    paymentAmount: string,
    action: "buy" | "sell",
    paymentToken: string = zeroAddress,
    pair: string,
    version: "uniswapv3" | "uniswapv2",
  ) {
    const provider = this.getProvider();
    const gasFee = await provider.getFeeData();
    const gasLimit = await this.getGasLimit(
      address,
      token,
      paymentAmount,
      action,
      paymentToken,
      pair,
      version
    );
    const priceUsd = await this.getTokenPriceFromDefillama();
    const feeEth = ethers.formatEther(gasFee.gasPrice! * gasLimit!);
    return Number(feeEth) * priceUsd;
  }
}

export default FeeEstimator;
//Usage example
