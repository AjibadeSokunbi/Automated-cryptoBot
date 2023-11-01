"use client";
import React, { FC, useEffect, useState } from "react";
import Stack from "@/components/custom/Stack";
import Typography from "@/components/custom/Typography";
import { usePathname } from "next/navigation";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
interface Props {
}

const Tabs: FC<Props> = ({  }) => {
 const pathname = usePathname()
 const params = useParams();
  const address = "0x11b815efb8f581194ae79006d24e0d814b7697f6"
 const [paths, setPaths] = useState(params.address ? params.address : address)
 const [paths2 , setPaths2] = useState("")

 useEffect(() => {
  setPaths2(paths as string)
  setPaths(params.address ? params.address : paths2)
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

  return (
    <>
      <Stack
        alignItems="center"
        sx="bg-[#0C141F] border-t border-[#212E40] gap-7 px-5 py-5 w-full h-auto justify-between md:justify-normal lg:justify-normal mb-5 md:mb-0 lg:mb-0"
      >
        <Typography
          className="text-sm font-semibold cursor-pointer"
        >
          {" "}
          <Link
            className={`relative before:absolute before:left-0 before:bottom-[-30%] before:w-[100%] md:before:w-[100%] lg:before:w-[100%] before:h-[2px] ${
              pathname === "/metabots"
                ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
                : "before:bg-transparent text-white"
            }`}
            href="/metabots"
          >
           About
          </Link>{" "}
        </Typography>
        <Typography
          className="text-sm font-semibold cursor-pointer"
        >
          {" "}
          <Link
            className={`relative before:absolute before:left-0 before:bottom-[-30%] before:w-[100%] md:before:w-[100%] lg:before:w-[100%] before:h-[2px] ${
              pathname === `/metabots/${paths2}`
                ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
                : "before:bg-transparent text-white"
            }`}
            href={`/metabots/${paths2}`}
          >
            {" "}
            Smart Trading Terminal
          </Link>{" "}
        </Typography>
        <Typography
          className="text-sm font-semibold cursor-pointer"
        >
          {" "}
          <Link
            className={`relative before:absolute before:left-0 before:bottom-[-30%] before:w-[100%] md:before:w-[100%] lg:before:w-[100%] before:h-[2px] ${
              pathname === "/alphahunt"
                ? "before:bg-[#0D6EFD] text-[#0D6EFD]"
                : "before:bg-transparent text-white"
            }`}
            href="/alphahunt"
          >
            {" "}
            Alpha Hunt
          </Link>{" "}
        </Typography>
      </Stack>
    </>
  );
};

export default Tabs;
