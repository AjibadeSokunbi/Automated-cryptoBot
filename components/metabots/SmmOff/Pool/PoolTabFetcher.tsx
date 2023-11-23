import React, { FC } from "react";
import PoolActivity from "./All";
import { PoolActivityData, TokenPairDetails } from "@/utils/types";
import Remove from "./Removes";
import Adds from "./Adds";
import { TabsContent } from "@/components/ui/tab3";

interface Props {
  params: {
    address: string;
  };

}

const PoolTabFetcher: FC<Props> = async ({ params }) => {
  return (
    <>
      <TabsContent value="bs" className="w-full ">
        <PoolActivity params={params}  />
      </TabsContent>
      <TabsContent value="limits" className="w-full ">
        <Adds params={params} />
      </TabsContent>
      <TabsContent value="copy" className="w-full ">
        <Remove params={params} />
      </TabsContent>
    </>
  );
};

export default PoolTabFetcher;
