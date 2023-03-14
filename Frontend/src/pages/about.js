import Head from "next/head";

import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";
import Importance from "./../components/about/Importance/Importance";
import Members from "./../components/about/Members/Members";
import Header from "./../components/Header/Header";

export default function About({ locale }) {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header navLinksColor={"red"} locale={locale} />
      <main id="main">
        <AbdelrahmanOasis locale={locale} />
        <Story locale={locale} />
        <Goals locale={locale} />
        <Importance locale={locale} />
        <Members locale={locale} />
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
