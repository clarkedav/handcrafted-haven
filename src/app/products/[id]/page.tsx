import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import ProductReviews from "@/components/ProductReviews";
import { getProductById } from "@/lib/data";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.imageWrapper}>
          <Image src={product.image} alt={product.name} fill sizes="400px" style={{ objectFit: "cover" }} />
        </div>
        <div className={styles.info}>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>${product.price}</p>
          <p className={styles.description}>{product.description}</p>
          <AddToCartButton product={product} />
        </div>
      </main>
      <ProductReviews productId={product.id.toString()} />
      <Footer />
    </>
  );
}