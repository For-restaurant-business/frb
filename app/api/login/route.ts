import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import pb from "lib/api/config";
import { authenticate } from "lib/api/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const result = await authenticate(email, password);

    const { record, token } = result;
    record.token = token;
    cookies().set("pb_auth", pb.authStore.exportToCookie());

    return NextResponse.json(record);
  } catch (err) {
    const typedErr = err as Error;
    console.error(err);
    return new Response(
      JSON.stringify({ error: typedErr.message || typedErr.toString() }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
