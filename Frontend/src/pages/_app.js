import { appWithTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "../styles/globals.scss";
import Layout from "./../components/Layout/Layout";

const App = ({ Component, pageProps }) => {
  const { locale } = useRouter();

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.querySelector("body").setAttribute("dir", dir);
    if (locale === "ar") {
      document.querySelector("body").classList.add("ar");
    } else {
      document.querySelector("body").classList.remove("ar");
    }
  }, [locale]);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default appWithTranslation(App);
