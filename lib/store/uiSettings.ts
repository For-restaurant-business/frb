import { create } from "zustand";

export enum EGlobalTheme {
  DARK = "dark",
  LIGHT = "light",
}

type uiSettingsState = {
  theme: EGlobalTheme;
  toggleTheme: () => void;
};
const LOCAL_STORAGE_THEME_KEY = "theme";

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as EGlobalTheme) ||
  EGlobalTheme.LIGHT;

export const useUiSettingsStore = create<uiSettingsState>((set) => ({
  theme: defaultTheme,
  toggleTheme: () => {
    set((state) => {
      const newTheme =
        state.theme === EGlobalTheme.LIGHT
          ? EGlobalTheme.DARK
          : EGlobalTheme.LIGHT;

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

      return {
        theme: newTheme,
      };
    });
  },
}));
