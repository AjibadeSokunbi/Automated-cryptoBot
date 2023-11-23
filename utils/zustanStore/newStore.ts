import { TokenPairDetailsN, TokenPairDetails, TradeData } from "@/utils/types";
import { create } from "zustand";

interface Props {
  fgi: number;
  setfgi: (x: number) => void;
  NewPairs: TokenPairDetailsN[];
  pairHistory: TradeData[];
  addPairHistory: (newArray: TradeData[]) => void;
  addNewPairs: (newArray: TokenPairDetailsN[]) => void;
  pairDetail: TokenPairDetails;
  addPairDetails: (pairDetails: TokenPairDetails) => void;
  setbalance: (entity: string) => void;
  balance: string;
  token0Balance: string;
  token1Balance: string;
  rate0_1: number;
  rate1_0: number;
  setToken0Balance: (entity: string) => void;
  setToken1Balance: (entity: string) => void;
  setRate0_1: (x: number) => void;
  setRate1_0: (x: number) => void;
  isConnected: boolean;
  setIsConnected: (entity: boolean) => void;
  smm: boolean;
  setSmm: (entity: boolean) => void;
  price: number;
  setPrice: (entity: number) => void;
}

export const useNewStore = create<Props>((set) => ({
  isConnected: false,
  setIsConnected: (isConnected: boolean) => {
    set({ isConnected: isConnected });
  },
  price: 0,
  smm: false,
  setSmm: (smm: boolean) => {
    set({ smm: smm });
  },
  balance: "",
  fgi: 0,
  token0Balance: "",
  token1Balance: "",
  rate0_1: 0,
  rate1_0: 0,
  setfgi: (x: number) => {
    set({ fgi: x });
  },
  NewPairs: [],
  pairHistory: [],
  addPairHistory: (newArray) => {
    set({ pairHistory: newArray });
  },
  addNewPairs: (newArray) => {
    set({ NewPairs: newArray });
  },
  pairDetail: {} as TokenPairDetails,
  addPairDetails: (pairDetails) => {
    set({ pairDetail: pairDetails });
  },
  setbalance: (balance: string) => {
    set({ balance: balance });
  },
  setRate0_1: (rate0_1: number) => {
    set({ rate0_1: rate0_1 });
  },
  setRate1_0: (rate1_0: number) => {
    set({ rate1_0: rate1_0 });
  },
  setPrice: (price: number) => {
    set({ price: price });
  },
  setToken0Balance: (token0Balance: string) => {
    set({ token0Balance: token0Balance });
  },
  setToken1Balance: (token1Balance: string) => {
    set({ token1Balance: token1Balance });
  },
}));
