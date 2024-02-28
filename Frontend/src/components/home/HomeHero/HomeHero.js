import React from "react";
import cn from "classnames";
import styles from "./HomeHero.module.scss";

const HomeHero = ({ locale, data = {} }) => {

  return (
    <section id="hero" className={cn(styles.section, "")}>
      <div className={cn(styles.container)}>
        <h1 className="color-white head3-size mb-2 text-center space-X space-Y">{data.title}</h1>
        <div className={styles.pattern}>
          <img
            src="/svg/pattern1.svg"
            alt="volunteer img"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
