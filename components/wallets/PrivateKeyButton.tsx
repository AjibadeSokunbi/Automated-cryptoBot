"use client";
import React, { FC } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";

interface Props {
    handleTabClick: (tabIndex: number) => void;
}

const PrivateKeyButton: FC<Props> = ({handleTabClick}) => {
  const { pending  } = useFormStatus();


  return (

    <Button
    variant="default"
    size="default"
    className="w-full text-base font-semibold"
    // onClick={() => !pending && handleTabClick(2)}
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {" "}
      View Private Keys{" "}
      {pending && <ImSpinner2 className="text-[#18283f] animate-spin ml-2" />}
    </Button>

  );
};

export default PrivateKeyButton;
