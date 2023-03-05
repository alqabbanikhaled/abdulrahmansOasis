import React from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={cn(styles.section, "space-Y-top bg-5")}>
      <div className={cn(styles.container, "space-X-l")}>
        <div className={cn(styles.footerLogoSubscribe)}>
          <div className={cn(styles.footerLogo, "mb-2")}>
            <img src={"/logo.png"} alt="logo" />
          </div>
          <div className={cn(styles.footerSubScribe)}>
            <p className="font-weight-bold  ">
              آخر أخبارنا ومقالاتنا ومواردنا ، سنرسلها إلى صندوق الوارد الخاص بك
              أسبوعيًا.
            </p>
            <form className={styles.formFeilds}>
              <input
                className={cn(
                  styles.input,
                  "p-1 paragraph1-size font-weight-bold color-dark-gray"
                )}
                type="email"
                name=""
                id=""
                placeholder="ادخل بريدك الإلكتروني"
              />
              <Button className="purple-bg color-white">اشتراك</Button>
            </form>
          </div>
        </div>
        <div className={cn(styles.footerLinks)}>
          <div>
            <Link href="#">الصفحة الرئيسية</Link>
            <Link href="#">حياة الطفل</Link>
            <Link href="#">التطوع</Link>
            <Link href="#">التقويم</Link>
          </div>
          <div>
            <Link href="#">واحة عبدالرحمن</Link>
            <Link href="#">قصة عبدالرحمن</Link>
            <Link href="#">المهام</Link>
            <Link href="#">الأهداف</Link>
            <Link href="#">البرامج</Link>
            <Link href="#">أعضاء مجلس الإدارة</Link>
          </div>
          <div>
            <Link href="#">برامج حياة الطفل</Link>
            <Link href="#">أخصائيون حياة الطفل</Link>
            <Link href="#">الميديا</Link>
            <Link href="#">التبرعات</Link>
            <Link href="#">تواصل معنا</Link>
          </div>
        </div>
      </div>
      <hr className="mt-7" />
      <div className={cn(styles.container, "space-X-l pt-2 pb-2")}>
        <div className={styles.socialLinks}>
          <SocialLink src="./instagram.svg" />
          <SocialLink src="./linkedin.svg" />
          <SocialLink src="./twitter.svg" />
          <SocialLink src="./facebook.svg" />
        </div>
        <div className={cn(styles.rights, "font-weight-bold")}>
          <span className="color-purple">
            © 2023 Abdulrahman Oasis Rights Reserved. Designed By
          </span>{" "}
          Bold Experience
        </div>
      </div>
    </section>
  );
};

const SocialLink = ({ src }) => {
  return (
    <Link href="#">
      <button className={cn(styles.socialLink, "p-1")}>
        <img src={src} />
      </button>
    </Link>
  );
};

export default Footer;
