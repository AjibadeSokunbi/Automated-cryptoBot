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
import { HistoryMockData } from "@/utils/MockData";
import { PoolActivityData, TokenPairDetails } from "@/utils/types";
import { FC } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

interface Props {
  poolData: PoolActivityData[];
  data: TokenPairDetails;
}

const Adds: FC<Props> = ({ poolData, data }) => {
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[290px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto w-full">
        <TableHeader className="border-none w-full">
          <TableRow className="border-none text-[#6C757D]  flex justify-between px-2  py-1.5">
            <TableHead2 className="w-[20px] md:w-1/2 lg:w-1/2 text-xs md:text-sm lg:text-sm font-semibold">
              
            </TableHead2>
            <TableHead2 className="w-[80px] md:w-full lg:w-full text-xs md:text-sm lg:text-sm font-semibold">
              Time
            </TableHead2>
            <TableHead2 className="w-[100px] md:w-full lg:w-full text-xs md:text-sm lg:text-sm font-bold leading-none">
              Token Amount
            </TableHead2>
            <TableHead2 className="w-[80px] md:w-full lg:w-full text-xs md:text-sm lg:text-sm font-semibold">
              Token Value
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {poolData.map((val, index) => (
            <TableRow className="border-none flex justify-between gap-x-4" key={index}>
              <TableCell2 className="w-[20px] md:w-1/2 lg:w-1/2 border-none text-neutral-200 text-xs font-semibold">
                {val.type === "inc_liq" ? (
                  <MdOutlineAdd color="green" />
                ) : (
                  <AiOutlineMinus color="red" />
                )}
              </TableCell2>
              <TableCell2 className="w-[80px] md:w-full lg:w-full border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                {timeAgo(val.timestamp)}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-full lg:w-full flex md:justify-center lg:justify-center border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                <Stack
                  justifyContent="between"
                  gap={1}
                  width="w-full"
                  alignItems="center"
                >
                  <Stack flexDirection="col" width="w-full" alignItems="center">
                    <Typography className="text-sm font-semibold ">
                      {data.quoteSymbol}
                    </Typography>
                    <Typography className="text-sm font-semibold ">
                      {data.baseSymbol}
                    </Typography>
                  </Stack>

                  <Stack flexDirection="col" width="w-full" alignItems="center">
                    <span className="text-[10px] text-center text-[#6C757D] font-semibold ">
                      {fixNum(val?.amount_0, 2, true)}
                    </span>
                    <span className="text-[10px] text-[#6C757D] text-center font-semibold">
                      {fixNum(val?.amount_1, 2, true)}
                    </span>
                  </Stack>
                </Stack>
              </TableCell2>
              <TableCell2 className="w-[80px] md:w-full lg:w-full flex md:justify-center lg:justify-center border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                {data.priceUsd && data.quotePrice && "$"}
                {data.priceUsd && data.quotePrice
                  ? !!(
                      data.token0Name === data.baseSymbol &&
                      data.token1Name === data.quoteSymbol
                    )
                    ? data.priceUsd * val?.amount_0 +
                        (data.priceUsd / data.quotePrice) * val.amount_1 >
                      1000
                      ? siNumber(
                          toFixedNum(
                            data.priceUsd * val?.amount_0 +
                              (data.priceUsd / data.quotePrice) * val.amount_1,
                            2
                          )
                        )
                      : toFixedNum(
                          data.priceUsd * val?.amount_0 +
                            (data.priceUsd / data.quotePrice) * val.amount_1,
                          2
                        )
                    : !!(
                        data.token1Name === data.baseSymbol &&
                        data.token0Name === data.quoteSymbol
                      ) &&
                      data.priceUsd * val?.amount_1 +
                        (data.priceUsd / data.quotePrice) * val.amount_0 >
                        1000
                    ? siNumber(
                        toFixedNum(
                          data.priceUsd * val?.amount_1 +
                            (data.priceUsd / data.quotePrice) * val.amount_0,
                          2
                        )
                      )
                    : toFixedNum(
                        data.priceUsd * val?.amount_1 +
                          (data.priceUsd / data.quotePrice) * val.amount_0,
                        2
                      )
                  : "-"}
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default Adds;
