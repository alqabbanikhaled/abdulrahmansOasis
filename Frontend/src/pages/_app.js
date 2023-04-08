import { useRouter } from "next/router";
import { useEffect } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import "../styles/globals.scss";
import Layout from "./../components/Layout/Layout";
import { ParallaxProvider } from "react-scroll-parallax";

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
    <GoogleReCaptchaProvider reCaptchaKey="6LdRJSElAAAAAOwIRwPQf4Wrkaei5QxfGW6iSpeQ">
      <Layout>
        <ParallaxProvider scrollAxis='vertical'>
          <Component {...pageProps} />
        </ParallaxProvider>


      </Layout>
    </GoogleReCaptchaProvider>
  );
};
const getPathSlugs = () => {
  // We fetched locales from our API once at build time
  return ["ar", "en"].map((locale) => ({
    params: {
      locale,
    },
  }));
};

export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();
  return {
    paths: pathsWithLocale,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
export default App;
