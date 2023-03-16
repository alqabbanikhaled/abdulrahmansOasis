import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import styles from "./LatestNews.module.scss";
import { NEWS_LIST } from "./LatestNews.data";
import Button from "./../../Button/Button";
const newsPerPage = 6;
let arrayForHoldingNews = [];
const LatestNews = () => {
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
        <h3 className="color-orange mb-2 text-center">آخر الأخبار</h3>
        <div className={cn(styles.latestNewsItems)}>
          {newsToShow.map((newsItem) => (
            <NewsItem newsItem={newsItem} />
          ))}
        </div>
        <div className={styles.button}>
          <Button
            className="orange-bg color-white mt-3 mb-3"
            onClick={handleShowMoreNews}
          >
            تحميل المزيد
          </Button>
        </div>
      </div>
    </section>
  );
};

const NewsItem = ({
  newsItem: { imgUrl, day, month, location, title, description, newsUrl },
}) => {
  return (
    <div className={cn(styles.newsItem, "white-bg")}>
      <div className={cn(styles.imgDate)}>
        <img src={imgUrl} />
        <div className="p-inline-2">
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
        </div>
      </div>
      <div className="pt-2 pb-2 p-inline-2">
        <div className={cn(styles.location, "color-gray")}>
          <img
            className={styles.icon}
            src="/svg/location.svg"
            alt="location icon"
          />
          <div className={styles.text}>{location}</div>
        </div>
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
        <a href={newsUrl}>
          <div
            className={cn(styles.discover, "color-orange font-weight-medium")}
          >
            <span>اكتشف المزيد</span>
            <img src="/svg/discover_arrow.svg" alt="" />
          </div>
        </a>
      </div>
    </div>
  );
};
export default LatestNews;
