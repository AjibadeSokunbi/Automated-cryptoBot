"use client";
import React, { FC, useState } from "react";
import Typography from "@/components/custom/Typography";
import Stack from "@/components/custom/Stack";
import { TabsContent } from "@/components/ui/tabs";

import { Input } from "@/components/ui/input";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import {
  retrievePrivateKey,
  setPasswordKey,
} from "@/utils/formAction/Password";
import PassButton from "./PassButton";
import { toast } from "../ui/use-toast";
import PrivateKeyButton from "./PrivateKeyButton";

interface Props {
  wallets: string[];
  hasSetPassword: boolean
}

const Security: FC<Props> = ({ wallets, hasSetPassword }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [keySuccess, setKeySuccess] = useState(false);

  const [conditions, setConditions] = useState<string[]>([]);

  const checkPasswordStrength = (value: string) => {
    const conditionsArray: string[] = [];

    if (value.length < 7) {
      conditionsArray.push("Password must be at least 7 characters.");
    } else if (!/[A-Z]/.test(value)) {
      conditionsArray.push(
        "Password must contain at least one uppercase letter."
      );
    } else if (!/[a-z]/.test(value)) {
      conditionsArray.push(
        "Password must contain at least one lowercase letter."
      );
    } else if (!/\d/.test(value)) {
      conditionsArray.push("Password must contain at least one number.");
    } else if (!/[@#$%^&+=_]/.test(value)) {
      conditionsArray.push(
        "Password must contain at least one special character."
      );
    }

    setConditions(conditionsArray);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setPassword(value);
    checkPasswordStrength(value);
  };

  const handleChangeConfirmPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setConfirmPassword(value);
  };


  const [activeTab, setActiveTab] = useState(hasSetPassword ? 1 : 0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };
  const [privateKey, setPrivateKey] = useState("");
  const securityData = [
    {
      title: `wallet address 1`,
      address: wallets[0],
      key: privateKey,
    },
  ];
  const canClick = password !== confirmPassword
  return (
    <TabsContent value="security">
      <Stack flexDirection="col" sx="w-full px-5">
        {!hasSetPassword && activeTab === 0 && (
          <form
            action={async (formData) => {
              await setPasswordKey(formData);
            }}
          >
            <Stack flexDirection="col" sx={`w-full`}>
              <Stack flexDirection="col" sx="w-full mb-5">
                <Typography variant="medium" className="text-sm mb-3">
                  {" "}
                  <span className="text-[#B5B6B6]"> Set Password </span>{" "}
                </Typography>
                <Input
                  placeholder="Password"
                  required
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChangePassword}
                  className="w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6"
                />
              </Stack>
              <Stack flexDirection="col" sx="w-full mb-5">
                <Typography variant="medium" className="text-sm mb-3">
                  {" "}
                  <span className="text-[#B5B6B6]">
                    {" "}
                    Confirm Password{" "}
                  </span>{" "}
                </Typography>
                <Input
                  name="cpassword"
                  placeholder="Casperbigbig2345"
                  required
                  type="password"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  className="w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6"
                />
              </Stack>

              {conditions.length > 0 && (
                <Stack
                  alignItems="center"
                  justifyContent="center"
                  sx="w-full bg-red-400 rounded-md mb-5"
                >
                  <Typography variant="normal" className="text-base text-white">
                    {" "}
                    {conditions[0]}
                  </Typography>
                </Stack>
              )}

              {conditions.length === 0 &&
                password !== "" &&
                confirmPassword !== "" &&
                password !== confirmPassword && (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx="w-full bg-red-400 rounded-md mb-5"
                  >
                    <Typography
                      variant="normal"
                      className="text-base text-white"
                    >
                      {" "}
                      <p>Passwords do not match.</p>
                    </Typography>
                  </Stack>
                )}

              {conditions.length === 0 &&
                password !== "" &&
                confirmPassword !== "" &&
                password === confirmPassword && (
                  <Stack
                    alignItems="center"
                    justifyContent="center"
                    sx="w-full bg-green-400 rounded-md mb-5"
                  >
                    <Typography
                      variant="normal"
                      className="text-base text-white"
                    >
                      {" "}
                      <p>Password is strong. You can proceed.</p>
                    </Typography>
                  </Stack>
                )}

              <PassButton canClick={canClick} />
            </Stack>
          </form>
        )}{" "}
        {!keySuccess && hasSetPassword && (
          <form
            action={async (formData) => {
              const result = await retrievePrivateKey(formData, 0);
              if (result?.data.status === true) {
                setPrivateKey(result.data.data);
                setKeySuccess(true);
              } else {
                toast({
                  title: "Error",
                  variant: "destructive",
                  description: (
                    <p>Incorrect Password, Password are case Sensitive</p>
                  ),
                });
              }
            }}
          >
            <Stack alignItems="center" flexDirection="col">
              <Stack flexDirection="col" sx="w-full mb-5">
                <Typography variant="medium" className="text-sm mb-3">
                  {" "}
                  <span className="text-[#B5B6B6]"> Enter Password </span>{" "}
                </Typography>
                <Input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                  className="w-full text-[#989898] px-2 py-1 rounded-md border border-[#212E40] bg-transparent active:outline-none active:border-none pr-6"
                />
              </Stack>

              <PrivateKeyButton handleTabClick={handleTabClick} />
            </Stack>
          </form>
        )}
        {keySuccess && privateKey !== "" && (
          <Stack
            flexDirection="col"
            alignItems="center"
            sx="border border-[#212E40] rounded-md w-full h-[60vh] overflow-y-auto"
          >
            <Stack
              alignItems="center"
              justifyContent="end"
              sx="w-full pt-2 pr-5"
            >
              <IoClose className="text-lg text-[#989898] cursor-pointer" />
            </Stack>
            {securityData?.map((row, index) => (
              <Stack sx="mt-5 w-full" key={index}>
                <Stack
                  flexDirection="col"
                  sx="w-[30%] md:w-[20%] lg:w-[20%] bg-[#17212F]"
                >
                  <Stack alignItems="center" sx="mb-3 w-full px-2 pt-2">
                    <Typography
                      variant="semibold"
                      className="text-[10px] capitalize"
                    >
                      {" "}
                      {row.title}{" "}
                    </Typography>
                  </Stack>
                  <Stack alignItems="center" sx="mb-3 w-full px-2">
                    <Typography variant="semibold" className="text-[10px]">
                      {" "}
                      Private Key:{" "}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  flexDirection="col"
                  sx="w-[70%] md:w-[80%] lg:w-[80%] bg-[#212E40]"
                >
                  <Stack alignItems="center" sx="mb-3 w-full px-2 pt-2">
                    <Typography variant="semibold" className="text-[10px]">
                      {" "}
                      {`${row.address.slice(0, 30)}...`}{" "}
                    </Typography>
                    <MdOutlineContentCopy className="text-[#E7E7E7] text-base ml-2 cursor-pointer" />
                  </Stack>
                  <Stack alignItems="center" sx="mb-3 w-full px-2">
                    <Typography variant="semibold" className="text-[10px]">
                      {" "}
                      {`${row.key.slice(0, 30)}...`}{" "}
                    </Typography>
                    <MdOutlineContentCopy className="text-[#E7E7E7] text-base ml-2 cursor-pointer" />
                  </Stack>
                </Stack>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </TabsContent>
  );
};

export default Security;