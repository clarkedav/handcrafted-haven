import Image from "next/image";
import styles from "./SellerProducts.module.css";
import type { Seller } from "@/lib/sellers";

export default function SellerProducts({ seller }: { seller: Seller }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Listed products</h2>
      <div className={styles.grid}>
        {seller.products.map((product) => (
          <div key={product.name} className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
            </div>
            <p className={styles.name}>{product.name}</p>
            <p className={styles.price}>{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}