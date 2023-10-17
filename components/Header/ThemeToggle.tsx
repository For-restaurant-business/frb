"use client";
import Button, { EButtonTheme } from "components/common/Button";
import { EGlobalTheme, THEME_COOKIE } from "lib/constants";
import { FC, useState } from "react";
import ThemeLight from "assets/icons/ThemeLight.svg";
import ThemeDark from "assets/icons/ThemeDark.svg";
import { setCookie } from "cookies-next";

type ButtonToggleProps = {
  themeCookie: EGlobalTheme;
};

const ThemeToggle: FC<ButtonToggleProps> = ({ themeCookie }) => {
  const [theme, setTheme] = useState(themeCookie);

  const toggleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(EGlobalTheme.DARK);

    if (root.classList.contains(EGlobalTheme.DARK)) {
      setTheme(EGlobalTheme.DARK);
      setCookie(THEME_COOKIE, EGlobalTheme.DARK);
    } else {
      setTheme(EGlobalTheme.LIGHT);
      setCookie(THEME_COOKIE, EGlobalTheme.LIGHT);
    }
  };
  return (
    <Button theme={EButtonTheme.ROUNDED} onClick={toggleTheme}>
      {theme === EGlobalTheme.DARK ? (
        <ThemeLight width="20" height="20" />
      ) : (
        <ThemeDark width="20" height="20" />
      )}
    </Button>
  );
};

export default ThemeToggle;
