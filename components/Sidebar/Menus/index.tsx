"use client";

import { getMenus } from "lib/api";
import { Menu } from "lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenusSkeleton from "./MenusSkeleton";
import { usePathname } from "next/navigation";

const Menus = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const pathname = usePathname();
  const urlMenuId = pathname.split("/")[2];
  const isMenuActive = (menuId: string) => urlMenuId === menuId;

  useEffect(() => {
    getMenus()
      .then(setMenus)
      .then(() => setIsLoading(false));
  }, []);

  return (
    <ul className="pl-3 pt-2">
      {isLoading ? (
        <MenusSkeleton />
      ) : (
        menus.map((menu) => (
          <li
            key={menu.id}
            className={`flex items-center gap-x-3.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 ${
              isMenuActive(menu.id) ? "text-slate-400 dark:text-slate-200" : ""
            }`}
          >
            <Link className="w-full py-2 px-2.5" href={`/menu/${menu.id}`}>
              {menu.name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
};

export default Menus;
