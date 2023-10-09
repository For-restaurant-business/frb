"use client";
import useStore from "lib/hooks/useStore";
import { EGlobalTheme, useUiSettingsStore } from "lib/store/uiSettings";
import { FC, PropsWithChildren } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const theme = useStore(useUiSettingsStore, (state) => state.theme);

  return (
    <div
      className={`h-full ${
        theme === EGlobalTheme.DARK ? "dark bg-slate-900" : "light bg-gray-100"
      }`}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
