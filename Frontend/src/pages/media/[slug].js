import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getNewsItem } from "@/providers/api.service";
import Header from "@/components/Header/Header";

export default function Slug() {
  const [newsItem, setNewsItem] = useState(null);
  const {
    locale,
    query: { slug, id },
  } = useRouter();

  console.log(id);
  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getNewsItem(locale, slug, id);
      setNewsItem({ ...fetchedJson.data?.attributes });
      console.log(fetchedJson);
    }
    fetchData();
  }, [id, slug]);
  console.log();

  return (
    <>
      <Header navLinksColor={"dark-purple"} locale={locale} />
      {newsItem && (
        <div main id="main">
          <div>23/1/2023</div>
          <div>{newsItem.title} </div>
          <div>{newsItem.description}</div>
        </div>
      )}
    </>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch("https://abdelrahmanoasis-cms-kpg3ggywpa-uc.a.run.app/api/latest-news");
//   const data = await res.json();

//   console.log(data);
//   return {
//     paths: data.map((item) => ({ params: { slug: item.Slug } })),
//     fallback: false,
//   };
// }

// export async function getStaticProps({ slug }) {
//   const res = await fetch(
//     `https://abdelrahmanoasis-cms-kpg3ggywpa-uc.a.run.app/api/latest-news/?filters[Slug][$eq]=${slug}`
//   );
//   const data = await res.json();

//   return {
//     props: { newsItem: data },
//   };
// }
