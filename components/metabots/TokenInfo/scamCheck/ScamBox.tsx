import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiOutlineCheck } from "react-icons/ai";
import {RxCross1} from "react-icons/rx";
import ScamBoxMobile from "./ScamBoxMobile";
import { SecurityAnalysis } from "@/utils/types";

interface Props {
  scamAnalysis: SecurityAnalysis
}

export const ScamBox: React.FC<Props> = ({scamAnalysis}) => {

  return (
    <>
      <Stack
        flexDirection="col"
        sx="w-full bg-slate-950 rounded-lg border border-slate-800 hidden md:flex lg:flex"
      >
        {scamAnalysis.map((scam, index) => (
          <>
            <Stack
              padding="pl-4 pt-1"
              sx="border-b border-slate-800 w-full "
              key={index}
            >
              <Typography variant="bold" className=" text-[16px] leading-normal">
                {scam.title}
              </Typography>
            </Stack>
            {scam.checks && scam.checks.map((check, index) => (
              <Stack flexDirection="col" gap={1} padding="p-2" key={index}>
                <Stack justifyContent="between">
                  <Stack flexDirection="row" gap={1} alignItems="center">
                    <Typography
                      variant="normal"
                      className=" text-[11px] leading-normal"
                      key={index}
                    >
                      {check}
                    </Typography>

                    <HoverCard>
                      <HoverCardTrigger>
                        <HiInformationCircle className="cursor-pointer text-xs md:text-base lg:text-base text-[grey]" />
                      </HoverCardTrigger>
                      <HoverCardContent className=" bg-gray-500 p-2 border-none text-zinc-300 text-sm font-normal">
                        {scam.desc && scam.desc[index]}
                      </HoverCardContent>
                    </HoverCard>
                  </Stack>
                  <Stack flexDirection="row" alignItems="center" gap={1}>
                    <Typography
                      variant="semibold"
                      className=" text-[11px] leading-normal"
                    >
                      {scam.results &&scam.results[index]}
                    </Typography>
                    {scam.status && scam.status[index] === true ? (
                      <AiOutlineCheck color="green"/>
                    ) :scam.status && scam.status[index] === false ?
                      <RxCross1 color="red"/> : ""
                    }
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </>
        ))}
      </Stack>
    </>
  );
};

export default ScamBox;
