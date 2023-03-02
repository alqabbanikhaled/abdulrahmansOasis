import React, { useState, useRef, useCallback } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";

import Button from "@/components/Button/Button";
import OutlinedButton from "@/components/OutlinedButton/OutlinedButton";

import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./Who.module.scss";

SwiperCore.use([Navigation]);

const Who = () => {
  const sliderRefText = useRef(null);
  const sliderRefImages = useRef(null);

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
      <div className={cn(styles.container, "space-X")}>
        <div className={cn(styles.whoSwiperText)}>
          <div className={cn(styles.whoSwiperTextCotainer)}>
            <Swiper
              className={cn(styles.swiperText, "mb-1")}
              ref={sliderRefText}
              slidesPerView={1}
            >
              <SwiperSlide>
                <SwiperCard />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperCard />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperCard />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperCard />
              </SwiperSlide>
            </Swiper>
            <div className={cn(styles.buttons)}>
              <div>
                <Button onClick={handlePrev} className="color-red border-red">
                  تبرع الآن
                </Button>
              </div>
              <div className={cn(styles.outlinedButtons)}>
                <OutlinedButton
                  onClick={handlePrev}
                  className={cn(styles.arrowButton, "color-red border-red")}
                >
                  <img src="./arrow_right.svg" alt="arrow left" />
                </OutlinedButton>
                <OutlinedButton
                  onClick={handleNext}
                  className={cn(styles.arrowButton, "color-red border-red")}
                >
                  <img src="./arrow_left.svg" alt="arrow left" />
                </OutlinedButton>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(styles.whoSwiperImages)}>
          <Swiper
            ref={sliderRefImages}
            slidesPerView={1}
            modules={[EffectFade]}
            effect={"fade"}
          >
            <SwiperSlide>
              <img src="/slide_img_1.png" alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide_img_2.png" alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide_img_3.png" alt="no image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="/slide_img_4.png" alt="no image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const SwiperCard = ({ title, description }) => {
  return (
    <div>
      <h2 className={cn("color-red")}>من هو عبدالرحمن؟</h2>
      <p>
        كان مبتهجًا ومتفائلًا وأحب الحياة. عندما دخل المنزل ، كان يحيي العمال ،
        ويحتفل بمناسباتهم ، ويسأل عن أطفالهم. على الرغم من صغر سنه ، علمنا
        دروسًا في الولاء والنبلاء.
      </p>
    </div>
  );
};
export default Who;
