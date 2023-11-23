"use client";
import { fixNum2 } from "@/utils/indexServer";

import { usePriceStore } from "@/utils/zustanStore/priceUsd";
import React from "react";

interface Props {}

const Price = () => {
  const { price } = usePriceStore();
  return <>{fixNum2(price, 6, true)}</>;
};

export default Price;
