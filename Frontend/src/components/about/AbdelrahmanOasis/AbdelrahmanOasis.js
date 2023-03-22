import React from "react";
import cn from "classnames";

import styles from "./AbdelrahmanOasis.module.scss";

const AbdelrahmanOasis = ({ data = {} }) => {
  return (
    <section className={cn(styles.section, "space-X space-Y")}>
      <div className={cn(styles.container)}>
        <div className={cn(styles.AOText, "mb-2")}>
          <h1 className="color-purple mb-2">{data.title}</h1>
          <div className="paragraph4-size">{data.description}</div>
        </div>
        <div className={styles.AOImg}>
          <img
            src={`http://127.0.0.1:1337${data.image?.data.attributes.url}`}
            alt=""
          />
          <img className={styles.vector} src="/svg/back_1.svg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AbdelrahmanOasis;
