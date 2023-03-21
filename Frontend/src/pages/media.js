import { useEffect, useState } from "react";
import Head from "next/head";
import LatestNews from "./../components/media/LatestNews/LatestNews";
import Gallery from "./../components/media/Gallery/Gallery";
import Header from "./../components/Header/Header";
import { getCollectionsPages, getSinglePage } from "@/providers/api.service";

export default function Media({ locale }) {
  const [mediaPageData, setMediaPageData] = useState({});
  const [latestNewsList, setLatestNewsList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const [fetchedJson, fetchedJsonList] = await Promise.all([
        getSinglePage(locale, "media-page"),
        getCollectionsPages(locale, "latest-news", "image"),
      ]);
      setMediaPageData({ ...fetchedJson.data.attributes });
      setLatestNewsList([...fetchedJsonList.data]);
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
        <LatestNews
          locale={locale}
          latestNewsTitle={mediaPageData.latestNewsTitle}
          latestNewsList={latestNewsList}
        />
        {/* <Gallery /> */}
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const fetchedJson = await getSinglePage("media-page", "");
  // const [mediaPageData, latestNewsList] = await Promise.all([
  //   getSinglePage("media-page"),
  //   getCollectionsPages("latest-news", "image"),
  // ]);

  return {
    props: {
      // mediaPageData,
      // latestNewsList,
      locale: locale,
    },
  };
}
