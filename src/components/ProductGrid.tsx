import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import styles from "./ProductGrid.module.css";

export default function ProductGrid() {
  const featured = products.slice(0, 6);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Featured products</h2>
      <div className={styles.grid}>
        {featured.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
            </div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}