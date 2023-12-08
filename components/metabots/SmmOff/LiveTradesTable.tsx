"use client";
import Typography from "@/components/custom/Typography";
import { TableBody, TableCell2, TableRow } from "@/components/ui/table";
import { fixNum, siNumber, timeAgo, toFixedNum } from "@/utils/indexServer";
import { TradeData, WalletDatas } from "@/utils/types";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Stack from "@/components/custom/Stack";
import {  useQuery } from "@tanstack/react-query";
import { fetchFeeData, fetchWalletTxn } from "@/utils/dataPool";

interface Props {
  historyData: TradeData[];
  walletData: WalletDatas[];
  params: {
    address: string;
  };
}

const TxImgComponent = (props: any) => {
  const { total_tx, total_usd } = props;

  const txImg = (total_tx: any, total_usd: any) => {
    let icon = null;
    let title = "";
    let label = "";

    if (total_tx > 1000) {
      icon = "🤖";
      label = "Likely a bot";
      title = "Wallet with over $1k active transactions in the last 30 days";
    } else {
      switch (true) {
        case total_usd > 10000 && total_usd < 100000:
          icon = "🐂";
          label = "Bull Trader";
          title =
            "Wallet with $10k - $100k trading activity in the last 30 days";
          break;

        case total_usd > 100000 && total_usd < 500000:
          icon = "🦈";
          label = "Whale Trader";
          title =
            "Wallet with $100k - $500k trading activity in the last 30 days";

          break;

        case total_usd > 500000:
          icon = "🐳";
          label = "Super Whale";
          title = "Wallet with over $500k trading activity in the last 30 days";
          break;

        default:
          break;
      }
    }

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {icon} {label}
          </TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return txImg(total_tx, total_usd);
};

const LiveTradesTable: FC<Props> = ({ historyData, walletData, params }) => {

  const address = params.address;
  const { data, isRefetching } = useQuery<TradeData[]>({
    refetchIntervalInBackground: true,
    refetchInterval: 20 * 1000,
    queryKey: ["stream-hydrate-users"],
    queryFn: () => fetchFeeData(address as string),
    initialData: historyData,
    staleTime: 20 * 1000,
    enabled: !!historyData,
  });

  const transaction = data?.map((v: TradeData) => v?.address);
  const addresses = transaction
    ? transaction?.filter(
        (item: string, index: number) => transaction?.indexOf(item) === index
      )
    : [];

  const { data: walletAS, error } = useQuery({
    queryFn: () => fetchWalletTxn(addresses),
    queryKey: ["wallets"],
    refetchInterval: 20 * 1000,
    staleTime: 20 * 1000,
    initialData: walletData,
    enabled: !!addresses,
  });

  const walletTx: WalletDatas[] = walletAS.data;

  return (
    <TableBody className="w-full">
      {data?.map((val, index) => (
        <TableRow
          className="w-full border-none flex justify-between gap-x-6"
          key={index}
        >
          <TableCell2 className="w-[60%] md:w-full lg:w-full border-none text-neutral-200 text-xs font-normal">
            {timeAgo(val?.time)}
          </TableCell2>
          <TableCell2 className="w-full border-none text-neutral-200 text-xs font-normal">
            {walletTx ? (
              <TxImgComponent
                total_tx={
                  walletTx?.filter((row) => row.address === val.address)?.[0]
                    ?.total_tx
                }
                total_usd={
                  walletTx?.filter((row) => row.address === val.address)?.[0]
                    ?.total_usd
                }
              />
            ) : (
              <TxImgComponent
                total_tx={
                  walletData?.filter((row) => row.address === val.address)?.[0]
                    ?.total_tx
                }
                total_usd={
                  walletData?.filter((row) => row.address === val.address)?.[0]
                    ?.total_usd
                }
              />
            )}
          </TableCell2>
          <TableCell2 className="w-full border-none text-neutral-200 text-xs font-normal">
            <Typography
              className="w-full border-none text-neutral-200 text-xs font-normal"
              color={val?.type === "sell" ? "#ff0707" : "#06C270"}
            >
              {" "}
              {fixNum(val?.priceUSD, 6, true)}
            </Typography>
          </TableCell2>
          <TableCell2 className="w-full text-center border-none text-neutral-200 text-xs font-normal">
            ${siNumber(toFixedNum(val?.amountUSD, 4))}
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
  );
};

export default LiveTradesTable;
