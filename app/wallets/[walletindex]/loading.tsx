import FullContainer from "@/components/custom/FullContainer";
import React from "react";
import { ImSpinner2 } from "react-icons/im";

interface Props {}

const Loading = () => {
  return (
    <FullContainer className="flex justify-center items-center h-[90vh] ">
      <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
    </FullContainer>
  );
};

export default Loading;