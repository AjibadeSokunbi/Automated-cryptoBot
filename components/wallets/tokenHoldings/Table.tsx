import React, { FC } from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import Image from 'next/image';
import { TokenBalance } from '@/utils/types';


interface Props {
  balances: TokenBalance[]
}

const Table: FC<Props> = ({balances}) => {
  return (
    <Stack sx="w-full">
        <Stack sx="w-full overflow-x-hidden">
            <table className="w-full text-left">
                <thead className="bg-[#0C141F] font-bold leading-tight w-full">
                    <tr className="flex items-center justify-between py-3 px-2 md:px-4 lg:px-4 w-full">
                        <th className="w-2/4 md:w-1/4 lg:w-1/4">
                            <div>
                                <Typography variant="black" className="text-[10px] md:text-base lg:text-base"> Wallets </Typography>
                            </div>
                        </th>
                        <th className="w-1/4">
                            <div>
                                <Typography variant="black" className="text-[10px] md:text-base lg:text-base"> Price </Typography>
                            </div>
                        </th>
                        <th className="w-1/4">
                            <div>
                                <Typography variant="black" className="text-[10px] md:text-base lg:text-base"> Ballance </Typography>
                            </div>
                        </th>
                        <th className="w-1/4">
                            <div>
                                <Typography variant="black" className="text-[10px] md:text-base lg:text-base"> Total </Typography>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className='w-full'>
                    {balances?.map((row, index) => (
                        <tr key={index} className={
                            index % 2 === 0
                              ? "w-full" : "w-full bg-[#17212F] border-y border-[#212E40]"}>
                            <div className='py-3 px-2 md:px-4 lg:px-4 w-full flex items-center justify-between'>
                                <td className="w-2/4 md:w-1/4 lg:w-1/4">
                                    <Stack alignItems='center' justifyContent='between' sx='w-[90%] md:w-[80%] lg:w-[80%]'>
                                        <Stack alignItems='center'>
                                            <Image src={row.logo} width={20} height={20} alt='' className='mr-2' />
                                            <Typography variant='normal' className='text-[9px] md:text-base lg:text-base uppercase hidden md:inline lg:inline'> {row.name} </Typography>
                                            <Typography variant='normal' className='text-[9px] md:text-base lg:text-base uppercase inline md:hidden lg:hidden'> {row.name}</Typography>
                                        </Stack>

                                        {/* <span className='bg-[#017B46] px-2 py-1 text-[9px] md:text-[10px] lg:text-[10px] text-[#E7E7E7] capitalize text-center font-semibold rounded-md'> {row.type} </span> */}
                                    </Stack>
                                </td>
                                <td className="w-1/4">
                                    <Typography variant='normal' className='text-[9px] md:text-base lg:text-base'> $ {row.usdPrice.toFixed(2)} </Typography>
                                </td>
                                <td className="w-1/4">
                                    <Typography variant='normal' className='text-[9px] md:text-base lg:text-base'> {Number(row.balance).toFixed(2)} </Typography>
                                </td>
                                <td className="w-1/4">
                                    <Typography variant='normal' className='text-[9px] md:text-base lg:text-base'> $ {row.Networth.toFixed(2)} </Typography>
                                </td>
                            </div>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Stack>
    </Stack>
  )
}

export default Table