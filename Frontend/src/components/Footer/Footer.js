import React from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={cn(styles.section, "bg-5")}>
      <div className={cn(styles.container, "space-Y-minor space-X-l")}>
        <div className={cn(styles.footerLogoSubscribe)}>
          <div className={cn(styles.footerLogo)}>
            <img src={"/svg/logo_red.svg"} alt="logo" />
          </div>
          {/* <div className={cn(styles.footerSubScribe)}>
            <p className="font-weight-bold  ">
              آخر أخبارنا ومقالاتنا ومواردنا ، سنرسلها إلى صندوق الوارد الخاص بك
              أسبوعيًا.
            </p>
            <form className={styles.formF eilds}>
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
          </div> */}
        </div>
        {/* <div className={cn(styles.footerLinks)}>
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
        </div> */}
      </div>
      <hr />
      <div className={cn(styles.container, "space-X-l pt-2 pb-2")}>
        <div className={styles.socialLinks}>
          <SocialLink
            src="./svg/instagram.svg"
            href={"https://instagram.com/abdulrahmansoasis?igshid=YmMyMTA2M2Y="}
          />
          <SocialLink
            src="./svg/youtube.svg"
            href={"https://youtube.com/@abdulrahmansoasis"}
          />
          <SocialLink
            src="./svg/twitter.svg"
            href={
              "https://twitter.com/abdulrahmansoas?s=11&t=UAPx6gtAmnhgWwn1mvGbaA"
            }
          />
          <SocialLink
            src="./svg/snapshat.svg"
            href={"https://t.snapchat.com/oAJ0KyrL"}
          />
        </div>
        {/* <div className={cn(styles.rights, "font-weight-bold")}>
          <span className="color-purple">
            © 2023 Abdulrahman Oasis Rights Reserved. Designed By
          </span>{" "}
          Bold Experience
        </div> */}
      </div>
    </section>
  );
};

const SocialLink = ({ src, href }) => {
  return (
    <a href={href} target="_blank">
      <button className={cn(styles.socialLink, "p-1")}>
        <img src={src} />
      </button>
    </a>
  );
};

export default Footer;
