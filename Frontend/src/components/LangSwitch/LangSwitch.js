import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import OutlinedButton from "./../OutlinedButton/OutlinedButton";
import styles from "./LangSwitch.module.scss";

const LangSwitch = ({ newNavbar, navLinksColor }) => {
  const { push, locale } = useRouter();
  const targetLocale = locale == "ar" ? "en" : "ar";
  const handleClick = () => () => {
    push("/", undefined, { locale: targetLocale });
  };

  return (
    <OutlinedButton
      className={cn(styles.button, {
        "color-white border-red": !newNavbar && navLinksColor!="red",
        "color-red border-light-gray": newNavbar || navLinksColor == "red",
      })}
      onClick={handleClick(locale)}
    >
      {targetLocale.toUpperCase()}
    </OutlinedButton>
  );
};

export default LangSwitch;
