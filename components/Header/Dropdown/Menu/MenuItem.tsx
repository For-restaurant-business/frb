"use client";
import Link from "next/link";
import { ElementType, FC, PropsWithChildren } from "react";

type MenuItemProps = {
  href: string;
  Icon: ElementType;
} & PropsWithChildren;

const MenuItem: FC<MenuItemProps> = ({
  href,
  children,
  Icon,
}: MenuItemProps) => {
  return (
    <Link
      className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
      href={href}
    >
      <Icon />
      {children}
    </Link>
  );
};

export default MenuItem;
