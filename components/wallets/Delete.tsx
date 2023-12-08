"use client";
import { deleteWallet } from "@/utils/formAction/createWallet";
import React, { FC } from "react";
import { Button } from "../ui/button";
import DeleteButton from "./DeleteButton";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {
  wallet: number;
}

const DeleteWallet: FC<Props> = ({ wallet }) => {
  return (
    <form
    className="flex justify-between w-full"
      action={async (formData) => {
        await deleteWallet(wallet);
      }}
    >
      <DeleteButton />
      <DialogClose className="w-full">
      <Button
        variant="default"
        size="sm"
        className="text-[#E7E7E7] bg-[#0D6EFD]"
        type="button"
      >
        No 
      </Button>
      </DialogClose>
    </form>
  );
};

export default DeleteWallet;
