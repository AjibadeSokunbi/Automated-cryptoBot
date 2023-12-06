"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";
import { DialogClose } from "@radix-ui/react-dialog";

interface Props {}

const DeleteButton = () => {
  const { pending  } = useFormStatus();


  return (

    <Button
      variant="default"
      size="sm"
      className="text-[#E7E7E7] bg-[#212E40]"
      type="submit"
      disabled={pending}
      aria-disabled={pending}
    >
      {" "}
      Yes{" "}
      {pending && <ImSpinner2 className="text-[#18283f] animate-spin ml-2" />}
    </Button>

  );
};

export default DeleteButton;
