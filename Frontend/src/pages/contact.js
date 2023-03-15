import Head from "next/head";
import { useEffect, useState } from "react";

import cn from "classnames";
import styles from "../components/contact/contact.module.scss";
import Input from "./../components/Input/Input";
import Button from "./../components/Button/Button";
import TextArea from "./../components/TextArea/TextArea";
import SocialLinks from "./../components/SocialLinks/SocialLinks";
import Header from "./../components/Header/Header";

const isEmpty = (value, message) => {
  if (!value) return `برجاء ادخال ${message}`;
  else return "";
};

function isValidEmail(value) {
  var mailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (value.match(mailRegExp)) {
    return true;
  } else return false;
}

function isValidPhone(value) {
  var phoneRegExp =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (value.match(phoneRegExp)) {
    return true;
  } else return false;
}

const Contact = ({ locale }) => {
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  // function isValidEmail(str) {
  //   let emailRegExp = RegExp("^[a-zA-Z0-9.+]+@[a-zA-Z0-9]+.[a-zA-Z]+");
  //   return emailRegExp.
  // }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors({
      ...errors,
      name: isEmpty(name, "الاسم"),
      family: isEmpty(family, "اسم العائلة"),
      email:
        isEmpty(email, "بريدك الالكتروني") ||
        (!isValidEmail(email) ? "برجاء ادخال بريد الكتروني صحيح" : ""),
      phone:
        isEmpty(phone, "رقم الجوال") ||
        (!isValidPhone(phone) ? "برجاء ادخال رقم جوال صحيح" : ""),
      message: isEmpty(message, "الرسالة"),
    });
  }

  useEffect(() => {
    console.log(errors);
    if (Object.values(errors).every((x) => x === "")) {
      console.log("fields vaild");
    }
  }, [errors]);

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
              <form onSubmit={handleSubmit}>
                <div className={cn(styles.form, "mb-2")}>
                  <div className={styles.input}>
                    <Input
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      type="text"
                      label="الاسم الأول"
                    />
                    {errors.name && (
                      <div className="color-red">{errors.name}</div>
                    )}
                  </div>
                  <div className={styles.input}>
                    <Input
                      value={family}
                      onChange={(event) => setFamily(event.target.value)}
                      className={styles.input}
                      type="text"
                      label="اسم العائلة"
                    />
                    {errors.family && (
                      <div className="color-red">{errors.family}</div>
                    )}
                  </div>
                  <div className={styles.input}>
                    <Input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className={styles.input}
                      // type="email"
                      label="البريد الإلكتروني"
                    />
                    {errors.email && (
                      <div className="color-red">{errors.email}</div>
                    )}
                  </div>
                  <div className={styles.input}>
                    <Input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className={styles.input}
                      type="tel"
                      label="رقم الجوال"
                    />
                    {errors.phone && (
                      <div className="color-red">{errors.phone}</div>
                    )}
                  </div>
                  <div className={cn(styles.input, styles.message)}>
                    <TextArea
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      label="الرسالة"
                    />
                    {errors.message && (
                      <div className="color-red">{errors.message}</div>
                    )}
                  </div>
                  <Button
                    className={cn(styles.button, "color-white green-bg")}
                    type="submit"
                  >
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
