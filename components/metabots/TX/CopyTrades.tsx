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
import { BsPencil } from "react-icons/bs";

interface Props {}

const CopyTrades = () => {
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto hidden md:table lg:table w-full">
        <TableHeader className="border-none w-full bg-slate-950">
          <TableRow className="border-none flex justify-between px-2  py-1.5">
            <TableHead2 className="text-xs font-bold leading-none">
              Time
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none ml-2">
              Address
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none">
              Status
            </TableHead2>
            <TableHead2 className="text-left text-xs font-bold leading-none">
              Action
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {HistoryMockData.map((row, index) => (
            <TableRow
              className="border-none flex justify-between gap-x-6"
              key={index}
            >
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal">
                3 mins Ago
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal">
                0x9c....D21
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal">
                <Typography
                  className="border-none text-neutral-200 text-xs font-normal"
                  color={row.action === "Sent" ? "#06C270" : "#FFC107"}
                >
                  {" "}
                  {row.action === "Sent" ? "Listening" : "Completed"}
                </Typography>
              </TableCell2>
              <TableCell2 className="border-none text-neutral-200 text-xs font-normal">
                {" "}
                <Stack alignItems="center" gap={1} margin="mr-1">
                  <BsPencil />
                  <BiTrashAlt />
                </Stack>{" "}
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default CopyTrades;
