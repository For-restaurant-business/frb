import { ElementType, FC } from "react";

type InputProps = {
  name: string;
  label?: string;
  placeholder?: string;
  Icon?: ElementType;
};

const Input: FC<InputProps> = ({
  label,
  name,
  placeholder,
  Icon,
}: InputProps) => {
  return (
    <>
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4 dark:text-gray-400">
            <Icon />
          </div>
        )}

        <input
          type="text"
          id={name}
          name={name}
          className={`py-2 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border-2 ${
            Icon ? "pl-11" : ""
          }`}
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
