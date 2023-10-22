import { toast } from "react-toastify";

export function authErrorHandler(err: Error) {
  console.log(err);
  switch (err.message) {
    case "Failed to authenticate.":
      toast.error("Неверный логин или пароль");
      break;
    case "Failed to authenticate user no token.":
      // TODO create support email
      toast.error(
        "Проблема с токеном, обратитесь в поддержку: example@gmail.com",
      );
      break;

    default:
      toast.error("Что-то пошло не так, обновите страницу");
      break;
  }
}
