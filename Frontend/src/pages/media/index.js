import Head from "next/head";
import LatestNews from "../../components/media/LatestNews/LatestNews";
import Gallery from "../../components/media/Gallery/Gallery";
import Header from "../../components/Header/Header";
import { getCollectionsPages, getSinglePage } from "@/providers/api.service";

export default function Media({ locale, mediaPageData, latestNewsList }) {
  // const [mediaPageData, setMediaPageData] = useState({});
  // const [latestNewsList, setLatestNewsList] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const [fetchedJson, fetchedJsonList] = await Promise.all([
  //       getSinglePage(locale, "media-page"),
  //       getCollectionsPages(locale, "latest-news", "image"),
  //     ]);
  //     setMediaPageData({ ...fetchedJson.data.attributes });
  //     setLatestNewsList([...fetchedJsonList.data]);
  //   }
  //   fetchData();
  // }, []);

  console.log(latestNewsList);

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
  const [fetchedJson, fetchedJsonList] = await Promise.all([
    getSinglePage(locale, "media-page"),
    getCollectionsPages(locale, "latest-news", "image"),
  ]);

  return {
    props: {
      mediaPageData: { ...fetchedJson.data.attributes },
      latestNewsList: [...fetchedJsonList.data],
      locale: locale,
    },
  };
}
