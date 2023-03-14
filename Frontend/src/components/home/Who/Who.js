import React, { useState, useRef, useCallback, useEffect } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";

import Button from "@/components/Button/Button";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";
import { whoDataAR, whoDataEN } from "./Who.data";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Who.module.scss";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Who = ({ locale }) => {
  const sliderRefText = useRef(null);
  const sliderRefImages = useRef(null);
  const videoRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const { BANARS_DATA } = locale == "ar" ? whoDataAR : whoDataEN;

  useEffect(() => {
    if (currentSlideIndex == 1) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (!sliderRefText.current || !sliderRefImages.current) return;
    sliderRefText.current.swiper.slidePrev();
    sliderRefImages.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRefText.current || !sliderRefImages.current) return;
    sliderRefText.current.swiper.slideNext();
    sliderRefImages.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    sliderRefText?.current.swiper.slideTo(0);
    sliderRefImages?.current.swiper.slideTo(0);

    sliderRefText?.current.swiper.updateSlides();
    locale == "en"
      ? sliderRefText?.current.swiper.changeLanguageDirection("ltr")
      : sliderRefText?.current.swiper.changeLanguageDirection("rtl");

    sliderRefImages?.current.swiper.updateSlides();
    locale == "en"
      ? sliderRefImages?.current.swiper.changeLanguageDirection("ltr")
      : sliderRefImages?.current.swiper.changeLanguageDirection("rtl");
  }, [locale]);

  return (
    <section className={cn(styles.section)}>
      <Swiper
        loop={true}
        className={cn(styles.whoSwiperImages)}
        ref={sliderRefImages}
        slidesPerView={1}
        modules={[EffectFade]}
        effect={"fade"}
        allowTouchMove={false}
      >
        {BANARS_DATA.map(({ bannerUrl, srcType }, i) => (
          <SwiperSlide key={i}>
            {srcType == "image" ? (
              <img src={bannerUrl} alt="no image" />
            ) : (
              <video
                autoPlay
                ref={videoRef}
                playsInline={true}
                controls={false}
                loop={true}
                muted
              >
                <source src={bannerUrl} type="video/mp4" />
              </video>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cn(styles.container, "space-X")}>
        <div className={cn(styles.textSwiperAndButton, "mb-4")}>
          <Swiper
            loop={true}
            className={cn(styles.whoSwiperText, "mb-1")}
            ref={sliderRefText}
            slidesPerView={1}
            allowTouchMove={false}
            onSlideChange={(value) => {
              setCurrentSlideIndex(value.realIndex);
            }}
          >
            {BANARS_DATA.map(({ title, buttonText, textColor }, i) => (
              <SwiperSlide key={i}>
                <SwiperTextCard
                  title={title}
                  buttonText={buttonText}
                  textColor={textColor}
                  locale={locale}
                  className={cn({
                    "color-black":
                      BANARS_DATA[currentSlideIndex].textColor == "dark",
                    "color-white":
                      BANARS_DATA[currentSlideIndex].textColor != "dark",
                  })}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.button}>
            <Link href={BANARS_DATA[currentSlideIndex].buttonLink}>
              <Button
                className={cn({
                  "color-red white-bg":
                    BANARS_DATA[currentSlideIndex].textColor != "dark",
                  "color-yellow black-bg":
                    BANARS_DATA[currentSlideIndex].textColor == "dark",
                })}
              >
                {BANARS_DATA[currentSlideIndex].buttonText}
              </Button>
            </Link>
          </div>
        </div>
        <div className={cn(styles.outlinedButtons)}>
          {locale == "ar" ? (
            <>
              <OutlinedButton
                onClick={handlePrev}
                className={styles.arrowButton}
              >
                <img src="./svg/arrow_right_L.svg" color="#000" />
              </OutlinedButton>
              <OutlinedButton
                onClick={handleNext}
                className={styles.arrowButton}
              >
                <img src="./svg/arrow_left_L.svg" color="#000" />
              </OutlinedButton>
            </>
          ) : (
            <>
              <OutlinedButton
                onClick={handleNext}
                className={styles.arrowButton}
              >
                <img src="./svg/arrow_left_L.svg" color="#000" />
              </OutlinedButton>
              <OutlinedButton
                onClick={handlePrev}
                className={styles.arrowButton}
              >
                <img src="./svg/arrow_right_L.svg" color="#000" />
              </OutlinedButton>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

const SwiperTextCard = ({ title, className, textColor, locale }) => {
  return (
    <div className={cn(styles.titleWrapper, "mb-1")}>
      {locale == "ar" ? (
        <img
          className={cn("right-0",textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_top_ar.svg"
          alt=""
        />
      ) : (
        <img
          className={cn("left-0", textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_top_en.svg"
          alt=""
        />
      )}

      <h1 className={cn(className)}>{title}</h1>
      {locale == "ar" ? (
        <img
          className={cn("left-0", textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_bottom_ar.svg"
          alt=""
        />
      ) : (
        <img
          className={cn("right-0",textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_bottom_en.svg"
          alt=""
        />
      )}

      {/* <div>
        <Link href={"#"}>
          <Button className={cn("color-white red-bg")}>{buttonText}</Button>
        </Link>
      </div> */}
    </div>
  );
};
export default Who;
