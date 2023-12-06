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
import { getCurrentUser } from "@/lib/session";
import { fixNum } from "@/utils/indexServer";
import { ServerDefaultSession, UserTrade } from "@/utils/types";
import Image from "next/image";

interface Props {}

const Limit = async () => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
  const metabotURL = "https://api.metadapp.com/";

  const headers = new Headers({
    "Content-Type": "application/json",
  });

  const requestOptions: RequestInit = {
    method: "GET",
    headers,
  };

  const response = await fetch(
    `${metabotURL}limitTrade/user/${user?.botdata?.data?._id}`,
    requestOptions
  );

  const responseData = await response?.json();
  const tradeData: UserTrade[] = responseData?.data;

  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden w-full">
        <TableHeader className="border-none w-full bg-slate-950">
        <TableRow className="border-none flex justify-between px-2  py-1.5">
            <TableHead2 className="w-1/2 text-xs font-bold leading-none">
              <Image
                src="/copy.png"
                alt="copy"
                width={100}
                height={100}
                className="w-5 h-3.5"
              />
            </TableHead2>
            <TableHead2 className="w-[55%] md:w-full lg:w-full text-xs font-bold leading-none">
              Type
            </TableHead2>
            <TableHead2 className="w-[80%] md:w-full lg:w-full text-xs font-bold leading-none">
              Token
            </TableHead2>
            <TableHead2 className="w-full text-xs font-bold leading-none">
              Quantity
            </TableHead2>
            <TableHead2 className="text-left text-xs font-bold leading-none">
              Status
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tradeData.map &&
            tradeData?.map((row, index) => (
              <TableRow
                className="border-none flex justify-between gap-x-6"
                key={index}
              >
                <TableCell2 className="w-1/2 border-none text-neutral-200 text-xs font-normal">
                  W1
                </TableCell2>
                <TableCell2 className="w-1/2 border-none text-neutral-200 text-xs font-normal">
                  {row?.action}
                </TableCell2>
                <TableCell2 className="w-full text-center border-none text-neutral-200 text-xs font-normal">
                {row.symbol ? row.symbol : "---"}
                </TableCell2>
                <TableCell2 className="w-full text-center border-none text-neutral-200 text-xs font-normal">
                  {fixNum(Number(row?.amount), 5)}
                </TableCell2>
                <TableCell2 className=" border-none text-neutral-200 text-xs font-normal">
                  {" "}
                  <Typography
                    className="border-none text-neutral-200 text-xs font-normal"
                    color={
                      row?.executed
                        ? "#06C270"
                        : "#FFC107"
                    }
                  >
                    {" "}
                    {row?.executed ? "Confirmed" : "Pending"}
                  </Typography>{" "}
                </TableCell2>
              </TableRow>
            ))}
          {tradeData?.length === 0 && (
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
                  <Typography className="text-lg font-bold md:text-2xl md:font-bold lg:text-2xl lg:font-bold">
                    You have not performed any Limit Trade
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

export default Limit;
