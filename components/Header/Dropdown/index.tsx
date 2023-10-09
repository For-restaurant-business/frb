"use client";
import { FC } from "react";
import Menu from "./Menu";

type DropdownProps = {
  isVisible: boolean;
};
const Dropdown: FC<DropdownProps> = ({ isVisible }: DropdownProps) => {
  return (
    <div
      className={`hs-dropdown-menu absolute top-11 right-0 transition-[opacity] duration min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border-2 dark:border-gray-700 ${
        !isVisible ? "pointer-events-none opacity-0" : ""
      }`}
      aria-labelledby="hs-dropdown-with-header"
    >
      <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Вы авторизированны:
        </p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
          {/* TODO вывести почту с профиля */}
          james@site.com
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Dropdown;
