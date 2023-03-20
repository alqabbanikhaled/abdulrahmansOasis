import { useEffect, useState } from "react";
import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";
import Gallery from "./../components/media/Gallery/Gallery";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";

export default function Media({ locale }) {
  const [mediaData, setMediaData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(
        "media-page",
        "latestNews.newsItems.image"
      );
      setMediaData({ ...fetchedJson.data.attributes });
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Media</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <LatestNews data={mediaData.latestNews} />
        {/* <Gallery /> */}
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const fetchedJson = await getSinglePage("media-page", "");

  return {
    props: {
      // data: fetchedJson,
      locale: locale,
    },
  };
}
