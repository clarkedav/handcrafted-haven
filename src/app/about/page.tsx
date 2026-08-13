import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us | Handcrafted Haven",
  description: "Learn about Handcrafted Haven's mission to connect artisans with conscious buyers.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.heading}>Our story</h1>
          <p className={styles.lead}>
            Handcrafted Haven exists to celebrate the people behind handmade goods &mdash;
            connecting independent artisans with buyers who care where their things come from.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>Why we started</h2>
          <p className={styles.text}>
            Mass production has made it easy to forget that everyday objects can be made by hand,
            with intention and skill. We built Handcrafted Haven to give small, independent makers
            a real storefront &mdash; not just a listing buried in a giant marketplace &mdash; and to
            help buyers discover the story behind what they own.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.subheading}>What we value</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Community</h3>
              <p>Every purchase supports a real person, not a warehouse.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>Handmade goods are made to last, not to be replaced.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Craftsmanship</h3>
              <p>We celebrate skill, patience, and the imperfect beauty of handmade work.</p>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <h2 className={styles.subheading}>Get in touch</h2>
          <p className={styles.text}>Have a question, or interested in selling with us?</p>
          <p className={styles.contactItem}>Email: hello@handcraftedhaven.example</p>
          <p className={styles.contactItem}>Based in: Rexburg, Idaho</p>
        </section>
      </main>
      <Footer />
    </>
  );
}