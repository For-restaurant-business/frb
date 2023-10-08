import { create } from "zustand";
import { MenuPosition } from "../types";
import { getMenuPositions } from "lib/api";

type MenuPositionsState = {
  menuPositions: MenuPosition[];
  getMenuPositions: (id: string) => void;
};

export const useMenuPositionsStore = create<MenuPositionsState>((set) => ({
  menuPositions: [],
  getMenuPositions: async (id) => {
    const menuPositions = await getMenuPositions(id);

    set({ menuPositions });
  },
}));
