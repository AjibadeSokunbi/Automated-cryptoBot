"use client";
import React, {useState} from 'react';
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Image from 'next/image';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { TradeProfit, TradeLoss, TradeContent } from "@/utils/MockData";
import { Button } from '@/components/ui/button';
import WalletPerformanceMobile from './WalletPerformanceMobile';

const WalletPerformance = () => {

    const [openProfit, setOpenProfit] = useState<boolean[]>(new Array(TradeProfit.length).fill(false));
  const [openLoss, setOpenLoss] = useState<boolean[]>(new Array(TradeLoss.length).fill(false));

  const toggleItemProfit = (index: number) => {
    const updateOpenProfit = [...openProfit];
    updateOpenProfit[index] = !updateOpenProfit[index];
    setOpenProfit(updateOpenProfit);
  };

  const toggleItemLoss = (index: number) => {
    const updateOpenLoss = [...openLoss];
    updateOpenLoss[index] = !updateOpenLoss[index];
    setOpenLoss(updateOpenLoss);
  };

  return (
    <>
    <Stack flexDirection="col" className="pt-5 w-full hidden md:flex lg:flex">
        <Stack flexDirection='col' sx='bg-[#0A1019] rounded-md w-full px-5 py-3 mb-5'>
            <Typography variant='normal' className='text-xs md:text-sm lg:text-sm mb-5'> <span className='text-[#E7E7E7]'> Win Rate: </span> </Typography>
            <Stack alignItems='center'>
                <Typography variant='bold' className='text-xs md:text-2xl lg:text-2xl mr-20'> <span className='text-[#0D6EFD]'> 68.97% </span> </Typography>
                <Typography variant='normal' className='text-xs md:text-sm lg:text-sm mr-10'> <span className='text-[#E7E7E7]'> Total Realized Gains: </span> <span className='text-[#4CA244] font-semibold'> $57.90 </span> </Typography>
                <Typography variant='normal' className='text-xs md:text-sm lg:text-sm mr-10'> <span className='text-[#E7E7E7]'> Total Unrealized Gains: </span> <span className='text-[#E63E3A] font-semibold'> $16.89 </span> </Typography>
                <Typography variant='normal' className='text-xs md:text-sm lg:text-sm'> <span className='text-[#E7E7E7]'> Total Vol: </span> <span className='text-[#DBE9FF] font-semibold'> $10K </span> </Typography>
            </Stack>
        </Stack>
        <Stack sx='w-full h-auto mb-10 pr-5' gap={5}>
            <Stack flexDirection='col' sx='w-1/2' gap={5}>
                <Typography variant='bold' className='text-base mb-5'> Most Profitable Trades </Typography>
                
                {TradeProfit?.map((data, index) => ( 
                <Stack key={index} flexDirection='col' sx='w-full'>
                    <Stack alignItems='center' justifyContent='between' sx={`bg-[#161F2C] px-5 py-3 ${openProfit ? 'rounded-tl-md rounded-tr-md' : 'rounded-md'}`}>
                    <Stack alignItems='center'>
                        <Stack alignItems='center' sx='mr-10'>
                        <Image src="" width={15} height={15} alt='tokenLogo' className='mr-2' />
                        <Typography variant='normal' className='text-xs capitalize'> {data.platform} </Typography>
                        </Stack>
                        <Typography variant='bold' className='text-base'> <span className='text-[#4CA244]'> +{data.profit}% </span> </Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <Button variant="default" size="sm" className='text-[10px] text-[#E7E7E7] capitalize bg-[#017B46] rounded-md mr-2 hover:border-none hover:bg-[#FFF] hover:text-[#017B46]'> Buy </Button>
                        <Stack sx='w-fit cursor-pointer' onClick={() => toggleItemProfit(index)}>
                        {!openProfit[index] ? <BiChevronDown className="text-base text-white font-bold" /> : <BiChevronUp className="text-base text-white font-bold" />}
                        </Stack>
                    </Stack>
                    </Stack>
                    {openProfit[index] && (
                    <Stack flexDirection='col' sx='w-full'>
                        <Stack alignItems='center' sx='bg-[#101720] px-5 py-3'>
                        <Stack alignItems='center'>
                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Realized PnL </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#4CA244]'> $1,987.90 </span> </Typography>
                            </Stack>
                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Avg.Buy Price: </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                            </Stack>
                            <Stack flexDirection='col' gap={1}>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Avg.Sell Price: </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                            </Stack>
                        </Stack>
                        </Stack>
                        <table className="w-full overflow-y-auto border-collapse table-auto">
                        <thead>
                            <tr className='bg-[#161F2C] py-2'>
                            <td scope="col" className="pl-2 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Time </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Type </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Amount </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Price </span> </Typography> 
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            {TradeContent?.map((data, index) => ( 
                            <tr className="py-3 border-b border-[#212E40]" key={index}>
                                <td scope="col" className="pl-2 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs'> {data.date}-{data.time} </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs capitalize'> <span className='text-[#4CA244]'> {data.profitType} </span> </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs capitalize'> {data.amount} </Typography>
                                <Typography variant='normal' className='text-xs capitalize'> <span className='text-[#4CA244]'> ${data.amount} </span> </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:w-1/4 lg:w-1/4"> 
                                <Stack alignItems="center">
                                    <Typography variant='normal' className='text-xs'> ${data.price} </Typography>
                                </Stack>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </Stack>
                    )}
                </Stack>
                ))}
            </Stack>

            <Stack flexDirection='col' sx='w-1/2' gap={5}>
                <Typography variant='bold' className='text-base mb-5'> Biggest Losses  </Typography>
                {TradeLoss?.map((data, index) => ( 
                <Stack  key={index} flexDirection='col' sx='w-full'>
                    <Stack alignItems='center' justifyContent='between' sx={`bg-[#161F2C] px-5 py-3 ${openLoss ? 'rounded-tl-md rounded-tr-md' : 'rounded-md'}`}>
                    <Stack alignItems='center'>
                        <Stack alignItems='center' sx='mr-10'>
                        <Image src="" width={15} height={15} alt='tokenLogo' className='mr-2' />
                        <Typography variant='normal' className='text-xs capitalize'> {data.platform} </Typography>
                        </Stack>
                        <Typography variant='bold' className='text-base'> <span className='text-[#E63E3A]'> -{data.profit}% </span> </Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <Button variant="default" size="sm" className='text-[10px] text-[#E7E7E7] capitalize bg-[#017B46] rounded-md mr-2 hover:border-none hover:bg-[#FFF] hover:text-[#017B46]'> Buy </Button>
                        <Stack sx='w-fit cursor-pointer' onClick={() => toggleItemLoss(index)}>
                        {!openLoss[index] ? <BiChevronDown className="text-base text-white font-bold" /> : <BiChevronUp className="text-base text-white font-bold" />}
                        </Stack>
                    </Stack>
                    </Stack>
                    {openLoss[index] && (
                    <Stack flexDirection='col' sx='w-full'>
                        <Stack alignItems='center' sx='bg-[#101720] px-5 py-3'>
                        <Stack alignItems='center'>
                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Realized PnL </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#E63E3A]'> $1,987.90 </span> </Typography>
                            </Stack>
                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Avg.Buy Price: </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                            </Stack>
                            <Stack flexDirection='col' gap={1}>
                            <Typography variant='normal' className='text-[10px]'> <span className='#E7E7E7'> Avg.Sell Price: </span> </Typography>
                            <Typography variant='bold' className='text-xs'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                            </Stack>
                        </Stack>
                        </Stack>
                        <table className="w-full overflow-y-auto border-collapse table-auto">
                        <thead>
                            <tr className='bg-[#161F2C] py-2'>
                            <td scope="col" className="pl-2 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Time </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Type </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Amount </span> </Typography> 
                            </td>
                            <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='black' className='text-[10px]'> <span className="text-[#B3B5B8]"> Price </span> </Typography> 
                            </td>
                            </tr>
                        </thead>
                        <tbody>
                            {TradeContent?.map((data, index) => ( 
                            <tr className="py-3 border-b border-[#212E40]" key={index}>
                                <td scope="col" className="pl-2 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs'> {data.date}-{data.time} </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs capitalize'> <span className='text-[#E63E3A]'> {data.lossType} </span> </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:py-3 lg:py-3"> 
                                <Typography variant='normal' className='text-xs capitalize'> {data.amount} </Typography>
                                <Typography variant='normal' className='text-xs capitalize'> <span className='text-[#E63E3A]'> ${data.amount} </span> </Typography>
                                </td>
                                <td scope="col" className="pl-5 py-4 md:w-1/4 lg:w-1/4"> 
                                <Stack alignItems="center">
                                    <Typography variant='normal' className='text-xs'> ${data.price} </Typography>
                                </Stack>
                                </td>
                            </tr>
                            ))}
                        </tbody>
                        </table>
                    </Stack>
                    )}
                </Stack>
                ))} 
            </Stack>
        </Stack>
    </Stack>

    <WalletPerformanceMobile />
    </>
  )
}

export default WalletPerformance