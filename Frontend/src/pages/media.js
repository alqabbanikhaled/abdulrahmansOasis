import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";
import Gallery from "./../components/media/Gallery/Gallery";

export default function Media() {
  return (
    <>
      <Head>
        <title>Media</title>
      </Head>
      <main id="main">
        <LatestNews />
        <Gallery />
      </main>
    </>
  );
}
