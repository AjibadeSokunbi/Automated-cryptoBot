"use client";
import React, { FC, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent2,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox2 } from "@/components/ui/checkbox";
import { Slider2 } from "@/components/ui/slider";
import { UserSetting } from "@/utils/types";
import { DialogClose } from "@radix-ui/react-dialog";
import { SubmitButton } from "./Buto";
import { handleUserSettings } from "@/utils/formAction/tradeAction";
import { useParams } from "next/navigation";
interface Props {
  settings: UserSetting;
}

const BuySettingsMobile: FC<Props> = ({ settings }) => {
  const slipValue = [settings?.slippage];
  const [slippage, setSlippage] = useState<number[]>(slipValue);
  const params = useParams()
  const pair = params.address
  return (
    <div className="flex md:hidden lg:hidden">
      <Dialog>
        <DialogTrigger asChild>
          <Typography
            color="#FFC107"
            className="cursor-pointer text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] underline leading-tight tracking-tight"
          >
            Settings
          </Typography>
        </DialogTrigger>
        <DialogContent2 className="w-[80%] md:w-2 lg:w-2 top-[50%] md:top-auto lg:top-auto left-[50%] md:left-auto lg:left-auto bg-[#0C141F] border border-slate-800 p-2">
          <form
            action={async (formData) => {
              await handleUserSettings(formData, pair as string);
            }}
          >
            <Stack flexDirection="col">
              <Stack
                justifyContent="between"
                height="h-6"
                width="w-full"
                alignItems="center"
              >
                <Typography
                  className="text-xs md:text-sm lg:text-sm font-bold font-['Instrument Sans'] leading-tight"
                  color="#0A53BE"
                >
                  Swap Settings
                </Typography>
                <IoIosArrowDown className="" />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                  Use Private Transactions
                </Typography>
                <Checkbox2
                  name="private"
                  defaultChecked={settings?.isPrivate}
                  className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
                />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                 Extra Fail-Safe Protection
                </Typography>
                <Checkbox2
                  name="simulate"
                  defaultChecked={settings?.shouldSimulate}
                  className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
                />
              </Stack>{" "}
              <Stack
                justifyContent="between"
                width="w-full"
                alignItems="center"
                margin="mt-2 px-1"
              >
                <Typography className="text-xs md:text-base lg:text-base font-normal font-['Instrument Sans'] leading-7">
                  Slippage: {slippage[0]}%
                </Typography>
                <Stack gap={2} alignItems="center">
                  <Typography className="text-xs md:text-base lg:text-base">
                    AutoGas
                  </Typography>
                  <Checkbox2
                    name="autoGas"
                    defaultChecked={settings.autogas}
                    className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
                  />
                </Stack>
              </Stack>
              <Slider2
                name="slippage"
                defaultValue={[settings?.slippage]}
                onValueChange={(value) => setSlippage(value)}
                max={100}
                step={1}
                className="my-3"
              />
            </Stack>
            <DialogClose className="w-full">
              <SubmitButton />
            </DialogClose>
          </form>{" "}
        </DialogContent2>
      </Dialog>
    </div>
  );
};

export default BuySettingsMobile;
