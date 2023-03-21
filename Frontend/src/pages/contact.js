import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import cn from "classnames";
import styles from "../components/contact/contact.module.scss";
import Input from "./../components/Input/Input";
import Button from "./../components/Button/Button";
import TextArea from "./../components/TextArea/TextArea";
import SocialLinks from "./../components/SocialLinks/SocialLinks";
import Header from "./../components/Header/Header";
import { contactUs, getSinglePage } from "@/providers/api.service";
import ReactMarkdown from "react-markdown";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

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
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successSubmit, setSuccessSubmit] = useState(false);
  const [contactData, setContactData] = useState({});
  // const [token, setToken] = useState();
  // const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("yourAction");
    console.log(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(locale, "contact-page");
      setContactData({ ...fetchedJson.data?.attributes });
    }
    fetchData();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {
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
    };

    setErrors({ ...newErrors });

    if (Object.values(newErrors).every((x) => x === "")) {
      contactUs({
        data: {
          firstName: name,
          familyName: family,
          email,
          phone,
          message,
        },
      })
        .then((response) => {
          handleReCaptchaVerify();
          setSuccessSubmit(true);
        })
        .catch((error) => console.log("error", error.error));

      handleReCaptchaVerify();
      setSuccessSubmit(true);
    }
  }

  // const onVerify = useCallback((token) => {
  //   setToken(token);
  // });
  // console.log(token);

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
                <ReactMarkdown>
                  {!successSubmit
                    ? contactData.formTitle
                    : contactData.formTitleSuccess}
                  {/* تريد التواصل معنا <br />
                أو لديك <span className="color-purple">أي استفسار؟</span> */}
                </ReactMarkdown>
              </h3>
              {!successSubmit ? (
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
                    {/* <GoogleReCaptcha
                        onVerify={onVerify}
                        refreshReCaptcha={refreshReCaptcha}
                      /> */}
                    <Button
                      className={cn(styles.button, "color-white green-bg")}
                      type="submit"
                    >
                      تواصل معنا
                    </Button>
                  </div>
                </form>
              ) : (
                ""
              )}

              <div className={styles.contactLinks}>
                <div
                  className={cn(
                    styles.followText,
                    "paragraph1-size color-purple font-weight-medium"
                  )}
                >
                  تابعونا على منصات التواصل الاجتماعي
                </div>
                <SocialLinks className={"filter-green"} start={true} />
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
  // const fetchedJson = await getSinglePage(
  //   "/contact-page",
  //   ""
  // );

  return {
    props: {
      // data: fetchedJson,
      locale: locale,
    },
  };
}

export default Contact;
