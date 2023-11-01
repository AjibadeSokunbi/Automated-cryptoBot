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
import { FC, useEffect, useState } from "react";

interface Props {
  historyData: TradeData[];
}

const LatestTrade: FC<Props> = ({ historyData }) => {
  const { pairDetail } = useNewStore();
  // const [mounted, setMounted] = useState(false)
  // useEffect(() => {
  //   setMounted(true)
  // }, [])
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden">
        <TableHeader className="border-none w-full">
          <TableRow className="w-full text-[#6C757D] border-none flex justify-between text-xs md:text-sm lg:text-sm font-semibold font-['Instrument Sans']">
            <TableHead2 className="w-[100px] md:w-full lg:w-full">Time</TableHead2>
            <TableHead2 className="w-[80px] md:w-full lg:w-full flex md:justify-center lg:justify-center">
              Type
            </TableHead2>
            <TableHead2 className="w-[100px] md:w-full lg:w-full flex md:justify-center lg:justify-center">
              Price USD
            </TableHead2>
            <TableHead2 className="w-[100px] md:w-full lg:w-full flex md:justify-center lg:justify-center">
              Total {pairDetail?.token0Name}
            </TableHead2>
            <TableHead2 className="w-[100px] md:w-full lg:w-full flex md:justify-end lg:justify-end">
              Total {pairDetail?.token1Name}
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {historyData?.map((row, index) => (
            <TableRow className="border-none flex justify-between" key={index}>
              <TableCell2 className="w-[100px] md:w-full lg:w-full border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                { timeAgo(row?.time)}
              </TableCell2>
              <TableCell2
                className={`w-[80px] md:w-full lg:w-full flex md:justify-center lg:justify-center  border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold capitalize`}
                style={{ color: row?.type === "sell" ? "#E25563" : "#20C997" }}
              >
                {row?.type}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-full lg:w-full flex md:justify-center lg:justify-center  border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                ${fixNum(row?.priceUSD, 6, true)}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-full lg:w-full flex md:justify-center lg:justify-center border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                $ {toFixedNum(row?.amount0, 4)}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-full lg:w-full md:pr-1 lg:pr-1 flex md:justify-end lg:justify-end border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold ">
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
