import { create } from "zustand";

interface Props {

  gasFee: number;
  setGasFee: (entity: number) => void;
}

export const useGaStore = create<Props>((set) => ({

  gasFee: 0,
  setGasFee: (gasFee: number) => {
    set({ gasFee: gasFee });
  },

}));
