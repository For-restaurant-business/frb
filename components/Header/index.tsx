"use client";
import { FC, useEffect } from "react";
import Search from "./Search";
import ThemeToggle from "./ThemeToggle";
import ProfilePhoto from "./ProfilePhoto";
import { EGlobalTheme } from "lib/constants";
import { useUserStore } from "lib/store/useUserStore";
import { User } from "lib/types";
import { getCookie } from "cookies-next";
import { getUser } from "lib/api/auth";

type HeaderContainerProps = {
  theme: EGlobalTheme;
};

type HeaderProps = {
  user: User;
} & HeaderContainerProps;

export const Header: FC<HeaderProps> = ({ theme, user }) => {
  return (
    user.id && (
      <header className="bg-white sticky top-0 inset-x-0 flex flex-wrap sm:flex-nowrap z-[48] ml-auto border-b text-sm py-2.5 dark:bg-gray-800 dark:border-gray-700">
        <nav
          className="flex basis-full items-center w-full mx-auto px-4 md:px-8"
          aria-label="Global"
        >
          {/* TODO кнопка тоггла сайдбара */}
          <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 sm:order-3">
            <Search />
            <div className="flex flex-row items-center justify-end gap-2">
              <ThemeToggle themeCookie={theme} />
              <ProfilePhoto email={user.email} />
            </div>
          </div>
        </nav>
      </header>
    )
  );
};

export const HeaderContainer: FC<HeaderContainerProps> = ({ theme }) => {
  const user = useUserStore((store) => store.user);
  const setUser = useUserStore((store) => store.setUser);

  useEffect(() => {
    getUser(getCookie("pb_auth")).then((res) => res && setUser(res));
  }, [setUser]);

  return <Header theme={theme} user={user} />;
};
