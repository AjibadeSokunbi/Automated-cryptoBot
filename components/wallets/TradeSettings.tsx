"use client";
import React, { FC, useState } from "react";
import Typography from "@/components/custom/Typography";
import Stack from "@/components/custom/Stack";
import { Slider3 } from "../ui/slider";
import { Switch4 } from "../ui/switch";
import { HiInformationCircle } from "react-icons/hi";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UserSetting } from "@/utils/types";
import { handleUserSettings } from "@/utils/formAction/tradeAction";
import { SettingsButton } from "./SettingsButton";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {
  settings: UserSetting;
}

const TradeSettings: FC<Props> = ({ settings }) => {
  const slipValue = [settings?.slippage];
  const [slippage, setSlippage] = useState<number[]>(slipValue);
  const [scam, setScam] = useState<number>(settings?.scamScore);
  const pair = "0x11b815efb8f581194ae79006d24e0d814b7697f6";
  return (
    <form
      action={async (formData) => {
        await handleUserSettings(formData, pair as string);
      }}
    >
      <Stack flexDirection="col" padding="px-4">
        <Accordion
          type="single"
          defaultValue="item-1"
          collapsible
          className="w-full"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {" "}
              <Stack gap={1} alignItems="center">
                {" "}
                <span className="text-[#B5B6B6] text-sm font-medium mr-1">
                  {" "}
                  Trade Settings{" "}
                </span>
                <HiInformationCircle className="text-xs md:text-base lg:text-base text-[#989898] mr-2" />{" "}
              </Stack>
            </AccordionTrigger>
            <AccordionContent>
              <Stack flexDirection="col" sx="w-full mb-8">
                <Typography variant="bold" className="text-base mb-2">
                  {" "}
                  Scam Score Settings: {scam}%
                </Typography>
                <Typography variant="medium" className="text-xs mb-4">
                  {" "}
                  <span className="text-[#FFC107]"> Between 0-100% </span>{" "}
                </Typography>
                <Slider3
                  name="scam"
                  defaultValue={[scam]}
                  onValueChange={(value) => setScam(value[0])}
                  max={100}
                  step={1}
                />
              </Stack>
              <Stack flexDirection="col" sx="w-full mb-8">
                <Typography variant="bold" className="text-base mb-2">
                  {" "}
                  Maximum slippage allowed: {slippage}%
                </Typography>
                <Typography variant="medium" className="text-xs mb-4">
                  {" "}
                  <span className="text-[#FFC107]"> Between 0-100% </span>{" "}
                </Typography>
                <Slider3
                  name="slippage"
                  defaultValue={[settings?.slippage]}
                  onValueChange={(value) => setSlippage(value)}
                  max={100}
                  step={1}
                />
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="between"
                sx="w-full mb-5"
              >
                <Typography variant="medium" className="text-base">
                  {" "}
                  Fail Safe Protection:{" "}
                </Typography>
                <Switch4
                  name="simulate"
                  defaultChecked={settings?.shouldSimulate}
                />
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="between"
                sx="w-full mb-5"
              >
                <Typography variant="medium" className="text-base">
                  {" "}
                  Private Transactions:{" "}
                </Typography>
                <Switch4 name="private" defaultChecked={settings?.isPrivate} />
              </Stack>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {" "}
              <Stack gap={1} alignItems="center">
                {" "}
                <span className="text-[#B5B6B6] text-sm font-medium mr-2">
                  {" "}
                  Gas Settings{" "}
                </span>
                <HiInformationCircle className="text-xs md:text-base lg:text-base text-[#989898] mr-2" />{" "}
              </Stack>
            </AccordionTrigger>
            <AccordionContent>
              <Stack
                alignItems="center"
                justifyContent="between"
                sx="w-full mb-5"
              >
                <Typography variant="medium" className="text-base">
                  {" "}
                  Auto Gas{" "}
                </Typography>
                <Switch4 name="autoGas" defaultChecked={settings.autogas} />
              </Stack>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <DialogClose className="w-full">
          <SettingsButton />
        </DialogClose>
      </Stack>
    </form>
  );
};

export default TradeSettings;
