"use client";
import { FC, useEffect } from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import ProfilePhoto from "./ProfilePhoto";
import { EGlobalTheme, USER_COOKIE } from "lib/constants";
import { useUserStore } from "lib/store/useUserStore";
import { User } from "lib/types";
import { getCookie } from "cookies-next";
import { getUser } from "lib/api/auth";
import Menu from "assets/icons/Menu.svg";
import { useUrlHelper } from "lib/helpers/useUrlHelper";

type HeaderContainerProps = {
  theme: EGlobalTheme;
};

type HeaderProps = {
  user: User;
} & HeaderContainerProps;

export const Header: FC<HeaderProps> = ({ theme, user }) => {
  const { getPageChain } = useUrlHelper();

  const isMenuPage = getPageChain(1) === "menu";

  useEffect(() => {
    import(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      "../../node_modules/preline/dist/components/hs-overlay/hs-overlay.js"
    );
  }, []);

  return (
    user.id && (
      <header className="bg-white sticky top-0 inset-x-0 flex flex-wrap sm:flex-nowrap z-[48] ml-auto border-b text-sm py-2.5 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 md:px-8"
          aria-label="Global"
        >
          <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">
            <div className="flex">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600"
                data-hs-overlay="#application-sidebar-brand"
                aria-controls="application-sidebar-brand"
                aria-label="Toggle navigation"
              >
                <span className="sr-only">Показать/Скрыть меню</span>
                <Menu className="w-10 h-10 text-gray-400 mr-2 lg:hidden" />
              </button>

              {isMenuPage && <Search />}
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <ThemeToggle themeCookie={theme} />
              <ProfilePhoto user={user} />
            </div>
          </div>
        </nav>
      </header>
    )
  );
};

// To render component in Storybook
export const HeaderContainer: FC<HeaderContainerProps> = ({ theme }) => {
  const user = useUserStore((store) => store.user);
  const setUser = useUserStore((store) => store.setUser);

  useEffect(() => {
    const userFromCookie = getCookie(USER_COOKIE);
    getUser(userFromCookie).then((res) => res && setUser(res));
  }, [setUser]);

  return <Header theme={theme} user={user} />;
};
