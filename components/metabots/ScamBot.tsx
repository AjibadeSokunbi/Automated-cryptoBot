"use client";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import React, { FC } from "react";
// import GaugeChart from "react-gauge-chart";
import { AiFillCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { AddressSecurity, TokenSecurity } from "@/utils/types";
interface Props {
  address: string;
  score: number;
  aSecurity: AddressSecurity | null;
  aToken: TokenSecurity | null;
}

const ScamBot: FC<Props> = ({ address, score, aSecurity, aToken }) => {
  const tokenSecurity: any = aToken;
  const addressSecurity: any = aSecurity;

  const value = score;

  const dexScam =
    tokenSecurity && addressSecurity
      ? [
          {
            checks: "Is this Token's Contract Verified?",
            results:
              tokenSecurity && tokenSecurity[address]?.is_open_source
                ? tokenSecurity[address]?.is_open_source === "0"
                  ? "No"
                  : "Yes"
                : "Not Available",
            status:
              tokenSecurity && tokenSecurity[address]?.is_open_source
                ? tokenSecurity[address]?.is_open_source === "0"
                  ? false
                  : true
                : null,
          },
          {
            checks: "Honeypot Test",
            results:
              (tokenSecurity && tokenSecurity[address]?.cannot_sell_all) ||
              (tokenSecurity && tokenSecurity[address]?.is_honeypot)
                ? (tokenSecurity &&
                    tokenSecurity[address]?.cannot_sell_all === "0") ||
                  (tokenSecurity && tokenSecurity[address]?.is_honeypot === "0")
                  ? "Passed"
                  : "Failed"
                : "Not Available",
            status:
              (tokenSecurity && tokenSecurity[address]?.cannot_sell_all) ||
              (tokenSecurity && tokenSecurity[address]?.is_honeypot)
                ? (tokenSecurity &&
                    tokenSecurity[address]?.cannot_sell_all === "0") ||
                  (tokenSecurity && tokenSecurity[address]?.is_honeypot === "0")
                  ? true
                  : false
                : null,
          },

          {
            checks: "Can Token Creator Mint New Tokens?",
            results:
              tokenSecurity && tokenSecurity[address]?.is_mintable
                ? tokenSecurity && tokenSecurity[address]?.is_mintable === "0"
                  ? "No"
                  : "Yes"
                : "Not Available",
            status:
              tokenSecurity && tokenSecurity[address]?.is_mintable
                ? tokenSecurity[address]?.is_mintable === "0"
                  ? true
                  : false
                : null,
            info: true,
          },
          {
            checks: "Is This a Honeypot related address?",
            results:
              addressSecurity?.honeypot_related_address === "0" ? "No" : "Yes",
            status:
              addressSecurity.honeypot_related_address === "0" ? true : false,
            info: true,
          },
          {
            checks: "Can Token owner tamper with balance?",
            results:
              tokenSecurity && tokenSecurity[address]?.owner_change_balance
                ? tokenSecurity[address].owner_change_balance === "1"
                  ? "Yes"
                  : "No"
                : "Not Available",
            status:
              tokenSecurity && tokenSecurity[address]?.owner_change_balance
                ? tokenSecurity[address].owner_change_balance === "1"
                  ? false
                  : true
                : null,
          },
          {
            checks: "Is there a hidden contract with owner?",
            results:
              tokenSecurity &&
              tokenSecurity &&
              tokenSecurity[address]?.hidden_owner
                ? tokenSecurity && tokenSecurity[address]?.hidden_owner === "1"
                  ? "Yes"
                  : "No"
                : "Not Available",
            status:
              tokenSecurity && tokenSecurity[address]?.hidden_owner
                ? tokenSecurity[address].hidden_owner === "1"
                  ? false
                  : true
                : null,
          },
        ]
      : [];

  return (
    <>
      <Stack
        flexDirection="col"
        sx="rounded-tl rounded-tr max-w-[100%] md:max-w-[256px] lg:max-w-[256px] w-full"
      >
        <Typography className="w-full text-sm font-semibold leading-normal px-4 md:px-0 lg:px-0">
          Meptadapp Scam Score
        </Typography>
        <div className="mt-2 w-full h-[0px] border border-slate-800"></div>
        <Stack flexDirection="col" margin="mt-2" sx="px-4 md:px-0 lg:px-0">
          <span className="text-[10px] md:text-[5.17px] lg:text-[5.17px] text-center text-[#F5CD19] font-normal font-['Instrument Sans'] leading-3 tracking-tight">
            Risky
          </span>
          <Stack justifyContent="center">
            {/* <GaugeChart
              id="gauge-chart1"
              style={{ height: "50%", width: "100%", position: "relative" }}
              percent={Number(score.toFixed(0)) / 100}
              className="w-0 "
              animate={false}
              colors={["#EA4228", "#F5CD19", "#5BE12C"]}
              textColor={
                value >= 70 ? "#5BE12C" : value < 50 ? "#EA4228" : "#F5CD19"
              }
            /> */}
          </Stack>
          <Stack justifyContent="between" margin="mt-0" sx="md:px-4 lg:px-4">
            <span className="text-[10px] md:text-[5.17px] lg:text-[5.17px] text-[#EA4228] font-normal font-['Instrument Sans'] leading-3 tracking-tight">
              Likely a scam
            </span>
            <span className="text-[10px] md:text-[5.17px] lg:text-[5.17px] text-[#5BE12C] font-normal font-['Instrument Sans'] leading-3 tracking-tight">
              Looks Good
            </span>
          </Stack>
        </Stack>
        {dexScam.map((val, index) => (
          <Stack key={index} margin="mt-3 px-2" justifyContent="between">
            <span
              color="#BABABA"
              className="text-[10px] text-[#BABABA] font-normal leading-[15px] tracking-tight"
            >
              {val.checks}
            </span>

            <Stack gap={1} alignItems="center">
              <Stack
                alignItems="center"
                sx={
                  val.results === "Passed"
                    ? "text-green-500 text-right text-green-500 text-[10px] p-1 px-1.5 bg-green-500 bg-opacity-10 rounded-full border border-zinc-900 border-opacity-80"
                    : ""
                }
              >
                <Typography className="text-right text-gray-200 text-xs font-bold leading-none">
                  {val.results}
                </Typography>
              </Stack>

              {val.results !== "Failed" &&
                val.results !== "Passed" &&
                val.results !== "Not Available" &&
                val.status === true && <AiFillCheckCircle color="#17CB49" />}
              {val.results !== "Failed" &&
                val.results !== "Passed" &&
                val.results !== "Not Available" &&
                val.status === false && (
                  <AiOutlineCloseCircle color="#cb1717" />
                )}
            </Stack>
          </Stack>
        ))}
        <Stack flexDirection="col" alignItems="center" gap={2}>
          <Typography
            className="text-xs font-normal mt-2 font-['Instrument Sans']"
            align="center"
          >
            To see more comprehensive analysis
          </Typography>
          <button className="w-1/3 px-2 py-1 bg-blue-600 rounded text-xs font-normal p-0 m-1 border-none hover:border-none">
            Click Here
          </button>
        </Stack>
      </Stack>
    </>
  );
};

export default ScamBot;
