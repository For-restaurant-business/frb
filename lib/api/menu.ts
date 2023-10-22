import { Menu, MenuPosition } from "lib/types";
import pb from "./config";

export const getMenus = async (): Promise<Menu[]> => {
  return await pb.collection("menus").getFullList({
    sort: "-created",
  });
};

export const getMenuPositions = async (
  menuId: string,
): Promise<MenuPosition[]> => {
  return await pb.collection("menu_positions").getFullList({
    sort: "-created",
    filter: `menu_id = '${menuId}'`,
    skipTotal: false,
  });
};
