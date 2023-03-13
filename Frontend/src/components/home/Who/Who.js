import React, { useState, useRef, useCallback, useEffect } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";

import Button from "@/components/Button/Button";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";
import { BANARS_DATA } from "./Who.data";

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
        <div className={cn(styles.textSwiperAndButton, "mb-9")}>
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
            {BANARS_DATA.map(({ title, buttonText }, i) => (
              <SwiperSlide key={i}>
                <SwiperTextCard
                  title={title}
                  buttonText={buttonText}
                  className={cn({
                    "color-black w-80":
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
              <Button className={cn("color-white red-bg")}>
                {BANARS_DATA[currentSlideIndex].buttonText}
              </Button>
            </Link>
          </div>
        </div>
        <div className={cn(styles.outlinedButtons)}>
          <OutlinedButton onClick={handlePrev} className={styles.arrowButton}>
            <img src="./svg/arrow_right_L.svg" color="#000" />
          </OutlinedButton>
          <OutlinedButton onClick={handleNext} className={styles.arrowButton}>
            <img src="./svg/arrow_left_L.svg" color="#000" />
          </OutlinedButton>
        </div>
      </div>
    </section>
  );
};

const SwiperTextCard = ({ title, className, buttonText }) => {
  return (
    <div>
      <h1 className={cn("mb-1", className)}>{title}</h1>
      {/* <div>
        <Link href={"#"}>
          <Button className={cn("color-white red-bg")}>{buttonText}</Button>
        </Link>
      </div> */}
    </div>
  );
};
export default Who;
