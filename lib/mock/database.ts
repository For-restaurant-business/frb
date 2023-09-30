type Photo = {
  src: string;
};

type Video = {
  src: string;
};

type infoBlock = {
  id: number;
  title: string;
  text: string;
  photos: Photo[];
  videos: Video[];
  order: number;
  menu_position_id: number;
};

type MenuPosition = {
  id: number;
  name: string;
  menu_id: number;
  image: string;
  infoBlocks?: infoBlock[];
};

type WaitersMenuSection = {
  id: number;
  name: string;
  restaurant_id: number;
  positions: MenuPosition[];
};

type Restaurant = {
  id: number;
  name: string;
  users_id: string;
};

export const restaurants: Restaurant[] = [
  { id: 1, name: "Radam Restaurant", users_id: "1,2,3" },
];

export const waiters_menu_sections: WaitersMenuSection[] = [
  {
    id: 1,
    name: "Salads menu",
    restaurant_id: 1,
    positions: [
      {
        id: 1,
        name: "Салат с грейпфрутом",
        image: "",
        menu_id: 1,
        infoBlocks: [
          {
            id: 1,
            title: "Основные ингредиенты",
            text: "Грейпфрут, салат",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
          {
            id: 2,
            title: "Соусы",
            text: "Масло оливковое",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
          {
            id: 3,
            title: "Украшения",
            text: "Мишура, голые девушки",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
        ],
      },
      {
        id: 2,
        name: "Салат Цезарь",
        image: "",
        menu_id: 1,
        infoBlocks: [
          {
            id: 1,
            title: "Основные ингредиенты",
            text: "Цезарь, салат",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
          {
            id: 2,
            title: "Соусы",
            text: "Соус цезарь",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
          {
            id: 3,
            title: "Украшения",
            text: "Голый цезарь, ежик из сосновой шишки",
            photos: [{ src: "" }, { src: "" }],
            videos: [{ src: "" }, { src: "" }],
            order: 0,
            menu_position_id: 1,
          },
        ],
      },
    ],
  },
];
