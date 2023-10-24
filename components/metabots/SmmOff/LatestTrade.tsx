import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import {
  Table,
  TableBody,
  TableCell2,
  TableHead2,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fixNum, siNumber, timeAgo, toFixedNum } from "@/utils";
import { TradeData } from "@/utils/types";
import { useNewStore } from "@/utils/zustanStore/newStore";
import { FC } from "react";

interface Props {
  historyData: TradeData[];
}

const LatestTrade: FC<Props> = ({ historyData }) => {
  const { pairDetail } = useNewStore();

  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto hidden md:table lg:table w-full">
        <TableHeader className="border-none w-full">
          <TableRow className="w-full text-[#6C757D] border-none flex justify-between text-sm font-semibold font-['Instrument Sans']">
            <TableHead2 className="w-full ">Time</TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Type
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Price USD
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Total {pairDetail?.token0Name}
            </TableHead2>
            <TableHead2 className=" w-full flex justify-end ">
              Total {pairDetail?.token1Name}
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {historyData?.map((row, index) => (
            <TableRow className="border-none flex justify-between" key={index}>
              <TableCell2 className="w-full border-none text-neutral-200 text-sm font-semibold">
                {timeAgo(row?.time)}
              </TableCell2>
              <TableCell2
                className={`w-full flex justify-center  border-none text-neutral-200 text-sm font-semibold`}
                style={{ color: row?.type === "sell" ? "#E25563" : "#20C997" }}
              >
                {row?.type}
              </TableCell2>
              <TableCell2 className="w-full flex justify-center  border-none text-neutral-200 text-sm font-semibold">
                ${fixNum(row?.priceUSD, 6, true)}
              </TableCell2>
              <TableCell2 className="w-full flex justify-center border-none text-neutral-200 text-sm font-semibold">
                $ {toFixedNum(row?.amount0, 4)}
              </TableCell2>
              <TableCell2 className="w-full pr-1 flex justify-end border-none text-neutral-200 text-sm font-semibold ">
                ${toFixedNum(row?.amount1, 4)}
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default LatestTrade;
