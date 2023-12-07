"use server";
import { revalidatePath, revalidateTag } from "next/cache";
import { ServerDefaultSession } from "../types";
import { getCurrentUser } from "@/lib/session";

const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;
export const setPasswordKey = async (FormData: FormData) => {
  "use server";
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const requestBody = JSON.stringify({
    password: FormData.get("password")
  });

  const requestOptions: RequestInit = {
    method: "POST",
    headers,
    body: requestBody,
  };

  try {
    const response = await fetch(`${metabotURL}user/password`, requestOptions);
    const res = await response.json();
    console.log(res);
    revalidateTag("user");
    revalidatePath("/wallets")
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

