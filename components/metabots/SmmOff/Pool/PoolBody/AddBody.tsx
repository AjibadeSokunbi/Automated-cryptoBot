import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Table, TableBody, TableCell2, TableRow } from "@/components/ui/table";
import { fixNum, siNumber, timeAgo, toFixedNum } from "@/utils/indexServer";
import { PoolActivityData, TokenPairDetails } from "@/utils/types";
import { FC } from "react";
import { AiOutlineMinus } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
interface Props {
  params: {
    address: string;
  };
}

const AddBody: FC<Props> = async ({ params }) => {
  const [res2] = await Promise.all([
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/get_liquidity?pair=${params.address}&page=1&size=20`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
        next: { revalidate: 10 },
      }
    ),
  ]);

  const poolDatas = await res2.json();

  const poolData: PoolActivityData[] = poolDatas?.data.filter(
    (val: PoolActivityData) => val?.type === "dec_liq"
  );

  const [res] = await Promise.all([
    fetch(
      `https://tradeviewer.metadapp.com/chart-api/pair_details?pairId=${params.address}`,

      {
        headers: {
          "x-api-key": process.env.TRADEVIEWER_API as string,
          "Content-Type": "application/json",
        },
      }
    ),
  ]);

  const [data3] = await Promise.all([res.json()]);

  const data: TokenPairDetails = data3.data;
  return (
    <Table className="hide-scrollbar overflow-y-auto md:table lg:table w-full">
      <TableBody>
        {poolData?.length !== 0 &&
          poolData?.map((val, index) => (
            <TableRow
              className="border-none flex justify-between gap-x-4"
              key={index}
            >
              <TableCell2 className="w-1/2 border-none text-neutral-200 text-xs font-semibold">
                {val?.type === "inc_liq" ? (
                  <MdOutlineAdd color="green" />
                ) : (
                  <AiOutlineMinus color="red" />
                )}
              </TableCell2>
              <TableCell2 className="w-full border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                {timeAgo(val?.timestamp)}
              </TableCell2>
              <TableCell2 className="w-full flex justify-center  border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                <Stack
                  justifyContent="between"
                  gap={1}
                  width="w-full"
                  alignItems="center"
                >
                  <Stack flexDirection="col" width="w-full" alignItems="center">
                    <Typography className="text-xs md:text-sm lg:text-sm font-semibold ">
                      {data?.quoteSymbol}
                    </Typography>
                    <Typography className="text-xs md:text-sm lg:text-sm font-semibold ">
                      {data?.baseSymbol}
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
              <TableCell2 className="w-full flex justify-center border-none text-neutral-200 text-xs md:text-sm lg:text-sm font-semibold">
                {data?.priceUsd && data?.quotePrice && "$"}
                {data?.priceUsd && data?.quotePrice
                  ? !!(
                      data?.token0Name === data?.baseSymbol &&
                      data?.token1Name === data?.quoteSymbol
                    )
                    ? data?.priceUsd * val?.amount_0 +
                        (data?.priceUsd / data?.quotePrice) * val?.amount_1 >
                      1000
                      ? siNumber(
                          toFixedNum(
                            data?.priceUsd * val?.amount_0 +
                              (data?.priceUsd / data?.quotePrice) *
                                val?.amount_1,
                            2
                          )
                        )
                      : toFixedNum(
                          data?.priceUsd * val?.amount_0 +
                            (data?.priceUsd / data?.quotePrice) * val?.amount_1,
                          2
                        )
                    : !!(
                        data?.token1Name === data?.baseSymbol &&
                        data?.token0Name === data?.quoteSymbol
                      ) &&
                      data?.priceUsd * val?.amount_1 +
                        (data?.priceUsd / data?.quotePrice) * val?.amount_0 >
                        1000
                    ? siNumber(
                        toFixedNum(
                          data?.priceUsd * val?.amount_1 +
                            (data?.priceUsd / data?.quotePrice) * val?.amount_0,
                          2
                        )
                      )
                    : toFixedNum(
                        data?.priceUsd * val?.amount_1 +
                          (data?.priceUsd / data?.quotePrice) * val?.amount_0,
                        2
                      )
                  : "-"}
              </TableCell2>
            </TableRow>
          ))}
        {poolData?.length === 0 && (
          <TableRow>
            <TableCell2>
              <Stack
                flexDirection="col"
                justifyContent="center"
                height="h-[200px]"
                alignItems="center"
                alignContent="center"
              >
                <Typography variant="h1">☹️ </Typography>
                <Typography variant="h3">No pool Activity</Typography>
              </Stack>
            </TableCell2>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default AddBody;
