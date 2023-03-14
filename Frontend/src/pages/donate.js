import Head from "next/head";
import cn from "classnames";
import styles from "../components/donate/donate.module.scss";
import Header from "./../components/Header/Header";

export default function Donate({ locale }) {
  return (
    <>
      <Head>
        <title>Donate</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <section className={cn(styles.section, "space-X space-Y")}>
          <div className={cn(styles.container)}>
            {/* <div className={cn(styles.donateText, "mb-3")}>
              <h1>للتبرعات</h1>
            </div> */}
            <div className={styles.donateImg}>
              <img src="/donation.jpg" alt="donation" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}
