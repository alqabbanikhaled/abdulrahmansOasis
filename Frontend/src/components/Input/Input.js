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
  ...rest
}) => {
  return (
    <div
      className={cn(
        styles.container,
        { [styles.ar]: locale === "ar" },
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
          {...rest}
        />
        <label className={cn(styles.label, "color-gray-100")}>{label}</label>
        { rest.currency &&
          <span className={cn(styles.currency, "head4-size color-dark-gray")}>{locale==="ar"?"ر.س":"SAR"}</span>
        }
      </div>
    </div>
  );
};

export default Input;
