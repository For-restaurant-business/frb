import { create } from "zustand";
import { persist } from "zustand/middleware";

export enum EGlobalTheme {
  DARK = "dark",
  LIGHT = "light",
}

type uiSettingsState = {
  theme: EGlobalTheme;
  toggleTheme: () => void;
};

export const useUiSettingsStore = create<uiSettingsState>()(
  persist(
    (set) => ({
      theme: EGlobalTheme.LIGHT,
      toggleTheme: () => {
        set((state: uiSettingsState) => {
          const newTheme =
            state.theme === EGlobalTheme.LIGHT
              ? EGlobalTheme.DARK
              : EGlobalTheme.LIGHT;

          return {
            theme: newTheme,
          };
        });
      },
    }),
    { name: "uiStore" },
  ),
);
