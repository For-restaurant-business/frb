import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import pb from "lib/api/config";
import { authenticate } from "lib/api/auth";

export async function POST(request: Request) {
  try {
    const { login, password } = await request.json();

    console.log("login", login, "password", password);

    const result = await authenticate(login, password);

    console.log("result", result);

    const { record, token } = result;
    record.token = token;
    cookies().set("pb_auth", pb.authStore.exportToCookie());

    return NextResponse.json(record);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: err.message || err.toString() }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
