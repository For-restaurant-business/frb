import { FC } from "react";
import Plus from "assets/icons/Plus.svg";

type ButtonAddMenuPositionProps = {};

const ButtonAddMenuPosition: FC<
  ButtonAddMenuPositionProps
> = ({}: ButtonAddMenuPositionProps) => {
  return (
    <button className="group flex items-center justify-center col-span-full lg:col-span-1 p-1 lg:p-0 hover:shadow-md border border-gray-300 shadow-sm rounded-xl transition bg-gray-200 hover:bg-white dark:bg-gray-700 dark:border-gray-700 dark:hover:shadow-gray-800 dark:hover:bg-gray-600">
      <Plus className="lg:w-28 lg:h-28 w-8 h-8 transition text-black lg:text-gray-500 dark:text-white group-hover:text-gray-600 group-hover:dark:text-white" />
    </button>
  );
};

export default ButtonAddMenuPosition;
