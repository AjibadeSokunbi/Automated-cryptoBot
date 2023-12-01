import React, { FC } from "react";
import Stack from "@/components/custom/Stack";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs2";
import LiBuy from "./LiBuy";
import BuySettings from "./BuySettings";
import { TokenPairDetails, UserSetting } from "@/utils/types";
import LiSell from "./LiSell";
import BuySettingsMobile from "./BuySettingsMobile";

interface Props {
  tokenData: TokenPairDetails;
  priseUsdEth: number;
  ethBalance: string;
  userBalanc: string | undefined;
  settings: UserSetting;
}

const Limit: FC<Props> = ({
  tokenData,
  priseUsdEth,
  ethBalance,
  userBalanc,
  settings,
}) => {
  return (
    <Stack flexDirection="col" padding="px-2 mt-4">
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="w-full px-2 py-5 bg-slate-800 rounded-lg mb-2 text-white text-xs font-bold font-['Instrument Sans'] leading-none">
          <TabsTrigger
            value="buy"
            className="py-2 ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold text-xs w-full"
          >
            Buy Limit Order
          </TabsTrigger>
          <TabsTrigger
            value="sell"
            className="py-2 ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold text-xs w-full"
          >
            Sell Limit Order
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="w-full ">
          <Stack alignItems="end" justifyContent="end" sx="text-end">
            <BuySettings settings={settings} />
            <BuySettingsMobile settings={settings} />
          </Stack>

          <LiBuy
            ethBalance={ethBalance as string}
            tokenData={tokenData as TokenPairDetails}
            priseUsdEth={priseUsdEth}
            userBalanc={userBalanc}
            settings={settings}
          />
        </TabsContent>

        <TabsContent value="sell">
          <Stack alignItems="end" justifyContent="end" sx="text-end">
            <BuySettings settings={settings} />
            <BuySettingsMobile settings={settings} />
          </Stack>
          {/* <HiArrowsUpDown className="text-center w-7" size={30} /> */}
          <LiSell
            ethBalance={ethBalance as string}
            tokenData={tokenData as TokenPairDetails}
            priseUsdEth={priseUsdEth}
            userBalanc={userBalanc}
            settings={settings}
          />
        </TabsContent>
      </Tabs>
    </Stack>
  );
};

export default Limit;
