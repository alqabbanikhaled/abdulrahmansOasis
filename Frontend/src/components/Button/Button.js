import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
