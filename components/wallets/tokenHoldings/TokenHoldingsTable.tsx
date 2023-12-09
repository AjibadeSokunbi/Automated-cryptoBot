import React, { FC } from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import Image from 'next/image';
import { TokenBalance } from '@/utils/types';
import {Table, TableHeader, TableBody, TableHead, TableRow, TableCell} from '@/components/ui/table';

interface Props {
  balances: TokenBalance[]
}

const TokenHoldingsTable: FC<Props> = ({balances}) => {
  return (
    <Stack sx="w-full">
        <Stack sx="w-full overflow-x-auto md:overflow-x-hidden lg:overflow-x-hidden">
            <Table className="w-full">
                <TableHeader className="bg-[#0C141F] font-bold leading-tight w-full">
                    <TableRow className="flex items-center justify-between w-full border-none px-2 md:px-8 lg:px-8 pt-2 md:pt-5 lg:pt-5">
                        <TableHead className="w-[150px] md:w-1/4 lg:w-1/4">
                            <Typography variant="black" className="text-[10px] md:text-base lg:text-base"> Wallets </Typography>
                        </TableHead>
                        <TableHead className="w-[100px] md:w-1/4 lg:w-1/4">
                            <Typography variant="black" className="text-[10px] md:text-base lg:text-base text-center"> Price </Typography>
                        </TableHead>
                        <TableHead className="w-[100px] md:w-1/4 lg:w-1/4">
                            <Typography variant="black" className="text-[10px] md:text-base lg:text-base text-center"> Ballance </Typography>
                        </TableHead>
                        <TableHead className="w-[100px] md:w-1/4 lg:w-1/4">
                            <Typography variant="black" className="text-[10px] md:text-base lg:text-base text-right"> Total </Typography>
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='w-full'>
                    {balances?.map((row, index) => (
                        <TableRow key={index} className={
                            index % 2 === 0
                              ? "w-full flex items-center justify-between border-none bg-[#17212F] px-2 md:px-8 lg:px-8" : "w-full flex items-center justify-between border-none px-2 md:px-8 lg:px-8"}>
                            <TableCell className="w-[150px] md:w-1/4 lg:w-1/4">
                                <Stack alignItems='center' justifyContent='between' sx='w-full'>
                                    <Stack alignItems='center' sx=''>
                                        <Image src={row.logo} width={20} height={20} alt='' className='mr-2' />
                                        <Typography variant='normal' className='text-[9px] md:text-base lg:text-base uppercase hidden md:inline lg:inline'> {row.name} </Typography>
                                        <Typography variant='normal' className='text-[9px] md:text-base lg:text-base uppercase inline md:hidden lg:hidden'> {row.name} </Typography>
                                    </Stack>

                                    {/*<span className='bg-[#017B46] px-2 py-1 text-[9px] md:text-[10px] lg:text-[10px] text-[#E7E7E7] capitalize text-center font-semibold rounded-md'> {row.type} </span> */}
                                </Stack>
                            </TableCell>
                            <TableCell className="w-[100px] md:w-1/4 lg:w-1/4">
                                <Typography variant='normal' className='text-[9px] md:text-base lg:text-base text-center'> $ {row.usdPrice.toFixed(2)} </Typography>
                            </TableCell>
                            <TableCell className="w-[100px] md:w-1/4 lg:w-1/4">
                                <Typography variant='normal' className='text-[9px] md:text-base lg:text-base text-center'> {Number(row.balance).toFixed(2)} </Typography>
                            </TableCell>
                            <TableCell className="w-[100px] md:w-1/4 lg:w-1/4">
                                <Typography variant='normal' className='text-[9px] md:text-base lg:text-base text-right'> $ {row.Networth.toFixed(2)} </Typography>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Stack>
    </Stack>
  )
}

export default TokenHoldingsTable