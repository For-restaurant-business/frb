"use client";
import MenusIcon from "assets/icons/Menus.svg";
import Menus from "./Menus";
import { useUserStore } from "lib/store/useUserStore";

export const Sidebar = ({ isAuth }: { isAuth: boolean }) => {
  return (
    isAuth && (
      <div
        id="application-sidebar-brand"
        className="hs-overlay -translate-x-full hs-overlay-open:translate-x-0 transition-all duration-300 transform fixed lg:sticky h-[100vh] top-0 left-0 bottom-0 z-[60] w-64 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:bg-gray-800 dark:border-gray-700 hidden"
      >
        <div className="px-6">
          <span
            className="flex-none text-xl font-semibold dark:text-white"
            aria-label="Brand"
          >
            FRB
          </span>
        </div>
        <nav className="p-6 w-full flex flex-col flex-wrap">
          <ul>
            <li>
              <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md dark:bg-gray-800  dark:text-slate-400 ">
                <MenusIcon className="w-5 h-5" />
                Меню
              </span>

              <Menus />
            </li>
          </ul>
        </nav>
      </div>
    )
  );
};

export const SidebarContainer = () => {
  const userId = useUserStore((store) => store.user.id);

  return <Sidebar isAuth={!!userId} />;
};
