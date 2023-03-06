import Head from "next/head";

import Header from "@/components/Header/Header";
import Who from "@/components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";
import Footer from "./../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdelrahman Oasis</title>
        <meta name="description" content="Abdelrahman Oasis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main id="main">
        <Who />
        <Donate />
        <Volunteer />
        <Publication />
        <Calender />
      </main>
      <Footer />
    </>
  );
}
