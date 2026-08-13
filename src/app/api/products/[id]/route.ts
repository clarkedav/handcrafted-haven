import { NextResponse } from "next/server";
import { sql } from "@/lib/db";
import { auth } from "@/auth";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = await sql`SELECT * FROM products WHERE id = ${id}`;

  if (result.length === 0) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  return NextResponse.json(result[0]);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "You must be logged in." }, { status: 401 });
  }

  const { id } = await params;
  const existing = await sql`SELECT * FROM products WHERE id = ${id}`;

  if (existing.length === 0) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  if (existing[0].seller_id.toString() !== session.user.id) {
    return NextResponse.json({ error: "You don't own this listing." }, { status: 403 });
  }

  const { name, price, category, image, description } = await request.json();

  const result = await sql`
    UPDATE products
    SET name = ${name}, price = ${price}, category = ${category}, image = ${image}, description = ${description || ""}
    WHERE id = ${id}
    RETURNING *
  `;

  return NextResponse.json(result[0]);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "You must be logged in." }, { status: 401 });
  }

  const { id } = await params;
  const existing = await sql`SELECT * FROM products WHERE id = ${id}`;

  if (existing.length === 0) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  if (existing[0].seller_id.toString() !== session.user.id) {
    return NextResponse.json({ error: "You don't own this listing." }, { status: 403 });
  }

  await sql`DELETE FROM products WHERE id = ${id}`;

  return NextResponse.json({ success: true });
}