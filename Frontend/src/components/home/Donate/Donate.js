import React from "react";
import cn from "classnames";

import styles from "./Donate.module.scss";
import Button from "./../../Button/Button";
import Link from "next/link";

const Donate = ({ data = {} }) => {
  return (
    <>
      {/* <section className={cn(styles.section, "space-X-l space-Y")}>
        <div className={cn(styles.container)}>
          <div className={cn(styles.donateImg)}>
            <img src="/donate.png" alt="no image" />
          </div>
          <div className={cn(styles.donateText)}>
            <h2 className="color-purple mb-2">سنواصل رحلتنا بدعمكم </h2>
            <Button className="dark-purple-bg color-white">تبرع الآن</Button>
          </div>
        </div>
      </section> */}
      <section id="donation" className={cn(styles.section, "space-Y-bottom")}>
        <div className={cn(styles.container)}>
          <h1 className="color-dark-purple mb-2 space-X-l text-center">
            {data.title}
          </h1>
          <div className={cn(styles.donateImg, "mb-2")}>
            <img src={data.image?.data.attributes.url} alt="" />
          </div>
          <div className={cn(styles.donateButton)}>
            <Link href={"/donate"}>
              <Button className="dark-purple-bg color-white mb-2">
                {data.ctaLabel}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
