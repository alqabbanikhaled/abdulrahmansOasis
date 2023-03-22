import styles from "./Input.module.scss";
import cn from "classnames";
const Input = ({
  label,
  type,
  onChange,
  className,
  value,
  name,
  id,
  locale,
}) => {
  return (
    <div
      className={cn(
        styles.container,
        { [styles.ar]: locale == "ar" },
        className
      )}
    >
      <div className={styles.textfield}>
        <input
          type={type}
          className={styles.input}
          placeholder=" "
          onChange={onChange}
          value={value}
          name={name}
          id={id}
        />
        <label className={cn(styles.label, "color-gray-100")}>{label}</label>
      </div>
    </div>
  );
};

export default Input;
