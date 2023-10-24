"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Slider2 } from "@/components/ui/slider";
import TxTab from "./TxTab";
import NewTokens from "./NewTokens";
import { NewTokenType } from "@/utils/types";
import WatchList from "./WatchList/WatchList";
import { FiSettings } from "react-icons/fi";
import { Switch2 } from "../ui/switch";
import useProjectStore from "@/utils/zustanStore/favorites";
import ScamChecker from "@/utils/Scam";
interface Props {
  NewData: NewTokenType[];
}

const InnerTab: FC<Props> = ({ ...props }) => {
  const { NewData } = props;

  const [activeTab, setActiveTab] = useState(0);
  const [ape, setApe] = useState(false);

  const handleApe = () => {
    setApe(!ape ? true : false);
  };

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setApe(activeTab !== 1 ? false : true);
  };

  const { favoritedProjects } = useProjectStore();
  const TokenPairData = favoritedProjects?.projectsDetails?.map(
    (token) => token?.tokenPairDetails
  );




  return (
    <>
      <Stack flexDirection="col" padding="p-2">
        <Stack justifyContent="between">
          <Stack gap={4} height="h-[29px]">
            <Typography
              color={activeTab === 0 ? "#ffff" : "#6C757D"}
              onClick={() => handleTabClick(0)}
              className={`text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer ${
                activeTab === 0
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              Transactions
            </Typography>
            <Typography
              color={activeTab === 1 ? "#ffff" : "#6C757D"}
              onClick={() => handleTabClick(1)}
              className={`text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer relative ${
                activeTab === 1
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              <span className="absolute -top-2 -right-3 text-[6px] font-bold  text-white bg-red-500 rounded-r rounded-l py-0.5 px-2 mb-2">
                Hot
              </span>
              New Tokens
            </Typography>
            <Typography
              color={activeTab === 2 ? "#ffff" : "#6C757D"}
              onClick={() => handleTabClick(2)}
              className={`text-base font-bold font-['Instrument Sans'] leading-tight cursor-pointer relative ${
                activeTab === 2
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : ""
              }`}
            >
              {TokenPairData && (
                <span className="absolute -top-2 -right-3 text-[10px] font-bold  text-black bg-yellow-400 rounded-full text-center w-3 h-3">
                  {TokenPairData?.length}
                </span>
              )}
              Watchlist
            </Typography>
          </Stack>
          {activeTab === 1 && (
            <Stack alignItems="center" gap={2}>
              <Typography className="text-white text-xs font-bold font-['Instrument Sans'] leading-3">
                Ape Mode
              </Typography>
              <Switch2
                onCheckedChange={handleApe}
                className="data-[state=checked]:bg-green-700"
              />

              <Dialog>
                <DialogTrigger asChild>
                  <FiSettings />
                </DialogTrigger>
                <DialogContent className="w-2 top-[47%] left-[57%] max-w-sm bg-[#0C141F] border border-slate-800 p-2">
                  <Stack flexDirection="col">
                    <Stack
                      justifyContent="between"
                      height="h-6"
                      width="w-full"
                      alignItems="center"
                    >
                      <Typography
                        className="text-sm font-bold font-['Instrument Sans'] leading-tight"
                        color="#0A53BE"
                      >
                        App Mode Parameters
                      </Typography>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                        Liquidity:
                      </Typography>
                      <Stack alignItems="center" gap={1}>
                        <Typography
                          color="#6C757D"
                          className="text-sm font-normal"
                        >
                          Less than
                        </Typography>
                        <Stack sx="px-2.5 text-sm font-normal  rounded-lg shadow border border-slate-800 justify-center items-center">
                          $100000
                        </Stack>
                      </Stack>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                        Volume:
                      </Typography>
                      <Stack alignItems="center" gap={1}>
                        <Typography
                          color="#6C757D"
                          className="text-sm font-normal"
                        >
                          Less than
                        </Typography>
                        <Stack sx="px-2.5 text-sm font-normal  rounded-lg shadow border border-slate-800 justify-center items-center">
                          $100000
                        </Stack>
                      </Stack>
                    </Stack>{" "}
                    <Stack
                      justifyContent="between"
                      width="w-full"
                      alignItems="center"
                      margin="mt-2 px-1"
                    >
                      <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
                        MarketCap
                      </Typography>
                      <Stack gap={2} alignItems="center">
                        <Stack alignItems="center" gap={1}>
                          <Typography
                            color="#6C757D"
                            className="text-sm font-normal"
                          >
                            Less than
                          </Typography>
                          <Stack sx="px-2.5 text-sm font-normal  rounded-lg shadow border border-slate-800 justify-center items-center">
                            $100000
                          </Stack>
                        </Stack>
                      </Stack>
                    </Stack>
                    <div className="ml-1 mt-1 text-white text-sm font-normal font-['Instrument Sans'] leading-normal">
                      Meta Scam Score:
                      <span className="ml-1 text-amber-400 text-sm font-bold font-['Instrument Sans'] leading-normal">
                        50% and above
                      </span>{" "}
                    </div>
                    <Slider2
                      defaultValue={[33]}
                      max={100}
                      step={1}
                      className="my-3 px-1.5"
                    />
                  </Stack>
                </DialogContent>
              </Dialog>
            </Stack>
          )}
        </Stack>

        {activeTab === 0 && (
          <>
            <TxTab />
          </>
        )}
        {activeTab === 1 && (
          <>
            <NewTokens NewData={NewData} ape={ape} />
          </>
        )}
        {activeTab === 2 && (
          <>
            <WatchList />
          </>
        )}
      </Stack>
    </>
  );
};

export default InnerTab;
