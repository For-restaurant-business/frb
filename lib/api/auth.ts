import { cookies } from "next/headers";
import { deleteCookie, getCookie } from "cookies-next";

import pb from "./config";
import { User } from "lib/types";

type ReadonlyRequestCookies = ReturnType<typeof cookies>;

export async function authenticate(email: string, password: string) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const errRes = await res.json();
    throw new Error(errRes.error);
  }

  const authCookie = getCookie("pb_auth");
  if (!authCookie) {
    throw new Error("Cookies have not been created.");
  }
  pb.authStore.loadFromCookie(authCookie);

  return res;
}

export async function logout() {
  deleteCookie("pb_auth");
  localStorage.clear();
}

export async function isAuthenticated(cookieStore: ReadonlyRequestCookies) {
  const cookie = cookieStore.get("pb_auth");
  if (!cookie) {
    return false;
  }

  pb.authStore.loadFromCookie(cookie?.value || "");
  return pb.authStore.isValid || false;
}

export async function getUser(
  authCookie: string | undefined,
): Promise<User | null> {
  if (!authCookie) {
    return null;
  }

  pb.authStore.loadFromCookie(authCookie);
  return pb.authStore.model as User;
}
