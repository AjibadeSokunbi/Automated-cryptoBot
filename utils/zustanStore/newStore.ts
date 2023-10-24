import { TokenPairDetailsN, TokenPairDetails, TradeData } from '@/utils/types';
import { create } from 'zustand';

interface Props {
    fgi: number;
    setfgi: (x: number) => void;
    NewPairs: TokenPairDetailsN[];
    pairHistory: TradeData[]
    addPairHistory: (newArray: TradeData[]) => void;
    addNewPairs: (newArray: TokenPairDetailsN[]) => void;
    pairDetail: TokenPairDetails;
    addPairDetails: (pairDetails: TokenPairDetails) => void;
    setAddress: (entity: string) => void;
    address: string;
    isConnected: boolean;
    setIsConnected: (entity: boolean) => void;
}

export const useNewStore = create<Props>((set) => ({
    isConnected: false,
    setIsConnected: (isConnected: boolean) => {
        set({isConnected: isConnected})
    },
    address: "",
    fgi: 0,
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
    setAddress: (address: string) => {
        set({ address: address });
    }
}));
