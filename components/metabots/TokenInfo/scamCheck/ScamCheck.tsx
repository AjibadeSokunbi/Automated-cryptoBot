import Stack from "@/components/custom/Stack";

import React, { FC } from "react";

import ScamBox from "./ScamBox";

import ScamGuage from "./ScamGuage";
import TokenHolders from "./TokenHolders";
import { fixNum, makeWalletAddress } from "@/utils/indexServer";

interface Props {
  tokenSecurity: any;
  addressSecurity: any;
  value: number;

  address: string;
}

const ScamCheck: FC<Props> = ({
  tokenSecurity,
  addressSecurity,
  address,
  value,
}) => {
  const scamAnalysis =
    tokenSecurity && addressSecurity
      ? [
          {
            title: "Token Info",
            checks: ["Token Name", "Token Supply"],
            desc: ["Token Name", "Token Supply"],
            results: [
              tokenSecurity[address]?.token_name || "Not Available",
              fixNum(tokenSecurity[address]?.total_supply, 4, true) ||
                "Not Available",
            ],
          },
          {
            title: "Token Creator Information",
            checks: [
              "Contract Owner",
              "Contract Address",
              "Creator’s Balance",
              "Tokens held by creator",
              "Can the token owner manipulate the balance?",
              "Is there a hidden contract owner?",
            ],
            desc: [
              "Balance of the Creator’s Wallet",
              "Token's contract Address",
              "Total amount of tokens held by creator",
              "This shows whether the token's owner can change the balance of holders without their consent.",
              "This indicates if there is a hidden contract owner.",
              "A honeypot is a situation where scammers make it impossible for you to sell the token you have bought. any token that fails this test is an outright scam.",
            ],
            results: [
              makeWalletAddress(tokenSecurity[address]?.owner_address, 8, 3) ||
                "Not Available",
              makeWalletAddress(address, 8, 3) || "Not Available",
              tokenSecurity[address]?.creator_balance
                ? fixNum(tokenSecurity[address]?.creator_balance, 4, true)
                : "Not Available",
              tokenSecurity[address]?.creator_percent
                ? `${fixNum(
                    tokenSecurity[address]?.creator_percent * 100,
                    2
                  )}% of Total supply`
                : "Not Available",
              tokenSecurity[address]?.owner_change_balance
                ? tokenSecurity[address]?.owner_change_balance === "1"
                  ? "Yes"
                  : "No"
                : "Not Available",
              tokenSecurity[address]?.hidden_owner
                ? tokenSecurity[address]?.hidden_owner === "1"
                  ? "Yes"
                  : "No"
                : "Not Available",
            ],
            status: [
              null,
              null,
              null,
              tokenSecurity[address]?.creator_percent
                ? tokenSecurity[address]?.creator_percent * 100 > 10
                  ? false
                  : true
                : null,
              tokenSecurity[address]?.owner_change_balance
                ? tokenSecurity[address]?.owner_change_balance === "1"
                  ? false
                  : true
                : null,
              tokenSecurity[address]?.hidden_owner
                ? tokenSecurity[address]?.hidden_owner === "1"
                  ? false
                  : true
                : null,
            ],
          },
          {
            title: "Swap Analysis",
            checks: [
              "Honeypot Test",
              "Buy Tax",
              "Sell Tax",
              "Can slippage be manipulated?",
            ],

            desc: [
              "A honeypot is a situation where scammers make it impossible for you to sell the token you have bought. any token that fails this test is an outright scam.",
              "This describes the additional fee you pay while buying the token. Tax rate over 10% are viewed as bad practice.",
              "This describes the additional fee you pay while selling the token. Tax rate over 10% are viewed as bad practice.",
              "This shows whether the token's owner can change the balance of holders without their consent.",
            ],
            results: [
              tokenSecurity[address]?.cannot_sell_all ||
              tokenSecurity[address]?.is_honeypot
                ? tokenSecurity[address]?.cannot_sell_all === "0" ||
                  tokenSecurity[address]?.is_honeypot === "0"
                  ? "Passed"
                  : "Failed"
                : "Not Available",
              tokenSecurity[address]?.buy_tax === "0"
                ? "0%"
                : tokenSecurity[address]?.buy_tax === "1"
                ? "100%"
                : tokenSecurity[address]?.buy_tax
                ? `${fixNum(tokenSecurity[address]?.buy_tax * 100, 2)}%`
                : "Not Available",
              tokenSecurity[address]?.sell_tax === "0"
                ? "0%"
                : tokenSecurity[address]?.sell_tax === "1"
                ? "100%"
                : tokenSecurity[address]?.sell_tax
                ? `${fixNum(tokenSecurity[address]?.sell_tax * 100, 2)}%`
                : "Not Available",
              tokenSecurity[address]?.slippage_modifiable
                ? tokenSecurity[address]?.slippage_modifiable === "0"
                  ? "No"
                  : "Yes"
                : "Not available",
            ],
            status: [
              tokenSecurity[address]?.cannot_sell_all ||
              tokenSecurity[address]?.is_honeypot
                ? tokenSecurity[address]?.cannot_sell_all === "0" ||
                  tokenSecurity[address]?.is_honeypot === "0"
                  ? true
                  : false
                : null,
              tokenSecurity[address]?.buy_tax
                ? tokenSecurity[address]?.buy_tax !== "1" ||
                  Number(tokenSecurity[address]?.buy_tax) * 100 < 10
                  ? true
                  : false
                : null,
              tokenSecurity[address]?.sell_tax
                ? tokenSecurity[address]?.sell_tax !== "1" ||
                  Number(tokenSecurity[address]?.sell_tax) * 100 < 10
                  ? true
                  : false
                : null,
              tokenSecurity[address]?.slippage_modifiable
                ? tokenSecurity[address]?.slippage_modifiable === "0"
                  ? true
                  : false
                : null,
            ],
          },
          {
            title: "Contract Analysis",
            checks: [
              "Is this token’s contract verified? ",
              "Can the creator mint new tokens?",
              "Does the contract have a proxy?",
            ],

            desc: [
              "Any contract found to be unverified is considered an outright scam.",
              "Reveals whether this contract has the ability to mint unlimited new tokens. Bad actors can easily take advantage of this feature if enabled.",
              "Reveals whether the token has a proxy. In the hands of a bad actor, this feature be exploited.",
            ],
            results: [
              tokenSecurity[address]?.is_open_source
                ? tokenSecurity[address]?.is_open_source === "0"
                  ? "No"
                  : "Yes"
                : "Not available",
              tokenSecurity[address]?.is_mintable
                ? tokenSecurity[address]?.is_mintable === "0"
                  ? "No"
                  : "Yes"
                : "Not available",
              tokenSecurity[address]?.is_proxy
                ? tokenSecurity[address]?.is_proxy === "0"
                  ? "No"
                  : "Yes"
                : "Not Available",
            ],
            status: [
              tokenSecurity[address]?.is_open_source
                ? tokenSecurity[address]?.is_open_source === "0"
                  ? false
                  : true
                : null,
              tokenSecurity[address]?.is_mintable
                ? tokenSecurity[address]?.is_mintable === "0"
                  ? true
                  : false
                : null,
              tokenSecurity[address]?.is_proxy
                ? tokenSecurity[address]?.is_proxy === "0"
                  ? true
                  : false
                : null,
            ],
          },
        ]
      : [];

  const scamDatabase =
    tokenSecurity && addressSecurity
      ? [
          {
            title: "Scam Database Assessment",
            checks: [
              "Is this a Honeypot related Address",
              "This contract address is involved in:",
              "Phishing Activities?",
              "Darkweb Transactions?",
              "Stolen Funds?",
              "Data Source:",
            ],

            desc: [
              "Shows if the smart contract address is linked to any known scams.",
              "",
              "Shows if the smart contract address is linked to any known scams.",
              "Shows if the token address is linked with darkweb transactions.",
              "Percentage of total liquidity locked",
              "",
            ],
            results: [
              addressSecurity.honeypot_related_address === "0" ? "No" : "Yes",
              "",
              addressSecurity.phishing_activities === "0" ? "No" : "Yes",
              addressSecurity.darkweb_transactions === "0" ? "No" : "Yes",
              addressSecurity.stealing_attack === "0" ? "No" : "Yes",
              "",
            ],

            status: [
              addressSecurity.honeypot_related_address === "0" ? true : false,
              null,
              addressSecurity.phishing_activities === "0" ? true : false,
              addressSecurity.darkweb_transactions === "0" ? true : false,
              addressSecurity.stealing_attack === "0" ? true : false,
              null,
            ],
          },
        ]
      : [];
  const holdersRatio = tokenSecurity[address]?.holders.map((e: any) =>
    Number(e?.percent)
  );
  const top10HoldersRatio = holdersRatio * 100;

  const scamResult = tokenSecurity
    ? [
        tokenSecurity[address]?.holder_count
          ? tokenSecurity[address]?.holder_count
          : "Not Available",
        `${fixNum(top10HoldersRatio, 2)}%`,
      ]
    : [];

  return (
    <>
      <Stack sx="w-full rounded-tl rounded-tr flex-row">
        <Stack sx="flex-col-reverse md:flex-row lg:flex-row w-full md:w-2/3 lg:w-2/3">
          <ScamBox scamAnalysis={scamAnalysis} />
          <ScamGuage scamDatabase={scamDatabase} value={value} />
        </Stack>
        <Stack sx="flex-col md:flex-row lg:flex-row w-full md:w-1/3 lg:w-1/3">
          <TokenHolders
            scamResult={scamResult}
            holders={tokenSecurity && tokenSecurity[address]?.holders}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default ScamCheck;
