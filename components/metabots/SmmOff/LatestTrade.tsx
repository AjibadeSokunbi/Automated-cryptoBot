"use client";
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
import { fetchFeeData } from "@/utils/dataPool";
import { fixNum, timeAgo, toFixedNum } from "@/utils/indexServer";
import { TokenPairDetails, TradeData } from "@/utils/types";
import { usePriceStore } from "@/utils/zustanStore/priceUsd";
import { useSmm } from "@/utils/zustanStore/smm";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect } from "react";

interface Props {
  historyData: TradeData[];
  pairDetails: TokenPairDetails;
  params: {
    address: string;
  };
}



const LatestTrade: FC<Props> = ({ historyData, pairDetails, params }) => {
  const pairDetail = pairDetails;
  const { setPrice } = usePriceStore();

  const address = params.address;
  const { data,isSuccess, isFetched } = useQuery<TradeData[]>({
    
    refetchIntervalInBackground: true,
    refetchInterval: 20 * 1000,
    queryKey: ["stream-hydrate-users"],
    queryFn: () => fetchFeeData(address as string),
    initialData: historyData,
    staleTime: 20 * 1000,


    
  });

  useEffect(() => {
    if(isSuccess) {
      setPrice(data[0]?.priceUSD);
   }
  }, [data, isSuccess, setPrice])
  const {smm} = useSmm()
  return (
    <Stack
      flexDirection="col"
      sx={`w-full ${smm ? "hidden" : "flex"}`}
      height="h-[240px] md:h-[210px] lg::h-[210px]"
      padding="mt-2"
    >
      <Table className="hide-scrollbar overflow-y-auto overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden">
        <TableHeader className="border-none w-full">
          <TableRow className="w-full text-[#6C757D] border-none flex justify-between text-xs md:text-sm lg:text-sm font-semibold font-['Instrument Sans']">
            <TableHead2 className="w-[100px] md:w-full lg:w-full">
              Time
            </TableHead2>
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
          {data?.map((row, index) => (
            <TableRow className="border-none flex justify-between" key={index}>
              <TableCell2 className="w-[100px] md:w-full lg:w-full border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                {timeAgo(row?.time)}
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
                {toFixedNum(row?.amount0, 4)}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-full lg:w-full md:pr-1 lg:pr-1 flex md:justify-end lg:justify-end border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold ">
                {toFixedNum(row?.amount1, 4)}
              </TableCell2>
            </TableRow>
          ))}
          {data?.length === 0 && (
            <TableRow>
              <TableCell2>
                <Stack
                  flexDirection="col"
                  justifyContent="center"
                  height="h-[200px]"
                  alignItems="center"
                  alignContent="center"
                >
                  <Typography variant="h1">☹️</Typography>
                  <Typography variant="h3">No Trading Activity</Typography>
                </Stack>
              </TableCell2>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default LatestTrade;
