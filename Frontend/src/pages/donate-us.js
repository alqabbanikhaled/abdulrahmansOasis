import Head from "next/head";
import cn from "classnames";
import styles from "../styles/donateUs.module.scss";
import Header from "./../components/Header/Header";
import { getSinglePage } from "@/providers/api.service";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import { useRouter } from "next/router";
import Link from "next/link";

const Donate = ({ locale, status }) => {
  // const [donateData, setDonateData] = useState({});
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    var data = {
      amount: event.target.amount.value
    };
    try {

      data.recaptcha = "captcja"
      event.target.disabled = true;


      // Validation passed - do something with data

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const JSONdata = JSON.stringify(data);

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: JSONdata,
        redirect: 'follow'
      };

      fetch("https://abdulrahmanoasis.org/api/donate", requestOptions)
        .then(async response => {
          const resp = await response.json();
          if (resp?.redirect_url) {
            router.replace(resp.redirect_url)
          } else {
            console.error('error', resp)
          }
        })
        .then(result => {
          //  reset(); setShowThanks(true) 
          // console.log('DONE',result)
        })
        .catch(error => console.log('error', error));

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Head>
        <title>Donate Us</title>
      </Head>
      <Header locale={locale} navLinksColor={"red"} />
      <main id="main">
        <section className={cn(styles.section, "space-X space-Y")}>
          <div className={cn(styles.container)}>

            {
              (status === null || status === undefined) &&
              <form className={styles.donateForm} onSubmit={handleSubmit}>
                <div className={cn(styles.donateText, "mb-3 color-red text-center")}>
                  <h1>{locale === "ar" ? "تبرع الآن" : "Donate Now"}</h1>
                </div>
                <Input
                  autoFocus={true}
                  locale={locale}
                  type="number"
                  required={true}
                  name="amount"
                  label={locale === "ar" ? "مبلغ التبرع" : "Donation Amount"}
                />

                <Button
                  className={cn(styles.button, "color-white green-bg mt-3")}
                  type="submit"
                >
                  {locale === "ar" ? "تبرع الآن" : "Donate Now"}
                </Button>
              </form>
            }

            {
              status === "cancel" &&
              <div className={cn(styles.donateForm,styles.message, "mb-3 color-red text-center")}>
                <h1>{locale === "ar" ? "آسف، حدث خطأ.ونحن نعمل على ذلك ونحن سوف تحصل على أنها ثابتة بأسرع ما يمكن." : "Sorry, something went wrong.We're working on it and we'll get it fixed as soon as we can."}</h1>
                <Link href={"/"} className=" mb-2 mt-2">
                  <Button className="green-bg color-white">
                    {locale=="ar" ? "العودة إلى الصفحة الرئيسية": "Go to home"}
                  </Button>
                </Link>
              </div>
            }
            {
              status === "success" &&
              <div className={cn(styles.donateForm, "mb-3 color-red text-center")}>
                <h1>{locale === "ar" ? "شكراً لك! تم التبرع بنجاح" : "Thank you! Donation completed successfully"}</h1>
              </div>
            }
          </div>
        </section>
      </main>
    </>
  );
}
Donate.getInitialProps = async (ctx) => {
  const { status } = ctx.query;
  return {
    locale: ctx.locale,
    status: status
  };
}

export default Donate



