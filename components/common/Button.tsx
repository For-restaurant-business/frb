"use client";
import { FC, HTMLProps, PropsWithChildren } from "react";

export enum EButtonTheme {
  ROUNDED = "rounded",
  RECTANGULAR = "rectangular",
}

type ButtonProps = {
  theme?: EButtonTheme;
  type?: "submit" | "reset" | "button";
} & PropsWithChildren &
  HTMLProps<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  theme = EButtonTheme.RECTANGULAR,
  children,
  type = "button",
  className = "",
  ...otherProps
}: ButtonProps) => {
  let themeClasses;
  switch (theme) {
    case EButtonTheme.ROUNDED:
      themeClasses =
        "flex-shrink-0 gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:ring-gray-400 focus:ring-offset-white text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700";
      break;
    case EButtonTheme.RECTANGULAR:
      themeClasses =
        "py-3 px-4 gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 text-sm";
      break;

    default:
      themeClasses = "";
      break;
  }

  return (
    <button
      type={type}
      className={`${themeClasses} ${className} inline-flex justify-center items-center focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all dark:focus:ring-offset-gray-800`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
