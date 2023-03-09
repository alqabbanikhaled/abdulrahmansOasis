import Head from "next/head";
import AboutLife from "../components/child-life/LifeAbout/LifeAbout";
import Specialists from './../components/child-life/Specialists/Specialists';

export default function About() {
  return (
    <>
      <Head>
        <title>Child Life</title>
      </Head>
      <main id="main">
        <AboutLife />
        <Specialists />
      </main>
    </>
  );
}
