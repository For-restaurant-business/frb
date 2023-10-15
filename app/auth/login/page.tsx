"use client";
import Button from "components/common/Button";
import Input from "components/common/Input";
import { useRouter } from "next/navigation";
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
  const route = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log("data: ", data);

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        console.error("Failed to authenticate user");
        return;
      }
      const result = await response.json();
      if (result?.token) {
        route.push("/");
      } else {
        console.error("Failed to authenticate user no token");
      }
    } catch (err) {
      console.error("Failed to authenticate user", err);
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

                <Button type="submit">Войти</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
