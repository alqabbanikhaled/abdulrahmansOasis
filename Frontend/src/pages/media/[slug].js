import { useEffect } from "react";
import { useRouter } from "next/router";

var slugify = require("slugify");

export default function Slug() {
  const router = useRouter();

  //   useEffect(() => {
  //     async function fetchData() {
  //       const res = await fetch(
  //         `http://localhost:1337/api/latest-news/?filters[Slug][$eq]=${context.slug}`
  //       );
  //       const data = await res.json();
  //     }
  //   }, []);

  return (
    <div>
      <div>23/1/2023</div>
      <div>
        توقيع اتفاقية واحة عبدالرحمن مع مستشفى الملك فهد ومؤسسة سند الخيرية
      </div>
      <div>
        توقيع اتفاقية واحة عبدالرحمن مع مستشفى الملك فهد ومؤسسة سند الخيرية
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "http://localhost:1337/api/latest-news?fields=id,Slug"
  );
  const data = await res.json();

  console.log(data);
  return {
    paths: data.map((item) => ({ params: { slug: `${slugify(item.title)}` } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const res = await fetch(
    `http://localhost:1337/api/latest-news/?filters[Slug][$eq]=${context.slug}`
  );
  const data = await res.json();

  console.log(context);
  return {
    props: { news: data },
  };
}
