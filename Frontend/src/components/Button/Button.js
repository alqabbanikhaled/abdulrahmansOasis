import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ className, onClick, children, type }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(styles.button, className)}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
