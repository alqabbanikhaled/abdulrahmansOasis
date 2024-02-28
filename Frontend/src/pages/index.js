
import Donate from "./../components/home/Donate/Donate";
import Volunteer from "./../components/home/Volunteer/Volunteer";
import Publication from "./../components/home/Publication/Publication";
import Calender from "./../components/home/Calender/Calender";

import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";
import HomeHero from "@/components/home/HomeHero/HomeHero";
import HomeAbout from "@/components/home/HomeAbout/HomeAbout";
import Goals from "@/components/home/Goals/Goals";
import Stats from "@/components/home/Stats/Stats";
import Specialists from "@/components/home/Specialists/Specialists";
import HowToHelp from "@/components/home/HowToHelp/HowToHelp";

export default function Home({ locale, homeData,about }) {
  // const [homeData, setHomeData] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     const fetchedJson = await getSinglePage(
  //       locale,
  //       "home-page",
  //       "banners,banners.bannerMedia,banners.bannerMediaMobile,banners.cta,volunteer,volunteer.volunteerImage,publication,publication.image,publication.publicationFile,donate,donate.image,calender,calender.images"
  //     );
  //     setHomeData({ ...fetchedJson.data.attributes });
  //   }
  //   fetchData();
  // }, []);

  return (
    homeData && (
      <>
        {/* <LangSwitch /> */}
        <Header locale={locale} navLinksColor={"dark-purple"} />
        <HomeHero locale={locale} data={homeData.volunteer}/>
        {/* <Who locale={locale} data={homeData.banners} /> */}
        <HomeAbout locale={locale} data={about.abdelrahmanOasis} />
        <Goals/>
        {/* <Volunteer locale={locale} data={homeData.volunteer} /> */}
        {/* <Publication locale={locale} data={homeData.publication} /> */}
        <Stats />
        <Specialists/>
        <HowToHelp/>
        {/* <Donate locale={locale} data={homeData.donate} /> */}
        {/* {
          homeData.calender?.length > 0 && 
          <Calender locale={locale} data={homeData.calender} />
        } */}
      </>
    )
  );
}

export async function getServerSideProps({ locale }) {
  const [data,about] = await Promise.all([
    getSinglePage(
    locale,
    "home-page",
    "banners,banners.bannerMedia,banners.bannerMediaMobile,banners.cta,volunteer,volunteer.volunteerImage,publication,publication.image,publication.publicationFile,donate,donate.image,calender,calender.events"
  ),
  getSinglePage(
    locale,
    "about-page",
    "abdelrahmanOasis.image,story.media,story.videoCover,goals.items,goals.image,importance.image,importance.modelItems,members.membersItems"
  )
  ])

  return {
    props: {
      homeData: data.data.attributes,
      about: about.data.attributes,
      locale: locale,
    },
  };
}
