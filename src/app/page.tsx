import Header from "@/components/Header";
import CollageHero from "@/components/CollageHero";
import HowItWorks from "@/components/HowItWorks";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <CollageHero />
      <HowItWorks />
      <ProductGrid />
      <Footer />
    </>
  );
}