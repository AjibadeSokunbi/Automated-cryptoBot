import React from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { tokenHolders } from "@/utils/MockData";
import HoldersTable from "./HoldersTable";
import TokenHoldersMobile from "./TokenHoldersMobile";


export interface TokenHolders {
  address: string;
  balance: number;
  percent: number;
}

interface Props {
  scamResult: string[]
  holders: TokenHolders[] 
}

const TokenHolders: React.FC<Props> = ({scamResult, holders}) => {

  return (
    <>
      <>
        <Stack sx="w-full bg-slate-950 rounded-lg border border-slate-800 hidden md:flex lg:flex">
          <Stack flexDirection="col" sx="w-full">
            {tokenHolders.map((scam, index) => (
              <>
                <Stack
                  padding="pl-4 pt-1"
                  sx="border-b border-slate-800 w-full"
                  key={index}
                >
                  <Typography
                    variant="bold"
                    className=" text-[13.5px] leading-normal"
                  >
                    {scam.title}
                  </Typography>
                </Stack>
                {scam.checks.map((check, index) => (
                  <Stack flexDirection="col" gap={2} padding="p-1" key={index}>
                    <Stack justifyContent="between">
                      <Stack flexDirection="row" gap={1} alignItems="center">
                        <Typography
                          variant="normal"
                          className=" text-[12px] leading-normal"
                          key={index}
                        >
                          {check}
                        </Typography>
                      </Stack>
                      <Typography
                        variant="semibold"
                        className=" text-[12px] leading-normal"
                      >
                        {scamResult[index]}
                      </Typography>
                    </Stack>
                  </Stack>
                ))}
              </>
            ))}
             <Stack
                  padding="pl-4 pt-2"
                  sx="border-b border-slate-800 w-full h-[40px]"
                  margin="mt-1"
                >
                  <Typography
                    variant="bold"
                    className=" text-[12px] leading-normal"
                  >
                    Top 10 Token Holders 
                  </Typography>
                </Stack>
                <HoldersTable holders={holders}/>
          </Stack>
        </Stack>
      </>

      <TokenHoldersMobile 
        scamResult={scamResult}
        holders={holders}
      />
    </>
  );
};

export default TokenHolders;
