import { create } from "zustand";

interface Props {
  walletIndex: number;
  setWalletIndeX: (entity: number) => void;
  walletAddress: string;
  setWalletAddress: (entity: string) => void;
}

export const useAddressManager = create<Props>((set) => ({
  walletIndex: 0,

  setWalletIndeX: (walletIndex: number) => {
    set({ walletIndex: walletIndex });
  },

  walletAddress: "",

  setWalletAddress: (walletAddress: string) => {
    set({ walletAddress: walletAddress });
  },
}));
