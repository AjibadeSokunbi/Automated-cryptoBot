import React from "react";
import Stack from '@/components/custom/Stack';
import Typography from '@/components/custom/Typography';
import { scamDatabase } from "@/utils/MockData";
import { HiInformationCircle } from "react-icons/hi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {AiFillCheckCircle} from "react-icons/ai";
import {MdCancel} from "react-icons/md";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; 
import { SecurityAnalysis } from "@/utils/types";


interface Props {
  value: number;
  scamDatabase: SecurityAnalysis
}
  

const ScamDataBaseMobile: React.FC<Props> = ({value, scamDatabase}) => {
  return (
    <Stack flexDirection="col" sx="w-full flex md:hidden lg:hidden mb-5"> 
      <Accordion type="single" collapsible className="w-full">
      {scamDatabase.map((scam, index) => (
          <AccordionItem value="item-1" key={index}>
            <AccordionTrigger>
              <Typography variant="bold" className="text-xs md:text-lg lg:text-lg leading-normal">
                {scam.title}
              </Typography>
              </AccordionTrigger>
              <AccordionContent className='overflow-y-auto'>
                <>
                  {scam.checks && scam.checks.map((check, index) => (
                    <Stack flexDirection="col" gap={4} padding="p-3" key={index} sx="bg-[#0C141F]">
                      <Stack justifyContent="between">
                        <Stack flexDirection="row" gap={1} alignItems="center">
                          <Typography
                            variant={
                              check === "This contract address is involved in:"
                                ? "semibold"
                                : "normal"
                            }
                            className={
                              check === "This contract address is involved in:"
                                ? "text-xs md:text-sm lg:text-sm leading-normal"
                                : "text-xs md:text-sm lg:text-sm leading-normal"
                            }
                            key={index}
                          >
                            {check}
                          </Typography>

                          {check !== "Data Source:" &&
                            check !== "This contract address is involved in:" && (
                              <HoverCard>
                                <HoverCardTrigger>
                                  <HiInformationCircle className="cursor-pointer text-xs md:text-base lg:text-base text-[grey] hidden" />
                                </HoverCardTrigger>
                                <HoverCardContent className=" bg-gray-500 p-2 border-none text-zinc-300 text-sm font-normal">
                                  {scam.desc && scam.desc[index]}
                                </HoverCardContent>
                              </HoverCard>
                          )}
                        </Stack>

                        {check !== "This contract address is involved in:" && (
                          <Stack flexDirection="row" alignItems="center" gap={1}>
                            <Typography
                              variant="semibold"
                              className="text-xs md:text-sm lg:text-sm leading-normal"
                            >
                              {scam.results && scam.results[index]}
                            </Typography>
                            {scam.status && scam.status[index] === true ? (
                              <AiFillCheckCircle className='text-xl text-[#17CB49]'/>
                            ) :scam.status && scam.status[index] === false ?
                              <MdCancel className='text-xl text-red-600' /> : ""
                            }
                          </Stack>
                        )}
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

export default ScamDataBaseMobile