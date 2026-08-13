import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellerBanner from "@/components/SellerBanner";
import SellerProducts from "@/components/SellerProducts";
import { getSellerWithProducts } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function SellerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const seller = await getSellerWithProducts(id);

  if (!seller) {
    notFound();
  }

  return (
    <>
      <Header />
      <SellerBanner seller={seller} />
      <SellerProducts products={seller.products} />
      <Footer />
    </>
  );
}