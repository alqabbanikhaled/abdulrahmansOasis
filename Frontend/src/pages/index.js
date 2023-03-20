import Head from "next/head";
import { useEffect, useState } from "react";

import Who from "./../components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";

import LangSwitch from "./../components/LangSwitch/LangSwitch";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";

export default function Home({ locale }) {
  const [homeData, setHomeData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(
        "home-page",
        "banars,banars.banarMedia,banars.banarMediaMobile,banars.cta,volunteer,volunteer.volunteerImage,publication,publication.image,publication.publicationFile,donate,donate.image,calender,calender.images"
      );
      setHomeData({ ...fetchedJson.data.attributes });
    }
    fetchData();
  }, []);

  return (
    <>
      {/* <LangSwitch /> */}
      <Header locale={locale} navLinksColor={"white"} />
      <Who locale={locale} data={homeData.banars} />
      <Volunteer locale={locale} data={homeData.volunteer} />
      <Publication locale={locale} data={homeData.publication} />
      <Donate locale={locale} data={homeData.donate} />
      <Calender locale={locale} data={homeData.calender} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  // const data = await getSinglePage(
  //   "home-page",
  //   "volunteer,publicaiton,donate,calender,who"
  // );

  return {
    props: {
      // data: data,
      locale: locale,
    },
  };
}
