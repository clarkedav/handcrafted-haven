import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/auth";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("productId");

  if (!productId) {
    return NextResponse.json({ error: "productId is required" }, { status: 400 });
  }

  const reviews = await sql`
    SELECT id, user_name, rating, comment, created_at
    FROM reviews
    WHERE product_id = ${productId}
    ORDER BY created_at DESC
  `;

  return NextResponse.json(reviews);
}

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: "You must be logged in to leave a review." }, { status: 401 });
  }

  const { productId, rating, comment } = await request.json();

  if (!productId || !rating) {
    return NextResponse.json({ error: "Product and rating are required." }, { status: 400 });
  }

  await sql`
    INSERT INTO reviews (product_id, user_id, user_name, rating, comment)
    VALUES (${productId}, ${session.user.id}, ${session.user.name}, ${rating}, ${comment || ""})
  `;

  return NextResponse.json({ success: true });
}