import { useEffect, useState } from "react";
import Head from "next/head";
import AboutLife from "../components/child-life/LifeAbout/LifeAbout";
import Specialists from "./../components/child-life/Specialists/Specialists";
import LifeImportance from "./../components/child-life/LifeImportance/LifeImportance";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";

export default function ChildLife({ locale }) {
  const [childLifeData, setChildLifeData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(
        "child-life-page",
        "aboutLife.image,specialists.video,specialists.videoCover,lifeImportance.importanceItems"
      );
      setChildLifeData({ ...fetchedJson.data.attributes });
    }
    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Child Life</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <AboutLife data={childLifeData.aboutLife} />
        <Specialists data={childLifeData.specialists} />
        <LifeImportance data={childLifeData.lifeImportance} />
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const fetchedJson = await getSinglePage(
  //   "child-life-page",
  //   "aboutLife.image"
  // );

  return {
    props: {
      // data: fetchedJson,
      locale: locale,
    },
  };
}
