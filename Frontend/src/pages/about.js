import Head from "next/head";

import AbdelrahmanOasis from "./../components/about/AbdelrahmanOasis/AbdelrahmanOasis";
import Story from "./../components/about/Story/Story";
import Goals from "./../components/about/Goals/Goals";
import Importance from "./../components/about/Importance/Importance";
import Members from './../components/about/Members/Members';

export default function AbdulrahmanOasis() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
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
