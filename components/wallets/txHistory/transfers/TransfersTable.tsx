import React from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { transfersTable } from '@/utils/MockData';
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowDownLeft } from "react-icons/lu";
import Image from 'next/image';
import TransfersTableMobile from './TransfersTableMobile';

const TransfersTable = () => {
  return (
    <>
    <Stack sx="w-full overflow-x-hidden hidden md:flex lg:flex">
      <table className="w-full text-left">
          <thead className="bg-[#0A1019] font-bold leading-tight w-full">
              <tr className="flex items-center justify-between py-3 px-2 md:px-10 lg:px-10 w-full">
                  <th className="w-1/5">
                      <div>
                      <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Time </Typography>
                      </div>
                  </th>
                  <th className="w-1/5">
                      <div>
                          <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Action </Typography>
                      </div>
                  </th>
                  <th className="w-1/5">
                      <div>
                          
                      </div>
                  </th>
                  <th className="w-1/5">
                      <div>
                          
                      </div>
                  </th>
                  <th className="w-1/5">
                      <div>
                          
                      </div>
                  </th>
              </tr>
          </thead>
          <tbody className='w-full'>
              {transfersTable?.map((row, index) => (
                  <tr key={index} className={
                      index % 2 === 0
                          ? "w-full" : "w-full bg-[#17212F] border-y border-[#212E40]"}>
                      <div className='py-3 px-2 md:px-10 lg:px-10 w-full flex items-center justify-between'>
                          <td className="w-1/5">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0]'> {row.time} mins ago </Typography>
                          </td>
                          <td className="w-1/5">
                            <Stack>
                              <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] uppercase mr-2'> {row.action} </Typography>
                              {row.action === 'sent' ? ( <FiArrowUpRight className="text-base text-[#A52A27]"/>) : (<LuArrowDownLeft className="text-base text-[#4CA244]" />)}
                            </Stack>
                          </td>
                          <td className="w-1/5">
                            <Stack alignItems='start' sx='w-full'>
                              <Image src={row.tokenLogo} width={12} height={12} alt='' className='mr-2 md:py-1 lg:py-1' />
                              <Stack flexDirection='col' justifyContent='start'>
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] capitalize'> {row.tokenName} </Typography>
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0] capitalize'> {`${row.tokenAddress.slice(0, 5)}...${row.tokenAddress.slice(-3)}`} </Typography>
                              </Stack>
                            </Stack>
                          </td>
                          <td className="w-1/5">
                            <Stack alignItems='center'>
                              <Image src={row.ethLogo} width={20} height={20} alt='' className='mr-2' />
                              <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm'> <span className={index % 2 === 0 ? 'text-[#A52A27]' : 'text-[#4CA244]'}>  +{row.priceETH}ETH ($ {row.priceDOL}) </span> </Typography>
                            </Stack>
                          </td>
                          <td className="w-1/5">
                            <Stack alignItems='center'>
                              <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm'> <span className={index % 2 === 0 ? 'text-[#fff]' : 'text-[#E7E7E7]'}>  Gas Fee: {row.gasFeeETH}ETH ($ {row.gasFeeDOL}) </span> </Typography>
                            </Stack>
                          </td>
                      </div>
                  </tr>
              ))}
          </tbody>
      </table>
    </Stack>
      <TransfersTableMobile />
    </>
  )
}

export default TransfersTable