import Head from "next/head";

import Who from "./../components/home/Who/Who";
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";

import LangSwitch from "./../components/LangSwitch/LangSwitch";

export default function Home({ locale }) {
  return (
    <>
      <Head>
        <title>Abdelrahman Oasis</title>
        <meta name="description" content="Abdelrahman Oasis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-G4WL8WZDPW`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-G4WL8WZDPW');
                            `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-G4WL8WZDPW');`,
          }}
        />
      </Head>
      <>
        <LangSwitch />
        <Who />
        <Volunteer locale={locale} />
        <Publication />
        <Donate />
        <Calender />
      </>
    </>
  );
}


export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale
    }
  }
}