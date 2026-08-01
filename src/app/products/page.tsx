import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductFilters from "@/components/ProductFilters";
import ProductListingGrid from "@/components/ProductListingGrid";
import styles from "./page.module.css";

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ProductFilters />
        <ProductListingGrid />
      </main>
      <Footer />
    </>
  );
}