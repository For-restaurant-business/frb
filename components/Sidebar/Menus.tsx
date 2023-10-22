"use client";

import { getMenus } from "lib/api";
import { Menu } from "lib/types";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menus = () => {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    getMenus()
      .then(setMenus)
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ul className="pl-3 pt-2">
      <li>
        {menus.map((menu) => (
          <Link
            key={menu.id}
            className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300"
            href={`/menu/${menu.id}`}
          >
            {menu.name}
          </Link>
        ))}
      </li>
    </ul>
  );
};

export default Menus;
