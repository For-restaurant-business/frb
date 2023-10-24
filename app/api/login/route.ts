import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import pb from "lib/api/config";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const result = await pb
      .collection("users")
      .authWithPassword(email, password);

    const { record, token } = result;

    if (!token) {
      throw new Error("Failed to authenticate user no token.");
    }

    record.token = token;

    cookies().set("pb_auth", pb.authStore.exportToCookie(), {
      sameSite: "lax",
      expires: Date.now() + 24 * 60 * 60 * 1000 * 30,
    });

    return NextResponse.json(record);
  } catch (err) {
    const typedErr = err as Error;
    return new Response(
      JSON.stringify({ error: typedErr.message || typedErr.toString() }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}
