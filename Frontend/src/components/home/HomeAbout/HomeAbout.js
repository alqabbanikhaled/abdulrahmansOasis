import React, { useRef } from "react";
import cn from "classnames";

import styles from "./HomeAbout.module.scss";
// import { useParallax } from "react-scroll-parallax";

const HomeAbout = ({ locale, data = {} }) => {
  const target = useRef(null);

  // const pattern1 = useParallax({
  //   speed: 20,
  //   easing: 'easeInCubic',
  //   targetElement: target.current,
  // })
  return (
    <section
    id="about"
      ref={target}
      className={cn(
        styles.section,
        { [styles.ar]: locale == "ar" },
        "space-X space-Y"
      )}
    >
      {/* PATTERNS */}
      {/* <div ref={pattern1.ref} className={"parallax pattern4 circle-yellow"} >
            </div> */}
      <div className={cn(styles.container)}>

        <div className={cn(styles.AOText, "mb-2 p-inline-2")}>
          <h1 className="head4-size mb-2">{data.title}</h1>
          <div className="paragraph4-size">{data.description}</div>
        </div>
        <div className={styles.AOImg}>
          <img src={"about.png"} alt="" />
          {/* <img src={data.image?.data.attributes.url} alt="" /> */}
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
