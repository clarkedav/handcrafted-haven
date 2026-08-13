import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardProducts from "@/components/DashboardProducts";
import styles from "./page.module.css";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "seller") {
    redirect("/");
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>My listings</h1>
        <p className={styles.subheading}>Manage the products you&apos;re selling on Handcrafted Haven.</p>
        <DashboardProducts />
      </main>
      <Footer />
    </>
  );
}