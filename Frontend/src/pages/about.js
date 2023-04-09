import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import cn from "classnames"
import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";
import Importance from "./../components/about/Importance/Importance";
import Members from "./../components/about/Members/Members";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";
import { ParallaxProvider, useParallax } from "react-scroll-parallax";

export default function About({ locale, aboutData }) {
  // const [aboutData, setAboutData] = useState({});
  const target = useRef(null);

  const pattern1 = useParallax({
    speed: 20,
    easing: 'easeInCubic',
    targetElement: target.current,
  })

  const pattern2 = useParallax({
    speed: 90,
    easing: 'easeInCubic',
    targetElement: target.current,
  })

  const pattern3 = useParallax({
    speed: 60,
    easing: 'easeInCubic',
    targetElement: target.current,
  })
  useEffect(() => {
    return () => {
    }
  }, []);

  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header navLinksColor={"red"} locale={locale} />
      {aboutData && (
        <main id="main" ref={target} className={cn({
          ['ar']: locale === "ar"
        })}>
          {/* PATTERNS */}
          <div ref={pattern1.ref} className={"parallax pattern1 circle-red"} >
            </div>
            <div ref={pattern2.ref} className={"parallax pattern3 circle-yellow"} >
            </div>
            <div ref={pattern3.ref} className={"parallax pattern2 circle-light-green"} >
            </div>
          <Story locale={locale} data={aboutData.story} />
          <AbdelrahmanOasis locale={locale} data={aboutData.abdelrahmanOasis} />
          <Goals locale={locale} data={aboutData.goals} />
          {/* <Importance locale={locale} data={aboutData.importance} /> */}
          <Members locale={locale} data={aboutData.members} />

          
        </main>

      )}
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const fetchedJson = await getSinglePage(
    locale,
    "about-page",
    "abdelrahmanOasis.image,story.media,story.videoCover,goals.items,goals.image,importance.image,importance.modelItems,members.membersItems"
  );

  return {
    props: {
      aboutData: { ...fetchedJson.data.attributes },
      locale: locale,
    },
  };
}
