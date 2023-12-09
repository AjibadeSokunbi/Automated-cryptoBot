"use client";
import React, {useState} from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import {HiArrowNarrowRight} from "react-icons/hi";
import { BsEye } from 'react-icons/bs';
import { FaRegEyeSlash } from 'react-icons/fa';

const CardsMobile = () => {

    const [visible, setVisible] = useState(true)

    const handleVisibility = () => {
        setVisible(!visible)
    }

  return (
    <Stack flexDirection='col' justifyContent='between' alignItems='center' sx='w-full mb-10 flex md:hidden lg:hidden'>
        <Stack alignItems='center' justifyContent='between' gap={5} sx='w-full mb-7'>
            <div className='w-1/2 h-24 rounded-xl bg-[#0C141F] flex flex-col items-center justify-between px-3 py-2'>
                <div className='w-full'>
                {visible ? (
                    <>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <Typography variant='black' className='text-sm'> <span className='text-[#0C63E4]'> ETH 3.5000 </span> </Typography>
                        <BsEye className='text-base' onClick={handleVisibility} />
                    </div>
                    <Typography variant='normal' className='text-[10px]'>   <span className='text-[#FFF]'> ($5,572.21) </span> </Typography>
                    </>
                ) : (
                    <>
                    <div className='flex justify-between items-center w-full mb-1'>
                        <Typography variant='black' className='text-sm'> <span className='text-[#0C63E4]'> ETH XXXXX </span> </Typography>
                        <FaRegEyeSlash className='text-lg' onClick={handleVisibility} />
                    </div>
                    <Typography variant='normal' className='text-[10px]'>   <span className='text-[#FFF]'> (XXXXX) </span> </Typography>
                    </>
                )}
                </div>
                <div className='flex justify-between items-center w-full'>
                    <Typography variant='normal' className='text-[10px]'> Referral Earnings </Typography>
                    <button className='text-[10px] underline cursor-pointer font-normal'> Withdraw </button>
                </div>
            </div>

            <div className='w-1/2 h-24 rounded-xl bg-[#0C141F] flex flex-col justify-between px-3 py-2'>
                <Typography variant='black' className='text-sm'> <span className='text-[#FFC107]'> 15 </span> </Typography>
                <Typography variant='normal' className='text-[10px]'> Total Referred Users </Typography>
            </div>
        </Stack>

        <div className='w-full h-24 rounded-xl bg-[#0C141F] flex flex-col justify-between px-3 py-2'>
            <Typography variant='black' className='text-sm'> <span className='text-[#0C63E4]'> 75 </span> </Typography>
            <Typography variant='normal' className='text-[10px]'> Metadapp Points </Typography>
        </div>
    </Stack>
  )
}

export default CardsMobile