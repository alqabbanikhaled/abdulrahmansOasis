import Head from "next/head";
import AboutLife from "../components/child-life/LifeAbout/LifeAbout";
import Specialists from "./../components/child-life/Specialists/Specialists";
import LifeImportance from "./../components/child-life/LifeImportance/LifeImportance";
import Header from "./../components/Header/Header";

export default function ChildLife({ locale }) {
  return (
    <>
      <Head>
        <title>Child Life</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <AboutLife />
        <Specialists />
        <LifeImportance />
      </main>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}
