"use client";
import React, {FC, useState} from 'react';
import Stack from '@/components/custom/Stack'
import Typography from '@/components/custom/Typography'
import AllTable from '@/components/wallets/txHistory/all/AllTable';
import LimitsTable from '@/components/wallets/txHistory/limits/LimitsTable';
import TransfersTable from '@/components/wallets/txHistory/transfers/TransfersTable';
import { Transfer, UserLimiTrade, UserTrade } from '@/utils/types';

interface Props {
  tradeData: UserTrade[]
  tradeData2: UserLimiTrade[]
  TransferData:  Transfer[];
}

const TXHistory: FC<Props> = ({tradeData, tradeData2, TransferData}) => {

    const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Stack flexDirection='col' sx='w-full'>

        <Stack alignItems='center' sx='w-full gap-10 pl-3 md:pl-10 lg:pl-10 mb-10'>
            <Stack
            alignItems="center"
            sx="text-zinc-400 text-lg tabs gap-5 md:gap-10 lg:gap-10 w-full md:w-fit lg:w-fit"
            flexDirection="row"
            >
                <div
                className="tab w-fit cursor-pointer"
                onClick={() => handleTabClick(0)}
                >
                    <Typography variant='medium' className='text-sm'> <span className={`${activeTab === 0 ? 'text-[#FFC107] underline underline-offset-3' : 'text-[#6C757D]'}`}> All </span> </Typography>
                </div>
                <div
                className="tab w-fit cursor-pointer"
                onClick={() => handleTabClick(1)}
                >
                    <Typography variant='medium' className='text-sm'> <span className={`${activeTab === 1 ? 'text-[#FFC107] underline underline-offset-3' : 'text-[#6C757D]'}`}> Limits </span> </Typography>
                </div>
                {/* <div
                className="tab w-fit cursor-pointer"
                onClick={() => handleTabClick(2)}
                >
                    <Typography variant='medium' className='text-sm'> <span className={`${activeTab === 2 ? 'text-[#FFC107] underline underline-offset-3' : 'text-[#6C757D]'}`}> Copied Trades </span> </Typography>   
                </div> */}
                <div
                className="tab w-fit cursor-pointer"
                onClick={() => handleTabClick(3)}
                >
                    <Typography variant='medium' className='text-sm'> <span className={`${activeTab === 3 ? 'text-[#FFC107] underline underline-offset-3' : 'text-[#6C757D]'}`}> Transfers </span> </Typography>
                </div>
            </Stack>
        </Stack>

        {activeTab === 0 && (
          <>
            <AllTable tradeData={tradeData}   />
          </>
        )}

        {activeTab === 1 && (
          <>
            <LimitsTable tradeData2={tradeData2} />
          </>
        )}
{/* 
        {activeTab === 2 && (
          <>
            <CopiedTradesTable />
          </>
        )} */}

        {activeTab === 3 && (
          <>
            <TransfersTable TransferData={TransferData} />
          </>
        )}
        
    </Stack>
  )
}

export default TXHistory