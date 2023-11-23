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
import { fixNum } from "@/utils";
import useProjectStore from "@/utils/zustanStore/favorites";
import Image from "next/image";
import { FC } from "react";
import { AiOutlineWallet } from "react-icons/ai";
import { FavoriteStar } from "./FavoriteStar";
import Link from "next/link";

interface Props {}

const WatchList: FC<Props> = ({}) => {
  const { favoritedProjects } = useProjectStore();
  const TokenPairData = favoritedProjects?.projectsDetails?.map(
    (token) => token?.tokenPairDetails
  );

  return (
    <Stack flexDirection="col" sx="w-full" height="h-56" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto w-full">
        <TableHeader className="border-none w-full bg-slate-950">
          <TableRow className="border-none flex justify-between px-2  py-1.5">
            <TableHead2 className="text-xs font-bold leading-none">
              Watched Token
            </TableHead2>
            <TableHead2 className="text-xs font-bold leading-none">
              Price/%
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {TokenPairData?.length !== 0 &&
            TokenPairData.map((row, index) => (
              <TableRow
                className="border-none flex justify-between gap-x-6 px-2"
                key={index}
              >
                <TableCell2 className=" w-full border-none text-neutral-200 text-xs font-normal">
                  <Stack gap={1} width="w-full" alignItems="center">
                    <FavoriteStar
                      id={favoritedProjects?.projectsDetails[index]?.id}
                    />
                    <Link
                      href={`/metabots/${favoritedProjects?.projectsDetails[index]?.id}`}
                      className="flex gap-2 items-center"
                    >
                      <Image
                        src={
                          row?.icon !== null ? row?.icon : "/ethereum_icon.svg"
                        }
                        alt="copy"
                        width={100}
                        height={100}
                        className="h-5 w-5 rounded-full"
                      />
                      <Typography className="text-neutral-200 text-sm font-semibold font-['Instrument Sans'] leading-tight tracking-tight">
                        {row?.token0Name}/{row?.token1Name}
                      </Typography>
                    </Link>
                        <div >
                          <AiOutlineWallet className="hidden md:block lg:block" color="grey" size={18} />
                        </div>
                    
                    <Typography
                      color="grey"
                      className="text-zinc-300 text-xs font-normal flex flex-row"
                    >
                  (${fixNum(row?.quotePrice, 6, true)})
                    </Typography>
                  </Stack>
                </TableCell2>

                <TableCell2 className="w-2/12 align-end content-end flex flex-col justify-end border-none text-neutral-200 text-xs font-normal">
                  {" "}
                  <Typography className="text-white text-xs font-bold font-['Instrument Sans'] leading-none  text-end">
                    ${fixNum(row?.priceUsd, 6, true)}
                  </Typography>
                  <div></div>
                  <Typography
                    color={!row.isUp ? "#A52A27" : "#14e70c"}
                    // align="center"
                    className="text-xs font-normal font-['Instrument Sans'] text-end"
                  >
                    {isNaN(row?._24hPriceChange)
                      ? "0.00%"
                      : (row?._24hPriceChange * 1).toFixed(2) + "%"}
                  </Typography>
                </TableCell2>
              </TableRow>
            ))}
          {TokenPairData?.length === 0 && (
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
                  <Typography variant="h3">
                    You have no tokens in WatchList
                  </Typography>
                </Stack>
              </TableCell2>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default WatchList;
