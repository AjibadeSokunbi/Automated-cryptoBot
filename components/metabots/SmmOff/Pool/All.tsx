import Stack from "@/components/custom/Stack";
import { FC, Suspense } from "react";
import AllBody from "./PoolBody/AllBody";
import { ImSpinner2 } from "react-icons/im";

interface Props {
  params: {
    address: string;
  };
}

const PoolActivity: FC<Props> = ({ params }) => {
  return (
    <Stack flexDirection="col" sx="w-full" height="h-[290px]" padding="mt-2">
      <div className="border-none w-full">
        <div className="border-none text-[#6C757D]  flex justify-between px-2  py-1.5">
          <div className="text-xs md:text-sm lg:text-sm font-semibold"></div>
          <div className="text-xs md:text-sm lg:text-sm font-semibold">
            Time
          </div>
          <div className="text-xs md:text-sm lg:text-sm font-semibold">
            Token Amount
          </div>
          <div className="text-xs md:text-sm lg:text-sm font-semibold">
            Token Value
          </div>
        </div>
      </div>

      <Suspense
        fallback={
          <Stack
            alignItems="center"
            alignContent="center"
            justifyContent="center"
            height="h-[200px]"
          >
            <ImSpinner2 className="text-[#18283f] h-20 w-20 animate-spin " />
          </Stack>
        }
      >
        <AllBody params={params} />
      </Suspense>
    </Stack>
  );
};

export default PoolActivity;
