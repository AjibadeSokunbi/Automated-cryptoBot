import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tab3";
import { FC, Suspense } from "react";
import { ImSpinner2 } from "react-icons/im";
import Stack from "@/components/custom/Stack";
import BSC from "./BSC";

interface Props {
  params: {
    address: string;
  };
}
export const dynamic = "force-dynamic";
const TNav: FC<Props> = async ({ params }) => {
  return (
    <Tabs
      defaultValue="buy"
      className="w-full flex flex-col  bg-[#0C141F] rounded-lg shadow border border-slate-800 pb-2"
    >
      <TabsList className="w-full  bg-[#0A1019] flex justify-between h-10 border-b border-slate-800">
        <TabsTrigger
          value="buy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          value="sell"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          value="limit"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Limits
        </TabsTrigger>
        <TabsTrigger
          value="copy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-xs md:text-sm lg:text-[12px] font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Copy Trade
        </TabsTrigger>
      </TabsList>
      <Suspense
        fallback={
          <Stack
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            height="h-[300px]"
          >
            <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
          </Stack>
        }
      >
        <BSC params={params} />
      </Suspense>
    </Tabs>
  );
};

export default TNav;
