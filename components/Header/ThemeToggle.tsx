"use client";
import Button, { EButtonTheme } from "components/common/Button";
import { FC } from "react";
import ThemeLight from "assets/icons/ThemeLight.svg";
import { EGlobalTheme, useUiSettingsStore } from "lib/store/uiSettings";
import ThemeDark from "assets/icons/ThemeDark.svg";

const ThemeToggle: FC = () => {
  const theme = useUiSettingsStore((state) => state.theme);
  const toggleTheme = useUiSettingsStore((state) => state.toggleTheme);

  return (
    <Button theme={EButtonTheme.ROUNDED} onClick={toggleTheme}>
      {theme === EGlobalTheme.DARK ? (
        <ThemeDark width="20" height="20" />
      ) : (
        <ThemeLight width="20" height="20" />
      )}
    </Button>
  );
};

export default ThemeToggle;
