
import React, {useState} from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import {HiArrowNarrowRight} from "react-icons/hi";
import { BsEye } from 'react-icons/bs';
import { FaRegEyeSlash } from 'react-icons/fa';
import CardsMobile from '@/components/referrals/CardsMobile';
import { ServerDefaultSession } from '@/utils/types';
import { getCurrentUser } from '@/lib/session';


const Cards = async () => {
  const user: ServerDefaultSession =
    (await getCurrentUser()) as ServerDefaultSession;

  return (
    <>
      <Stack gap={2} alignItems='center' sx='w-full mb-10 gap-7 hidden md:flex lg:flex'>
        <div className='w-1/3 h-48 rounded-xl bg-[#0C141F] flex flex-col items-start justify-between px-7 py-5'>
          <Typography variant='black' className='text-5xl'> <span className='text-[#0C63E4]'> {user?.botdata?.data?.points} </span> </Typography>
          <Typography variant='normal' className='text-[28px]'> Metadapp Points </Typography>
        </div>

        <div className='w-1/3 h-48 rounded-xl bg-[#0C141F] flex flex-col items-start justify-between px-7 py-5'>
          <Typography variant='black' className='text-5xl'>   <span className='text-[#FFC107]'> {user.botdata.data.referred.length} </span> </Typography>
          <div className='flex justify-between items-center w-full'>
            <Typography variant='normal' className='text-[28px]'> Total Referred Users </Typography>
            <HiArrowNarrowRight className='text-base text-[#FFC107] inline-block' />
          </div>
        </div>

        {/* <div className='w-1/3 h-48 rounded-xl bg-[#0C141F] flex flex-col items-start justify-between px-7 py-5'>
          <div className='w-full'>
            {visible ? (
              <>
                <div className='flex justify-between items-center w-full mb-1'>
                  <Typography variant='black' className='text-4xl'>   <span className='text-[#0C63E4]'> ETH 3.5000 </span> </Typography>
                  <BsEye className='text-lg cursor-pointer' onClick={handleVisibility} />
                </div>
                <Typography variant='normal' className='text-base md:text-xl lg:text-xl'>   <span className='text-[#FFF]'> ($5,572.21) </span> </Typography>
              </>
            ) : (
              <>
                <div className='flex justify-between items-center w-full mb-1'>
                  <Typography variant='black' className='text-4xl'>   <span className='text-[#0C63E4]'> ETH XXXXX </span> </Typography>
                  <FaRegEyeSlash className='text-xl cursor-pointer' onClick={handleVisibility} />
                </div>
                <Typography variant='normal' className='text-xl'>   <span className='text-[#FFF]'> (XXXXX) </span> </Typography>
              </>
            )}
          </div>
          <div className='flex justify-between items-center w-full'>
            <Typography variant='normal' className='text-[22px]'> Referral Earnings </Typography>
            <button className='text-base underline cursor-pointer font-normal'> Withdraw </button>
          </div>
        </div> */}
      </Stack>

      <CardsMobile />
    </>
  )
}

export default Cards