import React from 'react';
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { copiedTradesTable } from '@/utils/MockData';
import { MdOutlineEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import {Table, TableHeader, TableBody, TableHead, TableRow, TableCell} from '@/components/ui/table';

const CopiedTradesTable = () => {
  return (
    <Stack sx="w-full overflow-x-hidden">
      <Table className="w-full text-left">
        <TableHeader className="bg-[#0A1019] font-bold leading-tight w-full">
          <TableRow className="flex items-center justify-between w-full border-none px-2 md:px-8 lg:px-8 pt-2 md:pt-5 lg:pt-5">
              <TableHead className="w-1/4">
                <Typography variant="black" className="text-[10px] md:text-xs lg:text-xs"> Time </Typography>
              </TableHead>
              <TableHead className="w-1/4">
                  <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs"> Address </Typography>
              </TableHead>
              <TableHead className="w-1/4">
                <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs text-right md:text-center lg:text-center"> Status </Typography>
              </TableHead>
              <TableHead className="w-1/4">
                <Typography variant="black" className="text-[10px] text-[#E0E0E0] md:text-xs lg:text-xs text-right"> Action </Typography>
              </TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className='w-full'>
          {copiedTradesTable?.map((row, index) => (
            <TableRow key={index} className={
              index % 2 === 0
                ? "w-full flex items-center justify-between border-none bg-[#17212F] px-2 md:px-8 lg:px-8" : "w-full flex items-center justify-between border-none px-2 md:px-8 lg:px-8"}>
              <TableCell className="w-1/4">
                <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0]'> {row.time} mins ago </Typography>
              </TableCell>
              <TableCell className="w-1/4">
                  <Typography variant='normal' className='text-[9px] md:text-sm lg:text-sm text-[#E0E0E0]'> {`${row.address.slice(0, 6)}...${row.address.slice(-5)}`} </Typography>
              </TableCell>
              <TableCell className="w-1/4">
                <Typography variant='normal' className="text-[9px] md:text-sm lg:text-sm capitalize text-right md:text-center lg:text-center"> <span className={`${row.status === 'pending' ? 'text-[#FFC107]' : 'text-[#06C270]'}`}> {row.status} </span> </Typography>
              </TableCell>
              <TableCell className="w-1/4">
                <Stack alignItems='center' justifyContent='end'>
                  <MdOutlineEdit className="text-[#E0E0E0] text-base mr-1"/>
                  <MdOutlineDeleteOutline className="text-[#E0E0E0] text-base"/>
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  )
}

export default CopiedTradesTable