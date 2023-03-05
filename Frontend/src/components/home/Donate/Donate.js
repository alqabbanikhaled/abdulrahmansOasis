import React from "react";
import cn from "classnames";

import styles from "./Donate.module.scss";
import Button from "./../../Button/Button";

const Donate = () => {
  return (
    <section className={cn(styles.section, "space-X-l space-Y")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.donateImg)}>
          <img src="/donate.png" alt="no image" />
        </div>
        <div className={cn(styles.donateText)}>
          <h1 className="color-purple mb-2">سنواصل رحلتنا بدعمكم </h1>
          <Button className="green-bg color-white">تبرع الآن</Button>
        </div>
      </div>
    </section>
  );
};

export default Donate;
