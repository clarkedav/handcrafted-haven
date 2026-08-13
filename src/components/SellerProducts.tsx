import Image from "next/image";
import Link from "next/link";
import styles from "./SellerProducts.module.css";
import type { Product } from "@/lib/types";

export default function SellerProducts({ products }: { products: Product[] }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Listed products</h2>
      {products.length === 0 ? (
        <p className={styles.empty}>This seller hasn&apos;t listed any products yet.</p>
      ) : (
        <div className={styles.grid}>
          {products.map((product) => (
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