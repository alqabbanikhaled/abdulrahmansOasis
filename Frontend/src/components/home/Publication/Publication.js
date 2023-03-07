import React from "react";
import cn from "classnames";

import Button from "./../../Button/Button";
import styles from "./Publication.module.scss";
import OutlinedButton from "./../../OutlinedButton/OutlinedButton";
import Link from "next/link";

const Publication = () => {
  return (
    <section className={cn(styles.section, "space-Y")}>
      <div className={cn(styles.publicationImg)}>
        <img src="/publication.png" alt="publication" />
      </div>
      <div className={cn(styles.container, "bg-3 space-X")}>
        <div className={cn(styles.publicationText)}>
          <h1 className="color-green mb-2">مجلة واحة عبدالرحمن </h1>
          <div className={styles.buttons}>
            <Button className="purple-bg color-white">تبرع الآن</Button>
            <a href={"./AbdulrahmansOasis_Publication_1.pdf"} download>
              <OutlinedButton className="color-purple border-purple">
                حملها الآن
              </OutlinedButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publication;
