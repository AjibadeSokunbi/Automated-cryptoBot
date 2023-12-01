import React from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { MdOutlineContentCopy } from "react-icons/md";
import Tab from '@/components/wallets/Tab';
import Send from '@/components/wallets/Send';
import Settings from '@/components/wallets/Settings';
import CreateWallet from '@/components/wallets/CreateWallet';

const Wallets = () => {
  return (
    <Stack flexDirection='col' sx='w-full px-3 md:px-0 lg:px-0'>
        <Stack flexDirection='col' sx='md:border lg:border md:border-[#212E40] lg:border-[#212E40] w-full md:w-[55%] lg:w-[55%] h-auto md:p-5 lg:p-5 mb-10 md:mb-20 lg:mb-20 rounded-md'>
            <CreateWallet />
            <Stack alignItems='center' sx='mb-2 md:mb-5 lg:mb-5'>
                <Typography variant='semibold' className='text-center text-xs md:text-sm lg:text-sm mr-1'> <span className='text-[#E7E7E7]'> Wallet Balance: </span> </Typography>
                <Typography variant='bold' className='text-center text-sm md:text-2xl lg:text-2xl'> <span className='text-[#B4D2FE]'> $576.77 </span> </Typography>
            </Stack>
            <Stack alignItems='center' justifyContent='between' sx='w-full'>
                <Stack alignItems='center'>
                    <Typography variant='normal' className='text-[8.5px] md:text-base lg:text-base mr-1 hidden md:inline lg:inline'> <span className='text-[#E0E0E0]'> 0x9c8bb8355629a72eb506d14b29bc3a9856107d21 </span> </Typography>
                    
                    <Typography variant='normal' className='text-[8.5px] md:text-base lg:text-base mr-1 inline md:hidden lg:hidden'> <span className='text-[#E0E0E0]'> 0x9c8bb83556.... </span> </Typography>
                    <MdOutlineContentCopy className="text-[#DBDBDC] text-lg cursor-pointer"/>
                </Stack>
                <Stack alignItems='center'>
                    <Send />
                    <Settings />
                </Stack>
            </Stack>
        </Stack>
        <Tab />
    </Stack>
  )
}

export default Wallets