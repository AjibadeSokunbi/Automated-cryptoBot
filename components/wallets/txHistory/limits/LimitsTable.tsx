import React, { FC } from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { limitsTable } from '@/utils/MockData';
import { IoMdWallet } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { UserLimiTrade, UserTrade } from '@/utils/types';


interface Props {

    tradeData2: UserLimiTrade[]
  }

const LimitsTable:  FC<Props> = ({tradeData2}) => {
  return (
    <Stack sx="w-full overflow-x-hidden">
        <table className="w-full text-left">
            <thead className="bg-[#0A1019] font-bold leading-tight w-full">
                <tr className="flex items-center justify-between py-3 px-2 md:px-10 lg:px-10 w-full">
                    <th className="w-[30px] md:w-1/6 lg:w-1/6">
                        <div>
                            <Typography variant="black" className="text-[10px] md:text-xs lg:text-xs"> <IoMdWallet className="text-base text-[#E0E0E0]"/> </Typography>
                        </div>
                    </th>
                    <th className="w-1/6">
                        <div>
                            <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Type </Typography>
                        </div>
                    </th>
                    <th className="w-1/6">
                        <div className='flex md:justify-center lg:justify-center'>
                            <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Token </Typography>
                        </div>
                    </th>
                    <th className="w-1/6">
                        <div className='flex md:justify-center lg:justify-center'>
                            <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Quantity </Typography>
                        </div>
                    </th>
                    <th className="w-1/6">
                        <div className='flex md:justify-end lg:justify-end'>
                            <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Exec. Price </Typography>
                        </div>
                    </th>
                    <th className="w-1/6">
                        <div className='flex md:justify-end lg:justify-end'>
                            <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Status </Typography>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {tradeData2?.map((row, index) => (
                    <tr key={index} className={
                        index % 2 === 0
                            ? "w-full" : "w-full bg-[#17212F] border-y border-[#212E40]"}>
                        <div className='py-3 px-2 md:px-10 lg:px-10 w-full flex items-center justify-between'>
                            <td className="w-[30px] md:w-1/6 lg:w-1/6">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] uppercase'> W1 </Typography>
                            </td>
                            <td className="w-1/6">
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] capitalize'> {row.action} </Typography>
                            </td>
                            <td className="w-1/6">
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] md:text-center lg:text-center'> {row?.symbol} </Typography>
                            </td>
                            <td className="w-1/6">
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] md:text-center lg:text-center'> {row.amount} </Typography>
                            </td>
                            <td className="w-1/6">
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] md:text-right lg:text-right'> $ {row.tradePrice} </Typography>
                            </td>
                            <td className="w-1/6">
                                <Stack alignItems='center' sx='md:justify-end lg:justify-end'>
                                    <Typography variant='normal' className="text-[9px] md:text-sm lg:text-sm capitalize"> <span className={`${row.executed === false ? 'text-[#FFC107]' : 'text-[#06C270]'}`}>   {row?.executed ? "Confirmed" : "Pending"} </span> </Typography>
                                    {row.executed === false ? (<MdOutlineDeleteOutline className="text-[#FF3B3B] text-base ml-2"/>) : ''}
                                </Stack>
                            </td>
                        </div>
                    </tr>
                ))}
            </tbody>
        </table>
    </Stack>
  )
}

export default LimitsTable