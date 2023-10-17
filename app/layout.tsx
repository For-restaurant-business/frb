import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import Header from "components/Header";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { User } from "lib/types";
import { getUser as pbGetUser } from "lib/api/auth";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";
import { EGlobalTheme, THEME_COOKIE } from "lib/constants";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const getUser = async () => {
  const cookieStore = cookies();

  const result = await pbGetUser(cookieStore);

  return result as User | null;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getUser();
  const theme = cookies().get(THEME_COOKIE)?.value || EGlobalTheme.LIGHT;

  return (
    <html lang="en" className={` ${theme === EGlobalTheme.DARK ? "dark" : ""}`}>
      <body
        className={inter.className + " h-full bg-gray-100 dark:bg-slate-900"}
      >
        <ToastContainer position="bottom-left" />
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
