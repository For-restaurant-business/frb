import { cookies } from "next/headers";
import { deleteCookie } from "cookies-next";

import pb from "./config";

type ReadonlyRequestCookies = ReturnType<typeof cookies>;

export function authenticate(email: string, password: string) {
  return fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
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

export async function getUser(cookieStore: ReadonlyRequestCookies) {
  const cookie = cookieStore.get("pb_auth");
  if (!cookie) {
    return null;
  }

  pb.authStore.loadFromCookie(cookie?.value || "");
  return pb.authStore.model;
}
