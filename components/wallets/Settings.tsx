import React, { FC } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Security from "./Security";
import TradeSettings from "./TradeSettings";
import { UserSetting } from "@/utils/types";


interface Props {
    settings: UserSetting;
    wallets: string[];
    hasSetPassword: boolean
  }

const Settings: FC<Props> = ({settings, wallets, hasSetPassword}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="default"
          size="sm"
          className="bg-[#212E40] text-[#E7E7E7] font-bold text-[10px] md:text-base lg:text-base"
        >
          {" "}
          Settings{" "}
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0A1019] py-3 px-0 border-none">
        <Tabs defaultValue="walletSettings" className="w-full">
          <TabsList className="mb-2 px-1 w-full mx-auto flex justify-start items-center bg-[#0A1019]">
            <TabsTrigger
              value="walletSettings"
              className="ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-fit px-5 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7]"
            >
              {" "}
              Wallet Settings{" "}
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="ring-offset-[#084298] focus-visible:bg-[#084298] data-[state=active]:bg-[#084298] font-bold w-fit px-5 text-[#E7E7E7] data-[state=active]:text-[#E7E7E7]"
            >
              {" "}
              Security{" "}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="walletSettings">
            <TradeSettings settings={settings} />
          </TabsContent>

          <Security wallets={wallets} hasSetPassword={hasSetPassword} />
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default Settings;
