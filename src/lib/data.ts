import { sql } from "./db";
import type { Product, Seller } from "./types";

export async function getAllProducts(): Promise<Product[]> {
  const result = await sql`SELECT * FROM products ORDER BY created_at DESC`;
  return result as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  const result = await sql`SELECT * FROM products WHERE id = ${id}`;
  return (result[0] as Product) || null;
}

export async function getSellers() {
  const result = await sql`
    SELECT u.id, u.name, COUNT(p.id) AS product_count
    FROM users u
    LEFT JOIN products p ON p.seller_id = u.id
    WHERE u.role = 'seller'
    GROUP BY u.id, u.name
    ORDER BY u.name
  `;
  return result;
}

export async function getSellerWithProducts(id: string): Promise<(Seller & { products: Product[] }) | null> {
  const sellerResult = await sql`SELECT id, name, email FROM users WHERE id = ${id} AND role = 'seller'`;
  const seller = sellerResult[0] as Seller | undefined;
  if (!seller) return null;

  const products = await sql`SELECT * FROM products WHERE seller_id = ${id} ORDER BY created_at DESC`;
  return { ...seller, products: products as Product[] };
}