import React, { useRef } from "react";
import cn from "classnames";

import styles from "./AbdelrahmanOasis.module.scss";
import { useParallax } from "react-scroll-parallax";

const AbdelrahmanOasis = ({ locale, data = {} }) => {
  const target = useRef(null);

  const pattern1 = useParallax({
    speed: 20,
    easing: 'easeInCubic',
    targetElement: target.current,
  })
  return (
    <section
    ref={target}
      className={cn(
        styles.section,
        { [styles.ar]: locale == "ar" },
        "space-X space-Y"
      )}
    >
      {/* PATTERNS */}
      <div ref={pattern1.ref} className={"parallax pattern4 circle-yellow"} >
            </div>
      <div className={cn(styles.container)}>
        <div className={styles.AOImg}>
          <img src={data.image?.data.attributes.url} alt="" />
          {/* <img className={styles.vector} src="/svg/back_1.svg" alt="" /> */}
        </div>
        <div className={cn(styles.AOText, "mb-2")}>
          <h1 className="color-red mb-2">{data.title}</h1>
          <div className="paragraph4-size">{data.description}</div>
        </div>
      </div>
    </section>
  );
};

export default AbdelrahmanOasis;
