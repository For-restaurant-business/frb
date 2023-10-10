import { FC } from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import ProfilePhoto from "./ProfilePhoto";

const Header: FC = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap sm:flex-nowrap z-[48] w-full border-b text-sm py-2.5 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="flex basis-full items-center w-full mx-auto px-4 md:px-8"
        aria-label="Global"
      >
        {/* TODO кнопка тоггла сайдбара */}
        <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">
          <Search />
          <div className="flex flex-row items-center justify-end gap-2">
            <ThemeToggle />
            <ProfilePhoto />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
