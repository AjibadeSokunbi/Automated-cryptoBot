import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"; 
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { tokenHolders } from "@/utils/MockData";
import HoldersTable from './HoldersTable';



export interface TokenHoldersMobile {
    address: string;
    balance: number;
    percent: number;
}
  
interface Props {
    scamResult: string[]
    holders: TokenHoldersMobile[] 
}


const TokenHoldersMobile: React.FC<Props> = ({scamResult, holders}) => {

  return (
    <Stack flexDirection='col' justifyContent='center' alignContent='center' sx='w-full flex md:hidden lg:hidden'>
            <Accordion type="single" collapsible className="w-full">
            {tokenHolders.map((scam, index) => (
                <AccordionItem value="item-1" key={index}>
                    <AccordionTrigger>
                        <Typography variant="bold" className="text-xs md:text-lg lg:text-lg leading-normal">
                            {scam.title}
                        </Typography>
                    </AccordionTrigger>
                    <AccordionContent className='overflow-y-auto'>
                        <>
                            {scam.checks.map((check, index) => (
                                <Stack flexDirection="col" gap={4} padding="p-3" key={index}>
                                    <Stack justifyContent="between">
                                    <Stack flexDirection="row" gap={1} alignItems="center">
                                        <Typography
                                        variant="normal"
                                        className="text-xs md:text-sm lg:text-sm leading-normal"
                                        key={index}
                                        >
                                        {check}
                                        </Typography>
                                    </Stack>
                                    <Typography
                                        variant="semibold"
                                        className="text-xs md:text-sm lg:text-sm leading-normal"
                                    >
                                        {scamResult[index]}
                                    </Typography>
                                    </Stack>
                                </Stack>
                            ))}

                            <Stack
                                flexDirection='col'
                                sx="w-full h-auto overflow-y-auto"
                                margin="mt-3"
                                >
                                <Typography
                                    variant="bold"
                                    className="text-xs md:text-lg lg:text-lg leading-normal"
                                >
                                    Top 10 Token Holders 
                                </Typography>
                                <HoldersTable holders={holders} />
                            </Stack>
                        </>
                    </AccordionContent>
                </AccordionItem>
                ))}
            </Accordion>
    </Stack>
  )
}

export default TokenHoldersMobile