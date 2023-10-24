import React from 'react';
import Stack from '../custom/Stack';
import Typography from '../custom/Typography';
import { Button } from '../ui/button';
import Link from 'next/link';
import {
  BsTwitter,
  BsLinkedin,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#121212] text-white border-t-2 border-[#101720] pl-0 md:pl-20 lg:pl-20 pr-0 md:pr-10 lg:pr-10 py-4 mt-20 mb-16 md:mb-0 lg:mb-0">
      <Stack sx='justify-center md:justify-between lg:justify-between align-center flex-col md:flex-row lg:flex-row'>
        <Stack gap={5} sx='hidden md:flex lg:flex'> 
          <Typography variant='normal' className='text-xs md:text-lg lg:text-lg'>
            <Link href="" className='text-[#EBEBEB]'> About Us </Link>
          </Typography>
          <Typography variant='normal' className='text-xs md:text-lg lg:text-lg text-[#EBEBEB]'>
          <Link href="" className='text-[#EBEBEB]'> Blog </Link>
          </Typography>
        </Stack>
       
        <Stack flexDirection='col' justifyContent='center' alignItems='center' gap={3} sx='flex md:hidden lg:hidden mb-5'>
          <Typography variant='normal' className='text-xs md:text-lg lg:text-lg text-[#EBEBEB]'> Join Our Community </Typography>
          <Stack gap={5}>
            <> <BsTwitter /> </>
            <> <BsDiscord /> </>
            <> <BsTelegram /> </>
            <> <BsLinkedin /> </>  
          </Stack>
        </Stack>
  
        <div className='border-t md:border-t-0 lg:border-t-0 border-[#181F2E] pt-3'>
          <Typography variant='normal' className='text-xs md:text-lg lg:text-lg text-[#EBEBEB] text-center md:text-right lg:text-right'>
          &copy; 2023 Metadapp - All rights reserved.
          </Typography>
        </div>
      </Stack>
    </footer>
  );
};

export default Footer;
