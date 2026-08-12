import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import { products } from "@/lib/products";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={product.name} fill style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </main>
      <Footer />
    </>
  );
}