import Head from "next/head";

import cn from "classnames";
import styles from "../components/contact/contact.module.scss";
import Input from "./../components/Input/Input";
import Button from "./../components/Button/Button";
import TextArea from "./../components/TextArea/TextArea";
import SocialLinks from "./../components/SocialLinks/SocialLinks";
import Header from "./../components/Header/Header";

const Contact = ({ locale }) => {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <section className={cn(styles.section, "space-X space-Y")}>
          <div className={cn(styles.container)}>
            <div className={cn(styles.contactText, "mb-2")}>
              <h3 className="color-green mb-2">
                تريد التواصل معنا <br />
                أو لديك <span className="color-purple">أي استفسار؟</span>
              </h3>
              <form action="">
                <div className={cn(styles.form, "mb-2")}>
                  <Input
                    className={styles.input}
                    type="text"
                    label="الاسم الأول"
                  />
                  <Input
                    className={styles.input}
                    type="text"
                    label="اسم العائلة"
                  />
                  <Input
                    className={styles.input}
                    type="email"
                    label="البريد الإلكتروني"
                  />
                  <Input
                    className={styles.input}
                    type="tel"
                    label="رقم الجوال"
                  />
                  <TextArea
                    className={cn(styles.input, styles.message)}
                    label="الرسالة"
                  />
                  <Button className={cn(styles.button, "color-white green-bg")}>
                    تواصل معنا
                  </Button>
                </div>
              </form>
              <div className={styles.contactLinks}>
                <div
                  className={cn(
                    styles.followText,
                    "paragraph1-size color-purple font-weight-medium"
                  )}
                >
                  تابعونا على منصات التواصل الاجتماعي
                </div>
                <SocialLinks className={"filter-green"} />
              </div>
            </div>
            <div className={styles.contactImg}>
              <img src="/contact.jpg" alt="" />
              <img className={styles.vector} src="/svg/back_1.svg" alt="" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export async function getServerSideProps({ locale }) {
  return {
    props: {
      locale: locale,
    },
  };
}

export default Contact;
