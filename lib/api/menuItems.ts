import pb from "../pocketbase";

export const get_menu_positions = async () => {
  return await pb.collection("menu_positions").getFullList({
    sort: "-created",
  });
};
