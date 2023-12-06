import React from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { MdOutlineContentCopy } from "react-icons/md";
import Tab from '@/components/wallets/Tab';
import Send from '@/components/wallets/Send';
import Settings from '@/components/wallets/Settings';
import CreateWallet from '@/components/wallets/CreateWallet';
import { getClient } from '@/lib/ApolloClient';
import { ServerDefaultSession, UserBalanceInfoData } from '@/utils/types';
import { USER_TOKEN_INFO as query } from "@/utils/Queries";
import { getCurrentUser } from '@/lib/session';
import { makeWalletAddress } from '@/utils/indexServer';
import CopyAddress from '../metabots/Wallet/Copy';

const Wallets = async () => {
    const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;
    const wallet = user?.botdata?.data?.wallet[0]

    const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;
    const metabotApiKey = `${key}:${user?.botdata?.data?.token}`;
    
    const res = await fetch("https://api.metadapp.com/auth", {
      next: { tags: ["wallets"] },
      headers: {
        Authorization: metabotApiKey as string,
        "Content-Type": "application/json",
      },
    });

    const walletIds  = await res.json()

  return (
    <Stack flexDirection='col' sx='w-full px-3 md:px-0 lg:px-0'>
        <Stack flexDirection='col' sx='md:border lg:border md:border-[#212E40] lg:border-[#212E40] w-full md:w-[55%] lg:w-[55%] h-auto md:p-5 lg:p-5 mb-10 md:mb-20 lg:mb-20 rounded-md'>
            <CreateWallet wallets={walletIds.data.wallet} token={user.botdata.data.token as string} />
            <Stack alignItems='center' sx='mb-2 md:mb-5 lg:mb-5'>
                <Typography variant='semibold' className='text-center text-xs md:text-sm lg:text-sm mr-1'> <span className='text-[#E7E7E7]'> Wallet Balance: </span> </Typography>
                <Typography variant='bold' className='text-center text-sm md:text-2xl lg:text-2xl'> <span className='text-[#B4D2FE]'> $576.77 </span> </Typography>
            </Stack>
            <Stack alignItems='center' justifyContent='between' sx='w-full'>
                <Stack alignItems='center'>
                    <Typography variant='normal' className='text-[8.5px] md:text-base lg:text-base mr-1 hidden md:inline lg:inline'> <span className='text-[#E0E0E0]'> {wallet} </span> </Typography>
                    
                    <Typography variant='normal' className='text-[8.5px] md:text-base lg:text-base mr-1 inline md:hidden lg:hidden'> <span className='text-[#E0E0E0]'> {makeWalletAddress(wallet , 6, 0)} </span> </Typography>
                    <CopyAddress address= {wallet}/>
                </Stack>
                <Stack alignItems='center'>
                    {/* <Send /> */}
                    <Settings />
                </Stack>
            </Stack>
        </Stack>
        <Tab />
    </Stack>
  )
}

export default Wallets