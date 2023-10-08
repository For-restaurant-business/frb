export type InfoBlock = {
  text: string;
};

export type MenuPosition = {
  id: string;
  name: string;
  image?: string;
  menu_id: number;
  info_blocks?: InfoBlock[];
};
