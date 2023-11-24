import { create } from "zustand";
import { feeFetch } from "../types";

interface Props {

  gasFee: feeFetch;
  setGasFee: (gasFee: feeFetch) => void;
}

export const useGaStore = create<Props>((set) => ({

  gasFee: { feeUsd: 0, feeEth: "0",},
  setGasFee: (gasFee: feeFetch) => {
    set({ gasFee: gasFee });
  },

}));
