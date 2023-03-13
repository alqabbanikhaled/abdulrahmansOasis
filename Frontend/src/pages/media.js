import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";
import Gallery from "./../components/media/Gallery/Gallery";
import Header from "./../components/Header/Header";

export default function Media() {
  return (
    <>
      <Head>
        <title>Media</title>
      </Head>
      <Header navLinksColor={"red"} />
      <main id="main">
        <LatestNews />
        <Gallery />
      </main>
    </>
  );
}
