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
  if (!value) return message;
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

const Contact = ({ locale, contactData }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [name, setName] = useState("");
  const [family, setFamily] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successSubmit, setSuccessSubmit] = useState(false);

  // const [contactData, setContactData] = useState({});
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
    setErrors({});
  }, [locale]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const fetchedJson = await getSinglePage(locale, "contact-page");
  //     setContactData({ ...fetchedJson.data?.attributes });
  //   }
  //   fetchData();
  // }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {
      ...errors,
      name: isEmpty(
        name,
        locale === "ar" ? "برجاء ادخال الاسم" : "Name is required"
      ),
      family: isEmpty(
        family,
        locale === "ar" ? "برجاء ادخال اسم العائلة" : "Family is required"
      ),
      email:
        isEmpty(
          email,
          locale === "ar" ? "برجاء ادخال بريدك الالكتروني" : "Email is required"
        ) ||
        (!isValidEmail(email)
          ? locale === "ar"
            ? "برجاء ادخال بريد الكتروني صحيح"
            : "Email is not valid"
          : ""),
      phone: isEmpty(
        phone,
        locale === "ar" ? "برجاء ادخل رقم الجوال" : "Phone is required"
      ),
      // ||
      // (!isValidPhone(phone)
      //   ? locale === "ar"
      //     ? "برجاء ادخل رقم جوال صحيح"
      //     : "Phone is not valid"
      //   : "")
      message: isEmpty(
        message,
        locale === "ar" ? "برجاء ادخال الرسالة" : "Name is required"
      ),
    };

    setErrors({ ...newErrors });

    if (Object.values(newErrors).every((x) => x === "")) {
      if (!executeRecaptcha) {
        console.log("Execute recaptcha not yet available");
        return;
      }
      executeRecaptcha("importantAction").then(async (gReCaptchaToken) => {
        console.log('token', gReCaptchaToken)

        contactUs({
          data: {
            firstName: name,
            familyName: family,
            email,
            phone,
            message,
            token: gReCaptchaToken
          },
        })
          .then((response) => {
            //    handleReCaptchaVerify();
            setSuccessSubmit(true);
          })
          .catch((error) => console.log("error", error.error));

        // handleReCaptchaVerify();
        setSuccessSubmit(true);
      })
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
        <section
          className={cn(
            styles.section,
            { [styles.ar]: locale == "ar" },
            "space-X space-Y"
          )}
        >
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
                        locale={locale}
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        type="text"
                        label={locale === "ar" ? "الاسم الاول" : "First Name"}
                      />
                      {errors.name && (
                        <div className="color-red">{errors.name}</div>
                      )}
                    </div>
                    <div className={styles.input}>
                      <Input
                        locale={locale}
                        value={family}
                        onChange={(event) => setFamily(event.target.value)}
                        className={styles.input}
                        type="text"
                        label={locale === "ar" ? "الاسم الاخير" : "Family Name"}
                      />
                      {errors.family && (
                        <div className="color-red">{errors.family}</div>
                      )}
                    </div>
                    <div className={styles.input}>
                      <Input
                        locale={locale}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        className={styles.input}
                        // type="email"
                        label={
                          locale === "ar"
                            ? "البريد الإلكتروني"
                            : "Email Address"
                        }
                      />
                      {errors.email && (
                        <div className="color-red">{errors.email}</div>
                      )}
                    </div>
                    <div className={styles.input}>
                      <Input
                        locale={locale}
                        value={phone}
                        onChange={(event) => setPhone(event.target.value)}
                        className={styles.input}
                        type="number"
                        label={locale === "ar" ? "رقم الجوال" : "Mobile Number"}
                      />
                      {errors.phone && (
                        <div className="color-red">{errors.phone}</div>
                      )}
                    </div>
                    <div className={cn(styles.input, styles.message)}>
                      <TextArea
                        locale={locale}
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        label={locale === "ar" ? "الرسالة" : "Message"}
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
                      {contactData.contactButtonLabel}
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
                  {contactData.followText}
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
  const fetchedJson = await getSinglePage(locale, "contact-page");

  return {
    props: {
      contactData: { ...fetchedJson.data?.attributes },
      locale: locale,
    },
  };
}

export default Contact;
