import React from "react";
import cn from "classnames";

import styles from "./AbdelrahmanOasis.module.scss";
import { AODataAR, AODataEN } from "./AbdelrahmanOasis.data";

const AbdelrahmanOasis = ({ locale }) => {
  const { title, description } = locale == "ar" ? AODataAR : AODataEN;

  return (
    <section className={cn(styles.section, "space-X space-Y")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.AOText, "mb-2")}>
          <h1 className="color-purple mb-2">{title}</h1>
          <div className="paragraph4-size">{description}</div>
        </div>
        <div className={styles.AOImg}>
          <img src="/Abdulrahman_img.jpg" alt="" />
          <img className={styles.vector} src="/svg/back_1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AbdelrahmanOasis;
