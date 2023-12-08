import React, { FC } from "react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { ImSpinner2 } from "react-icons/im";

interface Props {
  canClick: boolean;
}

const PassButton: FC<Props> = ({canClick}) => {
  const { pending } = useFormStatus();
  return (
    <Button
      variant="default"
      size="default"
      className="w-full text-base font-semibold"
      disabled={pending || canClick === false}
      aria-disabled={pending}
    >
      {" "}
      Set Password{" "}
      {pending && <ImSpinner2 className="text-[#18283f] animate-spin ml-2" />}
    </Button>
  );
};

export default PassButton;
