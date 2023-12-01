import React from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { copiedTradesTable } from '@/utils/MockData';
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";

const CopiedTradesTable = () => {
  return (
    <Stack sx="w-full overflow-x-hidden">
        <table className="w-full text-left">
            <thead className="bg-[#0A1019] font-bold leading-tight w-full">
                <tr className="flex items-center justify-between py-3 px-2 md:px-10 lg:px-10 w-full">
                  <th className="w-1/4">
                      <div>
                        <Typography variant="black" className="text-[10px] md:text-xs lg:text-xs"> Time </Typography>
                      </div>
                  </th>
                  <th className="w-1/4">
                      <div>
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Address </Typography>
                      </div>
                  </th>
                  <th className="w-1/4">
                      <div className='flex justify-center'>
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Status </Typography>
                      </div>
                  </th>
                  <th className="w-1/4">
                      <div className='flex justify-end'>
                        <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Action </Typography>
                      </div>
                  </th>
                </tr>
            </thead>
            <tbody className='w-full'>
                {copiedTradesTable?.map((row, index) => (
                    <tr key={index} className={
                        index % 2 === 0
                            ? "w-full" : "w-full bg-[#17212F] border-y border-[#212E40]"}>
                        <div className='py-3 px-2 md:px-10 lg:px-10 w-full flex items-center justify-between'>
                            <td className="w-1/4">
                            <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0]'> {row.time} mins ago </Typography>
                            </td>
                            <td className="w-1/4">
                                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0]'> {`${row.address.slice(0, 6)}...${row.address.slice(-5)}`} </Typography>
                            </td>
                            <td className="w-1/4">
                                <Stack alignItems='center' justifyContent='center'>
                                    <Typography variant='normal' className="text-[9px] md:text-sm lg:text-sm capitalize"> <span className={`${row.status === 'pending' ? 'text-[#FFC107]' : 'text-[#06C270]'}`}> {row.status} </span> </Typography>
                                </Stack>
                            </td>
                            <td className="w-1/4">
                              <Stack alignItems='center' justifyContent='end'>
                                <MdOutlineEdit className="text-[#E0E0E0] text-base mr-1"/>
                                <MdOutlineDeleteOutline className="text-[#E0E0E0] text-base"/>
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

export default CopiedTradesTable