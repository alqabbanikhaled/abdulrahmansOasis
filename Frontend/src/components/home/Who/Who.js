import React, { useState, useRef, useCallback } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";

import Button from "@/components/Button/Button";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";
import { BANARS_DATA } from "./Who.data";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Who.module.scss";

SwiperCore.use([Navigation]);

const Who = () => {
  const sliderRefText = useRef(null);
  const sliderRefImages = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

  return (
    <section className={cn(styles.section)}>
      <Swiper
        className={cn(styles.whoSwiperImages)}
        ref={sliderRefImages}
        slidesPerView={1}
        modules={[EffectFade]}
        effect={"fade"}
        allowTouchMove={false}
      >
        {BANARS_DATA.map(({ img }, i) => (
          <SwiperSlide key={i}>
            <img src={img} alt="no image" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={cn(styles.container, "space-X")}>
        <Swiper
          className={cn(styles.whoSwiperText, "mb-1")}
          ref={sliderRefText}
          slidesPerView={1}
          allowTouchMove={false}
          onSlideChange={(value) => {
            setCurrentSlideIndex(value.activeIndex);
            console.log(currentSlideIndex);
          }}
        >
          {BANARS_DATA.map(({ title }, i) => (
            <SwiperSlide key={i}>
              <SwiperTextCard
                title={title}
                className={cn({
                  "color-black": i == 1,
                  "color-yellow": i != 1,
                })}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={cn(styles.buttons)}>
          <div>
            <Button
              onClick={handlePrev}
              className={cn({
                "color-black yellow-bg": currentSlideIndex != 1,
                "color-yellow black-bg": currentSlideIndex == 1,
              })}
            >
              تبرع الآن
            </Button>
          </div>
          <div className={cn(styles.outlinedButtons)}>
            <OutlinedButton
              onClick={handlePrev}
              className={cn(styles.arrowButton, {
                "color-yellow border-yellow": currentSlideIndex != 1,
                "color-black border-black": currentSlideIndex == 1,
              })}
            >
              {currentSlideIndex != 1 ? (
                <img src="./arrow_yellow_right.svg" color="#000" />
              ) : (
                <img src="./arrow_black_right.svg" color="#000" />
              )}
            </OutlinedButton>
            <OutlinedButton
              onClick={handleNext}
              className={cn(styles.arrowButton, {
                "color-yellow border-yellow": currentSlideIndex != 1,
                "color-black border-black": currentSlideIndex == 1,
              })}
            >
              {currentSlideIndex != 1 ? (
                <img src="./arrow_yellow_left.svg" color="#000" />
              ) : (
                <img src="./arrow_black_left.svg" color="#000" />
              )}
            </OutlinedButton>
          </div>
        </div>
      </div>
    </section>
  );
};

const SwiperTextCard = ({ title, className }) => {
  return (
    <div>
      <h2 className={className}>{title}</h2>
    </div>
  );
};
export default Who;
