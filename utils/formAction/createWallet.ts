
"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { ServerDefaultSession } from "../types";
import { getCurrentUser } from "@/lib/session";

const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;
export const createWallet = async () => {
  "use server";
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
  };

  try {
    const response = await fetch(`${metabotURL}wallet`, requestOptions);
    const res = await response.json();
    console.log(res);
    revalidateTag("user");
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

const metabotURL2 = "https://api.metadapp.com/"

export const deleteWallet = async (walletId: number) => {
  console.log(walletId)
    "use server";
    const user: ServerDefaultSession =
      (await getCurrentUser()) as ServerDefaultSession;
    const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;
  
    const headers = new Headers({
      Authorization: metabotApiKey,
      "Content-Type": "application/json",
    });
  
    const requestOptions: RequestInit = {
      method: "DELETE",
      headers,
    };
  
    try {
      const response = await fetch(`${metabotURL2}wallet/${walletId}`, requestOptions);
      const res = await response.json();
      console.log(res);
      revalidateTag("wallets");
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
