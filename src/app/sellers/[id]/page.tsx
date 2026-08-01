import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SellerBanner from "@/components/SellerBanner";
import SellerProducts from "@/components/SellerProducts";
import { sellers } from "@/lib/sellers";
import { notFound } from "next/navigation";

export default async function SellerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const seller = sellers[id];

  if (!seller) {
    notFound();
  }

  return (
    <>
      <Header />
      <SellerBanner seller={seller} />
      <SellerProducts seller={seller} />
      <Footer />
    </>
  );
}