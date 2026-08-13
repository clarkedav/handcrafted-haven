import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "@/lib/data";
import styles from "./ProductGrid.module.css";

export default async function ProductGrid() {
  const allProducts = await getAllProducts();
  const featured = allProducts.slice(0, 6);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured products</h2>
      {featured.length === 0 ? (
        <p className={styles.empty}>No products listed yet &mdash; check back soon!</p>
      ) : (
        <div className={styles.grid}>
          {featured.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image src={product.image} alt={product.name} fill sizes="200px" style={{ objectFit: "cover" }} />
              </div>
              <p className={styles.name}>{product.name}</p>
              <p className={styles.price}>${product.price}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}