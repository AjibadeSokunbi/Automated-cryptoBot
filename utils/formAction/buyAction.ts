"use server";

import { getCurrentUser } from "@/lib/session";
import { ServerDefaultSession } from "../types";
import { revalidatePath } from "next/cache";

const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
const metabotURL = "https://api.metadapp.com/" as string;

export async function onBuyAction(FormData: FormData, pair: string) {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });
  const amount = FormData.get("amount");

  const requestBody = JSON.stringify({
    token: FormData.get("tokenAddress"),
    amount: Number(amount).toFixed(6).toString(),
    action: "buy",
    walletIndex: 0,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(`${metabotURL}trade/`, requestOptions);
    const result = await response.json();

    const error = result?.error?.code

    const eMessage = error;

    if (response.status !== 200) {
      return {
        txHash: result?.data?.txnHash,
        message: "success",
      };
    } else {
      return {
        message: "error",
        reason: eMessage,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function onSellAction(FormData: FormData, pair: string) {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });
  const amount = FormData.get("amount");
  const requestBody = JSON.stringify({
    token: FormData.get("tokenAddress"),
    amount: Number(amount).toFixed(0).toString(),
    action: "sell",
    walletIndex: 0,
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(`${metabotURL}trade/`, requestOptions);

    const result = await response.json();

    const error = result?.error?.code

    const eMessage = error;
    if (response.status === 200) {

      return {
        txHash: result?.data?.txnHash,
        message: "success",
      };
    } else {
      return {
        message: "error",
        error: eMessage,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function onBuyLimitAction(
  FormData: FormData,
  pair: string,
  isGreaterThan: boolean
) {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });
  const amount = FormData.get("amount");

  const requestBody = JSON.stringify({
    token: FormData.get("tokenAddress"),
    amount: Number(amount).toFixed(6).toString(),
    action: "buy",
    walletIndex: 0,
    isgreaterThan: isGreaterThan,
    protocolIdentifier: "uniswap:eth",
    tradePrice: FormData.get("price"),
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(`${metabotURL}limitTrade/`, requestOptions);
    const result = await response.json();

    const error = result?.error?.code

    const eMessage = error;
    if (response.status === 200) {
      revalidatePath(`/metabots/${pair}`);
      return {
        txHash: result?.data?.txnHash,
        message: "success",
      };
    } else {
      return {
        message: "error",
        error: eMessage,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

export async function onSellLimitAction(
  FormData: FormData,
  pair: string,
  isGreaterThan: boolean
) {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });
  const amount = FormData.get("amount");

  const requestBody = JSON.stringify({
    token: FormData.get("tokenAddress"),
    amount: Number(amount).toFixed(6).toString(),
    action: "sell",
    walletIndex: 0,
    isgreaterThan: isGreaterThan,
    protocolIdentifier: "uniswap:eth",
    tradePrice: FormData.get("price"),
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(`${metabotURL}limitTrade`, requestOptions);
    const result = await response.json();

    const error = result?.error?.code

    const eMessage = error;
    if (response.status === 200) {

      return {
        txHash: result?.data?.txnHash,
        message: "success",
      };
    } else {
      return {
        message: "error",
        reason: eMessage,
      };
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}
