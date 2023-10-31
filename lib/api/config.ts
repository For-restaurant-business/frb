import PocketBase from "pocketbase";
import { getCookie } from "cookies-next";
import { USER_COOKIE } from "lib/constants";

const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_HOST);

if (typeof window !== "undefined") {
  const authCookie = getCookie(USER_COOKIE) as string;
  pb.authStore.loadFromCookie(authCookie);
}

export default pb;
