import React from "react";
import cn from "classnames";

import styles from "./AbdelrahmanOasis.module.scss";

const AbdelrahmanOasis = ({ locale, data = {} }) => {
  return (
    <section
      className={cn(
        styles.section,
        { [styles.ar]: locale == "ar" },
        "space-X space-Y","orange-light-bg"
      )}
    >
      <div className={cn(styles.container)}>
        <div className={styles.AOImg}>
          <img src={data.image?.data.attributes.url} alt="" />
          {/* <img className={styles.vector} src="/svg/back_1.svg" alt="" /> */}
        </div>
        <div className={cn(styles.AOText, "mb-2")}>
          <h1 className="color-orange mb-2">{data.title}</h1>
          <div className="paragraph4-size">{data.description}</div>
        </div>
      </div>
    </section>
  );
};

export default AbdelrahmanOasis;
