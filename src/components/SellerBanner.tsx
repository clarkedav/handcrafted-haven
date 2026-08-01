import styles from "./SellerBanner.module.css";
import type { Seller } from "@/lib/sellers";

export default function SellerBanner({ seller }: { seller: Seller }) {
  return (
    <div className={styles.banner}>
      <div className={styles.avatar}>{seller.name.charAt(0)}</div>
      <div>
        <h1 className={styles.name}>{seller.name}</h1>
        <p className={styles.tagline}>{seller.tagline}</p>
        <div className={styles.metaRow}>
          <button className={styles.followButton}>Follow</button>
          <span className={styles.rating}>
            &#9733; {seller.rating} ({seller.reviewCount} reviews)
          </span>
        </div>
      </div>
    </div>
  );
}