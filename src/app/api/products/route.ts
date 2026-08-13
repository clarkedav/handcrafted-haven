import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sellerId = searchParams.get("sellerId");

  const products = sellerId
    ? await sql`SELECT * FROM products WHERE seller_id = ${sellerId} ORDER BY created_at DESC`
    : await sql`SELECT * FROM products ORDER BY created_at DESC`;

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.id) {
    return NextResponse.json({ error: "You must be logged in." }, { status: 401 });
  }

  if (session.user.role !== "seller") {
    return NextResponse.json({ error: "Only sellers can create listings." }, { status: 403 });
  }

  const { name, price, category, image, description } = await request.json();
  
  if (!name || !price || !category || !image) {
    return NextResponse.json({ error: "Name, price, category, and image are required." }, { status: 400 });
  }

  const result = await sql`
    INSERT INTO products (seller_id, name, price, category, image, description)
    VALUES (${session.user.id}, ${name}, ${price}, ${category}, ${image}, ${description || ""})
    RETURNING *
  `;

  return NextResponse.json(result[0]);
}