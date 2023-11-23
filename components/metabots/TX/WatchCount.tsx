"use client"
import React, { useEffect, useState } from "react";
import useProjectStore from "@/utils/zustanStore/favorites";

interface Props {}

const WatchCount = () => {
  const { favoritedProjects } = useProjectStore();
  const TokenPairData = favoritedProjects?.projectsDetails?.map(
    (token: any) => token?.tokenPairDetails
  );
  const [mounted , setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  },[])
  return (
    <>
      {mounted && 
       <React.Fragment>
        <span className="absolute -top-2 -right-3 text-[10px] font-bold  text-black bg-yellow-400 rounded-full text-center w-3 h-3">
          {TokenPairData && TokenPairData?.length}
        </span>
       </React.Fragment>
      }
    </>
  );
};

export default WatchCount;
