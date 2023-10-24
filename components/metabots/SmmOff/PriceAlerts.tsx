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
import { HistoryMockData } from "@/utils/MockData";
import { BiSolidDownArrow, BiSolidUpArrow, BiTrashAlt } from "react-icons/bi";

interface Props {}

const PriceAlerts = () => {
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[210px]" padding="mt-2">
      <Table className="hide-scrollbar overflow-y-auto hidden md:table lg:table w-full">
        <TableHeader className="border-none w-full">
          <TableRow className="w-full text-[#6C757D] border-none flex justify-between text-sm font-semibold font-['Instrument Sans']">
            <TableHead2 className="w-full ">Set Alert Date</TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Token
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Condition
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Alert Price
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Status
            </TableHead2>
            <TableHead2 className="w-full flex justify-center ">
              Alert Type
            </TableHead2>
            <TableHead2 className=" w-full flex justify-end ">
              Exp. Date
            </TableHead2>
          </TableRow>
        </TableHeader>

        <TableBody>
          {HistoryMockData.map((row, index) => (
            <TableRow className="border-none flex justify-between" key={index}>
              <TableCell2 className="w-full border-none text-neutral-200 text-xs font-semibold">
                4-07-23 07:00:03am
              </TableCell2>
              <TableCell2 className="w-full flex justify-center  border-none text-neutral-200 text-sm font-semibold">
                ETH
              </TableCell2>
              <TableCell2
                className={`w-full flex justify-center items-center border-none text-neutral-200 text-sm font-semibold text-${
                  row.action === "Sent" ? "green-500" : "red-500"
                }`}
              >
                {row.action === "Sent" ? "Drops Below" : "Rise Above"}
                {row.action === "Sent" ? <BiSolidDownArrow /> : <BiSolidUpArrow />}
              </TableCell2>
              <TableCell2 className="w-full flex justify-center  border-none text-neutral-200 text-sm font-semibold">
                $0.04679
              </TableCell2>
              <TableCell2 className="w-full flex justify-center  border-none text-neutral-200 text-sm font-semibold">
                {row.action === "Sent" ? "Completed" : "Pending"}
              </TableCell2>
              <TableCell2 className="w-full flex justify-center border-none text-neutral-200 text-sm font-semibold">
                Telegram
              </TableCell2>
              <TableCell2 className="w-full items-center flex justify-end border-none text-neutral-200 text-xs font-semibold ">
              15-08-23 8:23 PM<BiTrashAlt />
      
              </TableCell2>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
};

export default PriceAlerts;
