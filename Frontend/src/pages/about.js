import Head from "next/head";

import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";
import Importance from "./../components/about/Importance/Importance";
import Members from "./../components/about/Members/Members";
import Header from "./../components/Header/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header navLinksColor={"red"} />
      <main id="main">
        <AbdelrahmanOasis />
        <Story />
        <Goals />
        <Importance />
        <Members />
      </main>
    </>
  );
}
