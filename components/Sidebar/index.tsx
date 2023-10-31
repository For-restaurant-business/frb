"use client";
import MenusIcon from "assets/icons/Menus.svg";
import Menus from "./Menus";
import { useUserStore } from "lib/store/useUserStore";
import Link from "next/link";
import Restaurant from "assets/icons/Restaraunt.svg";
import Calendar from "assets/icons/Calendar.svg";
import { useUrlHelper } from "lib/helpers/useUrlHelper";

const Sidebar = () => {
  const { isActivePage } = useUrlHelper();
  const activeStyles = "bg-gray-100 dark:bg-gray-900 dark:text-slate-300";
  const isAuth = !!useUserStore((store) => store.user.id);

  return (
    isAuth && (
      <div
        id="application-sidebar-brand"
        className="hs-overlay -translate-x-full hs-overlay-open:translate-x-0 transition-all duration-300 transform fixed lg:sticky h-[100vh] top-0 left-0 bottom-0   z-[60] w-72 bg-white border-r border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:bg-gray-800 dark:border-gray-700 hidden"
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
              <Link
                className={`flex items-center gap-x-3.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 py-2 px-2.5 ${
                  isActivePage("restaurant") ? activeStyles : ""
                }`}
                href={`/restaurant`}
              >
                <Restaurant className="w-5 h-5" />
                Жизнь ресторана
              </Link>
            </li>
            <li>
              <Link
                className={`flex items-center gap-x-3.5 text-sm text-slate-700 rounded-md hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 py-2 px-2.5 ${
                  isActivePage("schedule") ? activeStyles : ""
                }`}
                href={`/schedule`}
              >
                <Calendar className="w-5 h-5" />
                График
              </Link>
            </li>
            <li>
              <span className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-md dark:bg-gray-800  dark:text-slate-400">
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

export default Sidebar;
