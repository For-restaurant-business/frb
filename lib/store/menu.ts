import { create } from "zustand";

export type InfoBlock = {
  text: string;
};

export type MenuPosition = {
  id: string;
  name: string;
  image?: string;
  info_blocks?: InfoBlock[];
};

export type Menu = MenuPosition[];

type MenuStore = {
  menu: Menu;
  set_menu: (menu: Menu) => void;
};

export const use_menu_store = create<MenuStore>((set) => ({
  menu: [] as Menu,
  set_menu: (menu: Menu) => set({ menu }),
}));
