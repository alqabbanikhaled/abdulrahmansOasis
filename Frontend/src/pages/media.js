import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";

export default function Media() {
  return (
    <>
      <Head>
        <title>Media</title>
      </Head>
      <main id="main">
        <LatestNews />
      </main>
    </>
  );
}
