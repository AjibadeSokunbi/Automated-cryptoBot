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
import { useSession } from "next-auth/react";
import { ClientDefaultSession } from "@/utils/types";
import { toast } from "@/components/ui/use-toast";
interface Props {}

const BuySettings = () => {
  const { data } = useSession();

  const user: ClientDefaultSession = data as ClientDefaultSession;
  const [privates, setPrivate] = useState<boolean>(
    user?.botUser?.data?.settings?.isPrivate
  );
  const [simulate, setSimulate] = useState<boolean>(
    user?.botUser?.data?.settings?.shouldSimulate
  );
  const [autoGas, setAutoGas] = useState<boolean>(
    user?.botUser?.data?.settings?.autogas
  );
  const slipValue = [user?.botUser?.data?.settings?.slippage]
  const [slippage, setSlippage] = useState<number[]>(slipValue);

  const [loading, setLoading] = useState<boolean>(false)

  const metabotURL = process.env.NEXT_PUBLIC_METABOT_URL as string;

  const key = process.env.NEXT_PUBLIC_METABOT_API_KEY;

  const metabotApiKey = `${key}:${user?.botUser?.data?.token}`;

  const headers = new Headers({
    Authorization: metabotApiKey,
    "Content-Type": "application/json",
  });

  const handleSettings = async () => {
    setLoading(true);
    const requestBody = JSON.stringify({
      params: {
        autogas: autoGas,
        shouldSimulate: simulate,
        isPrivate: privates,
        slippage: slippage[0],
      },
    });

    const requestOptions: RequestInit = {
      method: "POST",
      headers,
      body: requestBody,
    };

    try {

      const response = await fetch(
        `${metabotURL}user/editSettings`,
        requestOptions
      );
      await response.json();
      console.log(response)
      setLoading(false);
      toast({
        title: "Settings Saved",
        variant: "default",
        description: "You can now Trade!",
      });
    } catch (error) {
      console.error("An error occurred:", error);
      setLoading(false);

    }
  };


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Typography
          color="#FFC107"
          className="cursor-pointer text-xs md:text-sm lg:text-sm font-normal font-['Instrument Sans'] underline leading-tight tracking-tight"
        >
          Settings
        </Typography>
      </DialogTrigger>
      <DialogContent2 className="w-[80%] md:w-2 lg:w-2 bg-[#0C141F] border border-slate-800 p-2">
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
            <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
              Use Private Transactions
            </Typography>
            <Checkbox2
              defaultChecked={privates}
              onCheckedChange={() =>
                setPrivate(privates === true ? false : true)
              }
              className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
            />
          </Stack>{" "}
          <Stack
            justifyContent="between"
            width="w-full"
            alignItems="center"
            margin="mt-2 px-1"
          >
            <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
              Fail-Safe Protection
            </Typography>
            <Checkbox2
              defaultChecked={simulate}
              onCheckedChange={() =>
                setSimulate(simulate === true ? false : true)
              }
              className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
            />
          </Stack>{" "}
          <Stack
            justifyContent="between"
            width="w-full"
            alignItems="center"
            margin="mt-2 px-1"
          >
            <Typography className="text-base font-normal font-['Instrument Sans'] leading-7">
              Slippage: {slippage[0]}%
            </Typography>
            <Stack gap={2} alignItems="center">
              <Typography>AutoGas</Typography>
              <Checkbox2
                defaultChecked={autoGas}
                onCheckedChange={() =>
                  setAutoGas(autoGas === true ? false : true)
                }
                className={`data-[state=checked]:text-[#FFC107] data-[state=checked]:border-[#FFC107] border-[#595f64] ring-offset-[#FFC107]`}
              />
            </Stack>
          </Stack>
          <Slider2
            defaultValue={[user?.botUser?.data?.settings?.slippage]}
            onValueChange={(value) => setSlippage(value)}
            max={100}
            step={1}
            className="my-3"
          />
        </Stack>
        <DialogFooter>
          <Button onClick={handleSettings} disabled={loading}  className="w-full" size="sm">
            Save{loading && "...."}
          </Button>
        </DialogFooter>
      </DialogContent2>
    </Dialog>
  );
};

export default BuySettings;
