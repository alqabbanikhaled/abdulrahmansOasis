import React from "react";
import cn from "classnames";

import styles from "./Importance.module.scss";

const Importance = ({ data = {} }) => {
  return (
    <section className={cn(styles.section, "space-X space-Y bg-3")}>
      <div className={cn(styles.container, "mb-10")}>
        <div className={styles.importanceImg}>
          <img src={data.image?.data.attributes.url} alt="" />
          <img className={styles.vector} src="/svg/back_1.svg" alt="" />
        </div>
        <div className={cn(styles.importanceText, "mb-2")}>
          <h1 className="color-green">{data.title}</h1>
          <div className="color-gray paragraph2-size mb-5">
            {data.description}
          </div>
          <div className={styles.quotes}>
            <div className={styles.quotesImg}>
              <img src="/svg/quotes.svg" alt="quotes" />
            </div>
            <div
              className={cn(
                styles.quotesText,
                "color-green paragraph3-size font-weight-medium"
              )}
            >
              {data.quote}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="paragraph5-size font-weight-medium">
          {data.modelTitle}
        </div>
        <div className="color-gray paragraph1-size mb-3">
          {data.modelDescription}
        </div>
      </div>
      <div className={cn(styles.modelItems, "color-black paragraph1-size")}>
        {data.modelItems?.map(({ item }, i) => (
          <React.Fragment key={i}>
            <div>{item}</div>
            <hr />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Importance;
