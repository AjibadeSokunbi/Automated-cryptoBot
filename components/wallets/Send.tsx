import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import Typography from '@/components/custom/Typography';
import Stack from '@/components/custom/Stack';
import { Input } from '@/components/ui/input';

const Send = () => {
  return (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="default" size="sm" className='bg-[#212E40] text-[#E7E7E7] font-bold text-[10px] md:text-base lg:text-base mr-2'> Send </Button>
        </DialogTrigger>
        <DialogContent className='bg-[#0C141F] py-3 px-5 border-none'>
        <Typography variant='bold' className='text-lg mb-3'> Send ETH </Typography>
            <Stack flexDirection='col' sx='mb-3'>
                <Typography variant='bold' className='text-sm mb-2'> <span className='text-[#E0E0E0]'> Wallet </span> </Typography>
                <Input placeholder='0xoo...' type='text' className='w-full px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none' />
            </Stack>
            <Stack flexDirection='col' sx='mb-3'>
                <Typography variant='bold' className='text-sm mb-2'> <span className='text-[#E0E0E0]'> Amount </span> </Typography>
                <Stack sx="w-full">
                    <Input placeholder='0.0' type='number' className='w-full px-2 py-1 rounded-none rounded-tl-md rounded-bl-md border border-[#212E40] bg-transparent active:outline-none active:border-none' />
                    <Stack justifyContent='center' alignItems='center' sx='bg-[#212E40] px-3 py-1 rounded-tr-md rounded-br-md'>
                        <Typography variant='bold' className='text-base'> <span className='text-[#CED4DA]'> ETH </span> </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Stack alignItems='center' justifyContent='between' sx='mb-5 w-full gap-5'>
                <Button variant="default" size="default" className='w-1/3 text-base font-semibold bg-[#161F2C]'> 0.2 <span className='font-bold'> ETH </span> </Button>    
                <Button variant="default" size="default" className='w-1/3 text-base font-semibold bg-[#161F2C]'> 0.5 <span className='font-bold'> ETH </span> </Button>    
                <Button variant="default" size="default" className='w-1/3 text-base font-semibold bg-[#161F2C]'> 1 <span className='font-bold'> ETH </span> </Button>    
            </Stack>
            <Button variant="default" size="default" className='w-full text-base font-semibold'> Send </Button>
        </DialogContent>
    </Dialog>
  )
}

export default Send