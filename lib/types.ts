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

export type User = {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
};

export type Menu = { name: string; id: string };
