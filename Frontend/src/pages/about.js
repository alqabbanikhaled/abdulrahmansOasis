import Head from "next/head";
import { useEffect, useState } from "react";

import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";
import Importance from "./../components/about/Importance/Importance";
import Members from "./../components/about/Members/Members";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";

export default function About({ locale, data }) {
  const [aboutData, setAboutData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(
        "about-page",
        "abdelrahmanOasis.image,story.media,story.videoCover,goals.items,goals.image,importance.image,importance.modelItems,members.membersItems"
      );
      setAboutData({ ...fetchedJson.data.attributes });
    }
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header navLinksColor={"red"} locale={locale} />
      <main id="main">
        {aboutData !== null ? (
          <>
            <AbdelrahmanOasis
              locale={locale}
              data={aboutData.abdelrahmanOasis}
            />
            <Story locale={locale} data={aboutData.story} />
            <Goals locale={locale} data={aboutData.goals} />
            <Importance locale={locale} data={aboutData.importance} />
            <Members locale={locale} data={aboutData.members} />
          </>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const fetchedJson = await getSinglePage(
  //   "about-page",
  //   "abdelrahmanOasis.image"
  // );

  return {
    props: {
      // data: fetchedJson,
      locale: locale,
    },
  };
}
