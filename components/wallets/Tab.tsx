import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Table from '@/components/wallets/tokenHoldings/Table';
import TXHistory from '@/components/wallets/txHistory/TXHistory';
//import WalletPerformance from '@/components/wallets/walletPerformance/WalletPerformance';

const Tab = () => {
  return (
    <Tabs defaultValue="tokenHoldings" className="w-full">
      <TabsList className='mb-10 px-1 w-full mx-auto flex justify-start items-center bg-[#0C141F]'>
          <TabsTrigger value="tokenHoldings" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-1/3 md:w-fit lg:w-fit px-2 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base'> Token Holdings </TabsTrigger>
          {/*<TabsTrigger value="walletPerformance" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-2/3 md:w-fit lg:w-fit px-4 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base'> Wallet Performance </TabsTrigger> */}
          <TabsTrigger value="txHistory" className='ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-1/3 md:w-fit lg:w-fit px-2 md:px-10 lg:px-10 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7] text-xs md:text-base lg:text-base'> TX History </TabsTrigger>
      </TabsList>
      <TabsContent value="tokenHoldings">
        <Table />
      </TabsContent>
      {/*<TabsContent value="walletPerformance">
        <WalletPerformance />
  </TabsContent> */}
      <TabsContent value="txHistory">
        <TXHistory />
      </TabsContent>
    </Tabs>
  )
}

export default Tab