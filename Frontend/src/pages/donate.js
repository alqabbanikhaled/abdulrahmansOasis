import Head from "next/head";
import cn from "classnames";
import styles from "../components/donate/donate.module.scss";
import Header from "./../components/Header/Header";
import { useEffect, useState } from "react";
import { getSinglePage } from "@/providers/api.service";

export default function Donate({ locale }) {
  const [donateData, setDonateData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(locale, "donate-page", "image");
      setDonateData({ ...fetchedJson.data.attributes });
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Donate</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      {donateData && (
        <main id="main">
          <section className={cn(styles.section, "space-X space-Y")}>
            <div className={cn(styles.container)}>
              {/* <div className={cn(styles.donateText, "mb-3")}>
              <h1>للتبرعات</h1>
            </div> */}
              <div className={styles.donateImg}>
                <img
                  src={`http://localhost:1337${donateData.image?.data.attributes.url}`}
                  alt="donation"
                />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const fetchedJson = await getSinglePage(
  //   "donate-page",
  //   "image"
  // );

  return {
    props: {
      // data: fetchedJson,
      locale: locale,
    },
  };
}
