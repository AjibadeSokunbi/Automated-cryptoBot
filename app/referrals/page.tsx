import React from "react";
import FullContainer from "@/components/custom/FullContainer";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { HiInformationCircle } from "react-icons/hi";
import Referrals from "@/components/referrals/Referrals";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {}

const page = () => {
  return (
    <>
      <FullContainer className=" border-t border-b border-gray-900 mt-14 pl-6 bg-background1">
      <Stack flexDirection="col" sx="w-full md:w-4/12 lg:w-4/12">
        <Stack flexDirection="row" gap={1} alignItems="center">
          <Typography
            variant="bold"
            className="leading-[35.10px] my-6 text-base md:text-[27px] lg:text-[27px]"
          >
            Referrals & Rewards
          </Typography>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <HiInformationCircle className="text-xs md:text-base lg:text-base text-blue-600 hidden
            md:block lg:block" />
              </TooltipTrigger>
              <TooltipContent>
                <Typography variant="normal" className="text-sm"> Cutting-Edge Tools for Monitoring On-chain activities of Smart Money wallets and Blue Chip Tokens  </Typography>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Stack>
      </Stack>
    </FullContainer>
    <FullContainer className="mt-4 md:px-6 lg:px-6">
      <Stack  width="w-full">
        <Referrals />  
      </Stack>
    </FullContainer>
    </>

  );
};

export default page;
