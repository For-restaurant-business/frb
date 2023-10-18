import { ElementType, FC, HTMLProps, Ref, forwardRef } from "react";
import { FieldError } from "react-hook-form";
import InputError from "assets/icons/InputError.svg";
import errorHandler from "./errorHandler";

type InputProps = {
  label?: string;
  Icon?: ElementType;
  error?: FieldError;
  ref?: Ref<HTMLInputElement>;
} & HTMLProps<HTMLInputElement>;

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { label, name, Icon, error, className, ...otherProps }: InputProps,
    ref,
  ) {
    return (
      <div>
        {label && (
          <label htmlFor={name} className="block text-sm mb-2 dark:text-white">
            {label}
          </label>
        )}
        <div className="relative">
          {Icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4 dark:text-gray-400">
              <Icon height="1em" />
            </div>
          )}

          <input
            ref={ref}
            autoComplete="on"
            id={name}
            name={name}
            className={`py-3 px-4 block w-full border-gray-200 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border-2 ring-red-500 ${className} ${
              Icon ? "pl-11" : ""
            }`}
            aria-describedby={`${name}-error`}
            {...otherProps}
          />
          {error && (
            <div className="absolute inset-y-0 right-0 flex items-center pointer-events-none pr-3">
              <InputError className="h-5 w-5 text-red-500" />
            </div>
          )}
        </div>
        {error && (
          <p className="text-xs text-red-600 mt-2" id={`${name}-error`}>
            {errorHandler(error.type)}
          </p>
        )}
      </div>
    );
  },
);

export default Input;
