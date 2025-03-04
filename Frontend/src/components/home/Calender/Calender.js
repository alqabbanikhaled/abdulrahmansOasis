import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Calender.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { calenderDataAR, calenderDataEN } from "./Calender.data";
import Image from "next/image";
const Calender = ({ locale, data = {} }) => {
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(0);
  const dataStatic = locale === "ar" ? calenderDataAR : calenderDataEN

  useEffect(() => {
    // sliderRef.current?.swiper.slideTo(0);
    sliderRef?.current?.swiper.updateSlides();
    locale == "en"
      ? sliderRef.current?.swiper.changeLanguageDirection("ltr")
      : sliderRef.current?.swiper.changeLanguageDirection("rtl");
  }, [locale]);

  useEffect(() => {
    setCurrentBreakpoint(sliderRef?.current?.swiper.currentBreakpoint);
    window.addEventListener("resize", function () {
      setCurrentBreakpoint(sliderRef?.current?.swiper.currentBreakpoint);
    });
  });


  return (
    <section id="calender" className={cn(styles.section, "space-Y", {
      [styles.ar]: locale === "ar"
    })}>
      {/* <div className={styles.monthsNavBar}>
        <h1 className="text-center color-dark-purple mb-3">{data.title}</h1>
      </div> */}
      <div className={cn(styles.container, "space-X-l")}>
        
        <Swiper
          ref={sliderRef}
          dir={locale == "ar" ? "rtl" : "ltr"}
          autoplay={false}
          watchSlidesProgress={true}
          modules={[Navigation]}
          navigation={
            { disabledClass: styles.disabled, nextEl: `.${styles.next}`, prevEl: `.${styles.prev}` }
          }
          spaceBetween={30}
          className={cn(styles.calenderSwiper, "calenderSwiper")}
          slidesPerView={1}
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i} className={styles.monthContainer}>
              <h3 className="color-dark-purple mb-3 text-center head2-size">{item.month}</h3>
              <div className={cn(styles.calenderEvents, "mb-2")}>
                {item.events.map((event, i) => (
                  <EventsItem
                    key={i}
                    className={event.className}
                    data={event}
                    locale={locale}
                  // image={data.images.data[i]}

                  />
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={cn(styles.navigation+" white-bg",{
          [styles.hidden]: !data || data.length === 1
        })}>
          <div className={styles.prev}>
            <img className={cn(styles.arrowIcon)} src="/svg/discover_arrow.svg" alt="Prev" />
          </div>
          <div className={styles.next}>
            <img className={cn(styles.arrowIcon)} src="/svg/discover_arrow.svg" alt="Next" />
          </div>
        </div>


        {/* <div className={styles.calenderImages}>
          {data?.images?.data.map((img, i) => (
            <img
              key={i}
              className={styles.event}
              src={img?.attributes.url}
              alt=""
            />
          ))}
        </div> */}
        {/* <Swiper
          ref={sliderRef}
          dir={locale == "ar" ? "rtl" : "ltr"}
          modules={[Navigation]}
          spaceBetween={30}
          className={cn(styles.calenderSwiper, "calenderSwiper")}
          slidesPerView={3}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          {data?.images?.data.map((img, i) => (
            <SwiperSlide key={i}>
              <img className={styles.img} src={img?.attributes.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper> */}
        {/* {((data?.images?.data.length > 3 && currentBreakpoint == "@1.00") ||
          (data?.images?.data.length > 2 && currentBreakpoint == "@0.75") ||
          (data?.images?.data.length > 1 && currentBreakpoint == "@0.00")) && (
          <div className={cn(styles.buttons)}>
            {locale == "ar" ? (
              <>
                <button onClick={handlePrev} className={styles.arrowButton}>
                  <img src="./svg/arrow_right_L.svg" />
                </button>
                <button onClick={handleNext} className={styles.arrowButton}>
                  <img src="./svg/arrow_left_L.svg" />
                </button>
              </>
            ) : (
              <>
                <button onClick={handleNext} className={styles.arrowButton}>
                  <img src="./svg/arrow_left_L.svg" />
                </button>
                <button onClick={handlePrev} className={styles.arrowButton}>
                  <img src="./svg/arrow_right_L.svg" />
                </button>
              </>
            )}
          </div>
        )} */}
      </div>
    </section>
  );
};

// const Event = ({ className, description, day, month }) => {
//   return (
//     <div className={cn(styles.event, "p-3", className)}>
//       <h4>{description}</h4>
//       <div className={cn(styles.date)}>
//         <h1 className="paragraph12-size">{day}</h1>
//         <div className="paragraph3-size font-weight-medium">{month}</div>
//       </div>
//     </div>
//   );
// };
const EventsItem = ({
  locale,
  highlight,
  data
}) => {
  return (
    // <Link href={{ pathname: `/media/${Slug}`, query: { id } }}>
    <div className={cn(styles.eventsItem, "white-bg", {
      [styles.highlight]: highlight,
      [styles.ar]: locale === "ar"
    })}>
      <div className={cn(styles.imgDate, "blue-bg")}>
        <div className={cn(styles.date, " pt-1 pb-1 p-inline-2",
          {
            [styles.ar]: locale === "ar"
          })}>
          <div
            className={cn(
              styles.day,
              "head1-size font-weight-medium color-white"
            )}
          >
            {data.date}
          </div>
        </div>
      </div>
      <div className={cn(styles.content, "pt-1 pb-2 p-inline-2")}>

        <div
          className={cn(
            styles.title,
            "color-blue  font-weight-medium", {
            ['head3-size']: highlight,
            ['paragraph5-size']: !highlight
          }
          )}
        >
          {data.title}
        </div>
        <div className={cn(styles.description, "color-gray")}>
          {data.description}
        </div>
        <div className={cn(styles.location, "color-black")}>
          <img
            className={styles.icon}
            src="/svg/clock.svg"
            alt="time icon"
          />
          <div className={styles.text}>{data.time}</div>
        </div>
        <div className={cn(styles.location, "color-black pt-1")}>
          <img
            className={styles.icon}
            src="/svg/location.svg"
            alt="location icon"
          />
          <div className={styles.text}>{data.location}</div>
        </div>
        {data.ctaLink && <a className={cn(styles.eventUrl)} href={data.ctaLink} target="_blank">
          <div
            className={cn(styles.discover, "color-orange font-weight-medium pt-1")}
          >
            <span>{data.ctaLabel || (locale === "ar" ? "للمزيد" : "More")}</span>
            <img
              className={cn({ [styles.rotateEn]: locale == "en" })}
              src="/svg/discover_arrow.svg"
              alt=""
            />
          </div>
        </a>}
      </div>
    </div>
    // </Link>
  );
};

export default Calender;
