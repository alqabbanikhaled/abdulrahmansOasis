import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./LatestNews.module.scss";
import { NEWS_LIST } from "./LatestNews.data";

const newsPerPage = 6;
let arrayForHoldingNews = [];
const LatestNews = ({ locale, latestNewsTitle = "", latestNewsList = [] }) => {
  const [newsList] = useState([...NEWS_LIST]);
  const [newsToShow, setNewsToShow] = useState([]);
  const ref = useRef(newsPerPage);

  useEffect(() => {
    arrayForHoldingNews = [];
    loopWithSlice(0, newsPerPage);
  }, []);

  const loopWithSlice = (start, end) => {
    const slicedNews = newsList.slice(start, end);
    arrayForHoldingNews = arrayForHoldingNews.concat(slicedNews);
    setNewsToShow(arrayForHoldingNews);
  };

  const handleShowMoreNews = () => {
    loopWithSlice(ref.current, ref.current + newsPerPage);
    ref.current += newsPerPage;
  };

  return (
    <section className={cn(styles.section, "space-X space-Y bg-7 mt-2")}>
      <div className={cn(styles.container)}>
        <h3 className="color-orange mb-2 text-center">{latestNewsTitle}</h3>
        <div className={cn(styles.latestNewsItems)}>
          {latestNewsList.map((newsItem) => (
            <NewsItem newsItem={newsItem.attributes} locale={locale} />
          ))}
        </div>
        {/* <div className={styles.button}>
          <Button
            className="orange-bg color-white mt-3 mb-3"
            onClick={handleShowMoreNews}
          >
            تحميل المزيد
          </Button>
        </div> */}
      </div>
    </section>
  );
};

const NewsItem = ({
  locale,
  newsItem: { title, description, newsUrl, image, ctaLabel },
}) => {
  return (
    <div className={cn(styles.newsItem, "white-bg pb-2")}>
      <div className={cn(styles.imgDate)}>
        <img src={`http://localhost:1337${image?.data.attributes.url}`} />
        {/* <div className="p-inline-2">
          <div className={cn(styles.date, "white-bg p-inline-2")}>
            <div
              className={cn(
                styles.day,
                "paragraph5-size font-weight-medium color-purple"
              )}
            >
              {day}
            </div>
            <div className={cn(styles.month, "paragraph1-size")}>{month}</div>
          </div>
        </div> */}
      </div>
      <div className={cn(styles.content, "pt-2 pb-1 p-inline-2")}>
        {/* <div className={cn(styles.location, "color-gray")}>
          <img
            className={styles.icon}
            src="/svg/location.svg"
            alt="location icon"
          />
          <div className={styles.text}>{location}</div>
        </div> */}
        <div
          className={cn(
            styles.title,
            "color-orange paragraph3-size font-weight-medium"
          )}
        >
          {title}
        </div>
        <div className={cn(styles.description, "color-gray")}>
          {description}
        </div>
        <a className={cn(styles.newsUrl)} href={newsUrl} target="_blank">
          <div
            className={cn(styles.discover, "color-orange font-weight-medium")}
          >
            <span>{ctaLabel}</span>
            <img
              className={cn({ [styles.rotateEn]: locale == "en" })}
              src="/svg/discover_arrow.svg"
              alt=""
            />
          </div>
        </a>
      </div>
    </div>
  );
};
export default LatestNews;
