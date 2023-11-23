import { create } from "zustand";

interface Props {
  price: number;
  setPrice: (entity: number) => void;
}

export const usePriceStore = create<Props>((set) => ({
  price: 0,

  setPrice: (price: number) => {
    set({ price: price });
  },
}));
