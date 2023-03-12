import React from "react";
import { useRouter } from "next/router";

import styles from "./LangSwitch.module.scss";
import Button from "./../Button/Button";

const LangSwitch = () => {
  const { locales, push } = useRouter();
  const handleClick = (loc) => () => {
    push("/", undefined, { locale: loc });
  };

  return (
    <div className={styles.buttons}>
      {locales.map((l) => (
        <>
          <Button className={"color-white green-bg"} onClick={handleClick(l)}>
            {l}
          </Button>
          <br />
        </>
      ))}
    </div>
  );
};

export default LangSwitch;
