import React from "react";
import Link from "next/link";
import cn from "classnames";

import Button from "./../../Button/Button";
import OutlinedButton from "./../../OutlinedButton/OutlinedButton";
import styles from "./Publication.module.scss";
import { publicationDataAR, publicationDataEN } from "./Publication.data";

const Publication = ({ locale, data = {} }) => {
  const { browse, downloadNow, publicationLine1, publicationLine2 } =
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
      <section
        className={cn(styles.section, "space-Y-bottom", {
          [styles.ar]: locale == "ar",
        })}
      >
        <h1 className="color-dark-purple mb-2 space-X text-center">{data.title}</h1>
        <div className={cn(styles.container)}>
          {/* <div className={cn(styles.imgButtonsCont, "bg-3")}>
            <div className={cn(styles.publicationImg, "space-X pb-3")}>
              <img src="/publication.jpg" alt="publication" />
            </div>
            <div className={cn(styles.buttons, "space-X pb-3")}>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} target="_blank">
                <Button className="dark-purple-bg color-white">{browse}</Button>
              </a>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} download>
                <OutlinedButton className="color-dark-purple border-dark-purple">
                  {downloadNow}
                </OutlinedButton>
              </a>
            </div>
          </div> */}

          {/* <div className={styles.publicationImgButtons}>
            <img src="/publication.jpg" alt="publication" />
            <div className={cn(styles.buttons, "space-X")}>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} target="_blank">
                <Button className="dark-purple-bg color-white">{browse}</Button>
              </a>
              <a href={"./AbdulrahmansOasis_Publication_1.pdf"} download>
                <OutlinedButton className="color-dark-purple border-dark-purple">
                  {downloadNow}
                </OutlinedButton>
              </a>
            </div>
          </div> */}

          <div className={cn(styles.text, "space-X")}>
            <div className={cn(styles.titleWrapper, "mb-2 mt-3")}>
              {locale == "ar" ? (
                <img
                  className={"right-0"}
                  src="/svg/braket_top_ar.svg"
                  alt=""
                />
              ) : (
                <img
                  className={cn("left-0")}
                  src="/svg/braket_top_en.svg"
                  alt=""
                />
              )}
              <div className={cn(styles.title)}>
                <div className={styles.line1}>
                  {publicationLine1} <span>{publicationLine1}</span>
                </div>
                <span className="color-dark-purple">{publicationLine2}</span>
              </div>
              {locale == "ar" ? (
                <img
                  className={"left-0"}
                  src="/svg/braket_bottom_ar.svg"
                  alt=""
                />
              ) : (
                <img
                  className={"right-0"}
                  src="/svg/braket_bottom_en.svg"
                  alt=""
                />
              )}
            </div>
            <div className={cn(styles.buttons)}>
              <a
                href={data.publicationFile?.data.attributes.url}
                target="_blank"
              >
                <Button className="dark-purple-bg color-white">{browse}</Button>
              </a>
              <a href={data.publicationFile?.data.attributes.url} download>
                <OutlinedButton className="color-dark-purple border-dark-purple">
                  {downloadNow}
                </OutlinedButton>
              </a>
            </div>
          </div>
          <div className={styles.img}>
            <img
              src={` ${data.image?.data.attributes.url}`}
              alt="publication"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Publication;
