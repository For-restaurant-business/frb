"use client";
import { FC, PropsWithChildren } from "react";

export enum EButtonTheme {
  ROUNDED = "rounded",
}

type ButtonProps = {
  theme?: EButtonTheme;
  className?: string;
  onClick: () => void;
} & PropsWithChildren;

const Button: FC<ButtonProps> = ({
  theme,
  children,
  className = "",
  onClick,
}: ButtonProps) => {
  let themeClasses;
  switch (theme) {
    case EButtonTheme.ROUNDED:
      themeClasses =
        "inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800";
      break;

    default:
      themeClasses = "";
      break;
  }
  return (
    <button onClick={onClick} className={`${themeClasses} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
