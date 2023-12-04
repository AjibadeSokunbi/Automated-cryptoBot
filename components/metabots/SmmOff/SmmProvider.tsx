"use client";
import { useSmm } from "@/utils/zustanStore/smm";
import React, { FC } from "react";
interface Props {
  children: React.ReactNode;
}

const SmmProvider: FC<Props> = ({ children }) => {
  const { smm } = useSmm();
  return <div className={smm ? "flex w-full" : "hidden w-full"}>{children}</div>;
};

export default SmmProvider;
