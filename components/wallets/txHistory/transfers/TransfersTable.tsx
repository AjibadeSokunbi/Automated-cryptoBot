import React, { FC, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Image from "next/image";
import TransfersTableMobile from "./TransfersTableMobile";
import { Transfer } from "@/utils/types";
import { convertUnixToHuman, fixNum, getAddressName, makeWalletAddress, siNumber, toFixedNum } from "@/utils";
import { AvatarImage } from "@/components/ui/avatar";
import { Avatar } from "@radix-ui/react-avatar";
import { BsArrowDownLeft, BsArrowUpRight } from "react-icons/bs";
import { useToast } from "@/components/ui/use-toast";

interface Props {
  TransferData: Transfer[];
}

const TransfersTable: FC<Props> = ({ TransferData }) => {
  const { toast } = useToast();
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 9000);
    toast({
      variant: "copied",
      description: "Wallet Address has been copied",
    });
  };

  const tableRows = TransferData?.map((item, index) => (
    <tr
      key={index}
      className={
        index % 2 === 0 ? "bg-[#212E40] border-t border-b border-slate-800" : ""
      }
    >
      <th
        scope="row"
        className={
          index % 2 === 0
            ? "px-5 md:px-2 lg:px-2 md:pl-6 lg:pl-6 py-2 md:py-4 lg:py-4 font-medium whitespace-nowrap text-white"
            : "px-5 md:px-2 lg:px-2 md:pl-6 lg:pl-6 py-2 md:py-4 lg:py-4 font-medium whitespace-nowrap"
        }
      >
        <Stack flexDirection="row" gap={2} alignItems="center">
          <Typography
            variant="normal"
            className="text-[9px] md:text-sm lg:text-sm"
          >
            {convertUnixToHuman(Number(item?.timestamp))}
          </Typography>
        </Stack>
      </th>

      <td
        className={
          item?.event === "Swap" || item?.event === "AddLiquidity"
            ? "px-5 md:px-10 lg:px-10 py-1 md:py-2 lg:py-2"
            : "px-5 md:px-10 lg:px-10 py-2 md:py-4 lg:py-4"
        }
      >
        <Stack
          flexDirection={item?.event === "AddLiquidity" ? "col" : "row"}
          alignItems={item?.event === "AddLiquidity" ? "" : "center"}
          gap={1}
        >
          <Typography
            variant="normal"
            color={item?.event === "Swap" ? "#5ADBF5" : "white"}
            className={
              item?.event === "Swap"
                ? "text-[8px] md:text-base lg:text-base font-normal leading-7"
                : "text-[8px] md:text-base lg:text-base font-normal leading-7"
            }
          >
            {item?.event.toLocaleUpperCase()}
          </Typography>
          <Typography
            variant="normal"
            className="text-[8px] md:text-base lg:text-base"
          >
            {item?.event === "AddLiquidity" ? (
              " "
            ) : item?.event === "Swap" ? (
              <Avatar className="h-4 md:h-5 lg:h-5 w-4 md:w-5 lg:w-5">
                <AvatarImage src="/swapIcon.svg" alt="@shadcn" />
              </Avatar>
            ) : item?.event === "sent" ? (
              <BsArrowUpRight color="red" />
            ) : (
              <BsArrowDownLeft color="green" />
            )}
          </Typography>
        </Stack>
      </td>
      <td>
        <div
          className={
            item?.event === "Swap" || item?.event === "AddLiquidity"
              ? "py-2 md:py-4 lg:py-4 items-center w-[120px] md:w-auto lg:w-auto"
              : "py-2 md:py-4 lg:py-4 items-center w-[120px] md:w-auto lg:w-auto"
          }
        >
          {item?.event === "sent" && (
            <Typography
              variant="normal"
              className="text-[8px] md:text-xs lg:text-xs"
            >
              {getAddressName(item?.to)}
            </Typography>
          )}
          {item?.event === "received" && (
            <Typography
              variant="normal"
              className="text-[8px] md:text-xs lg:text-xs"
            >
              {getAddressName(item?.from)}
            </Typography>
          )}
          <div
            className="cursor-pointer"
            onClick={() =>
              handleCopy(item?.event === "sent" ? item?.to : item?.from)
            }
          >
            {item?.event === "Swap"
              ? " "
              : item?.event === "sent"
              ? makeWalletAddress(item?.to, 5, 3)
              : makeWalletAddress(item?.from, 5, 3)}
          </div>
        </div>
      </td>

      <td>
        <div
          className={
            item?.event === "Swap" || item?.event === "AddLiquidity"
            ? "md:px-5 lg:px-5 py-2 md:py-4 lg:py-4 flex flex-col items-start w-[170px] md:w-auto lg:w-auto"
            : "md:px-5 lg:px-5 py-2 md:py-4 lg:py-4 flex flex-col items-start w-[170px] md:w-auto lg:w-auto"
          }
        >
          <Stack
            sx={
              item?.event === "received"
                ? "text-green-600 text-sm font-normal leading-normal ml-1"
                : item?.event === "sent"
                ? "text-red-800 text-sm font-normal leading-normal ml-1"
                : item?.event === "Swap"
                ? "text-red-800 text-sm font-normal leading-normal ml-1"
                : "text-white text-sm font-normal leading-normal ml-1"
            }
          >
            {item?.event === "sent" && (
              <Image
                src={item?.tokensOut[0]?.logo}
                width={20}
                height={20}
                className="rounded-full"
                alt="S"
              />
            )}
            {item?.event !== "sent" && (
              <Image
                src={item?.tokensIn[0]?.logo}
                width={20}
                height={20}
                className="rounded-full"
                alt="S"
              />
            )}
            <Stack gap={2} margin="mx-1">
              <Typography
                variant="normal"
                className="text-[8px] md:text-sm lg:text-sm"
              >
                {item?.event === "sent" &&
                  fixNum(item?.tokensOut[0]?.value, 6, true)}
                {item?.event !== "sent" &&
                  fixNum(item?.tokensIn[0]?.value, 6, true)}
                <span>
                  {" "}
                  {item?.event === "sent" && item?.tokensOut[0]?.asset}
                  {item?.event !== "sent" && item?.tokensIn[0]?.asset}
                </span>
                <span>
                  ( ${" "}
                  {item?.event === "sent" &&
                    siNumber(toFixedNum(item?.tokensOut[0]?.usdAmount))}
                  {item?.event !== "sent" &&
                    siNumber(toFixedNum(item?.tokensIn[0]?.usdAmount))}
                  )
                </span>
              </Typography>
            </Stack>
          </Stack>

          {item?.event === "AddLiquidity" && (
            <Stack margin="mt-1">
              <Avatar className="h-4 md:h-5 lg:h-5 w-4 md:w-5 lg:w-5">
                <AvatarImage src={item?.tokensOut[0]?.logo} alt="@shadcn" />
              </Avatar>
              <Stack margin="ml-2">
                <Typography
                  variant="normal"
                  className="text-[5px] md:text-sm lg:text-sm"
                >
                  {item?.tokensOut[0]?.value &&
                    item?.tokensOut[0]?.value?.toFixed(2)}{" "}
                  <span className="px-1" />
                  <span className="">
                    {item?.tokensOut[0]?.asset} ($
                    {item?.tokensOut[0]?.usdAmount &&
                      siNumber(toFixedNum(item?.tokensOut[0]?.usdAmount))}
                    )
                  </span>
                </Typography>
              </Stack>
            </Stack>
          )}
          <Stack justifyContent="center" sx="w-full">
            <Typography
              variant="normal"
              className="text-[5px] md:text-sm lg:text-sm text-center"
            >
              {item?.event === "Swap" && "for"}
            </Typography>
          </Stack>

          {item?.event === "Swap" && (
            <Stack
              margin="mt-1"
              sx="text-green-600 text-sm font-normal leading-normal ml-1"
            >
              <Image
                src={item?.tokensOut[0]?.logo}
                width={20}
                height={20}
                className="rounded-full"
                alt="S"
              />
              <Stack margin="ml-2">
                <Typography
                  variant="normal"
                  className="text-[8px] md:text-sm lg:text-sm"
                >
                  {item?.tokensOut[0]?.value &&
                    fixNum(item?.tokensOut[0]?.value, 6, true)}{" "}
                  <span className="px-1" />
                  <span className="">
                    {item?.tokensOut[0]?.asset} ($
                    {item?.tokensOut[0]?.usdAmount &&
                      siNumber(toFixedNum(item?.tokensOut[0]?.usdAmount))}
                    )
                  </span>
                </Typography>
              </Stack>
            </Stack>
          )}
        </div>
      </td>
      <td>
        <div
          className={`${
            index % 2 === 0
              ? "pl-1 py-2 md:py-4 lg:py-4"
              : "pl-1 py-2 md:py-4 lg:py-4"
          } w-[120px] md:w-auto lg:w-auto`}
        >
          <Typography
            variant="normal"
            color="#B5B6B6"
            className="text-[9px] md:text-sm lg:text-sm"
          >
            Gas Fee:
            <span className="ml-1 text-white">
              {fixNum(Number(item?.gas), 6, true)} Gwei
            </span>
          </Typography>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <Stack sx="w-full overflow-x-hidden hidden md:flex lg:flex">
        <table className="w-full text-left">
          <thead className="bg-[#0A1019] font-bold leading-tight w-full">
            <tr className="flex items-center justify-between py-3 px-2 md:px-10 lg:px-10 w-full">
              <th className="w-1/5">
                <div>
                  <Typography
                    variant="black"
                    className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"
                  >
                    {" "}
                    Time{" "}
                  </Typography>
                </div>
              </th>
              <th className="w-1/5">
                <div>
                  <Typography
                    variant="black"
                    className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"
                  >
                    {" "}
                    Action{" "}
                  </Typography>
                </div>
              </th>
              <th className="w-1/5">
                <div></div>
              </th>
              <th className="w-1/5">
                <div></div>
              </th>
              <th className="w-1/5">
                <div></div>
              </th>
            </tr>
          </thead>
          <tbody className="w-full">
          {tableRows}
          </tbody>
        </table>
      </Stack>
      <TransfersTableMobile />
    </>
  );
};

export default TransfersTable;
