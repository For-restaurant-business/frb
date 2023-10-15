"use client";
import { FC, useEffect, useRef } from "react";
import Menu from "./Menu";

type DropdownProps = {
  email: string;
  isVisible: boolean;
  closeDropdown: () => void;
};
const Dropdown: FC<DropdownProps> = ({
  email,
  isVisible,
  closeDropdown,
}: DropdownProps) => {
  const dropDownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("mouseup", (event) => {
      if (
        event.target instanceof Node &&
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    });
  }, [closeDropdown, dropDownRef]);

  return (
    <div
      className={`hs-dropdown-menu absolute top-11 right-0 transition-[opacity] duration min-w-[15rem] bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border-2 dark:border-gray-700 ${
        !isVisible ? "pointer-events-none opacity-0" : ""
      }`}
      ref={dropDownRef}
      aria-labelledby="hs-dropdown-with-header"
    >
      <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Вы авторизированны:
        </p>
        <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
          {email}
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Dropdown;
