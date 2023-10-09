"use client";
import Button, { EButtonTheme } from "components/common/Button";
import { FC } from "react";
import ThemeLight from "assets/icons/ThemeLight.svg";
// import ThemeDark from "assets/icons/ThemeDark.svg";

const ThemeToggle: FC = () => {
  return (
    <Button theme={EButtonTheme.ROUNDED}>
      <ThemeLight width="20" height="20" />
    </Button>
  );
};

export default ThemeToggle;
