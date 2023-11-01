import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import {
  Table,
  TableBody,
  TableCell,
  TableCell2,
  TableHead,
  TableHead2,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  fixNum,
  makeWalletAddress,
  siNumber,
  timeAgo,
  toFixedNum,
} from "@/utils";
import { HistoryMockData } from "@/utils/MockData";
import { useNewStore } from "@/utils/zustanStore/newStore";
import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BiTrashAlt } from "react-icons/bi";

interface Props {}

const All = () => {
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto w-full">
        <TableHeader className="border-none w-full bg-slate-950">
          <TableRow className="border-none flex justify-between px-2 py-1.5 w-full">
            <TableHead2 className="text-xs font-bold leading-none w-1/5 md:w-auto lg:w-auto">
              <Image
                src="/copy.png"
                alt="copy"
                width={100}
                height={100}
                className="w-5 h-3.5"
              />
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none w-2/5 md:w-auto lg:w-auto">
              Type
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none w-1/5 md:w-auto lg:w-auto">
              Token
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none w-1/5 md:w-auto lg:w-auto">
              Quantity
            </TableHead2>
            <TableHead2 className="text-left text-xs font-bold leading-none w-1/5 md:w-auto lg:w-auto">
              Status
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {HistoryMockData.map((row, index) => (
            <TableRow
              className="border-none flex justify-between gap-x-6 w-full"
              key={index}
            >
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal w-1/5 md:w-auto lg:w-auto">
                W1
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal w-2/5 md:w-auto lg:w-auto">
                Limit buy
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal w-1/5 md:w-auto lg:w-auto">
                Reflex
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal w-1/5 md:w-auto lg:w-auto">
                878.5
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal w-1/5 md:w-auto lg:w-auto">
                {" "}
                <Stack alignItems="center" gap={1}>
                  <Typography
                    className="border-none text-neutral-200 text-xs font-normal"
                    color={row.action === "Sent" ? "#06C270" : "#FFC107"}
                  >
                    {" "}
                    {row.action === "Sent" ? "Completed" : "Pending"}
                  </Typography>{" "}
                  {row.action !== "Sent" && <BiTrashAlt color="red" />}
                </Stack>{" "}
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default All;
