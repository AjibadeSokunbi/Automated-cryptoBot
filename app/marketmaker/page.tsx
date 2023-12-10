import React from "react";
import FullContainer from "@/components/custom/FullContainer";
import Stack from "@/components/custom/Stack";
import Marketmaker from "@/components/marketmaker/Marketmaker";

const page = () => {
  return (
    <>
        <FullContainer className="mt-4 md:px-6 lg:px-6">
            <Stack  width="w-full">
                <Marketmaker />
            </Stack>
    </FullContainer>
    </>
  )
}

export default page