import React, { FC } from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { allTable } from '@/utils/MockData';
import { IoMdWallet } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {Table, TableHeader, TableBody, TableHead, TableRow, TableCell} from '@/components/ui/table';
import { UserTrade } from '@/utils/types';

interface Props {
    tradeData: UserTrade[]
}

const AllTable: FC<Props> = ({tradeData}) => {
  return (
    <Stack sx="w-full overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden">
        <Table className="w-full">
            <TableHeader className="bg-[#0A1019] font-bold leading-tight w-full">
                <TableRow className="flex items-center justify-between w-full border-none px-2 md:px-8 lg:px-8 pt-2 md:pt-5 lg:pt-5">
                    <TableHead className="w-[50px] md:w-1/5 lg:w-1/5">
                        <Typography variant="black" className="text-[10px] md:text-xs lg:text-xs"> <IoMdWallet className="text-base text-[#E0E0E0]"/> </Typography>
                    </TableHead>
                    <TableHead className="w-[80px] md:w-1/5 lg:w-1/5">
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Type </Typography>
                    </TableHead>
                    <TableHead className="w-[80px] md:w-1/5 lg:w-1/5">
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs text-center"> Token </Typography>
                    </TableHead>
                    <TableHead className="w-[80px] md:w-1/5 lg:w-1/5">
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs text-right"> Quantity </Typography>
                    </TableHead>
                    <TableHead className="w-[100px] md:w-1/5 lg:w-1/5">
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs text-right"> Status </Typography>
                    </TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='w-full'>
                {tradeData?.map((row, index) => (
                    <TableRow key={index} className={
                        index % 2 === 0
                          ? "w-full flex items-center justify-between border-none bg-[#17212F] px-2 md:px-8 lg:px-8" : "w-full flex items-center justify-between border-none px-2 md:px-8 lg:px-8"}>
                        <TableCell className="w-[50px] md:w-1/5 lg:w-1/5">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] uppercase'> W1 </Typography>
                        </TableCell>
                        <TableCell className="w-[80px] md:w-1/5 lg:w-1/5">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] capitalize'> {row?.action} </Typography>
                        </TableCell>
                        <TableCell className="w-[80px] md:w-1/5 lg:w-1/5">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] text-center'> {row?.symbol} </Typography>
                        </TableCell>
                        <TableCell className="w-[80px] md:w-1/5 lg:w-1/5">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] text-right'> {row?.amount} </Typography>
                        </TableCell>
                        <TableCell className="w-[100px] md:w-1/5 lg:w-1/5">
                            <Stack alignItems='center' sx='justify-end'>
                                <Typography variant='normal' className="text-[9px] md:text-sm lg:text-sm capitalize"> <span className={`${row.status === 'PENDING' ? 'text-[#FFC107]' : 'text-[#06C270]'}`}> {row?.status} </span> </Typography>
                                {row?.status === 'PENDING' ? (<MdOutlineDeleteOutline className="text-[#FF3B3B] text-base ml-2"/>) : ''}
                            </Stack>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </Stack>
  )
}

export default AllTable