import Head from "next/head";
import Header from "@/components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Who from "@/components/home/Who/Who";
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
      </main>
    </>
  );
}
