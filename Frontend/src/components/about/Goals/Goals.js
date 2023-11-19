import React from "react";
import cn from "classnames";

import styles from "./Goals.module.scss";
// import { useParallax } from "react-scroll-parallax";
import { useRef } from "react";

const Goals = ({ locale, data = {} }) => {
  const target = useRef(null);
  // const pattern1 = useParallax({
  //   speed: 20,
  //   easing: 'easeInCubic',
  //   targetElement: target.current,
  // })
  return (
    <section
      id="goals"
      ref={target}
      className={cn(
        styles.section,
        { [styles.ar]: locale == "ar" },
        "space-X space-Y-bottom mt-6"
      )}
    >
      {/* PATTERNS */}
      {/* <div ref={pattern1.ref} className={"parallax pattern6 circle-dark-purple"} >
            </div> */}
      <div className={cn(styles.container)}>
        <div className={cn(styles.goalsText, "mb-2")}>
          <h1 className="color-dark-purple mb-2">{data.title}</h1>
          <div className={styles.goals}>
            {data.items?.map((item, i) => (
              <GoalItem key={i} num={i + 1} title={item.item} />
            ))}
          </div>
        </div>
        <div className={styles.goalsImg}>
          <img src={data.image?.data.attributes.url} alt="" />
          {/* <img className={styles.vector} src="/svg/back_1.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

const GoalItem = ({ num, title }) => {
  return (
    <div className={cn(styles.goalItem, "mb-2")}>
      <h3 className="color-black">{num}</h3>
      <div className="paragraph3-size font-weight-medium">{title}</div>
    </div>
  );
};

export default Goals;
