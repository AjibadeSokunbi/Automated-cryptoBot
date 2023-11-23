"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Checkbox } from "@/components/ui/checkbox";
import { useSession } from "next-auth/react";

import { PiCopySimpleBold } from "react-icons/pi";
import { TbWorld } from "react-icons/tb";
import { MdArrowForwardIos } from "react-icons/md";
import { makeWalletAddress } from "@/utils";
import { ClientDefaultSession } from "@/utils/types";
import CopyAddress from "./Copy";
import Link from "next/link";

interface Props {}

const Wallet: FC<Props> = ({}) => {
  const { data } = useSession();
  const user: ClientDefaultSession = data as ClientDefaultSession;

  const [hideWallets, setHideWallets] = useState<boolean>(false);
  const [walletIndex, setWalletIndex] = useState(1);
  const Wallets: string[] = user?.wallets as string[];
  const [selectedWallet, setSelectedWallet] = useState<string>(
    Wallets ? Wallets[0] : ""
  );
  const balance = user?.balance;

  useEffect(() => {
    if (selectedWallet === "") {
      setSelectedWallet(Wallets ? Wallets[0] : "");
    }
  }, [Wallets, selectedWallet]);

  const selectWallet = (index: number): void => {
    setSelectedWallet(Wallets[index]);
    setWalletIndex(index + 1);
    setHideWallets(false);
  };

  const show = () => {
    if (Wallets.length > 1) {
      setHideWallets(!hideWallets ? true : false);
    }
  };

  return (
    <Stack
      flexDirection="col"
      gap={2}
      sx="w-full px-1.5 py-2 bg-[#0C141F] rounded-lg shadow border border-slate-800 "
    >
      <Stack justifyContent="between" width="w-full" alignItems="center">
        <Typography className="text-white text-base font-bold font-['Instrument Sans'] leading-tight">
          Your Wallets
        </Typography>
        <MdArrowForwardIos
          onClick={show}
          className={`cursor-pointer  transform ${
            hideWallets ? "rotate-90" : ""
          } transition-transform duration-200`}
        />
      </Stack>
      <Stack flexDirection="col" gap={2}>
        {selectedWallet && (
          <Stack sx=" h-12 px-2.5 py-1 bg-[#0A1019] rounded-lg border border-blue-600 ">
            <Stack justifyContent="between" width="w-full">
              <Stack alignItems="center" gap={2}>
                {selectedWallet && (
                  <Checkbox checked id="terms" className="border-blue-600 " />
                )}

                <Stack sx="w-7 h-7 p-1 bg-[#17212F] rounded-full justify-center items-center text-blue-600 text-xs">
                  W{walletIndex}
                </Stack>
                <Stack flexDirection="col" gap={2}>
                  <Typography
                    color="#E0E0E0"
                    className="text-neutral-200 text-xs font-normal font-['Instrument Sans']"
                  >
                    {makeWalletAddress(selectedWallet, 7, 7)}
                  </Typography>
                  <Typography
                    color="#CED4DA"
                    className="text-gray-300 text-xs font-normal font-['Instrument Sans']"
                  >
                    {Number(balance).toFixed(5)} ETH
                  </Typography>
                </Stack>
              </Stack>

              <Stack flexDirection="col" gap={2} alignItems="end">
                <Stack>
                  <CopyAddress address={selectedWallet} />
                  <Link href={`https://etherscan.io/address/${selectWallet}`} target="_blank">
                    <TbWorld />
                  </Link>
                </Stack>
                <Typography
                  color="#CED4DA"
                  className="text-gray-300 text-xs font-normal font-['Instrument Sans']"
                >
                  TX: 1000
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        )}

        {hideWallets && (
          <>
            {Wallets?.map((wallet, index) => (
              <Stack
                onClick={() => selectWallet(index)}
                key={index}
                sx={
                  selectedWallet === wallet
                    ? "hidden"
                    : " h-12 px-2.5 py-1 bg-[#0A1019] rounded-lg border border-blue-600 "
                }
              >
                <Stack
                  onClick={() => setWalletIndex(0)}
                  justifyContent="between"
                  width="w-full"
                >
                  <Stack alignItems="center" gap={2}>
                    <Stack sx="w-7 h-7 p-1 bg-[#17212F] rounded-full justify-center items-center text-blue-600 text-xs">
                      W{index + 1}
                    </Stack>
                    <Stack flexDirection="col" gap={2}>
                      <Typography
                        color="#E0E0E0"
                        className="text-neutral-200 text-xs font-normal font-['Instrument Sans']"
                      >
                        {makeWalletAddress(wallet, 7, 7)}
                      </Typography>
                      <Typography
                        color="#CED4DA"
                        className="text-gray-300 text-xs font-normal font-['Instrument Sans']"
                      >
                        0.000 ETH
                      </Typography>
                    </Stack>
                  </Stack>

                  <Stack flexDirection="col" gap={2} alignItems="end">
                    <Stack>
                      <PiCopySimpleBold />
                      <TbWorld />
                    </Stack>
                    <Typography
                      color="#CED4DA"
                      className="text-gray-300 text-xs font-normal font-['Instrument Sans']"
                    >
                      TX: 1000
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Wallet;
