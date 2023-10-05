"use client";

import { useEffect } from "react";
import { Menu, use_menu_store } from "../../lib/store/menu";

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = use_menu_store((state) => state.menu);
  const set_menu = use_menu_store((state) => state.set_menu);

  useEffect(() => {
    const test_menu: Menu = [
      {
        id: "1",
        name: "Салат с грейпфрутом",
        info_blocks: [
          { text: "Грейпфрут" },
          { text: "Салат" },
          { text: "Сыр" },
        ],
      },
      {
        id: "2",
        name: "Салат Цезарь",
        info_blocks: [
          { text: "Салат" },
          { text: "Гранат" },
          { text: "Соус Цезарь" },
        ],
      },
      {
        id: "3",
        name: "Салат с курицей",
        info_blocks: [
          { text: "Курица" },
          { text: "Салат" },
          { text: "Соус Майонез" },
        ],
      },
      {
        id: "4",
        name: "Салат с томатами",
        info_blocks: [
          { text: "Томаты" },
          { text: "Салат" },
          { text: "Соус Майонез" },
        ],
      },
      {
        id: "5",
        name: "Салат с огурцами",
        info_blocks: [
          { text: "Огурцы" },
          { text: "Салат" },
          { text: "Соус Майонез" },
        ],
      },
    ];
    set_menu(test_menu);
  }, [set_menu]);

  return (
    <>
      {children}
      {JSON.stringify(menu)}
    </>
  );
}
