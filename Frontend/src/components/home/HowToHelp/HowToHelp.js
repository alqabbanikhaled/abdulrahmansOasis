import React from "react";
import cn from "classnames";

import styles from "./HowToHelp.module.scss";

const HowToHelp = ({ points = [
  "Recruit Child Life professionals",
  "Sponsor scholarships for students",
  "Implement and manage projects",
  "Contribute financially to programs",
  "Spearhead marketing and promotional activities",
  "Offer your time as a volunteer at significant events"
]}) => {
  return (
    <section id="programs" className={cn(styles.section, "space-X space-Y mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.text, "mb-2")}>
          <h1 className="head4-size  p-inline-2 mb-4">Support Our Mission</h1>
          <div className="paragraph4-size color-black mb-2">
            Join us in advancing our mission to enhance children`s psychosocial well-being.
            <br />Here's how you can contribute to the Child Life Foundation:

          </div>
          <div className={styles.items}>
            {points.map((item , i) => (
              <Item key={i} num={i + 1} title={item} />
            ))}
          </div>
          <div className={styles.cta+" paragraph5-size"}>Contact us at <a className="color-dark-purple" href="mailto:CL@abdulrahmanoasis.org">CL@abdulrahmanoasis.org</a></div>
        </div>
        <div className={styles.img}>
          <img src="/pattern-large.png" alt="" />
          {/* <img className={styles.vector} src="./svg/back_1.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

const Item = ({ num, title }) => {
  return (
    <div className={cn(styles.Item, "mb-2")}>
      <h4 className="color-black paragraph3-size">{num}</h4>
      <div className="paragraph3-size">{title}</div>
    </div>
  );
};

export default HowToHelp;
