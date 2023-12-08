import React, { FC } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Tab from "@/components/wallets/Tab";
import Settings from "@/components/wallets/Settings";
import CreateWallet from "@/components/wallets/CreateWallet";
import { getClient } from "@/lib/ApolloClient";
import { ServerDefaultSession, UserBalanceInfoData, UserResponseAuthentication } from "@/utils/types";
import { USER_TOKEN_INFO as query } from "@/utils/Queries";
import { getCurrentUser } from "@/lib/session";
import { makeWalletAddress } from "@/utils/indexServer";
import CopyAddress from "../metabots/Wallet/Copy";

interface Props {
walletIndex: number
}

const Wallets: FC<Props> = async ({walletIndex}) => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const wallet = user?.botdata?.data?.wallet[walletIndex];

  const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
  const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;

  const res = await fetch("https://api.metadapp.com/auth", {
    next: { tags: ["wallets"] },
    headers: {
      Authorization: metabotApiKey as string,
      "Content-Type": "application/json",
    },
  });

  const walletIds: UserResponseAuthentication = await res.json();
  const {
    data: balance,
    loading: balanceLoading,
    error: balanceError,
  } = await getClient().query<UserBalanceInfoData>({
    query,
    context: {
      fetchOptions: {
        next: { revalidate: 50 },
      },
    },
    variables: {
      input: {
        userAddr: wallet,
      },
    },
  });

 

  const balances = balance?.userBalanceInfo?.balances;

  return (
    <Stack flexDirection="col" sx="w-full px-3 md:px-0 lg:px-0">
      <Stack
        flexDirection="col"
        sx="md:border lg:border md:border-[#212E40] lg:border-[#212E40] w-full md:w-[55%] lg:w-[55%] h-auto md:p-5 lg:p-5 mb-10 md:mb-20 lg:mb-20 rounded-md"
      >
        <CreateWallet
          wallets={walletIds.data.wallet}
          token={user.botdata.data.token as string}
          walletIndex={walletIndex}
        />
        <Stack alignItems="center" sx="mb-2 md:mb-5 lg:mb-5">
          <Typography
            variant="semibold"
            className="text-center text-xs md:text-sm lg:text-sm mr-1"
          >
            {" "}
            <span className="text-[#E7E7E7]"> Wallet Balance: </span>{" "}
          </Typography>
          <Typography
            variant="bold"
            className="text-center text-sm md:text-2xl lg:text-2xl"
          >
            {" "}
            <span className="text-[#B4D2FE]"> ${balance?.userBalanceInfo?.tokenTotalNetworth.toFixed(2)} </span>{" "}
          </Typography>
        </Stack>
        <Stack alignItems="center" justifyContent="between" sx="w-full">
          <Stack alignItems="center">
            <Typography
              variant="normal"
              className="text-[8.5px] md:text-base lg:text-base mr-1 hidden md:inline lg:inline"
            >
              {" "}
              <span className="text-[#E0E0E0]"> {wallet} </span>{" "}
            </Typography>

            <Typography
              variant="normal"
              className="text-[8.5px] md:text-base lg:text-base mr-1 inline md:hidden lg:hidden"
            >
              {" "}
              <span className="text-[#E0E0E0]">
                {" "}
                {makeWalletAddress(wallet, 6, 0)}{" "}
              </span>{" "}
            </Typography>
            <CopyAddress address={wallet} />
          </Stack>
          <Stack alignItems="center">
            {/* <Send /> */}
            <Settings
              settings={user.botdata.data.settings}
              wallets={user.botdata.data.wallet}
              hasSetPassword={walletIds.data.password}
              walletIndex={walletIndex}
            />
          </Stack>
        </Stack>
      </Stack>
      <Tab balances={balances}   walletIndex={walletIndex} />
    </Stack>
  );
};

export default Wallets;
