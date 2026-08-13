import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductListingGrid from "@/components/ProductListingGrid";
import styles from "./page.module.css";

export const metadata = {
  title: "Shop All Products | Handcrafted Haven",
  description: "Browse handmade pottery, textiles, jewelry, and more from independent artisans.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Suspense fallback={<div>Loading products...</div>}>
          <ProductListingGrid />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}