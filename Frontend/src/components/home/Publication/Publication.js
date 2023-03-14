import React from "react";
import Link from "next/link";
import cn from "classnames";

import Button from "./../../Button/Button";
import OutlinedButton from "./../../OutlinedButton/OutlinedButton";
import styles from "./Publication.module.scss";
import { publicationDataAR, publicationDataEN } from "./Publication.data";

const Publication = ({ locale }) => {
  const { title, browse, downloadNow } =
    locale == "ar" ? publicationDataAR : publicationDataEN;
  return (
    <>
      {/* <section className={cn(styles.section, "space-Y-bottom")}>
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
      </section> */}
      <section className={cn(styles.section, "space-Y-bottom")}>
        <div className={cn(styles.container, "text-center")}>
          <h1 className="color-red mb-2 space-X">{title}</h1>
          <div className={cn(styles.imgButtonsCont, "bg-3")}>
            <div className={cn(styles.publicationImg, "space-X pb-3")}>
              <img src="/publication.jpg" alt="publication" />
            </div>
            <div className={cn(styles.buttons, "space-X pb-3")}>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} target="_blank">
                <Button className="red-bg color-white">{browse}</Button>
              </a>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} download>
                <OutlinedButton className="color-red border-red">
                  {downloadNow}
                </OutlinedButton>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Publication;
