import React from "react";
import cn from "classnames";
import styles from "./Footer.module.scss";
import Button from "../Button/Button";
import Link from "next/link";
import Subscribe from "./../Subscribe/Subscribe";
import { footerDataAR, footerDataEN } from "./Footer.data";
import { useRouter } from "next/router";

const Footer = () => {
  const { locale } = useRouter();
  const { latestNews, FOOTER_LINKS } =
    locale == "ar" ? footerDataAR : footerDataEN;

  return (
    <section className={cn(styles.section, "bg-5")}>
      <div className={cn(styles.container, "section-spaceY space-X")}>
        <div className={cn(styles.footerLogoSubscribe)}>
          <div className={cn(styles.footerLogo, "mb-2")}>
            <img src={"/svg/logo_red.svg"} alt="logo" />
          </div>
          {/* <div className={cn(styles.footerSubScribe)}>
            <p className="paragraph1-size color-gray">{latestNews}</p>
            <Subscribe locale={locale} /> */}
          {/* <form className={styles.formFeilds}>
              <input
                className={cn(
                  styles.input,
                  "p-1 paragraph1-size color-dark-gray"
                )}
                type="email"
                name=""
                id=""
                placeholder="ادخل بريدك الإلكتروني"
              />
              <Button className="purple-bg color-white">اشتراك</Button>
            </form> */}
          {/* </div> */}
        </div>
        <div className={cn(styles.footerLinks)}>
          <div>
            {FOOTER_LINKS.slice(0, 4).map(({ title, url }, i) => (
              <Link key={i} href={url}>
                {title}
              </Link>
            ))}
          </div>
          <div>
            {FOOTER_LINKS.slice(4, 10).map(({ title, url }, i) => (
              <Link key={i} href={url}>
                {title}
              </Link>
            ))}
          </div>
          <div>
            {FOOTER_LINKS.slice(10).map(({ title, url }, i) => (
              <Link key={i} href={url}>
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <div className={cn(styles.container, "space-X pt-2 pb-2")}>
        <div className={styles.socialLinks}>
          <SocialLink
            src="/svg/instagram.svg"
            href={"https://instagram.com/abdulrahmansoasis?igshid=YmMyMTA2M2Y="}
          />
          <SocialLink
            src="/svg/youtube.svg"
            href={"https://youtube.com/@abdulrahmansoasis"}
          />
          <SocialLink
            src="/svg/twitter.svg"
            href={
              "https://twitter.com/abdulrahmansoas?s=11&t=UAPx6gtAmnhgWwn1mvGbaA"
            }
          />
          <SocialLink
            src="/svg/snapshat.svg"
            href={"https://t.snapchat.com/oAJ0KyrL"}
          />
        </div>
        {/* <div className={cn(styles.rights, "font-weight-medium")}>
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

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}

export default Footer;
