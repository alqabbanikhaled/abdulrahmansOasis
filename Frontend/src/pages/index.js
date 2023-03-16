import Head from "next/head";
import { useEffect } from "react";

import Who from "./../components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";

import LangSwitch from "./../components/LangSwitch/LangSwitch";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";

export default function Home({ locale, home }) {
  // useEffect(async () => {
  //   const data = await getSinglePage(
  //     "home-page",
  //     "volunteer,publicaiton,donate,calender,who"
  //   );
  //   console.log(data);
  // }, []);

  console.log(data);

  return (
    <>
      {/* <LangSwitch /> */}
      <Header locale={locale} navLinksColor={"white"} />
      <Who locale={locale} />
      <Volunteer locale={locale} />
      <Publication locale={locale} />
      <Donate locale={locale} />
      <Calender locale={locale} />
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const data = await getSinglePage(
    "home-page",
    "volunteer,publicaiton,donate,calender,who"
  );

  return {
    props: {
      locale: locale,
      data,
    },
  };
}
