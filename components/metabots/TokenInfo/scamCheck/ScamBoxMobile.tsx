'use client'
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"; 
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import {AiFillCheckCircle} from "react-icons/ai";
import {MdCancel} from "react-icons/md";
import { SecurityAnalysis } from "@/utils/types";


interface Props {
    scamAnalysis: SecurityAnalysis
}

const ScamBoxMobile: React.FC<Props> = ({scamAnalysis}) => {


  return (
    <Stack flexDirection="col" sx="w-full flex md:hidden lg:hidden">
        <Accordion type="multiple" className="w-full no-underline">
            {scamAnalysis.map((scam, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="mb-5">
                    <AccordionTrigger>
                        <Typography
                            variant="bold"
                            className="text-xs md:text-lg lg:text-lg leading-normal hover:no-underline"
                        >
                            {scam.title}
                        </Typography>
                    </AccordionTrigger>
                    <AccordionContent className="overflow-y-auto">
                        <>
                            {scam.checks && scam.checks.map((check, index) => (
                                <Stack
                                    flexDirection="col"
                                    gap={4}
                                    padding="p-3"
                                    key={index}
                                    sx="bg-[#0C141F]"
                                >
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
                                    <Stack flexDirection="row" alignItems="center" gap={1}>
                                        <Typography
                                        variant="semibold"
                                        className="text-xs md:text-sm lg:text-sm leading-normal"
                                        >
                                        {scam.results &&scam.results[index]}
                                        </Typography>
                                        {scam.status && scam.status[index] === true ? (
                                        <AiFillCheckCircle className="text-xl text-[#17CB49]" />
                                        ) :scam.status && scam.status[index] === false ?
                                        <MdCancel className="text-xl text-red-600" /> : ""
                                        }
                                    </Stack>
                                    </Stack>
                                </Stack>
                            ))}
                        </>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
  </Stack>
  )
}

export default ScamBoxMobile