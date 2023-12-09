import { getServerSession } from "next-auth/next";

import { authOptions } from "@/lib/auth";
import { UserBotData } from "@/utils/types";
import { getUserBalance } from "@/utils/scripts/getBalaceEth";

const metabotURL = process.env.METABOT_URL as string;

const requestOptions: RequestInit = {
  method: "GET",
  credentials: "include",
  next: { revalidate: 50, tags: ["user"] },
};

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  const response2 = await fetch(
    `${metabotURL}user/${session?.user?.email}`,
    requestOptions
  );
  const resD: UserBotData = await response2.json();

  const userWallets = resD.data.wallet;
  const allWalletBalance: string[] = (await Promise.all(
    userWallets.map(getUserBalance)
  )) as string[];

  return { ...session?.user, botdata: resD, allWalletBalance };
}
