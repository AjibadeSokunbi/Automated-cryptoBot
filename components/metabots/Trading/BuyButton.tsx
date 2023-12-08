import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { useFormStatus } from "react-dom";
import { BiLoaderAlt } from "react-icons/bi";

interface Props {
  isButtonDisabled: boolean;
  getButtonColorClass: () => void;
  getButtonText: () => string;
}

const BuyButton: FC<Props> = ({
  isButtonDisabled,
  getButtonColorClass,
  getButtonText,
}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={isButtonDisabled || pending}
      aria-disabled={pending}
      className={`w-full mt-4 ${getButtonColorClass()}`}
    >
      {getButtonText()}
      {pending && <BiLoaderAlt className="mr-2 h-4 w-4 animate-spin" />}
    </Button>
  );
};

export default BuyButton;
