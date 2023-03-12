import styles from "./Input.module.scss";
import cn from "classnames";
const Input = ({ label, type, onChange, className }) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.textfield}>
        <input
          type={type}
          className={styles.input}
          placeholder=" "
          onChange={onChange}
        />
        <label className={cn(styles.label, "color-gray-100")}>{label}</label>
      </div>
    </div>
  );
};

export default Input;
