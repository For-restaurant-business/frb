import { MenuPosition } from "lib/types";
import pb from "./config";

export const getMenuPositions = async (
  menuId: string,
): Promise<MenuPosition[]> => {
  try {
    return await pb.collection("menu_positions").getFullList({
      sort: "-created",
      filter: `menu_id = '${menuId}'`,
      skipTotal: false,
    });
  } catch (e) {
    // TODO обработчик ошибок с выводом
    console.log(e);
    throw e;
  }
};
