import { LiteralUnion } from "react-hook-form";

type ErrorType = LiteralUnion<
  | "pattern"
  | "disabled"
  | "max"
  | "maxLength"
  | "min"
  | "minLength"
  | "required"
  | "value"
  | "onBlur"
  | "onChange"
  | "validate"
  | "setValueAs"
  | "shouldUnregister"
  | "deps"
  | "valueAsNumber"
  | "valueAsDate",
  string
>;

function errorHandler(errorType: ErrorType): string {
  if (errorType === "required") return "Поле обязательно для заполнения";
  return "";
}

export default errorHandler;
