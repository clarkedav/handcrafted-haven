import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardProducts from "@/components/DashboardProducts";
import DashboardProfile from "@/components/DashboardProfile";
import { sql } from "@/lib/db";
import styles from "./page.module.css";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  if (session.user.role !== "seller") {
    redirect("/");
  }

  const result = await sql`SELECT bio FROM users WHERE id = ${session.user.id}`;
  const currentBio = result[0]?.bio || "";

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.heading}>My seller profile</h1>
        <p className={styles.subheading}>Manage your story and the products you&apos;re selling on Handcrafted Haven.</p>
        <DashboardProfile initialBio={currentBio} />
        <h2 className={styles.heading} style={{ fontSize: "1.3rem", marginTop: "2.5rem" }}>My listings</h2>
        <DashboardProducts />
      </main>
      <Footer />
    </>
  );
}