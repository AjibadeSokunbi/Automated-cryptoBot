"use client"
import Stack from "@/components/custom/Stack";
import {
  Table,
  TableBody,
  TableCell2,
  TableRow,
} from "@/components/ui/table";
import { timeAgo } from "@/utils";
import { fixNum2, shortenWord } from "@/utils/indexServer";
import { NewTokenType } from "@/utils/types";
import { useNewStore } from "@/utils/zustanStore/newStore";
import Link from "next/link";

import { FC } from "react";
import { FaSpinner } from "react-icons/fa";

interface Props {
  NewData: NewTokenType[];
}

const NewTokenTable: FC<Props> = ({ NewData }) => {
  const { isConnected } = useNewStore();
  return (
    <Stack flexDirection="col" sx="w-full overflow-x-auto md:overflow-hidden lg:overflow-x-hidden" height="h-56" padding="mt-2">
    <Table className="w-full hide-scrollbar overflow-y-auto overflow-x-auto md:overflow-hidden lg:overflow-x-hidden">
        <TableBody>
          {NewData?.map && NewData?.map((row, index) => (
            <Link key={index} href={`/metabots/${row?.pair}`}>
              <TableRow className="border-none flex justify-between gap-x-6 px-2 ">
                <TableCell2 className="w-[80%] md:w-full lg:w-full border-none text-neutral-200 text-xs font-normal">
                  {timeAgo(row?.timestamp)}
                </TableCell2>
                <TableCell2 className="w-full flex  border-none text-neutral-200 text-xs font-normal">
                  {shortenWord(row?.base_symbol, 5)}/{row?.quote_symbol}
                </TableCell2>
                {isConnected && (
                  <TableCell2
                    className={`w-full flex justify-center text-start border-none ${
                      row?.score && row?.score >= 70
                        ? "text-green-500"
                        : row?.score && row?.score >= 50
                        ? "text-yellow-500"
                        : "text-red-500"
                    } text-xs font-normal`}
                  >
                    {row?.score === undefined && (
                      <FaSpinner className="animate-spin" />
                    )}
                    {row?.score && row?.score}
                  </TableCell2>
                )}
                <TableCell2 className="w-1/12 flex justify-end border-none text-neutral-200 text-xs font-normal">
                  $
                  {row?.price.toString()?.length < 5
                    ? `${row?.price}.000`
                    : fixNum2(row?.price, 6, true)}
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
