import { create } from "zustand";

interface Props {
  smm: boolean;
  setSmm: (entity: boolean) => void;
}

export const useSmm = create<Props>((set) => ({
  smm: false,
  setSmm: (smm: boolean) => {
    set({ smm: smm });
  },
}));
