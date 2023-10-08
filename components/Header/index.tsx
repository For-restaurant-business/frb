import { FC } from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import Dropdown from "./Dropdown";

const Header: FC = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:flex-nowrap z-[48] w-full border-b text-sm py-2.5 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 md:px-8"
        aria-label="Global"
      >
        {/* TODO тоггл сайдбара */}

        <div className="w-full flex items-center justify-end ml-auto sm:justify-between sm:gap-x-3 sm:order-3">
          <Search />

          <div className="flex flex-row items-center justify-end gap-2">
            <ThemeToggle />
            <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
              <button
                id="hs-dropdown-with-header"
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              >
                <img
                  className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-white dark:ring-gray-800"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                  alt="Image Description"
                />
              </button>

              <Dropdown isVisible={true} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
