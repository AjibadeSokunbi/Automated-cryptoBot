"use server";

import { getCurrentUser } from "@/lib/session";
import { ServerDefaultSession } from "../types";
import { revalidatePath, revalidateTag } from "next/cache";

const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;
export const handleUserSettings = async (FormData: FormData, pair: string) => {

  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const requestBody = JSON.stringify({
    params: {
      autogas: FormData.get("autoGas") === "on" ? true : false,
      shouldSimulate: FormData.get("simulate") === "on" ? true : false,
      isPrivate: FormData.get("private") === "on" ? true : false,
      slippage: FormData.get("slippage"),
      scamScore: FormData.get("scam"),
      SMM: true
    },
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(
      `${metabotURL}user/editSettings`,
      requestOptions
    );
 const res =  await response.json();
console.log(res);
    revalidatePath(`/metabots/${pair}`)
    revalidateTag("sign")
    revalidatePath("/api/auth/signin")
  } catch (error) {
    console.error("An error occurred:", error);
  };

};
