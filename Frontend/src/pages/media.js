import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";
import Gallery from "./../components/media/Gallery/Gallery";
import Header from "./../components/Header/Header";

export default function Media({ locale }) {
  return (
    <>
      <Head>
        <title>Media</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <LatestNews />
        <Gallery />
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
