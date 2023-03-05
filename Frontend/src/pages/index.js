import Head from "next/head";
import Header from "@/components/Header/Header";
import "swiper/css";
import Who from "@/components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdelrahman Oasis</title>
        <meta name="description" content="Abdelrahman Oasis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main id="main">
        <Who />
        <Donate />
        <Volunteer />
        <Publication />
      </main>
    </>
  );
}
