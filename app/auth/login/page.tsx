"use client";
import Button, { EButtonTheme } from "components/common/Button";
import Input from "components/common/Input";
import { authenticate } from "lib/api/auth";
import { authErrorHandler } from "lib/helpers/errorHandler";
import { useUserStore } from "lib/store/useUserStore";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const setUser = useUserStore((store) => store.setUser);

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    try {
      setIsLoading(true);
      const res = await authenticate(email, password);

      const userRes = await res.json();
      setUser(userRes);

      const redirectUrl = (searchParams?.get("redirect") as string) || "/";
      push(redirectUrl);
    } catch (err) {
      const typedError = err as Error;
      authErrorHandler(typedError);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Авторизация
            </h1>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <Input
                  type="email"
                  label="Почта"
                  error={errors.email}
                  {...register("email", { required: true })}
                />
                <Input
                  type="password"
                  label="Пароль"
                  error={errors.password}
                  {...register("password", { required: true })}
                />
                {/* TODO forgot pass page */}
                <a
                  className="text-sm text-blue-600 decoration-2 hover:underline font-medium"
                  href="../examples/html/recover-account.html"
                >
                  Забыли пароль?
                </a>

                <Button
                  type="submit"
                  theme={EButtonTheme.RECTANGULAR}
                  isLoading={isLoading}
                >
                  Войти
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
