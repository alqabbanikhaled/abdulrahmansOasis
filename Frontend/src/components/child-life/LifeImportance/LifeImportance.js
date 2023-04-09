import React from "react";
import cn from "classnames";

import styles from "./LifeImportance.module.scss";

const LifeImportance = ({ data = {} }) => {
  return (
    <section id="programs" className={cn(styles.section, "space-X space-Y-bottom mt-6")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.text, "mb-2")}>
          <h1 className="color-red mb-2">{data.title}</h1>
          <div className="paragraph3-size color-gray mb-2">
            {data.description}
          </div>
          <div className={styles.items}>
            {data.importanceItems?.map(({ item }, i) => (
              <Item key={i} num={i + 1} title={item} />
            ))}
          </div>
        </div>
        <div className={styles.img}>
          <img src="/life_importance.jpg" alt="" />
          {/* <img className={styles.vector} src="./svg/back_1.svg" alt="" /> */}
        </div>
      </div>
    </section>
  );
};

const Item = ({ num, title }) => {
  return (
    <div className={cn(styles.Item, "mb-2")}>
      <h3 className="color-black">{num}</h3>
      <div className="paragraph1-size">{title}</div>
    </div>
  );
};

export default LifeImportance;
