import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import React from "react";
//import GaugeChart from "react-gauge-chart";
import { HiInformationCircle } from "react-icons/hi";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { SecurityAnalysis } from "@/utils/types";

interface Props {
  value: number;
  scamDatabase: SecurityAnalysis
}


const ScamGuage: React.FC<Props> = ({value, scamDatabase}) => {


  return (
    <>
      <Stack sx="w-full rounded-lg" flexDirection="col">
        <Typography
          variant="normal"
          align="center"
          color="#F5CD19"
          className="text-yellow-400 mb-1 text-[10px]"
        >
          Risky
        </Typography>
        <Stack justifyContent="center" alignItems="center" width="w-[90%]" sx="mb-5">
          {/*<GaugeChart
            id="gauge-chart1"
            percent={Number(value) / 100}
            className="w-full h-24 flex justify-items-center  self-center  "
            animate={false}
            colors={["#EA4228", "#F5CD19", "#5BE12C"]}
            textColor={
              value >= 70 ? "#5BE12C" : value < 50 ? "#EA4228" : "#F5CD19"
            }
          /> */}
        </Stack>
        <Stack justifyContent="between" sx="mt-14 mx-2">
          <Typography variant="normal" color="#EA4228" className="text-[10px] ">Likely a scam</Typography>
          <Typography variant="normal" color="#5BE12C" className="text-[10px] ">Looks Good</Typography>
          </Stack>
        <Stack justifyContent="center" margin="mt-10">
          <Stack
            sx={
              value >= 70
                ? "h-8 p-4 bg-green-500 bg-opacity-10 rounded-full text-green-600 text-xs font-bold leading-none border border-emerald-700 justify-center items-center gap-2.5 inline-flex"
                : value < 50
                ? "h-8 p-4 bg-red-500 bg-opacity-10 rounded-full text-red-600 text-xs font-bold leading-none border border-[red] justify-center items-center gap-2.5 inline-flex"
                : "h-8 p-4 bg-[#F5CD19] bg-opacity-10 rounded-full text-[#F5CD19] text-xs font-bold leading-none border border-[#F5CD19] justify-center items-center gap-2.5 inline-flex"
            }
          >
            <div className="text-[9px] md:text-xs lg:text-xs">
              {value >= 70
                ? "Looks Good"
                : value <= 50
                ? "Looks Bad"
                : "Looks Risky"}
            </div>
          </Stack>
        </Stack>
        <Typography align="left" className="mt-10 mb-10 md:mb-0 lg:mb-0 md:ml-2 lg:ml-2 p-2 text-xs  text-center md:text-start lg:text-start">
          <span className="md:mr-1 lg:mr-1 text-[#F5841F] md:text-[#F5CD19] lg:text-[#F5CD19] text-center md:text-start lg:text-start block md:inline lg:inline mb-4 md:mb-0 lg:mb-0">DISCLAIMER:</span>
          This reports findings should not be interpreted as financial advise
          They are, at best, estimates to aid your analysis. Remember to always
          DYOR!
        </Typography>
        <>
          <Stack flexDirection="col" sx="w-full hidden md:flex lg:flex" margin="mt-10">
            {scamDatabase.map((scam, index) => (
              <>
                <Stack
                  padding="pl-4 pt-2"
                  sx="border-b border-slate-800 w-full h-[40px]"
                  key={index}
                >
                  <Typography
                    variant="bold"
                    className=" text-lg leading-normal"
                  >
                    {scam.title}
                  </Typography>
                </Stack>
                {scam.checks && scam.checks.map((check, index) => (
                  <Stack flexDirection="col" gap={4} padding="p-3" key={index}>
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
                              ? "text-sm leading-normal"
                              : "text-sm leading-normal"
                          }
                          key={index}
                        >
                          {check}
                        </Typography>

                        {check !== "Data Source:" &&
                          check !== "This contract address is involved in:" && (
                            <HoverCard>
                              <HoverCardTrigger>
                                <HiInformationCircle className="cursor-pointer text-xs  text-[grey]" />
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
                            className=" text-sm leading-normal"
                          >
                            {scam.results && scam.results[index]}
                          </Typography>
                          {scam.status && scam.status[index] === true ? (
                      <AiOutlineCheck color="green"/>
                    ) :scam.status && scam.status[index] === false ?
                      <RxCross1 color="red"/> : ""
                    }
                        </Stack>
                      )}
                    </Stack>
                  </Stack>
                ))}
              </>
            ))}
          </Stack>
        </>
      </Stack>
    </>
  );
};

export default ScamGuage;
