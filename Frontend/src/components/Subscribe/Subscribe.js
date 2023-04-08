import cn from "classnames";
import styles from "./Subscribe.module.scss";
import Button from "./../Button/Button";
import { subscribeNews } from "@/providers/api.service";
import { useState } from "react";

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

const Subscribe = ({ inputText, buttonText, successText }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [successSubmit, setSuccessSubmit] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const newErrors = {
      ...errors,
      email:
        isEmpty(email, "بريدك الالكتروني") ||
        (!isValidEmail(email) ? "برجاء ادخال بريد الكتروني صحيح" : ""),
    };

    setErrors({ ...newErrors });

    if (Object.values(newErrors).every((x) => x === "")) {
      subscribeNews({
        data: {
          email,
        },
      })
        .then((response) => {
          setSuccessSubmit(true);
        })
        .catch((error) => console.log("error", error.error));
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formFeilds}>
        {!successSubmit ? (
          <>
            <input
              className={cn(
                styles.input,
                "p-1 paragraph1-size color-dark-gray"
              )}
              type="text"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              name=""
              id=""
              placeholder={inputText}
            />
            <Button className="red-bg color-white">{buttonText}</Button>
          </>
        ) : (
          <div className="color-green font-weight-bold">{successText}</div>
        )}
      </div>
      {errors.email && <div className="color-red">{errors.email}</div>}
    </form>
  );
};

export default Subscribe;
