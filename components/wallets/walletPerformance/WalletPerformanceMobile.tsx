"use client";
import React, {useState} from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Image from 'next/image';
import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { TradeProfit, TradeLoss, TradeContent } from "@/utils/MockData";
import { Button } from '@/components/ui/button';

const WalletPerformanceMobile = () => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

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
    <Stack flexDirection='col' sx='flex md:hidden lg:hidden w-full h-auto mt-7'>
        <Tabs defaultValue="profitableTrades" className="w-full mt-5 overflow-x-hidden">
            <TabsList className='px-1 w-full mx-auto flex justify-center items-center bg-[#0C141F]'>
                <TabsTrigger value="profitableTrades" className={`ring-offset-[#084298] focus-visible:bg-[#084298] focus-visible:text-white data-[state=active]:bg-[#084298] data-[state=active]:text-white w-full text-white`}>    
                    <Typography variant='black' className='text-xs px-10 py-1'>Most Profitable Trades</Typography>
                </TabsTrigger>
                <TabsTrigger value="biggestLosses" className={`ring-offset-[#084298] focus-visible:bg-[#084298] focus-visible:text-white data-[state=active]:bg-[#084298] data-[state=active]:text-white w-full text-white`}>
                    <Typography variant='black' className='text-xs px-10 py-1'>Biggest Losses</Typography>
                </TabsTrigger>
            </TabsList>

            <TabsContent value="profitableTrades" className="pt-5">
                <Stack flexDirection='col' sx='w-full h-auto' gap={5}>
                    {TradeProfit?.map((data, index) => ( 
                        <Stack key={index}  flexDirection='col' sx='w-full'>
                            <Stack alignItems='center' justifyContent='between' sx={`bg-[#161F2C] px-5 py-3 ${openProfit ? 'rounded-tl-md rounded-tr-md' : 'rounded-md'}`}>
                                <Stack alignItems='center'>
                                    <Stack alignItems='center' sx='mr-10'>
                                    <Image src="" width={15} height={15} alt='tokenLogo' className='mr-2' />
                                    <Typography variant='normal' className='text-xs capitalize'> {data.platform} </Typography>
                                    </Stack>
                                    <Typography variant='bold' className='text-sm'> <span className='text-[#4CA244]'> +{data.profit}% </span> </Typography>
                                </Stack>
                                <Stack alignItems='center'>
                                    <Button variant="default" size="sm" className='text-[9px] text-[#E7E7E7] capitalize bg-[#017B46] rounded-md mr-2 hover:border-none hover:bg-[#FFF] hover:text-[#017B46]'> Buy </Button>
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
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Realized PnL </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#4CA244]'> $1,987.90 </span> </Typography>
                                            </Stack>
                                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Avg.Buy Price: </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                                            </Stack>
                                            <Stack flexDirection='col' gap={1}>
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Avg.Sell Price: </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack sx='w-full overflow-auto'>
                                        <table className="w-full overflow-auto">
                                            <thead>
                                                <tr className='bg-[#161F2C] py-2 gap-5'>
                                                    <td scope="col" className="pl-5 py-4 w-1/4"> 
                                                        <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Time </span> </Typography> 
                                                    </td>
                                                    <td scope="col" className="py-4 w-1/4"> 
                                                        <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Type </span> </Typography> 
                                                    </td>
                                                    <td scope="col" className="py-4 lg:py-3 w-1/4"> 
                                                        <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Amount </span> </Typography> 
                                                    </td>
                                                    <td scope="col" className="py-4 pr-5 w-1/4"> 
                                                        <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Price </span> </Typography> 
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {TradeContent?.map((data, index) => ( 
                                                <tr className="py-3 border-b border-[#212E40] gap-5" key={index}>
                                                    <td scope="col" className="pl-5 py-4 w-2/4"> 
                                                        <Typography variant='normal' className='text-[10px]'> {data.date}-{data.time} </Typography>
                                                    </td>
                                                    <td scope="col" className="py-4 w-1/4"> 
                                                        <Typography variant='normal' className='text-[10px] capitalize'> <span className='text-[#4CA244]'> {data.profitType} </span> </Typography>
                                                    </td>
                                                    <td scope="col" className="py-4 w-1/4"> 
                                                        <Typography variant='normal' className='text-[9px] capitalize'> {data.amount} </Typography>
                                                        <Typography variant='normal' className='text-[10px] capitalize'> <span className='text-[#4CA244]'> ${data.amount} </span> </Typography>
                                                    </td>
                                                    <td scope="col" className="py-4 pr-5 w-1/4"> 
                                                        <Stack alignItems="center">
                                                            <Typography variant='normal' className='text-[10px]'> ${data.price} </Typography>
                                                        </Stack>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </Stack>
                                </Stack>
                            )}
                        </Stack>
                    ))}
                </Stack>
            </TabsContent>

            <TabsContent value="biggestLosses" className="pt-5">
                <Stack flexDirection='col' sx='w-full h-auto' gap={5}>
                    {TradeLoss?.map((data, index) => ( 
                        <Stack  key={index} flexDirection='col' sx='w-full'>
                            <Stack alignItems='center' justifyContent='between' sx={`bg-[#161F2C] px-5 py-3 ${openLoss ? 'rounded-tl-md rounded-tr-md' : 'rounded-md'}`}>
                                <Stack alignItems='center'>
                                    <Stack alignItems='center' sx='mr-10'>
                                    <Image src="" width={15} height={15} alt='tokenLogo' className='mr-2' />
                                    <Typography variant='normal' className='text-xs capitalize'> {data.platform} </Typography>
                                    </Stack>
                                    <Typography variant='bold' className='text-sm'> <span className='text-[#E63E3A]'> -{data.profit}% </span> </Typography>
                                </Stack>
                                <Stack alignItems='center'>
                                    <Button variant="default" size="sm" className='text-[9px] text-[#E7E7E7] capitalize bg-[#017B46] rounded-md mr-2 hover:border-none hover:bg-[#FFF] hover:text-[#017B46]'> Buy </Button>
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
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Realized PnL </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#E63E3A]'> $1,987.90 </span> </Typography>
                                            </Stack>
                                            <Stack flexDirection='col' gap={1} sx='mr-10'>
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Avg.Buy Price: </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                                            </Stack>
                                            <Stack flexDirection='col' gap={1}>
                                            <Typography variant='normal' className='text-[9px]'> <span className='#E7E7E7'> Avg.Sell Price: </span> </Typography>
                                            <Typography variant='bold' className='text-[10px]'> <span className='text-[#0D6EFD]'> $0.005634 </span> </Typography>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                    <Stack sx='w-full overflow-auto'>
                                        <table className="w-full overflow-y-auto border-collapse table-auto">
                                            <thead>
                                                <tr className='bg-[#161F2C] py-2'>
                                                <td scope="col" className="pl-5 py-4 w-2/4"> 
                                                    <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Time </span> </Typography> 
                                                </td>
                                                <td scope="col" className="py-4 w-1/4"> 
                                                    <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Type </span> </Typography> 
                                                </td>
                                                <td scope="col" className="py-4 w-1/4"> 
                                                    <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Amount </span> </Typography> 
                                                </td>
                                                <td scope="col" className="py-4 pr-5 w-1/4"> 
                                                    <Typography variant='black' className='text-[9px]'> <span className="text-[#B3B5B8]"> Price </span> </Typography> 
                                                </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {TradeContent?.map((data, index) => ( 
                                                <tr className="py-3 border-b border-[#212E40]" key={index}>
                                                    <td scope="col" className="pl-5 py-4 w-2/4"> 
                                                        <Typography variant='normal' className='text-xs'> {data.date}-{data.time} </Typography>
                                                    </td>
                                                    <td scope="col" className="py-4 w-1/4"> 
                                                        <Typography variant='normal' className='text-[10px] capitalize'> <span className='text-[#E63E3A]'> {data.lossType} </span> </Typography>
                                                    </td>
                                                    <td scope="col" className="py-4 w-1/4"> 
                                                        <Typography variant='normal' className='text-[10px] capitalize'> {data.amount} </Typography>
                                                        <Typography variant='normal' className='text-[10px] capitalize'> <span className='text-[#E63E3A]'> ${data.amount} </span> </Typography>
                                                    </td>
                                                    <td scope="col" className="pr-5 py-4 w-1/4"> 
                                                    <Stack alignItems="center">
                                                        <Typography variant='normal' className='text-[10px]'> ${data.price} </Typography>
                                                    </Stack>
                                                    </td>
                                                </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </Stack>
                                </Stack>
                            )}
                        </Stack>
                    ))} 
                </Stack>
            </TabsContent>
        </Tabs>
    </Stack>
  )
}

export default WalletPerformanceMobile