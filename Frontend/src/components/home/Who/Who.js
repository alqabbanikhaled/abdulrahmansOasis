import React, { useState, useRef, useCallback, useEffect } from "react";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

import styles from "./Who.module.scss";
import Link from "next/link";
import Button from "@/components/Button/Button";

SwiperCore.use([Navigation]);

const Who = ({ locale, data = [] }) => {
  const sliderRefText = useRef(null);
  const sliderRefImages = useRef(null);
  const videoRef = useRef(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    if (
      currentSlideIndex ==
      data.findIndex((banner) =>
        banner.bannerMedia?.data.attributes.mime.startsWith("video")
      )
    ) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [currentSlideIndex]);

  const handlePrev = useCallback(() => {
    if (!sliderRefText.current || !sliderRefImages.current) return;
    sliderRefText.current?.swiper.slidePrev();
    sliderRefImages.current?.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRefText.current || !sliderRefImages.current) return;
    sliderRefText.current.swiper.slideNext();
    sliderRefImages.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    sliderRefText.current?.swiper.slideTo(0);
    sliderRefImages.current?.swiper.slideTo(0);

    sliderRefText?.current?.swiper.updateSlides();
    locale == "en"
      ? sliderRefText.current?.swiper.changeLanguageDirection("ltr")
      : sliderRefText.current?.swiper.changeLanguageDirection("rtl");

    sliderRefImages.current?.swiper.updateSlides();
    locale == "en"
      ? sliderRefImages.current?.swiper.changeLanguageDirection("ltr")
      : sliderRefImages.current?.swiper.changeLanguageDirection("rtl");
  }, [locale]);

  return data.length > 0 ? (
    <section className={cn(styles.section, {
      [styles.ar]: locale === "ar"
    })}>
      <Swiper
        loop={true}
        className={cn(styles.mainSlides, styles.whoSwiperImages)}
        ref={sliderRefImages}
        slidesPerView={1}
        modules={[
          // Autoplay, 
          EffectFade, Pagination]}
        pagination={true}
        effect={"fade"}
        // autoplay={{
        //   delay: 5000,
        // }}
        onSlideChange={(value) => {
          setCurrentSlideIndex(value.realIndex);
        }}
        allowTouchMove={true}
      >
        {data.map(({ bannerMedia, bannerMediaMobile,
          bannerTitle, bannerDescription, textColor, cta, newTab }, i) => (
          <SwiperSlide key={i}>
            <>
              {bannerMedia?.data.attributes.mime.startsWith("image") ? (
                <>
                  <img
                    className={cn({
                      [styles.imageDesktop]: bannerMediaMobile.data != null,
                    })}
                    src={bannerMedia.data.attributes.url}
                    alt="no image"
                  />
                  <img
                    className={styles.imageMob}
                    src={bannerMediaMobile.data?.attributes.url}
                    alt="no image"
                  />
                </>
              ) : (
                <video
                  autoPlay={true}
                  ref={videoRef}
                  playsInline={true}
                  controls={false}
                  loop={true}
                  muted={true}
                >
                  <source
                    src={bannerMedia.data.attributes.url}
                    type="video/mp4"
                  />
                </video>
              )}
            </>
            <div className={cn(styles.overlayContainer, "space-X")}>
              <div className={cn(styles.textSwiperAndButton, "space-X", {
                [styles.active]: i === currentSlideIndex
              })}>
                {
                  (bannerTitle || bannerDescription) && <SwiperTextCard
                  title={bannerTitle}
                  description={bannerDescription}
                  textColor={textColor}
                  cta={cta}
                  newTab={newTab}
                  locale={locale}
                  className={cn({
                    "color-black": textColor == "dark",
                    "color-white": textColor != "dark",
                  })}
                />
                }
              </div>

            </div>


          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  ) : (
    ""
  );
};

const SwiperTextCard = ({
  title,
  description,
  textColor,
  className,
  cta,
  newTab,
  locale
}) => {
  return (
    <div className={cn(styles.titleWrapper, "mb-1")}>
      {locale == "ar" ? (
        <img
          className={cn("right-0", textColor == "dark" ? "filter-black" : "")}
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
      <div className="color-white">{description}</div>
      {locale == "ar" ? (
        <img
          className={cn("left-0", textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_bottom_ar.svg"
          alt=""
        />
      ) : (
        <img
          className={cn("right-0", textColor == "dark" ? "filter-black" : "")}
          src="/svg/braket_bottom_en.svg"
          alt=""
        />
      )}
      {/* <div>
        <Link href={"#"}>
          <Button className={cn("color-white dark-purple-bg")}>{buttonText}</Button>
        </Link>
      </div> */}
      {
        cta &&
        <div className={cn(styles.button, "pt-2")}>
          <Link
            className={cn("paragraph4-size font-weight-medium", 
            // styles.arrowLink,
              {
                ["color-white "]:
                  textColor != "dark",
                ["color-black " + styles.arrowBlack]:
                  textColor == "dark",
              })}
            href={cta.link}
            target={newTab ? "_blank" : "_self"}
          >
            {cta.label}
          </Link>
        </div>
      }
    </div>
  );
};
export default Who;
