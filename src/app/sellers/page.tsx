import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSellers } from "@/lib/data";
import styles from "./page.module.css";

export const metadata = {
  title: "Our Sellers | Handcrafted Haven",
  description: "Meet the independent artisans selling handmade goods on Handcrafted Haven.",
};

export default async function SellersPage() {
  const sellers = await getSellers();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>Our sellers</h1>
        {sellers.length === 0 ? (
          <p className={styles.empty}>No sellers yet &mdash; check back soon!</p>
        ) : (
          <div className={styles.grid}>
            {sellers.map((seller) => (
              <Link key={seller.id} href={`/sellers/${seller.id}`} className={styles.card}>
                <div className={styles.avatar}>{seller.name.charAt(0)}</div>
                <p className={styles.name}>{seller.name}</p>
                <p className={styles.count}>{seller.product_count} listing{seller.product_count !== "1" ? "s" : ""}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}