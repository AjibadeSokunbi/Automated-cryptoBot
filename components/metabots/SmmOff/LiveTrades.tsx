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
import { TradeData, WalletDatas } from "@/utils/types";
import { FC } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  historyData: TradeData[];
  walletData: WalletDatas[];
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
          <TooltipTrigger>{icon} {label}</TooltipTrigger>
          <TooltipContent>
            <p>{title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return txImg(total_tx, total_usd);
};

const LiveTrades: FC<Props> = ({ historyData, walletData }) => {
  return (
    <Stack flexDirection="col" sx="w-full md:mt-2 lg:mt-2" height="h-[350px]">
      <Table className="hide-scrollbar overflow-y-auto w-full">
        <TableHeader className="border-none w-full">
          <TableRow className="border-none text-[#6C757D]  flex justify-between py-1.5">
            <TableHead2 className="w-[70px] md:w-auto lg:w-auto">Time</TableHead2>
            <TableHead2 className="w-[100px] md:w-auto lg:w-auto">Label</TableHead2>
            <TableHead2 className="w-[70px] md:w-auto lg:w-auto">Price USD</TableHead2>
            <TableHead2 className="w-[70px] md:w-auto lg:w-auto md:text-left lg:text-left">Total USD</TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody className="w-full">
          {historyData.map((val, index) => (
            <TableRow
              className="w-full border-none flex justify-between gap-x-6"
              key={index}
            >
              <TableCell2 className="w-[70px] md:w-auto lg:w-auto border-none text-neutral-200 text-xs font-normal">
                {timeAgo(val?.time)}
              </TableCell2>
              <TableCell2 className="w-[100px] md:w-auto lg:w-auto border-none text-neutral-200 text-xs font-normal">
                {walletData && (
                  <TxImgComponent
                    total_tx={
                      walletData?.filter(
                        (row) => row.address === val.address
                      )?.[0]?.total_tx
                    }
                    total_usd={
                      walletData?.filter(
                        (row) => row.address === val.address
                      )?.[0]?.total_usd
                    }
                  />
                )}
              </TableCell2>
              <TableCell2 className="w-[70px] md:w-auto lg:w-auto border-none text-neutral-200 text-xs font-normal">
                <Typography
                  className="w-full border-none text-neutral-200 text-xs font-normal"
                  color={val?.type === "sell" ? "#ff0707" : "#06C270"}
                >
                  {" "}
                  {fixNum(val?.priceUSD, 6, true)}
                </Typography>
              </TableCell2>
              <TableCell2 className="w-[70px] md:w-auto lg:w-auto text-center border-none text-neutral-200 text-xs font-normal">
                ${siNumber(toFixedNum(val?.amountUSD, 4))}
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default LiveTrades;
