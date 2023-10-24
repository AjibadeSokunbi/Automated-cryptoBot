"use client";
import React, { FC } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import Image from "next/image";
import Input from "@/components/custom/Input";
import { FaTelegram } from "react-icons/fa";
import { useSession } from "next-auth/react";
import Copy from "./Copy";
import { UserBotData } from "@/utils/types";

interface Props {
  referralId: string;
  userDatas: UserBotData;
}

const Success: FC<Props> = ({ referralId, userDatas }) => {
  const { data: session } = useSession();

  return (
    <Dialog defaultOpen>
      {session?.user?.email && (
        <DialogContent className="bg-[#0A1019] border-none w-full h-full">
          <Stack
            flexDirection="col"
            justifyContent="center"
            sx="w-full h-full overflow-y-auto px-0 md:px-3 lg:px-3 pt-72 md:pt-80 lg:pt-80 pb-5"
          >
            <Stack
              flexDirection="col"
              justifyContent="center"
              alignItems="center"
              sx="bg-[#101720] w-full py-5 mb-5"
            >
              <Typography variant="bold" className="mb-3 text-2xl">
                {" "}
                Success:{" "}
              </Typography>
              <Image
                src="success.svg"
                width={120}
                height={120}
                alt=""
                className="mb-5"
              />
              <Typography variant="normal" className="text-lg text-center">
                <span className="font-semibold"> Congratulations! 🎉 </span>{" "}
                <br /> You&apos;re officially a part of us.
              </Typography>
            </Stack>

            <Stack sx="flex-col-reverse md:flex-col lg:flex-col w-full">
              <Stack
                flexDirection="col"
                justifyContent="center"
                alignItems="center"
                sx="bg-[#101720] w-full p-5 mb-5"
              >
                <Typography
                  variant="medium"
                  className="mb-3 text-xs md:text-base lg:text-base"
                >
                  {" "}
                  Your Referral Link{" "}
                </Typography>
                <Stack alignItems="center" sx="w-full mb-5">
                  <Input
                    type="text"
                    disabled
                    placeholder={`https://metadapp.com?ref=${referralId}`}
                    className="bg-transparent active:outline-none outline-none py-2 border border-[#212E40] border-r-transparent rounded-l-lg"
                  />
                  <Copy referral={referralId} />
                </Stack>
              </Stack>

              <Stack sx="w-full flex-col">
                <Stack
                  flexDirection="col"
                  justifyContent="center"
                  alignItems="center"
                  sx="bg-[#101720] w-full p-5 mb-5"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx="mb-3 md:mb-0 lg:mb-0"
                  >
                    <Typography
                      variant="bold"
                      className="text-xs md:text-lg lg:text-lg text-center mr-3"
                    >
                      <span className="text-[#E7E7E7]"> My Metapoints: </span>
                    </Typography>
                    <Typography
                      variant="bold"
                      className="text-base md:text-[40px] lg:text-[40px] text-center"
                    >
                      <span className="text-[#4CA244] font-bold">
                        {" "}
                        {userDatas?.data?.points}{" "}
                      </span>
                    </Typography>
                  </Stack>
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx="bg-[#161F2C] w-full p-5"
                  >
                    <Typography
                      variant="normal"
                      className="text-[9px] md:text-xs lg:text-xs text-center"
                    >
                      {" "}
                      <span className="text-[#E7E7E7]">
                        {" "}
                        You just earned{" "}
                        <span className="text-[#0D6EFD]">
                          {" "}
                          100 Metapoints{" "}
                        </span>{" "}
                        for Pre registering. And you can earn extra 10
                        Metapoints for each person you refer.{" "}
                      </span>{" "}
                    </Typography>
                  </Stack>
                </Stack>

                <Stack
                  flexDirection="col"
                  justifyContent="center"
                  alignItems="center"
                  sx="bg-[#101720] w-full p-5 mb-5"
                >
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx="mb-3 md:mb-0 lg:mb-0"
                  >
                    <Typography
                      variant="bold"
                      className="text-xs md:text-lg lg:text-lg text-center mr-3"
                    >
                      <span className="text-[#E7E7E7]">
                        {" "}
                        My Total Referred Metapoints:{" "}
                      </span>
                    </Typography>
                    <Typography
                      variant="bold"
                      className="text-base md:text-[40px] lg:text-[40px] text-center"
                    >
                      <span className="text-[#FFC107] font-bold">
                        {" "}
                        {userDatas?.data?.referred?.length > 0 ? userDatas?.data?.referred?.length * 10: 0}{" "}
                      </span>
                    </Typography>
                  </Stack>
                  <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx="bg-[#161F2C] w-full p-5"
                  >
                    <Typography
                      variant="normal"
                      className="text-[9px] md:text-xs lg:text-xs text-center"
                    >
                      {" "}
                      <span>
                        {" "}
                        You have earned{" "}
                        <span className="text-[#0D6EFD]">
                          {" "}
                          {userDatas?.data?.referred?.length > 0 ? userDatas?.data?.referred?.length * 10: 0} Total
                          Referred Metapoints{" "}
                        </span>{" "}
                        for Referring. And you can earn much more as you refer.{" "}
                      </span>{" "}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              flexDirection="col"
              justifyContent="center"
              alignItems="center"
              sx="bg-[#101720] w-full p-5"
            >
              <Typography
                variant="bold"
                className="text-[10px] md:text-sm lg:text-sm text-center mb-5"
              >
                <span className="text-[#E7E7E7]">
                  {" "}
                  Incase you are yet to, Click the button below to become a part
                  of our vibrant community.{" "}
                </span>
              </Typography>

              <Button
                variant="default"
                size="sm"
                className="border-none bg-[#0D6EFD] hover:bg-[#0D6EFD] rounded-lg text-[10px] md:text-base lg:text-base font-semibold px-10"
              >
                {" "}
                Join Our Community{" "}
                <FaTelegram className="text-lg text-white ml-3" />{" "}
              </Button>
            </Stack>
          </Stack>
        </DialogContent>
      )}
    </Dialog>
  );
};

export default Success;
