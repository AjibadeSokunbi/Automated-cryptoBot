import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tab3";
import Buy from "./Buy";
import Sell from "./Sell";
import Limit from "./Limit";
import CopyTX from "./CopyTX";

interface Props {}

const TNav = () => {
  return (
    <Tabs
      defaultValue="buy"
      className="w-full flex flex-col  bg-[#0C141F] rounded-lg shadow border border-slate-800 pb-2"
    >
      <TabsList className="w-full  bg-[#0A1019] flex justify-between h-10 border-b border-slate-800">
        <TabsTrigger
          value="buy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Buy
        </TabsTrigger>
        <TabsTrigger
          value="sell"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Sell
        </TabsTrigger>
        <TabsTrigger
          value="limit"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-r data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Limits
        </TabsTrigger>
        <TabsTrigger
          value="copy"
          className="cursor-pointer text-center h-full py-2 text-white w-full  border-slate-800 text-base font-bold font-['Instrument Sans'] leading-tight   data-[state=active]:border-l data-[state=active]:bg-gray-900 data-[state=active]:text-[#0D6EFD]"
        >
          Copy Trade
        </TabsTrigger>

      </TabsList>
      <TabsContent value="buy" className="w-full ">
            <Buy/> 
        </TabsContent>
        <TabsContent value="sell" className="w-full ">
            <Sell/> 
        </TabsContent>
        <TabsContent value="limit" className="w-full ">
            <Limit/> 
        </TabsContent>
        <TabsContent value="copy" className="w-full ">
            <CopyTX/> 
        </TabsContent>
    </Tabs>
  );
};

export default TNav;
