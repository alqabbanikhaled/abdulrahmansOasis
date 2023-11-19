import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";

import OutlinedButton from "./../OutlinedButton/OutlinedButton";
import styles from "./LangSwitch.module.scss";

const LangSwitch = ({ newNavbar, navLinksColor }) => {
  const { push, locale, pathname } = useRouter();
  const targetLocale = locale == "ar" ? "en" : "ar";
  const handleClick = () => () => {
    push(pathname, undefined, { locale: targetLocale });
  };

  return (
    <OutlinedButton
      className={cn(styles.button, {
        "color-purple border-light-gray": !newNavbar && navLinksColor != "dark-purple",
        "color-purple border-light-gray": newNavbar || navLinksColor == "dark-purple",
      })}
      onClick={handleClick(locale)}
    >
      {targetLocale=="ar"? "ع":targetLocale.toUpperCase()}
    </OutlinedButton>
  );
};

export default LangSwitch;
