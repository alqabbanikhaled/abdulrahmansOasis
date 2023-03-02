import classNames from "classnames";
import styles from "./OutlinedButton.module.scss";
const OutlinedButton = ({ className, onClick, children }) => {
  return (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
};

export default OutlinedButton;
