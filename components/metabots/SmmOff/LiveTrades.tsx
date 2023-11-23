import Stack from "@/components/custom/Stack";
import {
  Table,
  TableBody,
  TableCell2,
  TableHead2,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FC, Suspense } from "react";
import LiveFetch from "./LiveFetch";
import { ImSpinner2 } from "react-icons/im";

interface Props {
  params: {
    address: string;
  };
}

const LiveTrades: FC<Props> = ({ params }) => {
  return (
    <Stack flexDirection="col" sx="w-full md:mt-2 lg:mt-2" height="h-[350px]">
      <Table className="hide-scrollbar overflow-y-auto w-full">
        <TableHeader className="relative border-none w-full">
          <TableRow className="border-none text-[#6C757D]  flex justify-between py-1.5">
            <TableHead2 className="w-full  md:w-auto lg:w-auto">
              Time
            </TableHead2>
            <TableHead2 className="w-[80%] md:w-auto lg:w-auto">
              Label
            </TableHead2>
            <TableHead2 className="w-full  md:w-auto lg:w-auto">
            <span className="hidden md:inline lg:inline "> Price USD </span>
              <span className="inline md:hidden lg:hidden text-left">Price </span>
            </TableHead2>
            <TableHead2 className="text-left w-[60%] md:w-auto lg:w-auto">
              {" "}
              <span className="hidden md:inline lg:inline "> Total USD </span>
              <span className="inline md:hidden lg:hidden ">Total </span>
            </TableHead2>
          </TableRow>
        </TableHeader>
        <Suspense
          fallback={
            <TableBody>
              <TableRow>
                <TableCell2>
                  <Stack
                    alignItems="center"
                    alignContent="center"
                    justifyContent="center"
                    height="h-[200px]"
                  >
                    <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
                  </Stack>
                </TableCell2>
              </TableRow>
            </TableBody>
          }
        >
          <LiveFetch params={params} />
        </Suspense>
      </Table>
    </Stack>
  );
};

export default LiveTrades;
