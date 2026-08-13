import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/auth";

export async function PUT(request: Request) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "You must be logged in." }, { status: 401 });
  }

  const { bio } = await request.json();

  await sql`UPDATE users SET bio = ${bio} WHERE id = ${session.user.id}`;

  return NextResponse.json({ success: true });
}