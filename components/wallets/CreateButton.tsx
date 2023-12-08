"use client"
import React, { FC } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";

interface Props {
  canCreateNewWallet: boolean
}

const CreateButton: FC<Props> = ({canCreateNewWallet}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="default"
      size="default"
      className="text-xs md:text-sm lg:text-sm font-bold"
      type="submit"
      disabled={pending || canCreateNewWallet}
      aria-disabled={pending}
    >
      {" "}
      Create Wallet {pending && <ImSpinner2 className="text-[#18283f] animate-spin ml-2" />}
    </Button>
  );
};

export default CreateButton;
