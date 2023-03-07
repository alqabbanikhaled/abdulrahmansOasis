import Head from "next/head";
import cn from "classnames";
import styles from "../components/donate/donate.module.scss";
export default function Donate() {
  return (
    <>
      <Head>
        <title>Donate</title>
      </Head>
      <main id="main">
        <section className={cn(styles.section, "space-X space-Y")}>
          <div className={cn(styles.container)}>
            <div className={cn(styles.donateText, "mb-3")}>
              <h1>للتبرعات</h1>
            </div>
            <div className={styles.donateImg}>
              <img src="./donation.jpg" alt="donation" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
