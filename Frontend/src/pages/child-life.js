import Head from "next/head";
import AboutLife from "../components/child-life/LifeAbout/LifeAbout";
import Specialists from "./../components/child-life/Specialists/Specialists";
import LifeImportance from "./../components/child-life/LifeImportance/LifeImportance";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";
// import { ParallaxProvider, useParallax } from "react-scroll-parallax";
import { useRef } from "react";
export default function ChildLife({ locale, childLifeData }) {

  const target = useRef(null);

  // const pattern1 = useParallax({
  //   speed: 20,
  //   easing: 'easeInCubic',
  //   targetElement: target.current,
  // })

  // const pattern2 = useParallax({
  //   speed: 90,
  //   easing: 'easeInCubic',
  //   targetElement: target.current,
  // })

  // const pattern3 = useParallax({
  //   speed: 60,
  //   easing: 'easeInCubic',
  //   targetElement: target.current,
  // })

  return (
    <>
      <Head>
        <title>Child Life</title>
      </Head>
      <Header locale={locale} navLinksColor={"dark-purple"} />
      {childLifeData && (
        <main id="main">
          {/* PATTERNS */}
          {/* <div ref={pattern1.ref} className={"parallax pattern1 circle-dark-purple"} >
          </div>
          <div ref={pattern2.ref} className={"parallax pattern3 circle-yellow"} >
          </div>
          <div ref={pattern3.ref} className={"parallax pattern2 circle-light-green"} >
          </div> */}
          <AboutLife data={childLifeData.aboutLife} />
          <Specialists data={childLifeData.specialists} />
          <LifeImportance data={childLifeData.lifeImportance} />
        </main>
      )}
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const fetchedJson = await getSinglePage(
    locale,
    "child-life-page",
    "aboutLife.image,specialists.video,specialists.videoCover,lifeImportance.importanceItems"
  );

  return {
    props: {
      childLifeData: { ...fetchedJson.data.attributes },
      locale: locale,
    },
  };
}
