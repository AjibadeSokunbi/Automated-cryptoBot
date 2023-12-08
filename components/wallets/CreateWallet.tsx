import React from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { IoIosClose } from "react-icons/io";

import CreateButton from "./CreateButton";
import { createWallet } from "@/utils/formAction/createWallet";
import {
  Dialog,
  DialogContent3,
  DialogTrigger,
} from "../ui/dialog";
import DeleteWallet from "./Delete";

interface Wallet {
  wallets: string[];
  token: string;
}

const CreateWallet: React.FC<Wallet> = ({ wallets, token }) => {
const canCreateNewWallet = wallets.length >= 3
  return (
    <Stack alignItems="center" justifyContent="between" sx="w-full mb-5 gap-3">
      <Stack alignItems="center" sx="w-auto gap-4">
        {wallets.map((wallet, index) => (
          <Stack
            alignItems="center"
            justifyContent="between"
            sx={`w-auto px-2 md:px-3 lg:px-3 py-1 bg-[#063172] rounded-2xl`}
            key={index}
          >
            <Typography
              variant="semibold"
              className="text-[#DBE9FF] text-[10px] md:text-sm lg:text-sm mr-2 md:mr-3 lg:mr-3"
            >
              {" "}
              Wallet{index + 1}{" "}
            </Typography>

            <Dialog>
              <DialogTrigger asChild>
                <IoIosClose className="text-[#B4D2FE] text-base cursor-pointer" />
              </DialogTrigger>
              <DialogContent3 className="p-0 max-w-fit bg-[#0C141F] border border-slate-800 ">
                <Stack
                  flexDirection="col"
                  sx="bg-[#17212F] w-full border-none p-5 overflow-hidden relative rounded-lg"
                >
                  <Typography
                    variant="normal"
                    className="text-center text-[10px] mb-1"
                  >
                    {" "}
                    Are you sure you want to delete this wallet?{" "}
                  </Typography>

                  <Typography
                    variant="normal"
                    className="text-center text-[10px] mb-3"
                  >
                    {" "}
                    If you delete this wallet, it cannot be recovered again{" "}
                  </Typography>

                  <Stack
                    alignItems="center"
                    justifyContent="between"
                    sx="w-full px-10"
                  >
                    <DeleteWallet wallet={index} />
                  </Stack>
                </Stack>
              </DialogContent3>
            </Dialog>
          </Stack>
        ))}
      </Stack>
      <form action={createWallet}>
        <CreateButton canCreateNewWallet={canCreateNewWallet} />
      </form>
    </Stack>
  );
};

export default CreateWallet;
