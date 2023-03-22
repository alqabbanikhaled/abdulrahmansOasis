import React, { useCallback, useEffect, useRef, useState } from "react";
import cn from "classnames";
import styles from "./Calender.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";
const Calender = ({ locale, data = {} }) => {
  // const navigationPrevRef = useRef(null);
  // const navigationNextRef = useRef(null);
  const sliderRef = useRef(null);
  const [currentBreakpoint, setCurrentBreakpoint] = useState(0);

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

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current?.swiper.slideNext();
  }, []);

  return (
    <section id="calender" className={cn(styles.section, "space-Y-bottom")}>
      <h1 className="text-center color-yellow mb-3">{data.title}</h1>
      <div className={cn(styles.container, "space-X-l")}>
        {/* <div className={cn(styles.calenderEvents, "mb-2")}>
          {CALENDER_EVENTS.map((event, i) => (
            <Event
              className={event.className}
              description={event.description}
              date={event.date}
            />
          ))}
        </div> */}

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
        <Swiper
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
        </Swiper>
        {((data?.images?.data.length > 3 && currentBreakpoint == "@1.00") ||
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
        )}
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

const Event = ({ className, description, date }) => {
  return (
    <div className={cn(styles.event, "p-3 text-center", className)}>
      <h4>{description}</h4>
      <p className="paragraph3-size font-weight-medium color-gray">{date}</p>
    </div>
  );
};

export default Calender;
