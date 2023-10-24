import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import pb from "lib/api/config";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const authCookie = request.cookies.get("pb_auth");

  if (authCookie) {
    try {
      pb.authStore.loadFromCookie(authCookie.value);
    } catch (error) {
      pb.authStore.clear();
      response.headers.set(
        "set-cookie",
        pb.authStore.exportToCookie({ httpOnly: false }),
      );
    }
  }

  try {
    pb.authStore.isValid && (await pb.collection("users").authRefresh());
  } catch (err) {
    pb.authStore.clear();
    response.headers.set(
      "set-cookie",
      pb.authStore.exportToCookie({ httpOnly: false }),
    );
  }

  if (!authCookie && !request.nextUrl.pathname.startsWith("/auth")) {
    console.log("не залогинены");

    const redirect = new URL("/auth/login", request.url);
    if (request.nextUrl.pathname) {
      redirect.search = new URLSearchParams({
        redirect: request.nextUrl.pathname,
      }).toString();
    } else {
      redirect.search = new URLSearchParams({
        redirect: "/",
      }).toString();
    }

    return NextResponse.redirect(redirect);
  }

  if (authCookie && request.nextUrl.pathname.startsWith("/auth")) {
    const redirect = new URL("/", request.url);
    return NextResponse.redirect(redirect);
  }

  return response;
}

export const config = {
  matcher: "/((?!api|_next/static|_next/image|favicon.ico).*)",
};
