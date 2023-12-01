import Typography from "@/components/custom/Typography";
import { TokenHolders } from "./TokenHolders";
import {  makeWalletAddress } from "@/utils/indexServer";
import Stack from "@/components/custom/Stack";
interface Props {
  holders: TokenHolders[];
}

const HoldersTable: React.FC<Props> = ({ holders }) => {
  const tableRows = holders?.map((e, index) => (
    <tr
      key={index}
      className={
        index % 2 === 0
          ? "flex justify-between items-center p-2"
          : "p-1 flex justify-between items-center bg-[#212E40] border-t border-b border-slate-800"
      }
    >
      <td>
        <Stack alignItems="center" gap={2}  margin="py-4">
          <span className="mr-2 text-center">{index + 1}.</span>
          <Stack flexDirection="col" gap={1}>
            <Stack alignItems="center" gap={1}>
              {/* <Typography className="text-xs font-normal">Binance</Typography> */}
              {/* <Avatar className="h-5 w-5">
                <AvatarImage src="/polygon_icon.svg" alt="@shadcn" />
              </Avatar> */}
            </Stack>

            <Typography className="text-sm font-normal leading-normal">
              {makeWalletAddress(e?.address, 4, 5)}
            </Typography>
          </Stack>
        </Stack>
      </td>

      <td>
        <Stack>
          <Typography className="align-center text-xs md:text-sm lg:text-sm font-normal leading-normal">
            {e.balance
              ? `${(e?.balance * 1).toFixed(2)} (${(e?.percent * 100).toFixed(0)}%)`
              : ""}
          </Typography>{" "}
        </Stack>
      </td>
    </tr>
  ));

  return (
    <>
      <div className=" relative overflow-x-auto text-white text-base font-normal leading-7">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-900 border-b border-slate-800 text-base font-bold leading-tight"></thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </>
  );
};

export default HoldersTable;
