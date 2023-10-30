"use client"
import Stack from "@/components/custom/Stack";
import {
  Table,
  TableBody,
  TableCell2,
  TableHead2,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fixNum, timeAgo } from "@/utils";
import ScamChecker from "@/utils/Scam";
import { fixNum2, shortenWord } from "@/utils/indexServer";
import { NewTokenType } from "@/utils/types";
import { useNewStore } from "@/utils/zustanStore/newStore";
import Link from "next/link";

import { FC, useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {
  NewData: NewTokenType[];
}

const NewTokenTable: FC<Props> = ({ NewData }) => {
  const { isConnected, setIsConnected } = useNewStore();
  return (
    <Stack flexDirection="col" sx="w-full" height="h-56" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto hidden md:table lg:table w-full">
        <TableHeader className="border-none w-full bg-slate-950">
          <TableRow className="border-none flex justify-between px-2  py-1.5">
            <TableHead2
              className={
                !isConnected
                  ? "w-7/12 text-xs font-bold leading-none"
                  : "w-full text-xs font-bold leading-none"
              }
            >
              Age
            </TableHead2>
            <TableHead2
              className={
                !isConnected
                  ? "w-full flex justify-center text-center  text-xs font-bold leading-none"
                  : "w-full text-xs font-bold leading-none"
              }
            >
              Token Name
            </TableHead2>
            {isConnected && (
              <TableHead2 className="w-full flex justify-center text-xs font-bold leading-none">
                Scam Score
              </TableHead2>
            )}
            <TableHead2 className="w-1/2 flex justify-end text-xs font-bold leading-none">
              Price
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {NewData.map((row, index) => (
            <Link key={index} href={`/metabots/${row.pair}`}>
              <TableRow className="border-none flex justify-between gap-x-6 px-2">
                <TableCell2 className="w-full border-none text-neutral-200 text-xs font-normal">
                  {timeAgo(row.timestamp)}
                </TableCell2>
                <TableCell2 className="w-full flex  border-none text-neutral-200 text-xs font-normal">
                  {shortenWord(row.base_symbol, 5)}/{row.quote_symbol}
                </TableCell2>
                {isConnected && (
                  <TableCell2
                    className={`w-full flex justify-center text-start border-none ${
                      row.score && row?.score >= 70
                        ? "text-green-500"
                        : row.score && row?.score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                    } text-xs font-normal`}
                  >
                    {row.score === undefined && (
                      <FaSpinner className="animate-spin" />
                    )}
                    {row?.score && row.score}
                  </TableCell2>
                )}
                <TableCell2 className="w-1/12 flex justify-end border-none text-neutral-200 text-xs font-normal">
                  $
                  {row.price.toString().length < 5
                    ? `${row.price}.000`
                    : fixNum2(row.price, 6, true)}
                </TableCell2>
              </TableRow>
            </Link>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default NewTokenTable;
