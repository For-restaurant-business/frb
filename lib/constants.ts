export const API = process.env.NEXT_PUBLIC_POCKETBASE_HOST;
export const API_FILES = `${process.env.NEXT_PUBLIC_POCKETBASE_HOST}/api/files`;
export const THEME_COOKIE = "theme";

export enum EGlobalTheme {
  DARK = "dark",
  LIGHT = "light",
}
